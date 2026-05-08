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
    id: "sharon-dress",
    mediaSrc: `${CDNUrl}/sharon-dress-1.png`,
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
    id: "babara-dress",
    mediaSrc:
      `${CDNUrl}/barabara-dress-1.mp4`,
    title: "BABARA DRESS",
    description: (
      <>
        Oluwa a seun Babara l&apos;aye eh ( God will do unimaginable things in
        your life) <br />
        Babara dress - under- bust wrap skater dress
      </>
    ),
    link: "nuach/babara-dress",
  },
  {
    id: "danielle-set",
    mediaSrc: `${CDNUrl}/danielle-set-1.mp4`,
    title: "DANIELLE SET",
    description: (
      <>
        Danielle set is in 2 variations <br />
        <br />A dress set - a spaghetti midi length dress paired with a crop
        jacket made in tweed
      </>
    ),
    link: "nuach/danielle-set",
  },
  {
    id: "hana-set",
    mediaSrc: `${CDNUrl}/hana-set-1.mp4`,
    title: "HANA SET",
    description: (
      <>
        HANA SET <br />
        <br /> A bask blouse with drape from right shoulder with an embellished
        trimming on the hem paired with a knee length skirt made in tweed
      </>
    ),
    link: "nuach/hana-set",
  },
  {
    id: "ileri-boubou",
    mediaSrc: `${CDNUrl}/ileri-boubou-1.mp4`,
    title: "ILERIOLUWA SET/BOUBOU",
    description: (
      <>
        May the promises of God come to pass in your lives. <br /> <br /> Comes
        in 3 variations: <br />
        Kimono and pants Made in adire & Chantilly lace. * Boubou made{" "}
      </>
    ),
    link: "nuach/ileri-boubou",
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
    id: "keziah-set",
    mediaSrc: `${CDNUrl}/keziah-set-1.mp4`,
    title: "KEZIAH SET",
    description: (
      <>
        Keziah set is a puffy crop top paired with big pants or a flair skirt.{" "}
        <br />
        Keziah means sweetness- may you experience sweetness as we wrap up the
        year.
      </>
    ),
    link: "nuach/keziah-set",
  },
  {
    id: "moremi-set",
    mediaSrc: `${CDNUrl}/moremi-set-1.mp4`,
    title: "MOREMI SET",
    description: (
      <>
        MOREMI SET <br />
        <br /> A high low flair blouse paired with A long A-line skirt made in
        adire crepe. made in
      </>
    ),
    link: "nuach/moremi-set",
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
  {
    id: "tamara-dress",
    mediaSrc: `${CDNUrl}/tamara-dress-1.mp4`,
    title: "TAMARA DRESS",
    description: <>Made in mikado with a touch of Asooke and chantilly lace</>,
    link: "nuach/tamara-dress",
  },
  {
    id: "ewa-set",
    mediaSrc: `${CDNUrl}/ewa-set-1.jpg`,
    title: "EWA SET",
    description: (
      <>
        May the beauty and the colors of his glory be upon you. <br />
        <br /> EWA SET(kimono & pants) is beautifully and carefully made from
        patches of adire silk and chiffon.
      </>
    ),
    link: "nuach/ewa-set",
  },
  {
    id: "ewa-boubou",
    mediaSrc: `${CDNUrl}/ewa-boubou-1.jpg`,
    title: "EWA BOUBOU",
    description: (
      <>
        EWA BOUBOU <br />
        <br />
        Made from adire silk, different prints merged together to create a
        colorful vibrant boubou.
      </>
    ),
    link: "nuach/ewa-boubou",
  },
  {
    id: "tirzah-dress",
    mediaSrc: `${CDNUrl}/tirzah-dress-1.mp4`,
    title: "TIRZAH DRESS",
    description: (
      <>
        Tirzah means delight, pleasantness <br />
        <br />
        You walk in elegance and confidence knowing you are clothed with favor
        from God and men.
      </>
    ),
    link: "nuach/tirzah-dress",
  },
  {
    id: "zuriel-set",
    mediaSrc: `${CDNUrl}/zuriel-set-1.mp4`,
    title: "ZURIEL SET",
    description: (
      <>
        Zuriel means GOD is my rock. <br />
        <br />
        Zuriel is available in 2 variations : A high low boubou embellished with
        crystal beads &drople
      </>
    ),
    link: "nuach/zuriel-set",
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
