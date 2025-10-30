"use client ";

import { useState } from "react";

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

  const onCheckout = async () => {
    const phoneNumber = "2347038072466";

    // Build the items list
    const itemsList = items
      .map((item, index) => {
        return `${index + 1}. ${item.title} (${item.category}) - Quantity: ${
          item.orderQuantity
        }`;
      })
      .join("\n");

    // Build the complete message
    const message = encodeURIComponent(
      `Hi, The AbikeWoman! My name is ${firstname} and I would like to pre-order the following items:\n\n${itemsList}\n\nThank you!`
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
      <h2 className="text-lg font-medium ">Order Checkout</h2>
      <div className="mt-6 space-y-4">
        <div className="flex flex-col items-center justify-between border-t border-gray-200 ">
          <div className="flex w-full text-base font-medium gap-x-2 sm:gap-x-4 pt-4">
            <span className="sm:w-[150px]">
              <label>First Name:</label>
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
        <Button
          onClick={onCheckout}
          className="bg-gray-100 w-full text-black text-center hover:bg-[#3D021E]/90 hover:text-white hover:cursor-pointer transition-colors"
        >
          <FaWhatsapp size={24} />
          Pre-Order
        </Button>
      </div>
    </div>
  );
};

export default Summary;
