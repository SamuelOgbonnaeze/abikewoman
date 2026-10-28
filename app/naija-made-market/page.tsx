import fs from "fs";
import path from "path";
import type { Metadata } from "next";
import { preload } from "react-dom";
import { FairShowcase, type ShowcaseItem } from "./fair-showcase";
import { PHOTO_SIZES } from "./photo-sizes";
import { fairInfo, fairItems } from "./items";

export const metadata: Metadata = {
  title: `${fairInfo.name} — ${fairInfo.date}`,
  description: `Shop The Abike Woman at ${fairInfo.name}, ${fairInfo.venue}, ${fairInfo.date}, ${fairInfo.time}. See the pieces and fair prices.`,
};

// Shown in alphabetical order, whatever order they're listed in items.ts.
const sortedItems = [...fairItems].sort((a, b) =>
  a.title.localeCompare(b.title, "en", { numeric: true })
);

// Sizes written by `npm run optimize-fair-photos`: the image itself is 800px
// wide, with "-640" and "-480" versions next to it. Only sizes that exist are
// offered, so a photo added without them still works.
const FAIR_PHOTO_WIDTHS = [800, 640, 480];

const srcSetFor = (image: string) => {
  const candidates = FAIR_PHOTO_WIDTHS.map((width, index) => ({
    width,
    url: index === 0 ? image : image.replace(/\.webp$/, `-${width}.webp`),
  })).filter(({ url }) =>
    fs.existsSync(path.join(process.cwd(), "public", url))
  );
  return candidates.length > 1
    ? candidates.map(({ url, width }) => `${url} ${width}w`).join(", ")
    : undefined;
};

const items: ShowcaseItem[] = sortedItems.map((item, index) => ({
  id: `${index}-${item.image}`,
  title: item.title,
  media: item.image,
  srcSet: srcSetFor(item.image),
  fairPrice: item.fairPrice,
  fairPrices: item.fairPrices,
  note: item.note,
}));

export default function NaijaMadeMarketPage() {
  // Fetch the first photo (the largest thing on screen) before the scripts.
  const first = items[0];
  if (first) {
    preload(first.media, {
      as: "image",
      fetchPriority: "high",
      imageSrcSet: first.srcSet,
      imageSizes: first.srcSet ? PHOTO_SIZES : undefined,
    });
  }
  return <FairShowcase items={items} />;
}
