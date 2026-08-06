"use client";

import { useState, useEffect } from "react";
import { ProductCard } from "./product-card";

const CDNUrl = process.env.NEXT_PUBLIC_CDN_URL;

const latestCollectionData = [
  {
    id: "ankara-panel-dress",
    mediaSrc: `${CDNUrl}/ankara_panel_dress.mp4`,
    title: "THE ANKARA PANEL DRESS",
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
  {
    id: "eden-dress",
    mediaSrc: `${CDNUrl}/eden.mp4`,
    title: "EDEN DRESS",
    description: "Eden is where beauty began. A gown made for the woman stepping into love, rest, and forever.",
    link: "bridals/eden-dress",
  },
  {
    id: "beulah-dress",
    mediaSrc: `${CDNUrl}/beulah.mp4`,
    title: "BEULAH DRESS",
    description: "Beulah is beloved, she is cherished, and it shows. A gown made for the woman stepping into love, commitment, and a lifetime of grace.",
    link: "bridals/beulah-dress",
  },
  {
    id: "zahara-dress",
    mediaSrc: `${CDNUrl}/zahara.mp4`,
    title: "ZAHARA DRESS",
    description: "Zahara means \"flowering, radiant bloom.\" A gown made for the bride who steps into her moment fully — seen, celebrated, and unforgettable.",
    link: "bridals/zahara-dress",
  },
  {
    id: "iye-dress",
    mediaSrc: `${CDNUrl}/iye-dress-1.mp4`,
    title: "IYE DRESS",
    description: (
      <>
        ÌYÈ means life - To every abikewoman , May God&apos;s breath of life be
        upon all that you do. <br />
        <br />
        ÌYÈ has 3 variations;
      </>
    ),
    link: "nuach/iye-dress",
  },
  {
    id: "shalom-set",
    mediaSrc: `${CDNUrl}/shalom-set-1.mp4`,
    title: "SHALOM SET",
    description: (
      <>
        The Peace that surpasses understanding will rule your days <br />
        <br />
        Shalom set is a A fitted blouse with a drape from the left shoulder
        paired with pants.
      </>
    ),
    link: "nuach/shalom-set",
  },
  // ===== Adelaide Collection =====
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
