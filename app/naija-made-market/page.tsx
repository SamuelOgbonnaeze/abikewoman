import type { Metadata } from "next";
import { FairShowcase, type ShowcaseItem } from "./fair-showcase";
import { fairInfo, fairItems } from "./items";

export const metadata: Metadata = {
  title: `${fairInfo.name} — ${fairInfo.date}`,
  description: `Shop The Abike Woman at ${fairInfo.name}, ${fairInfo.venue}, ${fairInfo.date}, ${fairInfo.time}. See the pieces and fair prices.`,
};

const items: ShowcaseItem[] = fairItems.map((item, index) => ({
  id: `${index}-${item.image}`,
  title: item.title,
  media: item.image,
  fairPrice: item.fairPrice,
  fairPrices: item.fairPrices,
  note: item.note,
}));

export default function NaijaMadeMarketPage() {
  return <FairShowcase items={items} />;
}
