import { ProductCard } from "./product-card";

const latestCollectionData = [
  {
    id: "anu-1",
    imageSrc: "image 114.png",
    title: "Anu Collection Title1",
    description:
      "Anu Collection Description goes here. It can be a bit longer to test the line clamping.",
    link: "anu-collection/anu-1",
  },
  {
    id: "anu-2",
    imageSrc: "image 114.png",
    title: "Anu Collection Title2",
    description:
      "Anu Collection Description goes here. It can be a bit longer to test the line clamping.",
    link: "anu-collection/anu-2",
  },
  {
    id: "anu-3",
    imageSrc: "image 114.png",
    title: "Anu Collection Title3",
    description:
      "Anu Collection Description goes here. It can be a bit longer to test the line clamping.",
    link: "anu-collection/anu-3",
  },
  {
    id: "anu-4",
    imageSrc: "image 114.png",
    title: "Anu Collection Title4",
    description:
      "Anu Collection Description goes here. It can be a bit longer to test the line clamping.",
    link: "anu-collection/anu-4",
  },
  {
    id: "anu-5",
    imageSrc: "image 114.png",
    title: "Anu Collection Title5",
    description:
      "Anu Collection Description goes here. It can be a bit longer to test the line clamping.",
    link: "anu-collection/anu-5",
  },
  {
    id: "anu-6",
    imageSrc: "image 114.png",
    title: "Anu Collection Title6",
    description:
      "Anu Collection Description goes here. It can be a bit longer to test the line clamping.",
    link: "anu-collection/anu-6",
  },
  {
    id: "anu-7",
    imageSrc: "image 114.png",
    title: "Anu Collection Title7",
    description:
      "Anu Collection Description goes here. It can be a bit longer to test the line clamping.",
    link: "anu-collection/anu-7",
  },
  {
    id: "anu-8",
    imageSrc: "image 114.png",
    title: "Anu Collection Title8",
    description:
      "Anu Collection Description goes here. It can be a bit longer to test the line clamping.",
    link: "anu-collection/anu-8",
  },
];

export const LatestReleases = () => {
  // Shuffle array and get 4 random items
  const randomFour = [...latestCollectionData]
    .sort(() => Math.random() - 0.5)
    .slice(0, 4);

  return (
    <div className="mt-4">
      <p className="text-lg lg:text-[36px] font-normal leading-[14px]">
        Latest Releases
      </p>

      <div className="mt-[38px] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-3 gap-y-4">
        {randomFour.map((item) => (
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
