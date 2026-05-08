import { ProductCard } from "./product-card";

const CDNUrl = process.env.NEXT_PUBLIC_CDN_URL;

const bridalsCollectionData = [
  {
    id: "eden-dress",
    mediaSrc: `${process.env.NEXT_PUBLIC_CDN_URL}/eden.mp4`,
    title: "EDEN DRESS",
    description: "Eden is where beauty began. A gown made for the woman stepping into love, rest, and forever.",
    link: "bridals/eden-dress",
  },
  {
    id: "beulah-dress",
    mediaSrc: `${process.env.NEXT_PUBLIC_CDN_URL}/beulah.mp4`,
    title: "BEULAH DRESS",
    description: "Beulah is beloved, she is cherished, and it shows. A gown made for the woman stepping into love, commitment, and a lifetime of grace.",
    link: "bridals/beulah-dress",
  },
  {
    id: "zahara-dress",
    mediaSrc: `${process.env.NEXT_PUBLIC_CDN_URL}/zahara.mp4`,
    title: "ZAHARA DRESS",
    description: "Zahara means \"flowering, radiant bloom.\" A gown made for the bride who steps into her moment fully — seen, celebrated, and unforgettable.",
    link: "bridals/zahara-dress",
  },
  {
    id: "sharon-dress",
    mediaSrc: `/sharon-dress-1.png`,
    title: "SHARON DRESS",
    description: "Sharon is not just a dress, she is a statement. A dress that was made for the woman who knows exactly the energy she is walking into the room with.✨",
    link: "bridals/sharon-dress",
  },
  {
    id: "bridal-1",
    mediaSrc: `${CDNUrl}/bridals-12.JPG`,
    title: "BRIDALS BY THEABIKEWOMAN",
    description: "BRIDALS BY THEABIKEWOMAN",
    link: "bridals/bridal-1",
  },
  {
    id: "bridal-2",
    mediaSrc: `${CDNUrl}/bridals-33.JPG`,
    title: "BRIDALS BY THEABIKEWOMAN",
    description: "BRIDALS BY THEABIKEWOMAN",
    link: "bridals/bridal-2",
  },
  {
    id: "bridal-3",
    mediaSrc: `${CDNUrl}/bridals-26.JPG`,
    title: "BRIDALS BY THEABIKEWOMAN",
    description: "BRIDALS BY THEABIKEWOMAN",
    link: "bridals/bridal-3",
  },
  {
    id: "bridal-4",
    mediaSrc: `${CDNUrl}/bridals-42.JPG`,
    title: "BRIDALS BY THEABIKEWOMAN",
    description: "BRIDALS BY THEABIKEWOMAN",
    link: "bridals/bridal-4",
  },
  {
    id: "bridal-5",
    mediaSrc: `${CDNUrl}/bridals-23.JPG`,
    title: "BRIDALS BY THEABIKEWOMAN",
    description: "BRIDALS BY THEABIKEWOMAN",
    link: "bridals/bridal-5",
  },
  {
    id: "bridal-6",
    mediaSrc: `${CDNUrl}/bridals-2.JPG`,
    title: "BRIDALS BY THEABIKEWOMAN",
    description: "BRIDALS BY THEABIKEWOMAN",
    link: "bridals/bridal-6",
  },
];

export const BridalsCollection = () => {
  return (
    <div id="bridals" className="mt-4 max-w-[1440px] mx-auto w-full">
      <p className="text-lg lg:text-[36px] font-normal leading-[14px] dark:text-white">
        Bridals
      </p>
      <div className="mt-[38px] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-3 gap-y-4 justify-items-center">
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
