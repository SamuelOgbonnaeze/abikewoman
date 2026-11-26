// Everything for the End of the Year Sales catalogue lives here.
// To change what shows on the page, edit `saleInfo` and `saleItems` below.
// This page is standalone: it doesn't use the main shop catalogue.
// Pieces are shown in alphabetical order, so the order below doesn't matter.

export const saleInfo = {
  name: "End of the Year Sales",
  // Whole-number percentage taken off every price below.
  discountPercent: 20,
  // Shown in the strip at the top of the page.
  offers: ["20% off every piece — now extended", "Buy 4 at original price, get 1 free"],
  // Shown under the restock line, so the two offers aren't mixed up.
  offerTerms:
    "Buy 4, get 1 free is only on original prices. It can't be combined with the 20% discount.",
  dates: "6th November – 20th December 2026",
  // Short line under the offers.
  restock: "Over 30 newly restocked designs: bubus, 2-piece sets, Adire, Raw Silk dresses",
  // Customers DM this word to shop the sale.
  keyword: "ENDOFYEAR",
  instagramHandle: "theabikewoman",
  whatsappNumber: "2347038072466",
};

export type SaleItem = {
  title: string;
  // Photos live in public/end-of-year-sales/, e.g.
  // "/end-of-year-sales/amani-dress.webp". Add new ones with
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
  { title: "IRE SET", image: "/end-of-year-sales/ire-set.webp", price: 60000, soldOut: true },
  { title: "EXTRA ORDINARY SET", image: "/end-of-year-sales/extra-ordinary-set.webp", price: 55000, soldOut: true },
  { title: "ADIRE VELVETY", image: "/end-of-year-sales/adire-velvety.webp", price: 60000, piecesLeft: 1 },
  { title: "ADIRE 2 IN 1", image: "/end-of-year-sales/adire-2in1-set.webp", price: 60000, soldOut: true },
  { title: "ILERIOLUWA BOUBOU", image: "/end-of-year-sales/ilerioluwa-boubou.webp", price: 42500 },
  { title: "TIARAOLUWA DRESS", image: "/end-of-year-sales/tiaraoluwa-dress.webp", price: 55000, piecesLeft: 1 },
  { title: "OREOLUWA DRESS", image: "/end-of-year-sales/oreoluwa-dress.webp", price: 62000 },
  { title: "KEZIAH SKIRT SET", image: "/end-of-year-sales/keziah-skirt-set.webp", price: 53500 },
  { title: "AREWA SET", image: "/end-of-year-sales/arewa-set.webp", price: 55000 },
  { title: "AREWA SET IN PLAIN COLOR", image: "/end-of-year-sales/arewa-set-plain.webp", price: 50000, piecesLeft: 1 },
  { title: "LERIN SET", image: "/end-of-year-sales/lerin-set.webp", price: 57000, piecesLeft: 1 },
  { title: "IFE SET", image: "/end-of-year-sales/ife-set.webp", price: 64000 },
  { title: "ADUKE PJ SET", image: "/end-of-year-sales/aduke-pj-set.webp", price: 60000, soldOut: true },
  { title: "ADUNBARIN SET", image: "/end-of-year-sales/adunbarin-set.webp", price: 61000 },
  { title: "ALHERI SET", image: "/end-of-year-sales/alheri-set.webp", price: 52500, piecesLeft: 1 },
  { title: "ALORA DRESS", image: "/end-of-year-sales/alora-dress.webp", price: 59500 },
  { title: "ATOFARATI SET", image: "/end-of-year-sales/atofarati-set.webp", price: 57500 },
  { title: "ATOFARATI 2-COLORED SET", image: "/end-of-year-sales/atofarati-set-2-colour.webp", price: 55000, piecesLeft: 1 },
  { title: "IYE FITTED DRESS", image: "/end-of-year-sales/iye-fitted-dress.webp", price: 56000 },
  { title: "DANIELLE'S DRESS SET", image: "/end-of-year-sales/danielle-dress-set.webp", price: 82500, piecesLeft: 1 },
  { title: "DANIELLE SKIRT SET", image: "/end-of-year-sales/danielle-skirt-set.webp", price: 68500, piecesLeft: 1 },
  { title: "EWA SET", image: "/end-of-year-sales/ewa-set.webp", price: 54000 },
  { title: "MOREMI SET", image: "/end-of-year-sales/moremi-set.webp", price: 50000, soldOut: true },
  { title: "AMANI DRESS", image: "/end-of-year-sales/amani-dress.webp", price: 50000 },
  { title: "KUKU SET", image: "/end-of-year-sales/kuku-set.webp", price: 60000 },
  { title: "SHALOM SET (ADIRE)", image: "/end-of-year-sales/shalom-set.webp", price: 57500 },
  { title: "SHALOM SET (PLAIN COLOR & SUNRAY)", image: "/end-of-year-sales/shalom-set-plain.webp", price: 56500, piecesLeft: 1 },
  { title: "KEZIAH PANT SET", image: "/end-of-year-sales/keziah-pant-set.webp", price: 54500 },
  { title: "IYE SKATER DRESS", image: "/end-of-year-sales/iye-skater-dress.webp", price: 68000 },
  { title: "BABARA DRESS (ADIRE)", image: "/end-of-year-sales/babara-dress-adire.webp", price: 57000 },
  { title: "BABARA DRESS (FLOWERED MIKADO)", image: "/end-of-year-sales/babara-dress-flowered-mikado.webp", price: 68500 },
  { title: "IBUKUN SET", image: "/end-of-year-sales/ibukun-set.webp", price: 70000, piecesLeft: 1 },
  { title: "AYO SET", image: "/end-of-year-sales/ayo-set.webp", price: 56000, piecesLeft: 1 },
  { title: "ISINMI DRESS", image: "/end-of-year-sales/isinmi-dress.webp", price: 45000 },
  { title: "ANKARA PANEL DRESS", image: "/end-of-year-sales/ankara-panel-dress.webp", price: 73000, soldOut: true },
  { title: "URBAN WRAP DRESS", image: "/end-of-year-sales/urban-wrap-dress.webp", price: 50000, piecesLeft: 1 },
  { title: "OPAL DRESS", image: "/end-of-year-sales/opal-dress.webp", price: 40000 },
  { title: "BERYL DRESS", image: "/end-of-year-sales/beryl-dress.webp", price: 55000 },
  { title: "HADIZA SET", image: "/end-of-year-sales/hadiza-set.webp", price: 75000 },
  { title: "COLOR BLOOM DRESS", image: "/end-of-year-sales/color-bloom-dress.webp", price: 50000, piecesLeft: 1 },
  { title: "TIRZAH PLAIN DRESS (YELLOW)", image: "/end-of-year-sales/tirzah-dress-yellow.webp", price: 62000, piecesLeft: 1 },
  { title: "THE JEAN DRESS", image: "/end-of-year-sales/the-jean-dress.webp", price: 50000, piecesLeft: 1 },
  { title: "THE BLOOM SET", image: "/end-of-year-sales/the-bloom-set.webp", price: 75000, piecesLeft: 1 },
  { title: "ONYX DRESS", image: "/end-of-year-sales/onyx-dress.webp", price: 56000, piecesLeft: 1 },
];
