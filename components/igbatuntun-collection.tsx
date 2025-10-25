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
    id: "ibukun-set",
    imageSrc: "ibukun-2.jpeg",
    title: "Ibukun Set",
    description:
      "Ire Collection Description goes here. This is some sample text to test layout.",
    link: "igbatuntun/ibukun-set",
  },
  {
    id: "isinmi-dress",
    imageSrc: "isinmi-dress-1.jpg",
    title: "Isinmi Dress",
    description:
      "Ire Collection Description goes here. This is some sample text to test layout.",
    link: "igbatuntun/isinmi-dress",
  },

  {
    id: "ife-set",
    imageSrc: "ife-11.jpg",
    title: "Ife Set",
    description:
      "Ire Collection Description goes here. This is some sample text to test layout.",
    link: "igbatuntun/ife-set",
  },
  {
    id: "irawo-dress",
    imageSrc: "irawo-dress-2.jpg",
    title: "Irawo Dress",
    description:
      "Ire Collection Description goes here. This is some sample text to test layout.",
    link: "igbatuntun/irawo-dress",
  },
  {
    id: "irawo-set",
    imageSrc: "irawo-set-1.jpg",
    title: "Irawo Set",
    description:
      "Ire Collection Description goes here. This is some sample text to test layout.",
    link: "igbatuntun/irawo-set",
  },
  {
    id: "iyanu-dress",
    imageSrc: "iyanu-dress-7.jpg",
    title: "Iyanu Dress",
    description:
      "Ire Collection Description goes here. This is some sample text to test layout.",
    link: "igbatuntun/iyanu-dress",
  },
  {
    id: "kuku-set",
    imageSrc: "kuku-set-1.jpg",
    title: "Kuku Set",
    description:
      "Ire Collection Description goes here. This is some sample text to test layout.",
    link: "igbatuntun/kuku-set",
  },
  {
    id: "oreoluwa-dress",
    imageSrc: "oreoluwa-dress-1.jpg",
    title: "Oreoluwa Dress",
    description:
      "Ire Collection Description goes here. This is some sample text to test layout.",
    link: "igbatuntun/oreoluwa-dress",
  },
  {
    id: "one-thing",
    imageSrc: "one-thing-dress-1.jpg",
    title: "One Thing Dress",
    description:
      "Ire Collection Description goes here. This is some sample text to test layout.",
    link: "igbatuntun/one-thing",
  },
  {
    id: "favor-set",
    imageSrc: "favor-2.jpg",
    title: "Favor Set",
    description:
      "Ire Collection Description goes here. This is some sample text to test layout.",
    link: "igbatuntun/favor-set",
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
