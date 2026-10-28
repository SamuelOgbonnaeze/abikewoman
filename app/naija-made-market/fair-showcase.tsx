"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  Search,
} from "lucide-react";
import { GrInstagram } from "react-icons/gr";
import { FaWhatsapp } from "react-icons/fa";
import { cn } from "@/lib/utils";
import { fairInfo } from "./items";

export type ShowcaseItem = {
  id: string;
  title: string;
  media: string;
  fairPrice?: number;
  fairPrices?: { label: string; price: number }[];
  note?: string;
};

const instagramUrl = `https://www.instagram.com/${fairInfo.instagramHandle}/`;

const formatNaira = (amount: number) =>
  new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    maximumFractionDigits: 0,
  }).format(amount);

const lowestPrice = (item: ShowcaseItem) =>
  item.fairPrices?.length
    ? Math.min(...item.fairPrices.map((p) => p.price))
    : item.fairPrice;

const whatsappUrl = (item?: ShowcaseItem) => {
  const fair = `${fairInfo.name} (${fairInfo.date}, ${fairInfo.venue})`;
  const price = item?.fairPrice
    ? ` at the fair price of ${formatNaira(item.fairPrice)}`
    : "";
  const text = item
    ? `Hello, The AbikeWoman! I'm messaging from the ${fair}. I'd like to reserve the ${item.title}${price}.`
    : `Hello, The AbikeWoman! I'm messaging from the ${fair}.`;
  return `https://wa.me/${fairInfo.whatsappNumber}?text=${encodeURIComponent(text)}`;
};

const counterText = (index: number, count: number) =>
  `${String(index + 1).padStart(2, "0")} / ${String(count).padStart(2, "0")}`;

type Axis = "x" | "y";

const centerOf = (el: HTMLElement, axis: Axis) =>
  axis === "y"
    ? el.offsetTop + el.offsetHeight / 2
    : el.offsetLeft + el.offsetWidth / 2;

// A snap-scrolling list (vertical names on desktop, horizontal cards on
// mobile) that tracks the centred item and loops past either end.
const useLoopingScroller = (count: number, axis: Axis) => {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLElement | null)[]>([]);
  const activeRef = useRef(0);
  const [active, setActive] = useState(0);

  // The item closest to the middle of the scroller is the active one.
  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    let frame = 0;
    const update = () => {
      const middle =
        axis === "y"
          ? scroller.scrollTop + scroller.clientHeight / 2
          : scroller.scrollLeft + scroller.clientWidth / 2;
      let closest = 0;
      let closestDistance = Infinity;
      itemRefs.current.forEach((el, index) => {
        if (!el) return;
        const distance = Math.abs(centerOf(el, axis) - middle);
        if (distance < closestDistance) {
          closest = index;
          closestDistance = distance;
        }
      });
      activeRef.current = closest;
      setActive(closest);
    };
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    };
    scroller.addEventListener("scroll", onScroll, { passive: true });
    update();
    return () => {
      scroller.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
    };
  }, [axis]);

  // Wraps around, so going past the last item loops back to the first.
  const goTo = useCallback(
    (index: number) => {
      const scroller = scrollerRef.current;
      if (!scroller || !count) return;
      const target = ((index % count) + count) % count;
      const el = itemRefs.current[target];
      if (!el) return;
      const size = axis === "y" ? scroller.clientHeight : scroller.clientWidth;
      const position = centerOf(el, axis) - size / 2;
      scroller.scrollTo(
        axis === "y"
          ? { top: position, behavior: "smooth" }
          : { left: position, behavior: "smooth" }
      );
    },
    [axis, count]
  );

  // Scrolling or swiping past either end of the list loops to the other end.
  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    let lockedUntil = 0;
    let touchStart = 0;
    const loop = (direction: 1 | -1) => {
      if (Date.now() < lockedUntil) return;
      const position = axis === "y" ? scroller.scrollTop : scroller.scrollLeft;
      const max =
        axis === "y"
          ? scroller.scrollHeight - scroller.clientHeight
          : scroller.scrollWidth - scroller.clientWidth;
      if (direction === 1 && position >= max - 2 && activeRef.current === count - 1) {
        lockedUntil = Date.now() + 1200;
        goTo(0);
      } else if (direction === -1 && position <= 2 && activeRef.current === 0) {
        lockedUntil = Date.now() + 1200;
        goTo(count - 1);
      }
    };
    const onWheel = (event: WheelEvent) => {
      const delta = axis === "y" ? event.deltaY : event.deltaX;
      if (delta !== 0) loop(delta > 0 ? 1 : -1);
    };
    const onTouchStart = (event: TouchEvent) => {
      const touch = event.touches[0];
      touchStart = axis === "y" ? touch.clientY : touch.clientX;
    };
    const onTouchEnd = (event: TouchEvent) => {
      const touch = event.changedTouches[0];
      const swipe = touchStart - (axis === "y" ? touch.clientY : touch.clientX);
      if (Math.abs(swipe) > 40) loop(swipe > 0 ? 1 : -1);
    };
    scroller.addEventListener("wheel", onWheel, { passive: true });
    scroller.addEventListener("touchstart", onTouchStart, { passive: true });
    scroller.addEventListener("touchend", onTouchEnd, { passive: true });
    return () => {
      scroller.removeEventListener("wheel", onWheel);
      scroller.removeEventListener("touchstart", onTouchStart);
      scroller.removeEventListener("touchend", onTouchEnd);
    };
  }, [axis, count, goTo]);

  return { scrollerRef, itemRefs, active, goTo };
};

const ItemMedia = ({
  item,
  sizes,
  priority,
}: {
  item: ShowcaseItem;
  sizes: string;
  priority?: boolean;
}) => (
  <Image
    src={item.media}
    alt={item.title}
    fill
    sizes={sizes}
    priority={priority}
    className="object-cover object-bottom"
  />
);

const PricePanel = ({ item }: { item: ShowcaseItem }) => {
  const lowest = lowestPrice(item);

  return (
    <div className="border-l border-[#C9844A] pl-5">
      <p className="text-[11px] uppercase tracking-[0.3em] text-[#E2A66B]">
        Fair price
      </p>
      {lowest === undefined ? (
        <p className="mt-2 text-2xl font-light">Ask at our stand</p>
      ) : (
        <p className="mt-2 text-3xl lg:text-4xl font-light tracking-tight">
          {item.fairPrices?.length ? (
            <span className="mr-2 text-sm uppercase tracking-widest text-white/60">
              From
            </span>
          ) : null}
          {formatNaira(lowest)}
        </p>
      )}
      {item.fairPrices?.length ? (
        <ul className="mt-4 space-y-1.5 text-sm">
          {item.fairPrices.map((p) => (
            <li key={p.label} className="flex justify-between gap-4">
              <span className="text-white/70">{p.label}</span>
              <span>{formatNaira(p.price)}</span>
            </li>
          ))}
        </ul>
      ) : null}
      {item.note ? (
        <p className="mt-4 text-sm text-white/70">{item.note}</p>
      ) : null}
      <p className="mt-6 text-[11px] uppercase tracking-[0.2em] text-white/50">
        Available at our stand
      </p>
    </div>
  );
};

const ItemLinks = ({
  item,
  className,
}: {
  item: ShowcaseItem;
  className?: string;
}) => (
  <div
    className={cn(
      "flex items-center gap-6 text-xs md:text-sm uppercase tracking-[0.15em]",
      className
    )}
  >
    <a
      href={whatsappUrl(item)}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-white/15 px-3 py-1.5 hover:bg-white/25"
    >
      Reserve
    </a>
  </div>
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
      <span>@{fairInfo.instagramHandle}</span>
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

// Type part of a name to jump straight to that piece.
const FairSearch = ({
  items,
  onSelect,
  className,
}: {
  items: ShowcaseItem[];
  onSelect: (index: number) => void;
  className?: string;
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [query, setQuery] = useState("");
  const search = query.trim().toLowerCase();
  const matches = search
    ? items
        .map((item, index) => ({ item, index }))
        .filter(({ item }) => item.title.toLowerCase().includes(search))
    : [];

  const select = (index: number) => {
    onSelect(index);
    setQuery("");
    inputRef.current?.blur();
  };

  return (
    <div className={cn("relative", className)}>
      <label className="flex items-center gap-3 border-b border-white/40 pb-2 focus-within:border-white">
        <Search size={18} className="shrink-0 text-white/70" />
        <input
          ref={inputRef}
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === "Enter" && matches[0]) {
              event.preventDefault();
              select(matches[0].index);
            } else if (event.key === "Escape") {
              setQuery("");
            }
          }}
          placeholder="Search pieces"
          aria-label="Search pieces"
          className="w-full bg-transparent text-base text-white placeholder:text-white/50 outline-none [&::-webkit-search-cancel-button]:hidden"
        />
      </label>
      {search ? (
        <ul className="absolute inset-x-0 top-full z-40 mt-2 max-h-72 overflow-y-auto bg-white text-[#3D021E] shadow-xl">
          {matches.length ? (
            matches.map(({ item, index }) => {
              const price = lowestPrice(item);
              return (
                <li key={item.id}>
                  <button
                    type="button"
                    onClick={() => select(index)}
                    className="flex w-full items-center justify-between gap-4 px-4 py-3 text-left text-sm uppercase tracking-wider hover:bg-[#FBEFF2] focus:bg-[#FBEFF2] focus:outline-none"
                  >
                    <span>{item.title}</span>
                    {price !== undefined ? (
                      <span className="shrink-0 text-[#3D021E]/60">
                        {formatNaira(price)}
                      </span>
                    ) : null}
                  </button>
                </li>
              );
            })
          ) : (
            <li className="px-4 py-3 text-sm">
              No pieces match &ldquo;{query.trim()}&rdquo;
            </li>
          )}
        </ul>
      ) : null}
    </div>
  );
};

const background =
  "bg-[radial-gradient(ellipse_at_65%_35%,#7a1446_0%,#3D021E_45%,#12000a_100%)]";

export const FairShowcase = ({ items }: { items: ShowcaseItem[] }) => {
  const desktop = useLoopingScroller(items.length, "y");
  const mobile = useLoopingScroller(items.length, "x");
  const { active, goTo } = desktop;

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (window.innerWidth < 768) return;
      if (event.target instanceof HTMLInputElement) return;
      if (event.key === "ArrowDown") {
        event.preventDefault();
        goTo(active + 1);
      } else if (event.key === "ArrowUp") {
        event.preventDefault();
        goTo(active - 1);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active, goTo]);

  if (!items.length) {
    return (
      <div className={cn("py-32 text-center text-white", background)}>
        <p className="text-2xl">Our {fairInfo.name} pieces are coming soon.</p>
      </div>
    );
  }

  const current = items[active];

  return (
    <>
      {/* ── Desktop / tablet: scrolling name stage ─────────────────────── */}
      <section
        className={cn(
          "relative hidden md:block h-[calc(100svh-67px)] min-h-[560px] overflow-hidden text-white",
          background
        )}
      >
        <div className="pointer-events-none absolute top-6 left-[5vw] right-[5vw] z-30 flex items-start justify-between gap-8">
          <FairSearch
            items={items}
            onSelect={goTo}
            className="pointer-events-auto w-[min(320px,30vw)]"
          />
          <div className="text-right text-[11px] uppercase tracking-[0.3em] text-white/70">
            <p className="text-[#E2A66B]">{fairInfo.name}</p>
            <p className="mt-1">
              {fairInfo.date} · {fairInfo.time}
            </p>
            <p className="mt-3">{counterText(active, items.length)}</p>
          </div>
        </div>

        {/* Photo of the active piece */}
        <div className="absolute left-[5vw] top-1/2 z-0 aspect-[4/5] h-[68%] max-w-[30vw] -translate-y-1/2 overflow-hidden bg-black/20">
          {items.map((item, index) => (
            <div
              key={item.id}
              className={cn(
                "absolute inset-0 transition-opacity duration-700",
                index === active ? "opacity-100" : "opacity-0"
              )}
            >
              <ItemMedia item={item} sizes="30vw" priority={index === 0} />
            </div>
          ))}
        </div>

        {/* Names */}
        <div
          ref={desktop.scrollerRef}
          className="absolute inset-x-0 top-0 bottom-16 z-10 snap-y snap-mandatory overflow-y-scroll pl-[18vw] pr-[26vw] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          <div className="h-[calc(50%-7rem)]" />
          {items.map((item, index) => {
            const isActive = index === active;
            return (
              <div
                key={item.id}
                ref={(el) => {
                  desktop.itemRefs.current[index] = el;
                }}
                className="flex h-56 snap-center flex-col items-center justify-center text-center"
              >
                <button
                  type="button"
                  onClick={() => goTo(index)}
                  aria-current={isActive}
                  className={cn(
                    "origin-center text-[clamp(2.5rem,5.5vw,6rem)] font-medium uppercase leading-[0.95] tracking-tight transition-all duration-500 drop-shadow-[0_2px_12px_rgba(0,0,0,0.35)]",
                    isActive
                      ? "scale-100 opacity-100"
                      : "scale-[0.4] opacity-30 hover:opacity-60"
                  )}
                >
                  {item.title}
                </button>
                <ItemLinks
                  item={item}
                  className={cn(
                    "mt-4 transition-opacity duration-500",
                    isActive ? "opacity-100" : "invisible opacity-0"
                  )}
                />
              </div>
            );
          })}
          <div className="h-[calc(50%-7rem)]" />
        </div>

        {/* Price beside the active piece */}
        <div className="absolute right-[5vw] top-1/2 z-20 w-[19vw] min-w-[210px] max-w-[300px] -translate-y-1/2">
          <div
            key={current.id}
            className="animate-in fade-in slide-in-from-bottom-2 duration-500"
          >
            <PricePanel item={current} />
          </div>
        </div>

        {/* Bottom bar */}
        <div className="absolute inset-x-0 bottom-0 z-20 flex h-16 items-center justify-between gap-6 bg-white px-[5vw] text-[#3D021E]">
          <div className="flex min-w-0 items-center gap-4">
            <button
              type="button"
              onClick={() => goTo(active - 1)}
              aria-label="Previous piece"
            >
              <ChevronUp size={18} />
            </button>
            <button
              type="button"
              onClick={() => goTo(active + 1)}
              aria-label="Next piece"
            >
              <ChevronDown size={18} />
            </button>
            <p className="truncate text-sm uppercase tracking-[0.15em]">
              {current.title} — {fairInfo.venue}, Oniru
            </p>
          </div>
          <SocialLinks className="shrink-0" />
        </div>
      </section>

      {/* ── Mobile: horizontal slider ──────────────────────────────────── */}
      <section className={cn("md:hidden text-white", background)}>
        <div className="px-5 pt-5">
          <h1 className="text-3xl font-medium uppercase leading-none tracking-tight">
            {fairInfo.name}
          </h1>
          <p className="mt-2 text-[11px] uppercase tracking-[0.2em] text-white/70">
            {fairInfo.date} · {fairInfo.time}
          </p>
          <p className="mt-1 text-[11px] uppercase tracking-[0.2em] text-[#E2A66B]">
            {fairInfo.venue}, Oniru
          </p>
          <FairSearch items={items} onSelect={mobile.goTo} className="mt-4" />
          <div className="mt-4 flex items-center justify-between">
            <p className="text-xs uppercase tracking-[0.3em] text-white/70">
              {counterText(mobile.active, items.length)}
            </p>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => mobile.goTo(mobile.active - 1)}
                aria-label="Previous piece"
                className="flex h-10 w-10 items-center justify-center border border-white/30"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                type="button"
                onClick={() => mobile.goTo(mobile.active + 1)}
                aria-label="Next piece"
                className="flex h-10 w-10 items-center justify-center border border-white/30"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>

        <div
          ref={mobile.scrollerRef}
          className="relative mt-4 flex snap-x snap-mandatory gap-4 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          <div aria-hidden className="w-[calc(7.5vw-1rem)] shrink-0" />
          {items.map((item, index) => (
            <article
              key={item.id}
              ref={(el) => {
                mobile.itemRefs.current[index] = el;
              }}
              aria-label={`${item.title}, ${counterText(index, items.length)}`}
              className="w-[85vw] shrink-0 snap-center"
            >
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-black/20">
                <ItemMedia
                  item={item}
                  sizes="85vw"
                  priority={index === 0}
                />
              </div>
              <h2 className="mt-3 text-2xl font-medium uppercase leading-none tracking-tight">
                {item.title}
              </h2>
              {item.fairPrices?.length || item.note ? (
                <>
                  <div className="mt-3">
                    <PricePanel item={item} />
                  </div>
                  <ItemLinks item={item} className="mt-3" />
                </>
              ) : (
                <div className="mt-3 flex items-end justify-between gap-4 border-l border-[#C9844A] pl-4">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.3em] text-[#E2A66B]">
                      Fair price
                    </p>
                    <p className="mt-1 text-2xl font-light tracking-tight">
                      {item.fairPrice !== undefined
                        ? formatNaira(item.fairPrice)
                        : "Ask at our stand"}
                    </p>
                  </div>
                  <ItemLinks item={item} />
                </div>
              )}
            </article>
          ))}
          <div aria-hidden className="w-[calc(7.5vw-1rem)] shrink-0" />
        </div>
        <div className="h-10" />

        <div className="sticky bottom-0 z-20 flex h-14 items-center justify-center bg-white text-[#3D021E]">
          <SocialLinks />
        </div>
      </section>
    </>
  );
};
