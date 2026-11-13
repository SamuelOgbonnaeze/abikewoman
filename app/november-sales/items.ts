// Everything for the November Sales catalogue lives here.
// To change what shows on the page, edit `saleInfo` and `saleItems` below.
// This page is standalone: it doesn't use the main shop catalogue.
// Pieces are shown in alphabetical order, so the order below doesn't matter.

export const saleInfo = {
  name: "November Sales",
  // Whole-number percentage taken off every price below.
  discountPercent: 20,
  // Shown in the strip at the top of the page.
  offers: ["Up to 20% off", "Buy 4 at original price, get 1 free"],
  // Shown under the restock line, so the two offers aren't mixed up.
  offerTerms:
    "Buy 4, get 1 free is only on original prices. It can't be combined with the 20% discount.",
  dates: "6th – 20th November 2026",
  // Short line under the offers.
  restock: "Over 30 newly restocked designs: bubus, 2-piece sets, Adire, Raw Silk dresses",
  // Customers DM this word to shop the sale.
  keyword: "NOVEMBER",
  instagramHandle: "theabikewoman",
  whatsappNumber: "2347038072466",
};

export type SaleItem = {
  title: string;
  // Photos live in public/november-sales/, e.g.
  // "/november-sales/amani-dress.webp". Add new ones with
  // `npm run optimize-sale-photos -- path/to/photo.jpg`.
  image: string;
  // The regular price, before the sale discount. The page shows it crossed
  // out next to the discounted price.
  price: number;
  // Short line shown under the price, e.g. "Only 3 pieces available".
  note?: string;
  // Set to true when a piece sells out: it gets a "Sold out" tag, can't be
  // ordered, and moves to the end of the page.
  soldOut?: boolean;
  // How many are left when stock is low: shows an "Only 1 left" tag.
  piecesLeft?: number;
};

export const saleItems: SaleItem[] = [
  { title: "IRE SET", image: "/november-sales/ire-set.webp", price: 60000, soldOut: true },
  { title: "EXTRA ORDINARY SET", image: "/november-sales/extra-ordinary-set.webp", price: 55000, soldOut: true },
  { title: "ADIRE VELVETY", image: "/november-sales/adire-velvety.webp", price: 60000, piecesLeft: 1 },
  { title: "ADIRE 2 IN 1", image: "/november-sales/adire-2in1-set.webp", price: 60000, piecesLeft: 1 },
  { title: "ILERIOLUWA BOUBOU", image: "/november-sales/ilerioluwa-boubou.webp", price: 42500 },
  { title: "TIARAOLUWA DRESS", image: "/november-sales/tiaraoluwa-dress.webp", price: 55000, piecesLeft: 1 },
  { title: "OREOLUWA DRESS", image: "/november-sales/oreoluwa-dress.webp", price: 62000 },
  { title: "KEZIAH SKIRT SET", image: "/november-sales/keziah-skirt-set.webp", price: 53500 },
  { title: "AREWA SET", image: "/november-sales/arewa-set.webp", price: 55000 },
  { title: "LERIN SET", image: "/november-sales/lerin-set.webp", price: 57000, piecesLeft: 1 },
  { title: "IFE SET", image: "/november-sales/ife-set.webp", price: 64000 },
  { title: "ADUKE PJ SET", image: "/november-sales/aduke-pj-set.webp", price: 60000, soldOut: true },
  { title: "ADUNBARIN SET", image: "/november-sales/adunbarin-set.webp", price: 61000, piecesLeft: 1 },
  { title: "ATOFARATI SET", image: "/november-sales/atofarati-set.webp", price: 57500 },
  { title: "IYE FITTED DRESS", image: "/november-sales/iye-fitted-dress.webp", price: 56000 },
  { title: "EWA SET", image: "/november-sales/ewa-set.webp", price: 54000 },
  { title: "MOREMI SET", image: "/november-sales/moremi-set.webp", price: 50000, soldOut: true },
  { title: "AMANI DRESS", image: "/november-sales/amani-dress.webp", price: 50000 },
  { title: "KUKU SET", image: "/november-sales/kuku-set.webp", price: 60000 },
  { title: "SHALOM SET", image: "/november-sales/shalom-set.webp", price: 57500 },
  { title: "KEZIAH PANT SET", image: "/november-sales/keziah-pant-set.webp", price: 54500 },
  { title: "IYE SKATER DRESS", image: "/november-sales/iye-skater-dress.webp", price: 68000 },
  { title: "BABARA DRESS (ADIRE)", image: "/november-sales/babara-dress-adire.webp", price: 57000 },
  { title: "BABARA DRESS (FLOWERED MIKADO)", image: "/november-sales/babara-dress-flowered-mikado.webp", price: 68500 },
  { title: "IBUKUN SET", image: "/november-sales/ibukun-set.webp", price: 70000, piecesLeft: 1 },
  { title: "AYO SET", image: "/november-sales/ayo-set.webp", price: 56000, piecesLeft: 1 },
  { title: "ISINMI DRESS", image: "/november-sales/isinmi-dress.webp", price: 45000 },
  { title: "ANKARA PANEL DRESS", image: "/november-sales/ankara-panel-dress.webp", price: 73000, soldOut: true },
  { title: "URBAN WRAP DRESS", image: "/november-sales/urban-wrap-dress.webp", price: 50000, piecesLeft: 1 },
  { title: "OPAL DRESS", image: "/november-sales/opal-dress.webp", price: 40000 },
  { title: "BERYL DRESS", image: "/november-sales/beryl-dress.webp", price: 55000 },
  { title: "HADIZA SET", image: "/november-sales/hadiza-set.webp", price: 75000 },
  { title: "COLOR BLOOM DRESS", image: "/november-sales/color-bloom-dress.webp", price: 50000, piecesLeft: 1 },
  { title: "THE JEAN DRESS", image: "/november-sales/the-jean-dress.webp", price: 50000, piecesLeft: 1 },
  { title: "THE BLOOM SET", image: "/november-sales/the-bloom-set.webp", price: 75000, piecesLeft: 1 },
  { title: "ONYX DRESS", image: "/november-sales/onyx-dress.webp", price: 56000, piecesLeft: 1 },
];
