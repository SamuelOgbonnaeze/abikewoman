"use client";

import { useState } from "react";
import { Search, Tag } from "lucide-react";
import { GrInstagram } from "react-icons/gr";
import { FaWhatsapp } from "react-icons/fa";
import { cn } from "@/lib/utils";
import { saleInfo } from "./items";

export type CatalogueItem = {
  id: string;
  title: string;
  media: string;
  srcSet?: string;
  // Regular price, and the price after the sale discount.
  price: number;
  salePrice: number;
  note?: string;
};

// Roughly how wide a photo is shown in the grid: 2 columns on phones,
// 3 on tablets, 4 on desktop (inside a 1280px-wide container).
const PHOTO_SIZES =
  "(min-width: 1280px) 300px, (min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw";

// Photos in the first rows load straight away; the rest as they scroll in.
const EAGER_PHOTOS = 4;

const instagramUrl = `https://www.instagram.com/${saleInfo.instagramHandle}/`;

const formatNaira = (amount: number) =>
  new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    maximumFractionDigits: 0,
  }).format(amount);

const whatsappUrl = (item?: CatalogueItem) => {
  const text = item
    ? `Hello, The AbikeWoman! ${saleInfo.keyword} — I'd like to order the ${item.title} from the ${saleInfo.name} at ${formatNaira(item.salePrice)} (was ${formatNaira(item.price)}).`
    : `Hello, The AbikeWoman! ${saleInfo.keyword} — I'd like to shop the ${saleInfo.name}.`;
  return `https://wa.me/${saleInfo.whatsappNumber}?text=${encodeURIComponent(text)}`;
};

// A plain <img> rather than next/image: images are served unoptimized, so
// next/image can't offer the browser the -640/-480 sizes to choose from.
const ItemPhoto = ({
  item,
  eager,
}: {
  item: CatalogueItem;
  eager: boolean;
}) => (
  // eslint-disable-next-line @next/next/no-img-element
  <img
    src={item.media}
    srcSet={item.srcSet}
    sizes={item.srcSet ? PHOTO_SIZES : undefined}
    alt={item.title}
    loading={eager ? "eager" : "lazy"}
    fetchPriority={eager ? "high" : undefined}
    decoding="async"
    className="absolute inset-0 h-full w-full object-cover object-bottom transition-transform duration-500 group-hover:scale-[1.03]"
  />
);

const ItemCard = ({
  item,
  eager,
}: {
  item: CatalogueItem;
  eager: boolean;
}) => (
  <article className="group flex flex-col">
    <div className="relative aspect-[4/5] w-full overflow-hidden bg-black/20">
      <ItemPhoto item={item} eager={eager} />
      <span className="absolute left-2 top-2 bg-[#C9844A] px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.1em] text-[#2a0014] md:text-xs">
        −{saleInfo.discountPercent}%
      </span>
    </div>
    <h2 className="mt-3 text-sm font-medium uppercase leading-tight tracking-wide md:text-base">
      {item.title}
    </h2>
    <p className="mt-1.5 flex flex-wrap items-baseline gap-x-2">
      <span className="text-lg font-light tracking-tight text-white md:text-xl">
        {formatNaira(item.salePrice)}
      </span>
      <s className="text-xs text-white/50 md:text-sm">
        <span className="sr-only">Was </span>
        {formatNaira(item.price)}
      </s>
    </p>
    {item.note ? (
      <p className="mt-1 text-xs text-white/70">{item.note}</p>
    ) : null}
    <a
      href={whatsappUrl(item)}
      target="_blank"
      rel="noopener noreferrer"
      className="mt-3 flex items-center justify-center gap-2 bg-white/15 px-3 py-2 text-xs uppercase tracking-[0.15em] hover:bg-white/25"
    >
      <FaWhatsapp size={14} />
      Order
    </a>
  </article>
);

const SocialLinks = ({ className }: { className?: string }) => (
  <div
    className={cn(
      "flex items-center gap-5 md:gap-8 text-xs md:text-sm uppercase tracking-[0.15em]",
      className
    )}
  >
    <a
      href={instagramUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 text-[#C13584] hover:opacity-80"
    >
      <GrInstagram size={16} />
      <span>@{saleInfo.instagramHandle}</span>
    </a>
    <a
      href={whatsappUrl()}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 text-[#1DA851] hover:opacity-80"
    >
      <FaWhatsapp size={16} />
      <span>WhatsApp</span>
    </a>
  </div>
);

const background =
  "bg-[radial-gradient(ellipse_at_65%_0%,#7a1446_0%,#3D021E_40%,#12000a_100%)]";

export const SaleCatalogue = ({ items }: { items: CatalogueItem[] }) => {
  const [query, setQuery] = useState("");
  const search = query.trim().toLowerCase();
  const shown = search
    ? items.filter((item) => item.title.toLowerCase().includes(search))
    : items;

  return (
    <section className={cn("min-h-svh text-white", background)}>
      <p className="flex items-center justify-center gap-2 bg-[#C9844A] px-4 py-2 text-center text-[11px] font-semibold uppercase tracking-[0.1em] text-[#2a0014] md:text-xs md:tracking-[0.2em]">
        <Tag size={14} className="shrink-0" />
        {saleInfo.offers.join(" · ")}
      </p>

      <div className="mx-auto max-w-7xl px-4 pb-16 md:px-8">
        <header className="pt-6 text-center md:pt-12">
          <p className="text-[11px] uppercase tracking-[0.3em] text-[#E2A66B] md:text-xs">
            {saleInfo.dates}
          </p>
          <h1 className="mt-3 text-4xl font-medium uppercase leading-none tracking-tight md:text-7xl">
            {saleInfo.name}
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-sm text-white/75 md:text-base">
            {saleInfo.restock}.
          </p>
        </header>

        <div className="mt-6 flex flex-col gap-3 md:mt-10 md:flex-row md:items-end md:justify-between">
          <label className="flex items-center gap-3 border-b border-white/40 pb-2 focus-within:border-white md:w-80">
            <Search size={18} className="shrink-0 text-white/70" />
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              onKeyDown={(event) => {
                if (event.key === "Escape") setQuery("");
              }}
              placeholder="Search pieces"
              aria-label="Search pieces"
              className="w-full bg-transparent text-base text-white placeholder:text-white/50 outline-none [&::-webkit-search-cancel-button]:hidden"
            />
          </label>
          <p className="text-xs uppercase tracking-[0.2em] text-white/60">
            {shown.length} {shown.length === 1 ? "piece" : "pieces"}
          </p>
        </div>

        {shown.length ? (
          <div className="mt-6 grid grid-cols-2 gap-x-3 gap-y-8 md:grid-cols-3 md:gap-x-5 lg:grid-cols-4">
            {shown.map((item, index) => (
              <ItemCard
                key={item.id}
                item={item}
                eager={!search && index < EAGER_PHOTOS}
              />
            ))}
          </div>
        ) : (
          <p className="py-20 text-center text-sm">
            {items.length
              ? <>No pieces match &ldquo;{query.trim()}&rdquo;</>
              : `Our ${saleInfo.name} pieces are coming soon.`}
          </p>
        )}
      </div>

      <div className="sticky bottom-0 z-20 flex h-14 items-center justify-center bg-white text-[#3D021E]">
        <SocialLinks />
      </div>
    </section>
  );
};
