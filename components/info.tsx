import { FaWhatsapp } from "react-icons/fa";
import { Button } from "./ui/button";
import useCart from "@/hooks/use-cart";
import { MouseEventHandler, useState } from "react";
import { ShoppingCart } from "lucide-react";
import { PriceVariation } from "@/types";

interface InfoProps {
  data: {
    id: string;
    media: { id: string; url: string }[];
    title: string;
    description: React.ReactNode;
    link: string;
    category: string;
    price?: number;
    priceVariations?: PriceVariation[];
  };
}

const Info: React.FC<InfoProps> = ({ data }) => {
  const cart = useCart();
  const hasVariations = data.priceVariations && data.priceVariations.length > 0;

  // Available sizes
  const availableSizes = [6, 8, 10, 12, 14, 16, 18, 20, 22, 24];

  // State for selected variation and size
  const [selectedVariation, setSelectedVariation] =
    useState<PriceVariation | null>(
      hasVariations ? data?.priceVariations![0] : null
    );
  const [selectedSize, setSelectedSize] = useState<number | null>(null);

  const currentPrice = hasVariations ? selectedVariation?.price : data.price;

  const onAddToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();

    // Create cart item with selected style and size
    const cartItem = {
      ...data,
      selectedStyle: hasVariations ? selectedVariation?.style : undefined,
      selectedPrice: currentPrice,
      selectedSize: selectedSize ?? undefined,
      quantity: 1,
    };

    cart.addItem(cartItem);
  };

  const handlePreOrder = () => {
    const phoneNumber = "2347038072466";

    let productDetails = `Hi, The AbikeWoman! I would like to pre-order the ${data.title} from the ${data.category}.`;

    // Add style and price information if variations exist
    if (hasVariations && selectedVariation) {
      productDetails += `\n\nStyle: ${
        selectedVariation.style
      }\nPrice: ₦${selectedVariation.price.toLocaleString()}`;
    } else if (currentPrice) {
      productDetails += `\n\nPrice: ₦${currentPrice.toLocaleString()}`;
    }

    // Add size information
    if (selectedSize) {
      productDetails += `\nSize: ${selectedSize}`;
    }

    productDetails += `\n\nProduct Link: ${window.location.href}`;

    const message = encodeURIComponent(productDetails);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="flex flex-col space-y-6">
      <h1 className="text-3xl font-bold text-gray-700">{data.title}</h1>

      <hr className="my-2" />

      {/* Price Display */}
      <div className="flex items-baseline gap-2">
        <span className="text-2xl font-bold text-gray-900">
          {currentPrice
            ? `₦${currentPrice.toLocaleString()}`
            : "Price on request"}
        </span>
      </div>

      {/* Style Variations - Radio Buttons */}
      {hasVariations && (
        <div className="space-y-3">
          <label className="text-sm font-semibold text-gray-700">
            Select Style:
          </label>
          <div className="space-y-2">
            {data.priceVariations?.map((variation) => (
              <label
                key={variation.style}
                className={`flex items-center justify-between p-4 border-2 rounded-lg cursor-pointer transition-all ${
                  selectedVariation?.style === variation.style
                    ? "border-[#3D021E] bg-[#3D021E]/5"
                    : "border-gray-200 hover:border-gray-300"
                }`}
              >
                <div className="flex items-center gap-3">
                  <input
                    type="radio"
                    name="style"
                    value={variation.style}
                    checked={selectedVariation?.style === variation.style}
                    onChange={() => setSelectedVariation(variation)}
                    className="w-4 h-4 text-[#3D021E] focus:ring-[#3D021E]"
                  />
                  <span className="text-sm font-medium text-gray-700">
                    {variation.style}
                  </span>
                </div>
                <span className="text-sm font-semibold text-gray-900">
                  ₦{variation.price.toLocaleString()}
                </span>
              </label>
            ))}
          </div>
        </div>
      )}

      {/* Size Selection */}
      <div className="space-y-3">
        <label className="text-sm font-semibold text-gray-700">
          Select Size:
        </label>
        <div className="flex gap-2 flex-wrap">
          {availableSizes.map((size) => (
            <button
              key={size}
              onClick={() => setSelectedSize(size)}
              className={`min-w-[60px] px-4 py-3 border-2 rounded-lg font-medium transition-all ${
                selectedSize === size
                  ? "border-[#3D021E] bg-[#3D021E] text-white"
                  : "border-gray-300 text-gray-700 hover:border-gray-400"
              }`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      {/* Description */}
      <div className="text-gray-600">{data.description}</div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
        <Button
          onClick={onAddToCart}
          className="flex items-center justify-center gap-x-2 flex-1"
          disabled={(hasVariations && !selectedVariation) || !selectedSize}
        >
          <ShoppingCart size={20} />
          Add to cart
        </Button>
        <Button
          onClick={handlePreOrder}
          className="bg-[#3D021E] flex-1 flex items-center justify-center gap-x-2 text-center hover:bg-[#3D021E]/90 transition-colors"
          disabled={(hasVariations && !selectedVariation) || !selectedSize}
        >
          <FaWhatsapp size={24} />
          Pre-Order via WhatsApp
        </Button>
      </div>

      {/* Validation Message */}
      {!selectedSize && (
        <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg flex flex-col space-y-1">
          <p className="text-sm text-blue-800">
            Please select a size to continue.
          </p>
          <p className="font-bold italic text-xs text-gray-400">Please note that sizes from 18 and upwards attract additional costs</p>
        </div>
      )}

      {/* Stock Status (if needed) */}
      {hasVariations &&
        selectedVariation &&
        selectedVariation.inStock === false && (
          <div className="p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
            <p className="text-sm text-yellow-800">
              This style is currently out of stock. Contact us for availability.
            </p>
          </div>
        )}
    </div>
  );
};

export default Info;
