"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
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
  const lowest = item.fairPrices?.length
    ? Math.min(...item.fairPrices.map((p) => p.price))
    : item.fairPrice;

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

const background =
  "bg-[radial-gradient(ellipse_at_65%_35%,#7a1446_0%,#3D021E_45%,#12000a_100%)]";

export const FairShowcase = ({ items }: { items: ShowcaseItem[] }) => {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const rowRefs = useRef<(HTMLDivElement | null)[]>([]);
  const firstMobileItemRef = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);

  // The name closest to the middle of the scroller is the active one.
  const updateActive = useCallback(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    const middle = scroller.scrollTop + scroller.clientHeight / 2;
    let closest = 0;
    let closestDistance = Infinity;
    rowRefs.current.forEach((row, index) => {
      if (!row) return;
      const distance = Math.abs(
        row.offsetTop + row.offsetHeight / 2 - middle
      );
      if (distance < closestDistance) {
        closest = index;
        closestDistance = distance;
      }
    });
    setActive(closest);
  }, []);

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(updateActive);
    };
    scroller.addEventListener("scroll", onScroll, { passive: true });
    updateActive();
    return () => {
      scroller.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
    };
  }, [updateActive]);

  // Wraps around, so going past the last piece loops back to the first.
  const goTo = useCallback(
    (index: number) => {
      const count = items.length;
      const target = ((index % count) + count) % count;
      rowRefs.current[target]?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    },
    [items.length]
  );

  // Scrolling or swiping past either end of the list loops to the other end.
  const activeRef = useRef(active);
  useEffect(() => {
    activeRef.current = active;
  }, [active]);
  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    let lockedUntil = 0;
    let touchStartY = 0;
    const loop = (direction: 1 | -1) => {
      const last = items.length - 1;
      const atEnd =
        scroller.scrollTop + scroller.clientHeight >= scroller.scrollHeight - 2;
      const atStart = scroller.scrollTop <= 2;
      if (Date.now() < lockedUntil) return;
      if (direction === 1 && atEnd && activeRef.current === last) {
        lockedUntil = Date.now() + 1200;
        goTo(0);
      } else if (direction === -1 && atStart && activeRef.current === 0) {
        lockedUntil = Date.now() + 1200;
        goTo(last);
      }
    };
    const onWheel = (event: WheelEvent) => {
      if (event.deltaY !== 0) loop(event.deltaY > 0 ? 1 : -1);
    };
    const onTouchStart = (event: TouchEvent) => {
      touchStartY = event.touches[0].clientY;
    };
    const onTouchEnd = (event: TouchEvent) => {
      const swipe = touchStartY - event.changedTouches[0].clientY;
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
  }, [goTo, items.length]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (window.innerWidth < 768) return;
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
        <div className="pointer-events-none absolute top-6 left-[5vw] right-[5vw] z-20 flex justify-between text-[11px] uppercase tracking-[0.3em] text-white/70">
          <div>
            <p className="text-[#E2A66B]">{fairInfo.name}</p>
            <p className="mt-1">
              {fairInfo.date} · {fairInfo.time}
            </p>
          </div>
          <p>
            {String(active + 1).padStart(2, "0")} /{" "}
            {String(items.length).padStart(2, "0")}
          </p>
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
          ref={scrollerRef}
          className="absolute inset-x-0 top-0 bottom-16 z-10 snap-y snap-mandatory overflow-y-scroll pl-[18vw] pr-[26vw] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          <div className="h-[calc(50%-7rem)]" />
          {items.map((item, index) => {
            const isActive = index === active;
            return (
              <div
                key={item.id}
                ref={(el) => {
                  rowRefs.current[index] = el;
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

      {/* ── Mobile: stacked pieces ─────────────────────────────────────── */}
      <section className={cn("md:hidden text-white", background)}>
        <div className="px-5 pt-8 pb-6">
          <p className="text-[11px] uppercase tracking-[0.3em] text-[#E2A66B]">
            The Abike Woman at
          </p>
          <h1 className="mt-2 text-4xl font-medium uppercase leading-none tracking-tight">
            {fairInfo.name}
          </h1>
          <p className="mt-3 text-xs uppercase tracking-[0.2em] text-white/70">
            {fairInfo.date} · {fairInfo.time}
          </p>
          <p className="mt-1 text-xs text-white/60">
            {fairInfo.venue}, {fairInfo.address}
          </p>
        </div>

        <div className="space-y-12 px-5 pb-12">
          {items.map((item, index) => (
            <article
              key={item.id}
              ref={index === 0 ? firstMobileItemRef : undefined}
              className="scroll-mt-16"
            >
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-black/20">
                <ItemMedia item={item} sizes="100vw" priority={index === 0} />
              </div>
              <h2 className="mt-5 text-3xl font-medium uppercase leading-none tracking-tight">
                {item.title}
              </h2>
              <div className="mt-5">
                <PricePanel item={item} />
              </div>
              <ItemLinks item={item} className="mt-5" />
            </article>
          ))}
          <button
            type="button"
            onClick={() =>
              firstMobileItemRef.current?.scrollIntoView({ behavior: "smooth" })
            }
            className="flex w-full items-center justify-center gap-2 border border-white/30 py-4 text-xs uppercase tracking-[0.2em] hover:bg-white/10"
          >
            <ChevronUp size={16} />
            Back to the first piece
          </button>
        </div>

        <div className="sticky bottom-0 z-20 flex h-14 items-center justify-center bg-white text-[#3D021E]">
          <SocialLinks />
        </div>
      </section>
    </>
  );
};
