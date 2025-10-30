import { ProductCard } from "./product-card";

const bridalsCollectionData = [
  {
    id: "bridal-1",
    mediaSrc: "bridals-12.JPG",
    title: "BRIDALS BY THEABIKEWOMAN",
    description: "BRIDALS BY THEABIKEWOMAN",
    link: "bridals/bridal-1",
  },
  {
    id: "bridal-2",
    mediaSrc: "bridals-33.JPG",
    title: "BRIDALS BY THEABIKEWOMAN",
    description: "BRIDALS BY THEABIKEWOMAN",
    link: "bridals/bridal-2",
  },
  {
    id: "bridal-3",
    mediaSrc: "bridals-26.JPG",
    title: "BRIDALS BY THEABIKEWOMAN",
    description: "BRIDALS BY THEABIKEWOMAN",
    link: "bridals/bridal-3",
  },
  {
    id: "bridal-4",
    mediaSrc: "bridals-42.JPG",
    title: "BRIDALS BY THEABIKEWOMAN",
    description: "BRIDALS BY THEABIKEWOMAN",
    link: "bridals/bridal-4",
  },
  {
    id: "bridal-5",
    mediaSrc: "bridals-23.JPG",
    title: "BRIDALS BY THEABIKEWOMAN",
    description: "BRIDALS BY THEABIKEWOMAN",
    link: "bridals/bridal-5",
  },
  {
    id: "bridal-6",
    mediaSrc: "bridals-2.JPG",
    title: "BRIDALS BY THEABIKEWOMAN",
    description: "BRIDALS BY THEABIKEWOMAN",
    link: "bridals/bridal-6",
  },
];

export const BridalsCollection = () => {
  return (
    <div id="bridals" className="mt-4">
      <p className="text-lg lg:text-[36px] font-normal leading-[14px]">
        Bridals
      </p>
      <div className="mt-[38px] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-3 gap-y-4">
        {bridalsCollectionData.map((item) => (
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
