import fs from "fs";
import path from "path";
import type { Metadata } from "next";
import { SaleCatalogue, type CatalogueItem } from "./catalogue";
import { saleInfo, saleItems } from "./items";

export const metadata: Metadata = {
  title: `${saleInfo.name} — ${saleInfo.offers.join(", ")}`,
  description: `The Abike Woman ${saleInfo.name}, ${saleInfo.dates}: ${saleInfo.offers.join(" and ")}. ${saleInfo.restock}.`,
};

// Shown in alphabetical order, whatever order they're listed in items.ts,
// with sold-out pieces at the end.
const sortedItems = [...saleItems].sort(
  (a, b) =>
    Number(!!a.soldOut) - Number(!!b.soldOut) ||
    a.title.localeCompare(b.title, "en", { numeric: true })
);

// Sizes written by `npm run optimize-sale-photos`: the image itself is 800px
// wide, with "-640" and "-480" versions next to it. Only sizes that exist are
// offered, so a photo added without them still works.
const PHOTO_WIDTHS = [800, 640, 480];

const srcSetFor = (image: string) => {
  const candidates = PHOTO_WIDTHS.map((width, index) => ({
    width,
    url: index === 0 ? image : image.replace(/\.webp$/, `-${width}.webp`),
  })).filter(({ url }) =>
    fs.existsSync(path.join(process.cwd(), "public", url))
  );
  return candidates.length > 1
    ? candidates.map(({ url, width }) => `${url} ${width}w`).join(", ")
    : undefined;
};

const salePrice = (price: number) =>
  Math.round((price * (100 - saleInfo.discountPercent)) / 100);

const items: CatalogueItem[] = sortedItems.map((item, index) => ({
  id: `${index}-${item.image}`,
  title: item.title,
  media: item.image,
  srcSet: srcSetFor(item.image),
  price: item.price,
  salePrice: salePrice(item.price),
  note: item.note,
  soldOut: !!item.soldOut,
}));

export default function NovemberSalesPage() {
  return <SaleCatalogue items={items} />;
}
