import { ProductCard } from "./product-card";

const latestCollectionData = [
  {
    id: "adunbarin-set",
    mediaSrc:
      "https://d1dapjksca996u.cloudfront.net/public/adunbarin-set-1.mp4",
    title: "ADUNBARIN SET",
    description: (
      <>
        ADUNBARIN set✨ <br />
        <br />
        Adunbarin set is a set made from Adire and Asooke. Kimono paired with
        pants.
      </>
    ),
    link: "nuach/adunbarin-set",
  },
  {
    id: "alheri-set",
    mediaSrc: "https://d1dapjksca996u.cloudfront.net/public/alheri-set-1.mp4",
    title: "ALHERI SET",
    description: (
      <>
        ( You were made to Live in the Goodness and The Grace of God) <br />{" "}
        <br />
        Alheri set - a plain color blouse with puff sleeves with an opening on
        the left shoulder, paired a miyaki colored pants
      </>
    ),
    link: "nuach/alheri-set",
  },
  {
    id: "alora-dress",
    mediaSrc: "https://d1dapjksca996u.cloudfront.net/public/alora-dress-1.mp4",
    title: "ALORA DRESS",
    description: (
      <>
        May God continually be your light <br />
        <br />
        ALORA DRESS is a fitted midi length dress with 2 opening on shoulders
        made with either crepe //duchess
      </>
    ),
    link: "nuach/alora-dress",
  },
  {
    id: "ariella-dress",
    mediaSrc:
      "https://d1dapjksca996u.cloudfront.net/public/ariella-dress-1.mp4",
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
      "https://d1dapjksca996u.cloudfront.net/public/atofarati-set-1.mp4",
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
      "https://d1dapjksca996u.cloudfront.net/public/barabara-dress-1.mp4",
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
    mediaSrc: "https://d1dapjksca996u.cloudfront.net/public/danielle-set-1.mp4",
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
    mediaSrc: "https://d1dapjksca996u.cloudfront.net/public/hana-set-1.mp4",
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
    mediaSrc: "https://d1dapjksca996u.cloudfront.net/public/ileri-boubou-1.mp4",
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
    mediaSrc: "https://d1dapjksca996u.cloudfront.net/public/iye-dress-1.mp4",
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
    mediaSrc: "https://d1dapjksca996u.cloudfront.net/public/keziah-set-1.mp4",
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
    mediaSrc: "https://d1dapjksca996u.cloudfront.net/public/moremi-set-1.mp4",
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
    mediaSrc: "https://d1dapjksca996u.cloudfront.net/public/shalom-set-1.mp4",
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
    mediaSrc: "https://d1dapjksca996u.cloudfront.net/public/tamara-dress-1.mp4",
    title: "TAMARA DRESS",
    description: <>Made in mikado with a touch of Asooke and chantilly lace</>,
    link: "nuach/tamara-dress",
  },
  {
    id: "ewa-set",
    mediaSrc: "https://d1dapjksca996u.cloudfront.net/public/ewa-set-1.jpg",
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
    mediaSrc: "https://d1dapjksca996u.cloudfront.net/public/ewa-boubou-1.jpg",
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
    mediaSrc: "https://d1dapjksca996u.cloudfront.net/public/tirzah-dress-1.mp4",
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
    mediaSrc: "https://d1dapjksca996u.cloudfront.net/public/zuriel-set-1.mp4",
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
    <div id="latest" className="mt-4">
      <p className="text-lg lg:text-[36px] font-normal leading-[14px]">
        Latest Releases
      </p>

      <div className="mt-[38px] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-3 gap-y-4">
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
