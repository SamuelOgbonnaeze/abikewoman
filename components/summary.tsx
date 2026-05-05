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

  // Group totals by currency — never mix ₦ + £ + $ into a single number
  const currencyTotals = useMemo(() => {
    return items.reduce<Record<string, number>>((acc, item) => {
      const currency = item.selectedCurrency ?? "NGN";
      const price = item.selectedPrice ?? 0;
      const quantity = item.quantity ?? 1;
      acc[currency] = (acc[currency] ?? 0) + price * quantity;
      return acc;
    }, {});
  }, [items]);

  const currencySymbol = (c: string) =>
    c === "GBP" ? "£" : c === "CAD" ? "$" : "₦";

  const formatAmount = (amount: number, currency: string) =>
    amount.toLocaleString(undefined, {
      minimumFractionDigits: currency === "NGN" ? 0 : 2,
      maximumFractionDigits: currency === "NGN" ? 0 : 2,
    });

  const hasMixedCurrencies = Object.keys(currencyTotals).length > 1;

  const onCheckout = async () => {
    const phoneNumber = "2347038072466";

    // Build the items list
    const itemsList = items
      .map((item, index) => {
        const quantity = item.quantity ?? 1;
        const price = item.selectedPrice ?? 0;
        const totalPrice = price * quantity;
        const currency = item.selectedCurrency ?? "NGN";
        const sym = currencySymbol(currency);
        const formattedTotal = formatAmount(totalPrice, currency);

        let itemDetails = `${index + 1}. ${item.title} (${item.category})`;
        if (item.selectedStyle) itemDetails += ` - Style: ${item.selectedStyle}`;
        if (item.selectedSize) itemDetails += ` - Size: ${item.selectedSize}`;
        itemDetails += ` - Qty: ${quantity} - ${sym}${formattedTotal}`;
        return itemDetails;
      })
      .join("\n");

    const totalsBreakdown = Object.entries(currencyTotals)
      .map(([c, t]) => `${currencySymbol(c)}${formatAmount(t, c)} (${c})`)
      .join(" + ");

    const totalLine = hasMixedCurrencies
      ? `Total: ${totalsBreakdown} (paid separately)`
      : `Total: ${Object.entries(currencyTotals).map(([c, t]) => `${currencySymbol(c)}${formatAmount(t, c)}`).join("")}`;

    const message = encodeURIComponent(
      `Hi, The AbikeWoman! My name is ${firstname} and I would like to pre-order the following items:\n\n${itemsList}\n\n${totalLine}\n\nThank you!`
    );

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
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
        const currency = item.selectedCurrency ?? "NGN";
        const sym = currencySymbol(currency);
        const formattedTotal = formatAmount(totalPrice, currency);

        let itemDetails = `${index + 1}. ${item.title} (${item.category})`;
        if (item.selectedStyle) itemDetails += ` - Style: ${item.selectedStyle}`;
        if (item.selectedSize) itemDetails += ` - Size: ${item.selectedSize}`;
        itemDetails += ` - Qty: ${quantity} - ${sym}${formattedTotal}`;
        return itemDetails;
      })
      .join("\n");

    const totalsBreakdown = Object.entries(currencyTotals)
      .map(([c, t]) => `${currencySymbol(c)}${formatAmount(t, c)} (${c})`)
      .join(" + ");

    const totalLine = hasMixedCurrencies
      ? `Total: ${totalsBreakdown} (paid separately)`
      : `Total: ${Object.entries(currencyTotals).map(([c, t]) => `${currencySymbol(c)}${formatAmount(t, c)}`).join("")}`;

    const message = encodeURIComponent(
      `Hi, The AbikeWoman! My name is ${firstname} and I have paid for the following items:\n\n${itemsList}\n\n${totalLine}\n\nThank you!\n\nHere is my receipt`
    );

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
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

        {/* Per-currency totals — never mix incompatible currencies */}
        {Object.keys(currencyTotals).length === 0 ? (
          <div className="flex justify-between text-base font-medium border-t border-gray-200 pt-4">
            <p>Total</p>
            <p>₦0</p>
          </div>
        ) : hasMixedCurrencies ? (
          <div className="border-t border-gray-200 pt-4 space-y-1">
            <p className="text-sm font-semibold mb-2">Order Totals</p>
            {Object.entries(currencyTotals).map(([c, t]) => (
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
              {Object.entries(currencyTotals).map(([c, t]) => (
                <span key={c}>{currencySymbol(c)}{formatAmount(t, c)}</span>
              ))}
            </p>
          </div>
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
