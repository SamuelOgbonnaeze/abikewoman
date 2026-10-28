// Everything for the Naija Made Market page lives here.
// To change what shows on the page, edit `fairItems` below — nothing else.
// This page is standalone: it doesn't use the main shop catalogue.
// Pieces are shown in alphabetical order, so the order below doesn't matter.

export const fairInfo = {
  name: "Naija Made Market",
  date: "Sat 31st October 2026",
  time: "12PM – 8PM",
  venue: "Pop Landmark",
  address:
    "Plots 3 & 4, Water Corporation Road, Oniru Estate, Victoria Island Annex, Lagos",
  instagramHandle: "theabikewoman",
  whatsappNumber: "2347038072466",
  // Shown in a banner at the top of the page. Set to "" to hide it.
  offer: "10% off when you buy 2 or more pieces",
};

export type FairItem = {
  title: string;
  // Fair photos live in public/naija-made-market/, e.g.
  // "/naija-made-market/amani-dress.webp". Save them as WebP about 800px
  // wide (roughly 100 KB); they're served as-is, without resizing.
  image: string;
  // The price at the fair. Use `fairPrices` instead when styles/sizes differ.
  fairPrice?: number;
  fairPrices?: { label: string; price: number }[];
  // Short line shown under the price, e.g. "Only 3 pieces available".
  note?: string;
};

export const fairItems: FairItem[] = [
  { title: "IRE SET", image: "/naija-made-market/ire-set.webp", fairPrice: 60000 },
  { title: "EXTRA ORDINARY SET", image: "/naija-made-market/extra-ordinary-set.webp", fairPrice: 55000 },
  { title: "ADIRE VELVETY", image: "/naija-made-market/adire-velvety.webp", fairPrice: 60000 },
  { title: "ADIRE 2 IN 1", image: "/naija-made-market/adire-2in1-set.webp", fairPrice: 60000 },
  { title: "ILERIOLUWA BOUBOU", image: "/naija-made-market/ilerioluwa-boubou.webp", fairPrice: 42500 },
  { title: "TIARAOLUWA DRESS", image: "/naija-made-market/tiaraoluwa-dress.webp", fairPrice: 55000 },
  { title: "OREOLUWA DRESS", image: "/naija-made-market/oreoluwa-dress.webp", fairPrice: 62000 },
  { title: "KEZIAH SKIRT SET", image: "/naija-made-market/keziah-skirt-set.webp", fairPrice: 53500 },
  { title: "AREWA SET", image: "/naija-made-market/arewa-set.webp", fairPrice: 55000 },
  { title: "LERIN SET", image: "/naija-made-market/lerin-set.webp", fairPrice: 57000 },
  { title: "IFE SET", image: "/naija-made-market/ife-set.webp", fairPrice: 64000 },
  { title: "ADUKE PJ SET", image: "/naija-made-market/aduke-pj-set.webp", fairPrice: 60000 },
  { title: "ADUNBARIN SET", image: "/naija-made-market/adunbarin-set.webp", fairPrice: 61000 },
  { title: "ATOFARATI SET", image: "/naija-made-market/atofarati-set.webp", fairPrice: 57500 },
  { title: "IYE FITTED DRESS", image: "/naija-made-market/iye-fitted-dress.webp", fairPrice: 56000 },
  { title: "EWA SET", image: "/naija-made-market/ewa-set.webp", fairPrice: 54000 },
  { title: "MOREMI SET", image: "/naija-made-market/moremi-set.webp", fairPrice: 50000 },
  { title: "AMANI DRESS", image: "/naija-made-market/amani-dress.webp", fairPrice: 50000 },
  { title: "KUKU SET", image: "/naija-made-market/kuku-set.webp", fairPrice: 60000 },
  { title: "SHALOM SET", image: "/naija-made-market/shalom-set.webp", fairPrice: 57500 },
  { title: "KEZIAH PANT SET", image: "/naija-made-market/keziah-pant-set.webp", fairPrice: 54500 },
  { title: "IYE SKATER DRESS", image: "/naija-made-market/iye-skater-dress.webp", fairPrice: 68000 },
  { title: "BABARA DRESS (ADIRE)", image: "/naija-made-market/babara-dress-adire.webp", fairPrice: 57000 },
  { title: "BABARA DRESS (FLOWERED MIKADO)", image: "/naija-made-market/babara-dress-flowered-mikado.webp", fairPrice: 68500 },
  { title: "IBUKUN SET", image: "/naija-made-market/ibukun-set.webp", fairPrice: 70000 },
  { title: "AYO SET", image: "/naija-made-market/ayo-set.webp", fairPrice: 56000 },
  { title: "ISINMI DRESS", image: "/naija-made-market/isinmi-dress.webp", fairPrice: 45000 },
  { title: "ANKARA PANEL DRESS", image: "/naija-made-market/ankara-panel-dress.webp", fairPrice: 73000 },
  { title: "URBAN WRAP DRESS", image: "/naija-made-market/urban-wrap-dress.webp", fairPrice: 50000 },
  { title: "OPAL DRESS", image: "/naija-made-market/opal-dress.webp", fairPrice: 40000 },
  { title: "BERYL DRESS", image: "/naija-made-market/beryl-dress.webp", fairPrice: 55000 },
  { title: "HADIZA SET", image: "/naija-made-market/hadiza-set.webp", fairPrice: 75000 },
  { title: "COLOR BLOOM DRESS", image: "/naija-made-market/color-bloom-dress.webp", fairPrice: 50000 },
];
