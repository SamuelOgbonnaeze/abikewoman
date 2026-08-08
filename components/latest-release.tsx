"use client";

import { useState, useEffect } from "react";
import { ProductCard } from "./product-card";

const CDNUrl = process.env.NEXT_PUBLIC_CDN_URL;

const latestCollectionData = [
  {
    id: "mirabel-dress",
    mediaSrc: `${CDNUrl}/mirabel-dress-1.mp4`,
    title: "MIRABEL DRESS",
    description: (
      <>
        Introducing the MIRABEL Dress; our latest addition to the RTW lineup.🥳🥳 <br />
        <br />
        Designed in a floral mesh fabric with a Lycra inner dress, <br />
        <br />
        • Lightweight,<br />
        • Comfortable,<br />
        • Quietly elegant.<br />
        <br />
        You can start planning your next Sunday fit with us,🤭😍<br />
        We're just a DM away.🤗
      </>
    ),
    link: "ready-to-wear/mirabel-dress",
  },
  {
    id: "sharon-dress",
    mediaSrc: `${CDNUrl}/sharon-dress-8.png`,
    title: "SHARON DRESS",
    description: (
      <>
        SHARON DRESS🤍 <br />
        <br />
        Sharon is not just a dress, she is a statement. <br />
        A dress that was made for the woman who knows exactly the energy she is walking into the room with.✨ <br />
        <br />
        A high neck, fitted dress that holds every curve beautifully, paired with a detachable layered tulle train that brings the full bridal moment. The structured sleeves give it that bold look that leaves an unforgettable statement.
      </>
    ),
    link: "bridals/sharon-dress",
  },
  // ===== Adelaide Collection (Alphabetical) =====
  {
    id: "ankara-panel-dress",
    mediaSrc: `${CDNUrl}/ankara_panel_dress.mp4`,
    title: "THE ANKARA PANEL DRESS ✨",
    description: (
      <>
        THE ANKARA PANEL DRESS✨✨ <br />
        <br />
        Three different Ankara prints perfectly blended into one stunning gown.
      </>
    ),
    link: "adelaide/ankara-panel-dress",
  },
  {
    id: "arewa-set",
    mediaSrc: `${CDNUrl}/arewa_set.mp4`,
    title: "AREWA SET ✨",
    description: (
      <>
        AREWA SET ✨ <br />
        <br />
        A bubu-like top paired with A-line skirt with a middle slit. Available
        in different prints and colors.
      </>
    ),
    link: "adelaide/arewa-set",
  },
  {
    id: "beryl-dress",
    mediaSrc: `${CDNUrl}/beryl_dress.mp4`,
    title: "BERYL DRESS 💎",
    description: (
      <>
        BERYL DRESS 💎 <br />
        <br />
        An asymmetric bubu made from raw silk. She&apos;s freedom and exquisite.
        She&apos;s Beryl.
      </>
    ),
    link: "adelaide/beryl-dress",
  },
  {
    id: "color-bloom-dress",
    mediaSrc: `${CDNUrl}/color_bloom_dress.mp4`,
    title: "COLOR BLOOM DRESS 🌺",
    description: (
      <>
        THE COLOR BLOOM DRESS 🌺 <br />
        <br />
        Made from raw silk and organdy with an inner belt to cinch the waist and beading details on chest.
      </>
    ),
    link: "adelaide/color-bloom-dress",
  },
  {
    id: "hadiza-set",
    mediaSrc: `${CDNUrl}/hadiza_set.mp4`,
    title: "HADIZA SET 💕",
    description: (
      <>
        HADIZA SET 💕 <br />
        <br />
        A crop shirt made from stripes cotton paired with Asooke skirt with
        exaggerated hip. For the woman who owns her softness and her power.
      </>
    ),
    link: "adelaide/hadiza-set",
  },
  {
    id: "lerin-set",
    mediaSrc: `${CDNUrl}/lerin_set.mp4`,
    title: "LERIN SET ✨",
    description: (
      <>
        LERIN SET ✨ <br />
        <br />
        A crop shirt paired with a cowl pant made from 2 prints of adire crepe.
      </>
    ),
    link: "adelaide/lerin-set",
  },
  {
    id: "the-jean-dress",
    mediaSrc: `${CDNUrl}/the_jean_dress.mp4`,
    title: "THE JEAN DRESS ✨",
    description: (
      <>
        THE JEAN DRESS ✨ <br />
        <br />
        A kimono shirt dress made from a unique Jean with guipure lace edges at the hem. Every girl deserves “THE JEAN DRESS”.
      </>
    ),
    link: "adelaide/the-jean-dress",
  },
  {
    id: "opal-dress",
    mediaSrc: `${CDNUrl}/opal_dress.mp4`,
    title: "OPAL DRESS",
    description: (
      <>
        OPAL DRESS ✨ <br />
        <br />
        Made from taffeta (2 colors combined) with sprinkles of gold trimmings.
        Opal was made for you. Yes you 🥰
      </>
    ),
    link: "adelaide/opal-dress",
  },
  {
    id: "urban-wrap-dress",
    mediaSrc: `${CDNUrl}/urban_wrap_dress.mp4`,
    title: "URBAN WRAP DRESS ✨",
    description: (
      <>
        URBAN WRAP DRESS ✨ <br />
        <br />
        Made from finest Ankara and high grade taffeta with asymmetric sides and tassels on the hem.
      </>
    ),
    link: "adelaide/urban-wrap-dress",
  },
];

export const LatestReleases = () => {
  // Deterministic default during SSR to prevent hydration mismatch
  const [items, setItems] = useState(() => latestCollectionData.slice(0, 4));

  useEffect(() => {
    // Shuffle array and get 4 random items after client mount
    const randomFour = [...latestCollectionData]
      .sort(() => Math.random() - 0.5)
      .slice(0, 4);
    setItems(randomFour);
  }, []);

  return (
    <div id="latest" className="mt-4 max-w-[1440px] mx-auto w-full">
      <p className="text-lg lg:text-[36px] font-normal leading-[14px]">
        Latest Releases
      </p>

      <div className="mt-[38px] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-3 gap-y-4 justify-items-center">
        {items.map((item) => (
          <ProductCard
            key={item.id}
            mediaSrc={item.mediaSrc}
            title={item.title}
            description={item.description}
            link={item.link}
          />
        ))}
      </div>
    </div>
  );
};
