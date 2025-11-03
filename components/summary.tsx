"use client";

import { useState, useMemo } from "react";
import useCart from "@/hooks/use-cart";
import { FaWhatsapp } from "react-icons/fa";
import { Button } from "./ui/button";

const Summary = () => {
  const items = useCart((state) => state.items);
  const removeAll = useCart((state) => state.removeAll);

  const [firstname, setFirstname] = useState("");

  const resetForm = () => {
    setFirstname("");
  };

  // Compute total amount of all items
  const totalAmount = useMemo(() => {
    return items.reduce((total, item) => {
      const price = item.selectedPrice ?? 0;
      const quantity = item.quantity ?? 1;
      return total + price * quantity;
    }, 0);
  }, [items]);

  const onCheckout = async () => {
    const phoneNumber = "2347038072466";

    // Build the items list
    const itemsList = items
      .map((item, index) => {
        const quantity = item.quantity ?? 1;
        const price = item.selectedPrice ?? 0;
        const totalPrice = price * quantity;

        // Build item details with style and size if available
        let itemDetails = `${index + 1}. ${item.title} (${item.category})`;

        if (item.selectedStyle) {
          itemDetails += ` - Style: ${item.selectedStyle}`;
        }

        if (item.selectedSize) {
          itemDetails += ` - Size: ${item.selectedSize}`;
        }

        itemDetails += ` - Quantity: ${quantity} - ₦${totalPrice.toLocaleString()}`;

        return itemDetails;
      })
      .join("\n");

    //  Build the complete message with total amount included
    const message = encodeURIComponent(
      `Hi, The AbikeWoman! My name is ${firstname} and I would like to pre-order the following items:\n\n${itemsList}\n\nTotal Amount: ₦${totalAmount.toLocaleString()}\n\nThank you!`
    );

    // WhatsApp URL format
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

    // Open WhatsApp in a new tab
    window.open(whatsappUrl, "_blank");
    removeAll();
    resetForm();
  };

  const onPayWithTransfer = async () => {
    const phoneNumber = "2347038072466";

    // Build the items list
    const itemsList = items
      .map((item, index) => {
        const quantity = item.quantity ?? 1;
        const price = item.selectedPrice ?? 0;
        const totalPrice = price * quantity;

        // Build item details with style and size if available
        let itemDetails = `${index + 1}. ${item.title} (${item.category})`;

        if (item.selectedStyle) {
          itemDetails += ` - Style: ${item.selectedStyle}`;
        }

        if (item.selectedSize) {
          itemDetails += ` - Size: ${item.selectedSize}`;
        }

        itemDetails += ` - Quantity: ${quantity} - ₦${totalPrice.toLocaleString()}`;

        return itemDetails;
      })
      .join("\n");

    //  Build the complete message with total amount included
    const message = encodeURIComponent(
      `Hi, The AbikeWoman! My name is ${firstname} and I have paid for the following items:\n\n${itemsList}\n\nTotal Amount: ₦${totalAmount.toLocaleString()}\n\nThank you!\n\nHere is my receipt`
    );

    // WhatsApp URL format
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

    // Open WhatsApp in a new tab
    window.open(whatsappUrl, "_blank");
    removeAll();
    resetForm();
  };

  return (
    <div className="mt-16 rounded-lg px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8 bg-[#3D021E] bg-opacity-50 text-white">
      <h2 className="text-lg font-medium">Order Checkout</h2>
      <div className="mt-6 space-y-4">
        <div className="flex flex-col items-center justify-between border-t border-gray-200">
          <div className="flex w-full text-base font-medium gap-x-2 sm:gap-x-4 pt-4">
            <span className="sm:w-[150px]">
              <label htmlFor="name">First Name:</label>
            </span>
            <input
              type="text"
              id="name"
              value={firstname}
              className="w-full rounded-full px-4 bg-white text-black text-sm font-light"
              onChange={(e) => setFirstname(e.target.value)}
            />
          </div>
        </div>

        {/* Display total amount */}
        <div className="flex justify-between text-base font-medium border-t border-gray-200 pt-4">
          <p>Total</p>
          <p>₦{totalAmount.toLocaleString()}</p>
        </div>

        <Button
          onClick={onCheckout}
          className="bg-gray-100 w-full text-black text-center hover:bg-[#3D021E]/90 hover:text-white hover:cursor-pointer transition-colors"
          disabled={firstname === ""}
        >
          <FaWhatsapp size={24} />
          Pre-Order
        </Button>

        <div className="flex items-center justify-center">
          <span className="text-xs text-gray-300">— or —</span>
        </div>

        {/* Transfer Option */}
        <div className="border border-gray-300 rounded-lg p-3 text-sm text-center ">
          <p className="mb-2 font-semibold text-sm">Bank Transfer Details:</p>
          <p>
            Account Name: <span className="font-medium">THE ABIKEWOMAN</span>
          </p>
          <p>
            Bank: <span className="font-medium">GUARANTY TRUST BANK</span>
          </p>
          <p>
            Account Number: <span className="font-medium">0696134745</span>
          </p>
        </div>

        {/* Pay with Transfer Button */}
        <Button
          onClick={onPayWithTransfer}
          className="bg-[#25D366] w-full text-white hover:bg-[#128C7E] hover:cursor-pointer transition-colors"
          disabled={firstname === ""}
        >
          <FaWhatsapp size={20} className="mr-2" />
          Pay with Transfer & Send Receipt
        </Button>
      </div>
    </div>
  );
};

export default Summary;
