// Everything for the Naija Made Market page lives here.
// To change what shows on the page, edit `fairItems` below — nothing else.

export const fairInfo = {
  name: "Naija Made Market",
  date: "Sat 31st October 2026",
  time: "12PM – 8PM",
  venue: "Pop Landmark",
  address:
    "Plots 3 & 4, Water Corporation Road, Oniru Estate, Victoria Island Annex, Lagos",
  instagramHandle: "theabikewoman",
  whatsappNumber: "2347038072466",
};

export type FairItem = {
  // Id of a product already on the site (see app/data.tsx). Its name, photo,
  // regular price and product page are pulled in automatically.
  productId?: string;
  // For items that are not on the site yet (or to override the above).
  title?: string;
  // Fair photos live in public/naija-made-market/, e.g.
  // "/naija-made-market/amani-dress.jpg". Overrides the catalogue photo.
  image?: string;
  // The price at the fair. Use `fairPrices` instead when styles/sizes differ.
  fairPrice?: number;
  fairPrices?: { label: string; price: number }[];
  // Short line shown under the price, e.g. "Only 3 pieces available".
  note?: string;
};

export const fairItems: FairItem[] = [
  {
    productId: "ire-set",
    image: "/naija-made-market/ire-set.jpg",
    fairPrice: 60000,
  },
  {
    productId: "extra-ordinary-set",
    image: "/naija-made-market/extra-ordinary-set.jpg",
    fairPrice: 55000,
  },
  {
    productId: "adire-velvety",
    image: "/naija-made-market/adire-velvety.jpg",
    fairPrice: 60000,
  },
  {
    productId: "adire-2in1-set",
    image: "/naija-made-market/adire-2in1-set.jpg",
    fairPrice: 60000,
  },
  {
    productId: "ileri-boubou",
    title: "ILERIOLUWA BOUBOU",
    image: "/naija-made-market/ilerioluwa-boubou.jpg",
    fairPrice: 42500,
  },
  {
    productId: "tiaraoluwa-dress",
    image: "/naija-made-market/tiaraoluwa-dress.jpg",
    fairPrice: 55000,
  },
  {
    productId: "oreoluwa-dress",
    image: "/naija-made-market/oreoluwa-dress.jpg",
    fairPrice: 62000,
  },
  {
    productId: "keziah-set",
    title: "KEZIAH SKIRT SET",
    image: "/naija-made-market/keziah-skirt-set.jpg",
    fairPrice: 53500,
  },
  {
    productId: "arewa-set",
    image: "/naija-made-market/arewa-set.jpg",
    fairPrice: 55000,
  },
  {
    productId: "lerin-set",
    image: "/naija-made-market/lerin-set.jpg",
    fairPrice: 57000,
  },
  {
    productId: "ife-set",
    image: "/naija-made-market/ife-set.jpg",
    fairPrice: 64000,
  },
  {
    productId: "aduke-set",
    title: "ADUKE PJ SET",
    image: "/naija-made-market/aduke-pj-set.jpg",
    fairPrice: 60000,
  },
  {
    productId: "adunbarin-set",
    image: "/naija-made-market/adunbarin-set.jpg",
    fairPrice: 61000,
  },
  {
    productId: "atofarati-set",
    image: "/naija-made-market/atofarati-set.jpg",
    fairPrice: 57500,
  },
  {
    productId: "iye-dress",
    title: "IYE FITTED DRESS",
    image: "/naija-made-market/iye-fitted-dress.jpg",
    fairPrice: 56000,
  },
  {
    productId: "ewa-set",
    image: "/naija-made-market/ewa-set.jpg",
    fairPrice: 54000,
  },
  {
    productId: "moremi-set",
    image: "/naija-made-market/moremi-set.jpg",
    fairPrice: 50000,
  },
  {
    productId: "amani-dress",
    image: "/naija-made-market/amani-dress.jpg",
    fairPrice: 50000,
  },
  {
    productId: "kuku-set",
    image: "/naija-made-market/kuku-set.jpg",
    fairPrice: 60000,
  },
];
