import { collectionsData } from "@/app/data";
import { CartItem, CollectionItem, PriceVariation } from "@/types";

export type Currency = "NGN" | "GBP" | "CAD";

// A cart line priced from the product catalogue. The cart lives in the
// shopper's localStorage, so anything stored there (price, title, currency,
// quantity) can be edited by hand. Only the product id, chosen style, currency,
// size and quantity are taken from the cart, and those are validated; prices
// and names always come from app/data.tsx.
export type PricedCartLine = {
  id: string;
  title: string;
  category: string;
  style?: string;
  size?: number;
  currency: Currency;
  quantity: number;
  // null when the product, style or currency price can't be found.
  unitPrice: number | null;
  lineTotal: number | null;
};

const CURRENCIES: Currency[] = ["NGN", "GBP", "CAD"];

const priceIn = (
  source: Pick<CollectionItem, "price" | "priceGBP" | "priceCAD"> | PriceVariation,
  currency: Currency
) =>
  currency === "GBP"
    ? source.priceGBP
    : currency === "CAD"
      ? source.priceCAD
      : source.price;

export const priceCartItem = (item: CartItem): PricedCartLine => {
  const product = collectionsData.find((p) => p.id === item.id);
  const currency = CURRENCIES.includes(item.selectedCurrency as Currency)
    ? (item.selectedCurrency as Currency)
    : "NGN";
  const quantity =
    Number.isInteger(item.quantity) && item.quantity >= 1 ? item.quantity : 1;
  const size =
    Number.isInteger(item.selectedSize) && item.selectedSize! > 0
      ? item.selectedSize
      : undefined;

  let style: string | undefined;
  let unitPrice: number | undefined;
  if (product?.priceVariations?.length) {
    const variation = product.priceVariations.find(
      (v) => v.style === item.selectedStyle
    );
    style = variation?.style;
    unitPrice = variation ? priceIn(variation, currency) : undefined;
  } else if (product) {
    unitPrice = priceIn(product, currency);
  }
  const validPrice =
    typeof unitPrice === "number" && Number.isFinite(unitPrice) && unitPrice > 0
      ? unitPrice
      : null;

  return {
    id: item.id,
    title: product?.title ?? "Unknown item",
    category: product?.category ?? "",
    style,
    size,
    currency,
    quantity,
    unitPrice: validPrice,
    lineTotal: validPrice === null ? null : validPrice * quantity,
  };
};

export const currencySymbol = (currency: Currency) =>
  currency === "GBP" ? "£" : currency === "CAD" ? "$" : "₦";

export const formatAmount = (amount: number, currency: Currency) =>
  amount.toLocaleString(undefined, {
    minimumFractionDigits: currency === "NGN" ? 0 : 2,
    maximumFractionDigits: currency === "NGN" ? 0 : 2,
  });
