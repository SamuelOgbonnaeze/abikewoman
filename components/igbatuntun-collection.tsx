import { ProductCard } from "./product-card";

const igbatuntunCollectionData = [
  {
    id: "ire-set",
    imageSrc: "ire-set-1.jpg",
    title: "Ire Set",
    description:
      "Ire Collection Description goes here. This is some sample text to test layout.",
    link: "igbatuntun/ire-set",
  },
  {
    id: "amani-dress",
    imageSrc: "amani-7.jpg",
    title: "Amani Dress",
    description:
      "Ire Collection Description goes here. This is some sample text to test layout.",
    link: "igbatuntun/amani-dress",
  },
  {
    id: "ayomide-set",
    imageSrc: "ayomide-3.jpg",
    title: "Ayomide Set",
    description:
      "Ire Collection Description goes here. This is some sample text to test layout.",
    link: "igbatuntun/ayomide-set",
  },
  {
    id: "favor-set",
    imageSrc: "favor-2.jpg",
    title: "Favor Set",
    description:
      "Ire Collection Description goes here. This is some sample text to test layout.",
     link: "igbatuntun/favor-set",
  },
  {
    id: "ibukun-set",
    imageSrc: "ibukun-2.jpeg",
    title: "Ibukun Set",
    description:
      "Ire Collection Description goes here. This is some sample text to test layout.",
    link: "igbatuntun/ibukun-set",
  },
  {
    id: "ire-6",
    imageSrc: "hero_4.jpg",
    title: "Ire Collection Title",
    description:
      "Ire Collection Description goes here. This is some sample text to test layout.",
    link: "ire-collection/ire-6",
  },
  {
    id: "ire-7",
    imageSrc: "hero_4.jpg",
    title: "Ire Collection Title",
    description:
      "Ire Collection Description goes here. This is some sample text to test layout.",
    link: "ire-collection/ire-7",
  },
  {
    id: "ire-8",
    imageSrc: "hero_4.jpg",
    title: "Ire Collection Title",
    description:
      "Ire Collection Description goes here. This is some sample text to test layout.",
    link: "ire-collection/ire-8",
  },
];

export const IgbatuntunCollection = () => {
  return (
    <div id="ire" className=" mt-4">
      <p className=" text-lg lg:text-[36px] font-normal leading-[14px]">
        Igbatuntun Collection
      </p>
      <div className="mt-[38px] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-3 gap-y-4">
        {igbatuntunCollectionData.map((item) => (
          <ProductCard
            key={item.id}
            imageSrc={item.imageSrc}
            title={item.title}
            description={item.description}
            link={item.link}
          />
        ))}
      </div>
    </div>
  );
};
