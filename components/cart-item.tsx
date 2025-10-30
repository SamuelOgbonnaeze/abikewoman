import { useEffect } from "react";
import { useState } from "react";
import toast from "react-hot-toast";
import Image from "next/image";
import { X } from "lucide-react";

import useCart from "@/hooks/use-cart";
import { CollectionItem } from "@/types";
import IconButton from "./ui/icon-button";

interface CartItemProps {
  data: CollectionItem;
}

const CartItem: React.FC<CartItemProps> = ({ data }) => {
  const cart = useCart();
  const cartItem = cart.items.find((item) => item.id === data.id);
  const [orderQuantity, setOrderQuantity] = useState(
    cartItem?.orderQuantity || 1
  );
  const [toastTimeout, setToastTimeout] = useState<NodeJS.Timeout | null>(null);

  const incrementQuantity = () => {
    const newQuantity = orderQuantity + 1;
    setOrderQuantity(newQuantity);
    cart.updateOrderQuantity(data.id, newQuantity);
  };

  const decrementQuantity = () => {
    if (orderQuantity > 1) {
      const newQuantity = orderQuantity - 1;
      setOrderQuantity(newQuantity);
      cart.updateOrderQuantity(data.id, newQuantity);
    }
  };

  const showToastWithDelay = () => {
    // Clear previous timeout
    if (toastTimeout) clearTimeout(toastTimeout);

    // Create a new timeout for the toast
    const timeout = setTimeout(() => {
      toast.success("Order quantity updated");
    }, 500);

    setToastTimeout(timeout);
  };

  useEffect(() => {
    // Cleanup timeout on component unmount
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
            src={data.media[1].url}
            alt="Product Image"
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
            onClick={() => cart.removeItem(data.id)}
            icon={<X size={15} />}
          />
        </div>
        <div className="sm:py-8 items-center">
          <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-2 sm:pr-0">
            <div className="flex justify-between">
              <p className="text-lg font-semibold text-black">{data.title}</p>
            </div>
          </div>
          <div className="mt-4 flex items-center">
            <button
              onClick={decrementQuantity}
              onMouseUp={showToastWithDelay} // Trigger toast on mouse release
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
              onMouseUp={showToastWithDelay} // Trigger toast on mouse release
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

export default CartItem;
