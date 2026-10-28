"use client";

import { useState, useMemo } from "react";
import useCart from "@/hooks/use-cart";
import {
  Currency,
  currencySymbol,
  formatAmount,
  priceCartItem,
} from "@/lib/cart-pricing";
import { FaWhatsapp } from "react-icons/fa";
import { Button } from "./ui/button";

const Summary = () => {
  const items = useCart((state) => state.items);
  const removeAll = useCart((state) => state.removeAll);

  const [firstname, setFirstname] = useState("");

  const resetForm = () => {
    setFirstname("");
  };

  // Prices come from the catalogue, never from the stored cart.
  const lines = useMemo(() => items.map(priceCartItem), [items]);
  const hasUnpricedItems = lines.some((line) => line.lineTotal === null);

  // Group totals by currency — never mix ₦ + £ + $ into a single number
  const currencyTotals = useMemo(() => {
    return lines.reduce<Partial<Record<Currency, number>>>((acc, line) => {
      if (line.lineTotal === null) return acc;
      acc[line.currency] = (acc[line.currency] ?? 0) + line.lineTotal;
      return acc;
    }, {});
  }, [lines]);

  const totalEntries = Object.entries(currencyTotals) as [Currency, number][];
  const hasMixedCurrencies = totalEntries.length > 1;

  const sendOrder = (intro: string, outro: string) => {
    const phoneNumber = "2347038072466";

    const itemsList = lines
      .map((line, index) => {
        let itemDetails = `${index + 1}. ${line.title}`;
        if (line.category) itemDetails += ` (${line.category})`;
        if (line.style) itemDetails += ` - Style: ${line.style}`;
        if (line.size) itemDetails += ` - Size: ${line.size}`;
        itemDetails += ` - Qty: ${line.quantity} - `;
        itemDetails +=
          line.lineTotal === null
            ? "price to be confirmed"
            : `${currencySymbol(line.currency)}${formatAmount(line.lineTotal, line.currency)}`;
        return itemDetails;
      })
      .join("\n");

    const totalsBreakdown = totalEntries
      .map(([c, t]) => `${currencySymbol(c)}${formatAmount(t, c)} (${c})`)
      .join(" + ");

    let totalLine = hasMixedCurrencies
      ? `Total: ${totalsBreakdown} (paid separately)`
      : `Total: ${totalEntries.map(([c, t]) => `${currencySymbol(c)}${formatAmount(t, c)}`).join("")}`;
    if (hasUnpricedItems) totalLine += " (excluding items to be confirmed)";

    const message = encodeURIComponent(
      `Hi, The AbikeWoman! My name is ${firstname.trim()} and ${intro}:\n\n${itemsList}\n\n${totalLine}\n\n${outro}`
    );

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, "_blank");
    removeAll();
    resetForm();
  };

  const onCheckout = () =>
    sendOrder("I would like to pre-order the following items", "Thank you!");

  const onPayWithTransfer = () =>
    sendOrder(
      "I have paid for the following items",
      "Thank you!\n\nHere is my receipt"
    );

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

        {/* Per-currency totals — never mix incompatible currencies */}
        {totalEntries.length === 0 ? (
          <div className="flex justify-between text-base font-medium border-t border-gray-200 pt-4">
            <p>Total</p>
            <p>₦0</p>
          </div>
        ) : hasMixedCurrencies ? (
          <div className="border-t border-gray-200 pt-4 space-y-1">
            <p className="text-sm font-semibold mb-2">Order Totals</p>
            {totalEntries.map(([c, t]) => (
              <div key={c} className="flex justify-between text-sm">
                <span>{c}</span>
                <span className="font-semibold">{currencySymbol(c)}{formatAmount(t, c)}</span>
              </div>
            ))}
            <p className="text-xs text-gray-300 pt-1">Multiple currencies — each settled separately</p>
          </div>
        ) : (
          <div className="flex justify-between text-base font-medium border-t border-gray-200 pt-4">
            <p>Total</p>
            <p>
              {totalEntries.map(([c, t]) => (
                <span key={c}>{currencySymbol(c)}{formatAmount(t, c)}</span>
              ))}
            </p>
          </div>
        )}

        {hasUnpricedItems && (
          <p className="text-xs text-gray-300">
            Some items aren&apos;t in our catalogue any more; we&apos;ll confirm
            their price on WhatsApp.
          </p>
        )}

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
