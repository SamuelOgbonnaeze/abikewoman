"use client";

import { ProductCard } from "./product-card";

const CDNUrl = process.env.NEXT_PUBLIC_CDN_URL;

const adelaideCollectionData = [
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
        A bubu-like top with an inner belt to cinch waist, paired with an A-line
        skirt with a middle slit. <br />
        <br />
        Made in 2 variations. Available in different prints and colors.
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
        An asymmetric bubu made from raw silk with a solid embroidery on the
        neckline and tassels at the hem. <br />
        <br />
        She&apos;s freedom and exquisite. She&apos;s Beryl.
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
        Made from raw silk and organdy with an inner belt to cinch the waist. Peep the beading detail on the right side of the chest✨✨ <br />
        <br />
        Available in different colors.
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
        A crop shirt made from stripes cotton, soft lace trimming at the hem and
        a belt to cinch the waist, paired with Asooke skirt with exaggerated
        hip. <br />
        <br />
        For the woman who owns her softness and her power.
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
        A crop shirt paired with a cowl pant made from 2 prints of adire crepe.
      </>
    ),
    link: "adelaide/lerin-set",
  },
  {
    id: "opal-dress",
    mediaSrc: `${CDNUrl}/opal_dress.mp4`,
    title: "OPAL DRESS",
    description: (
      <>
        Made from taffeta (2 colors combined) with sprinkles of gold trimmings
        ✨ <br />
        <br />
        Opal was made for you. Yes you 🥰
      </>
    ),
    link: "adelaide/opal-dress",
  },
  {
    id: "the-bloom-set",
    mediaSrc: `${CDNUrl}/the_bloom_set.mp4`,
    title: "THE BLOOM SET ✨",
    description: (
      <>
        Features a peplum bubble top made from raw silk paired with brocade palazzo pants. <br />
        <br />
        Get your BLOOM set ✨✨✨
      </>
    ),
    link: "adelaide/the-bloom-set",
  },
  {
    id: "the-jean-dress",
    mediaSrc: `${CDNUrl}/the_jean_dress.mp4`,
    title: "THE JEAN DRESS ✨",
    description: (
      <>
        A kimono shirt dress made from a unique Jean with guipure lace edges at the hem. <br />
        <br />
        Every girl deserves “THE JEAN DRESS” 💙
      </>
    ),
    link: "adelaide/the-jean-dress",
  },
  {
    id: "urban-wrap-dress",
    mediaSrc: `${CDNUrl}/urban_wrap_dress.mp4`,
    title: "URBAN WRAP DRESS ✨",
    description: (
      <>
        Made from one of the finest ankaras and high grade tafetta. <br />
        <br />
        Asymmetric from the sides with tassels on the hem with a touch another print of stoned Ankara forming a lapel on the chest.
      </>
    ),
    link: "adelaide/urban-wrap-dress",
  },
];

export const AdelaideCollection = () => {
  return (
    <div id="adelaide" className="mt-4 max-w-[1440px] mx-auto w-full">
      {/* Collection Header with Trailer */}
      <div className="mb-8">
        <p className="text-lg lg:text-[36px] font-normal leading-[14px] mb-6">
          Adelaide Collection
        </p>

        {/* Trailer Video Banner — preload="none" so browser reuses the Hero's cached copy */}
        <div className="relative w-full rounded-xl overflow-hidden mb-6 max-h-[500px] bg-black">
          <video
            src={`${CDNUrl}/adelaide_trailer.mp4`}
            className="w-full max-h-[500px] object-cover"
            autoPlay
            loop
            muted
            playsInline
            preload="none"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent flex flex-col justify-end p-6 md:p-10">
            <h2 className="text-white text-2xl md:text-4xl font-bold mb-2 tracking-wide">
              THE ADELAIDE COLLECTION ✨
            </h2>
            <p className="text-white/90 text-sm md:text-base max-w-xl leading-relaxed">
              A beautiful mixture of English elegance and African culture —
              meticulously crafted bubus and free 2-pieces from raw silk,
              brocade, cotton, Asooke, adire silk, Ankara, sequin and more.{" "}
              <span className="italic">
                For the woman who owns her softness and her power.
              </span>{" "}
              💖
            </p>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="mt-[38px] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-3 gap-y-4 justify-items-center">
        {adelaideCollectionData.map((item) => (
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
