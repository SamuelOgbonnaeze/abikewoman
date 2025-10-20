import { ProductCard } from "./product-card";

const ireCollectionData = [
  {
    id: "ire-1",
    imageSrc: "hero_4.jpg",
    title: "Ire Collection Title",
    description:
      "Ire Collection Description goes here. This is some sample text to test layout.",
    link: "ire-collection/ire-1",
  },
  {
    id: "ire-2",
    imageSrc: "hero_4.jpg",
    title: "Ire Collection Title",
    description:
      "Ire Collection Description goes here. This is some sample text to test layout.",
    link: "ire-collection/ire-2",
  },
  {
    id: "ire-3",
    imageSrc: "hero_4.jpg",
    title: "Ire Collection Title",
    description:
      "Ire Collection Description goes here. This is some sample text to test layout.",
    link: "ire-collection/ire-3",
  },
  {
    id: "ire-4",
    imageSrc: "hero_4.jpg",
    title: "Ire Collection Title",
    description:
      "Ire Collection Description goes here. This is some sample text to test layout.",
    link: "ire-collection/ire-4",
  },
  {
    id: "ire-5",
    imageSrc: "hero_4.jpg",
    title: "Ire Collection Title",
    description:
      "Ire Collection Description goes here. This is some sample text to test layout.",
    link: "ire-collection/ire-5",
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

export const IreCollection = () => {
  return (
    <div id="ire" className=" mt-4">
      <p className=" text-lg lg:text-[36px] font-normal leading-[14px]">
        Ire Collection
      </p>
      <div className="mt-[38px] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-3 gap-y-4">
        {ireCollectionData.map((item) => (
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
