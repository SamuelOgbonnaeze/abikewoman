import { ProductCard } from "./product-card";

const CDNUrl = process.env.NEXT_PUBLIC_CDN_URL;

const igbatuntunCollectionData = [
  {
    id: "adire-2in1-set",
    mediaSrc: `/adire-2in1-set-1.jpg`,
    title: "ADIRE 2 IN 1 SET",
    description: <>ADIRE 2 IN 1 SET</>,
    link: "igbatuntun/adire-2in1-set",
  },
  {
    id: "extra-ordinary-set",
    mediaSrc: `/extra-ordinary-set-1.jpg`,
    title: "EXTRA ORDINARY SET",
    description: <>EXTRA ORDINARY SET</>,
    link: "igbatuntun/extra-ordinary-set",
  },
  {
    id: "aduke-set",
    mediaSrc: `/aduke-set-1.jpg`,
    title: "ADUKE SET",
    description: (
      <>
        ADUKE SET
      </>
    ),
    link: "igbatuntun/aduke-set",
  },
  {
    id: "amani-dress",
    mediaSrc: `${CDNUrl}/amani-7.jpg`,
    title: "AMANI DRESS",
    description: (
      <>
        Two prints, one bold statement. <br />
        <br />
        The Amani dress brings Adire crepe to life in a design that&apos;s equal
        parts tradition
      </>
    ),
    link: "igbatuntun/amani-dress",
  },
  {
    id: "ayomide-set",
    mediaSrc: `${CDNUrl}/ayomide-3.jpg`,
    title: "AYOMIDE SET",
    description: (
      <>
        Sophisticated, stylish, and oh-so-classy✨🌿 <br />
        <br />
        The Ayomide Set, crafted from premium adire cotton, redefines elegance
        with its perfectly tailored ball skirt and shirt.
      </>
    ),
    link: "igbatuntun/ayomide-set",
  },
  {
    id: "favor-set",
    mediaSrc: `${CDNUrl}/favor-2.jpg`,
    title: "FAVOR SET",
    description: (
      <>
        &quot;Grace meets style in the Favour Set&quot; <br />
        <br />A stunning blend of a damask top and flowing accordion trousers,
        perfect for the woman who loves sophistication
      </>
    ),
    link: "igbatuntun/favor-set",
  },
  {
    id: "ibukun-set",
    mediaSrc: `${CDNUrl}/ibukun-2.jpeg`,
    title: "IBUKUN SET",
    description: (
      <>
        Meet the Ibukun Set: <br />a perfect blend of tradition and versatility.{" "}
        <br />
        This two-piece set features a stunning Adire kimono with
      </>
    ),
    link: "igbatuntun/ibukun-set",
  },
  {
    id: "ife-set",
    mediaSrc: `${CDNUrl}/ife-10.jpg`,
    title: "IFE SET",
    description: (
      <>
        THE IFE SET 💕👑 <br />
        <br />
        With two stunning variations—choose between the luxurious Mikado silk
        top with velvet embellishments or the timeless lace
      </>
    ),
    link: "igbatuntun/ife-set",
  },
  {
    id: "irawo-dress",
    mediaSrc: `${CDNUrl}/irawo-dress-2.jpg`,
    title: "IRAWO DRESS",
    description: (
      <>
        Shine like the star that you are <br />
        <br />
        The IRAWO set features 4 stunning variations to suit your style:
      </>
    ),
    link: "igbatuntun/irawo-dress",
  },
  {
    id: "irawo-set",
    mediaSrc: `${CDNUrl}/irawo-set-1.jpg`,
    title: "IRAWO SET",
    description:
      "Ire Collection Description goes here. This is some sample text to test layout.",
    link: "igbatuntun/irawo-set",
  },
  {
    id: "ire-set",
    mediaSrc: `${CDNUrl}/ire-set-1.jpg`,
    title: "IRE SET",
    description: (
      <>
        You deserve the IRE Set. <br />
        You deserve good things <br />
        <br />
        This elegant duo, crafted from adire silk and chiffon,
      </>
    ),
    link: "igbatuntun/ire-set",
  },
  {
    id: "isinmi-1-dress",
    mediaSrc: `${CDNUrl}/isinmi-dress-1.jpg`,
    title: "ISINMI 1 DRESS",
    description: (
      <>
        Elegance in every detail. <br />
        <br />
        The Isinmi 1 Dress blends the richness of Mikado silk with the heritage
        of Aso Oke fabric, creating a bou bou style that&apos;s the epitome of
        affluence
      </>
    ),
    link: "igbatuntun/isinmi-1-dress",
  },
  {
    id: "isinmi-2-dress",
    mediaSrc: `${CDNUrl}/isinmi-dress-2.jpg`,
    title: "ISINMI 2 DRESS",
    description: (
      <>
        Where opulence meets ease. <br />
        <br />
        The Isinmi dress 2, a regal bou bou style made with mikado silk enriched
        with luxurious crepe embellishments
      </>
    ),
    link: "igbatuntun/isinmi-2-dress",
  },
  {
    id: "iyanu-dress",
    mediaSrc: `${CDNUrl}/iyanu-dress-7.jpg`,
    title: "IYANU DRESS",
    description: (
      <>
        IYANU DRESS <br />
        <br />
        Crafted from exquisite guipure lace, this timeless piece is all about
        making a statement.
      </>
    ),
    link: "igbatuntun/iyanu-dress",
  },
  {
    id: "kuku-set",
    mediaSrc: `${CDNUrl}/kuku-set-1.jpg`,
    title: "KUKU SET",
    description: (
      <>
        Your new favorite outfit has entered the chat <br />
        <br />
        Our Kuku Set, crafted from luxurious adire silk and adorned with
        tassels, is the perfect blend of culture and contemporary chic.
      </>
    ),
    link: "igbatuntun/kuku-set",
  },
  {
    id: "one-thing",
    mediaSrc: `${CDNUrl}/one-thing-dress-1.jpg`,
    title: "ONE THING DRESS",
    description: (
      <>
        All it takes is &apos;One Thing&apos; to turn heads! 🙌🏾 <br />
        <br />
        Crafted from Duchess/crepe and finished with bold feathered sleeve hems
        and sparkling droplets,
      </>
    ),
    link: "igbatuntun/one-thing",
  },
  {
    id: "oreoluwa-dress",
    mediaSrc: `${CDNUrl}/oreoluwa-dress-1.jpg`,
    title: "OREOLUWA DRESS",
    description: (
      <>
        Where heritage and style collide - the Oreoluwa dress. <br />
        <br />
        Made from vibrant Adire fabric and enhanced with Aso Oke at the sleeves,
        hem
      </>
    ),
    link: "igbatuntun/oreoluwa-dress",
  },
  {
    id: "ayo-set",
    mediaSrc: `/ayo-set-1.jpg`,
    title: "AYO SET",
    description: (
      <>
        {/* Description to be provided later */}
      </>
    ),
    link: "igbatuntun/ayo-set",
  },
];

export const IgbatuntunCollection = () => {
  return (
    <div id="igbatuntun" className="mt-4 max-w-[1440px] mx-auto w-full">
      <p className=" text-lg lg:text-[36px] font-normal leading-[14px]">
        Igbatuntun Collection
      </p>
      <div className="mt-[38px] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-3 gap-y-4 justify-items-center">
        {igbatuntunCollectionData.map((item) => (
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
