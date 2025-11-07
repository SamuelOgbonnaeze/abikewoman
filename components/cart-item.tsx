import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Image from "next/image";
import { X } from "lucide-react";

import useCart from "@/hooks/use-cart";
import { CartItem } from "@/types";
import IconButton from "./ui/icon-button";

interface CartItemProps {
  data: CartItem;
}

const CartItemComponent: React.FC<CartItemProps> = ({ data }) => {
  const cart = useCart();
  const [orderQuantity, setOrderQuantity] = useState(data.quantity || 1);
  const [toastTimeout, setToastTimeout] = useState<NodeJS.Timeout | null>(null);

  const price = data.selectedPrice ?? data.price ?? 0;
  const subtotal = price * orderQuantity;

  // Update cart quantity when it changes locally
  const updateQuantity = (newQuantity: number) => {
    setOrderQuantity(newQuantity);
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

  // Keep local state in sync if cart updates from elsewhere
  useEffect(() => {
    setOrderQuantity(data.quantity || 1);
  }, [data.quantity]);

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
            unoptimized
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
              <p className="text-lg font-semibold text-black">{data.title}</p>

              {/* Show selected style if present */}
              {data.selectedStyle && (
                <p className="text-sm text-gray-600">
                  Style: {data.selectedStyle}
                </p>
              )}

              {/* Show selected size if present */}
              {data.selectedSize && (
                <p className="text-sm text-gray-600">
                  Size: {data.selectedSize}
                </p>
              )}

              {/* Price per unit */}
              <p className="text-sm text-gray-800 mt-1">
                Price: ₦{price.toLocaleString()}
              </p>

              {/* Subtotal */}
              <p className="text-base font-semibold text-[#3D021E] mt-1">
                Subtotal: ₦{subtotal.toLocaleString()}
              </p>
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
