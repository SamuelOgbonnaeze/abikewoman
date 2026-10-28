import type { Metadata } from "next";
import { collectionsData } from "@/app/data";
import { FairShowcase, type ShowcaseItem } from "./fair-showcase";
import { fairInfo, fairItems } from "./items";

export const metadata: Metadata = {
  title: `${fairInfo.name} — ${fairInfo.date}`,
  description: `Shop The Abike Woman at ${fairInfo.name}, ${fairInfo.venue}, ${fairInfo.date}, ${fairInfo.time}. See the pieces and fair prices.`,
};

const isVideo = (url: string) => /\.(mp4|webm|ogg|mov)$/i.test(url);

const items: ShowcaseItem[] = fairItems.flatMap((item, index) => {
  const product = item.productId
    ? collectionsData.find((p) => p.id === item.productId)
    : undefined;
  const media =
    item.image ??
    product?.media.find((m) => !isVideo(m.url))?.url ??
    product?.media[0]?.url;
  const title = item.title ?? product?.title;
  if (!title || !media) return [];

  return {
    id: `${index}-${item.productId ?? "fair-item"}`,
    title,
    media,
    isVideo: isVideo(media),
    fairPrice: item.fairPrice,
    fairPrices: item.fairPrices,
    regularPrice: product?.price,
    note: item.note,
    link: product ? `/${product.link}` : undefined,
  };
});

export default function NaijaMadeMarketPage() {
  return <FairShowcase items={items} />;
}
