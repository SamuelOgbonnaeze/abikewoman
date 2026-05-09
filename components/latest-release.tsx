import { ProductCard } from "./product-card";

const CDNUrl = process.env.NEXT_PUBLIC_CDN_URL;

const latestCollectionData = [
  {
    id: "mirabel-dress",
    mediaSrc: `${CDNUrl}/mirabel-dress-1.mp4`,
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
  {
    id: "adire-2in1-set",
    mediaSrc: `${CDNUrl}/adire-2in1-set-1.jpg`,
    title: "ADIRE 2 IN 1 SET",
    description: "ADIRE 2 IN 1 SET",
    link: "ready-to-wear/adire-2in1-set",
  },
  {
    id: "adire-velvety",
    mediaSrc: `${CDNUrl}/adire-velvety-1.jpg`,
    title: "ADIRE VELVETY",
    description: "ADIRE VELVETY",
    link: "ready-to-wear/adire-velvety",
  },
  {
    id: "sharon-dress",
    mediaSrc: `${CDNUrl}/sharon-dress-8.png`,
    title: "SHARON DRESS",
    description: (
      <>
        SHARON DRESS🤍 <br />
        <br />
        Sharon is not just a dress, she is a statement. <br />
        A dress that was made for the woman who knows exactly the energy she is walking into the room with.✨ <br />
        <br />
        A high neck, fitted dress that holds every curve beautifully, paired with a detachable layered tulle train that brings the full bridal moment. The structured sleeves give it that bold look that leaves an unforgettable statement.
      </>
    ),
    link: "bridals/sharon-dress",
  },
  {
    id: "eden-dress",
    mediaSrc: `${CDNUrl}/eden.mp4`,
    title: "EDEN DRESS",
    description: "Eden is where beauty began. A gown made for the woman stepping into love, rest, and forever.",
    link: "bridals/eden-dress",
  },
  {
    id: "beulah-dress",
    mediaSrc: `${CDNUrl}/beulah.mp4`,
    title: "BEULAH DRESS",
    description: "Beulah is beloved, she is cherished, and it shows. A gown made for the woman stepping into love, commitment, and a lifetime of grace.",
    link: "bridals/beulah-dress",
  },
  {
    id: "zahara-dress",
    mediaSrc: `${CDNUrl}/zahara.mp4`,
    title: "ZAHARA DRESS",
    description: "Zahara means \"flowering, radiant bloom.\" A gown made for the bride who steps into her moment fully — seen, celebrated, and unforgettable.",
    link: "bridals/zahara-dress",
  },
  {
    id: "ariella-dress",
    mediaSrc:
      `${CDNUrl}/ariella-dress-1.mp4`,
    title: "ARIELLA DRESS",
    description: (
      <>
        Ariella means Lioness of God <br />
        <br />
        In every context you find yourself, you&apos;ve been made to be brave,
        my woman, live boldly.
      </>
    ),
    link: "nuach/ariella-dress",
  },
  {
    id: "atofarati-set",
    mediaSrc:
      `${CDNUrl}/atofarati-set-1.mp4`,
    title: "ATOFARATI SET",
    description: (
      <>
        Atofarati SET - an uneven wrap blouse paired with a pant <br />
        <br />
        May the Lord continually be your support , your defense, rock solid like
        the mountain.
      </>
    ),
    link: "nuach/atofarati-set",
  },
  {
    id: "iye-dress",
    mediaSrc: `${CDNUrl}/iye-dress-1.mp4`,
    title: "IYE DRESS",
    description: (
      <>
        ÌYÈ means life - To every abikewoman , May God&apos;s breath of life be
        upon all that you do. <br />
        <br />
        ÌYÈ has 3 variations;
      </>
    ),
    link: "nuach/iye-dress",
  },
  {
    id: "shalom-set",
    mediaSrc: `${CDNUrl}/shalom-set-1.mp4`,
    title: "SHALOM SET",
    description: (
      <>
        The Peace that surpasses understanding will rule your days <br />
        <br />
        Shalom set is a A fitted blouse with a drape from the left shoulder
        paired with pants.
      </>
    ),
    link: "nuach/shalom-set",
  },
];

export const LatestReleases = () => {
  // Shuffle array and get 4 random items
  const randomFour = [...latestCollectionData]
    .sort(() => Math.random() - 0.5)
    .slice(0, 4);

  return (
    <div id="latest" className="mt-4 max-w-[1440px] mx-auto w-full">
      <p className="text-lg lg:text-[36px] font-normal leading-[14px]">
        Latest Releases
      </p>

      <div className="mt-[38px] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-3 gap-y-4 justify-items-center">
        {randomFour.map((item) => (
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
