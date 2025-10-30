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

  // State for selected variation
  const [selectedVariation, setSelectedVariation] =
    useState<PriceVariation | null>(
      hasVariations ? data?.priceVariations![0] : null
    );

  const currentPrice = hasVariations ? selectedVariation?.price : data.price;

  const onAddToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();

    // Create cart item with selected style
    const cartItem = {
      ...data,
      selectedStyle: hasVariations ? selectedVariation?.style : undefined,
      selectedPrice: currentPrice,
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

      {/* Description */}
      <div className="text-gray-600">{data.description}</div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
        <Button
          onClick={onAddToCart}
          className="flex items-center justify-center gap-x-2 flex-1"
          disabled={hasVariations && !selectedVariation}
        >
          <ShoppingCart size={20} />
          Add to cart
        </Button>
        <Button
          onClick={handlePreOrder}
          className="bg-[#3D021E] flex-1 flex items-center justify-center gap-x-2 text-center hover:bg-[#3D021E]/90 transition-colors"
          disabled={hasVariations && !selectedVariation}
        >
          <FaWhatsapp size={24} />
          Pre-Order via WhatsApp
        </Button>
      </div>

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
