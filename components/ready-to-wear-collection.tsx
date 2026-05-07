import { ProductCard } from "./product-card";

const CDNUrl = process.env.NEXT_PUBLIC_CDN_URL;

const readyToWearCollectionData = [
  {
    id: "mirabel-dress",
    mediaSrc: `/mirabel-dress-1.mp4`,
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
        We’re just a DM away.🤗
      </>
    ),
    link: "ready-to-wear/mirabel-dress",
  },
];

export const ReadyToWearCollection = () => {
  return (
    <div id="ready-to-wear" className="max-w-[1440px] mx-auto w-full">
      <p className=" text-lg lg:text-[36px] font-normal leading-[14px]">
        Ready To Wear Collection
      </p>
      <div className="mt-[38px] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-3 gap-y-4 justify-items-center">
        {readyToWearCollectionData.map((item) => (
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
