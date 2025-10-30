import { ProductCard } from "./product-card";

const nuachCollectionData = [
  {
    id: "alheri-set",
    mediaSrc: "alheri-set-1.mp4",
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
    mediaSrc: "alora-dress-1.mp4",
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
    mediaSrc: "ariella-dress-1.mp4",
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
    mediaSrc: "atofarati-set-1.mp4",
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
    mediaSrc: "barabara-dress-1.mp4",
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
    mediaSrc: "danielle-set-1.mp4",
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
    id: "ileri-boubou",
    mediaSrc: "ileri-boubou-1.mp4",
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
    mediaSrc: "iye-dress-1.mp4",
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
    mediaSrc: "keziah-set-1.mp4",
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
    id: "shalom-set",
    mediaSrc: "shalom-set-1.mp4",
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
    mediaSrc: "tamara-dress-1.mp4",
    title: "TAMARA DRESS",
    description: <>Made in mikado with a touch of Asooke and chantilly lace</>,
    link: "nuach/tamara-dress",
  },
  {
    id: "tirzah-dress",
    mediaSrc: "tirzah-dress-1.mp4",
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
];

export const NuachCollection = () => {
  return (
    <div id="nuach" className=" mt-4">
      <p className=" text-lg lg:text-[36px] font-normal leading-[14px]">
        Nuach Collection
      </p>
      <div className="mt-[38px] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-3 gap-y-4">
        {nuachCollectionData.map((item) => (
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
