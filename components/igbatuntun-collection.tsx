import { ProductCard } from "./product-card";

const igbatuntunCollectionData = [
  {
    id: "ire-set",
    mediaSrc: "ire-set-1.jpg",
    title: "IRE SET",
    description:
      "Ire Collection Description goes here. This is some sample text to test layout.",
    link: "igbatuntun/ire-set",
  },
  {
    id: "amani-dress",
    mediaSrc: "amani-7.jpg",
    title: "AMANI DRESS",
    description:
      "Ire Collection Description goes here. This is some sample text to test layout.",
    link: "igbatuntun/amani-dress",
  },
  {
    id: "ayomide-set",
    mediaSrc: "ayomide-3.jpg",
    title: "AYOMIDE SET",
    description:
      "Ire Collection Description goes here. This is some sample text to test layout.",
    link: "igbatuntun/ayomide-set",
  },
  {
    id: "ibukun-set",
    mediaSrc: "ibukun-2.jpeg",
    title: "IBUKUN SET",
    description:
      "Ire Collection Description goes here. This is some sample text to test layout.",
    link: "igbatuntun/ibukun-set",
  },
  {
    id: "isinmi-dress",
    mediaSrc: "isinmi-dress-1.jpg",
    title: "ISINMI DRESS",
    description:
      "Ire Collection Description goes here. This is some sample text to test layout.",
    link: "igbatuntun/isinmi-dress",
  },

  {
    id: "ife-set",
    mediaSrc: "ife-11.jpg",
    title: "IFE SET",
    description:
      "Ire Collection Description goes here. This is some sample text to test layout.",
    link: "igbatuntun/ife-set",
  },
  {
    id: "irawo-dress",
    mediaSrc: "irawo-dress-2.jpg",
    title: "IRAWO DRESS",
    description:
      "Ire Collection Description goes here. This is some sample text to test layout.",
    link: "igbatuntun/irawo-dress",
  },
  {
    id: "irawo-set",
    mediaSrc: "irawo-set-1.jpg",
    title: "IRAWO SET",
    description:
      "Ire Collection Description goes here. This is some sample text to test layout.",
    link: "igbatuntun/irawo-set",
  },
  {
    id: "iyanu-dress",
    mediaSrc: "iyanu-dress-7.jpg",
    title: "IYANU DRESS",
    description:
      "Ire Collection Description goes here. This is some sample text to test layout.",
    link: "igbatuntun/iyanu-dress",
  },
  {
    id: "kuku-set",
    mediaSrc: "kuku-set-1.jpg",
    title: "KUKU SET",
    description:
      "Ire Collection Description goes here. This is some sample text to test layout.",
    link: "igbatuntun/kuku-set",
  },
  {
    id: "oreoluwa-dress",
    mediaSrc: "oreoluwa-dress-1.jpg",
    title: "OREOLUWA DRESS",
    description:
      "Ire Collection Description goes here. This is some sample text to test layout.",
    link: "igbatuntun/oreoluwa-dress",
  },
  {
    id: "one-thing",
    mediaSrc: "one-thing-dress-1.jpg",
    title: "ONE THING DRESS",
    description:
      "Ire Collection Description goes here. This is some sample text to test layout.",
    link: "igbatuntun/one-thing",
  },
  {
    id: "favor-set",
    mediaSrc: "favor-2.jpg",
    title: "FAVOR SET",
    description:
      "Ire Collection Description goes here. This is some sample text to test layout.",
    link: "igbatuntun/favor-set",
  },
];

export const IgbatuntunCollection = () => {
  return (
    <div id="igbatuntun" className=" mt-4">
      <p className=" text-lg lg:text-[36px] font-normal leading-[14px]">
        Igbatuntun Collection
      </p>
      <div className="mt-[38px] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-3 gap-y-4">
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
