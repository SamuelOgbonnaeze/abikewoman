import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Image from "next/image";
import { X } from "lucide-react";

import useCart from "@/hooks/use-cart";
import { currencySymbol, formatAmount, priceCartItem } from "@/lib/cart-pricing";
import { CartItem } from "@/types";
import IconButton from "./ui/icon-button";

interface CartItemProps {
  data: CartItem;
}

const CartItemComponent: React.FC<CartItemProps> = ({ data }) => {
  const cart = useCart();
  const [toastTimeout, setToastTimeout] = useState<NodeJS.Timeout | null>(null);

  // Price, name and style come from the catalogue, never from the stored cart.
  // Read straight from the cart, which re-renders this item when it changes.
  const line = priceCartItem(data);
  const orderQuantity = line.quantity;
  const symbol = currencySymbol(line.currency);

  const updateQuantity = (newQuantity: number) => {
    cart.updateQuantity(data.id, data.selectedStyle, newQuantity);
  };

  const incrementQuantity = () => {
    updateQuantity(orderQuantity + 1);
    showToastWithDelay();
  };

  const decrementQuantity = () => {
    if (orderQuantity > 1) {
      updateQuantity(orderQuantity - 1);
      showToastWithDelay();
    }
  };

  const showToastWithDelay = () => {
    if (toastTimeout) clearTimeout(toastTimeout);
    const timeout = setTimeout(() => {
      toast.success("Order quantity updated");
    }, 500);
    setToastTimeout(timeout);
  };

  useEffect(() => {
    return () => {
      if (toastTimeout) clearTimeout(toastTimeout);
    };
  }, [toastTimeout]);

  return (
    <li className="flex py-6 border-b">
      <div className="relative h-24 w-24 rounded-md overflow-hidden sm:h-48 sm:w-48">
        {data.media && data.media.length > 0 ? (
          <Image
            fill
            src={data.media[1]?.url || data.media[0].url}
            alt={data.title}
            className="object-cover object-center"
          />
        ) : (
          <div className="h-full w-full bg-gray-200 flex items-center justify-center text-gray-500">
            No Image
          </div>
        )}
      </div>

      <div className="relative ml-4 flex flex-1 flex-col justify-between sm:ml-6">
        <div className="absolute z-10 right-0 top-0">
          <IconButton
            onClick={() => cart.removeItem(data.id, data.selectedStyle)}
            icon={<X size={15} />}
          />
        </div>

        <div className="sm:py-8">
          <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-2 sm:pr-0">
            <div>
              <p className="text-lg font-semibold text-black">{line.title}</p>

              {/* Show selected style if present */}
              {line.style && (
                <p className="text-sm text-gray-600">
                  Style: {line.style}
                </p>
              )}

              {/* Show selected size if present */}
              {line.size && (
                <p className="text-sm text-gray-600">
                  Size: {line.size}
                </p>
              )}

              {line.unitPrice === null || line.lineTotal === null ? (
                <p className="text-sm text-gray-800 mt-1">
                  Price to be confirmed
                </p>
              ) : (
                <>
                  {/* Price per unit */}
                  <p className="text-sm text-gray-800 mt-1">
                    Price: {symbol}{formatAmount(line.unitPrice, line.currency)}
                  </p>

                  {/* Subtotal */}
                  <p className="text-base font-semibold text-[#3D021E] mt-1">
                    Subtotal: {symbol}{formatAmount(line.lineTotal, line.currency)}
                  </p>
                </>
              )}
            </div>
          </div>

          {/* Quantity Controls */}
          <div className="mt-4 flex items-center">
            <button
              onClick={decrementQuantity}
              className="px-3 py-1 border border-gray-300 rounded-l-md bg-gray-100 hover:bg-gray-200 text-gray-700"
              disabled={orderQuantity <= 1}
            >
              -
            </button>
            <input
              type="number"
              value={orderQuantity}
              readOnly
              className="w-12 text-center focus:outline-none"
            />
            <button
              onClick={incrementQuantity}
              className="px-3 py-1 border border-gray-300 rounded-r-md bg-gray-100 hover:bg-gray-200 text-gray-700"
            >
              +
            </button>
          </div>
        </div>
      </div>
    </li>
  );
};

export default CartItemComponent;
