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

// TODO: replace with the actual pieces going to the fair and their fair prices.
// The prices below are just the current site prices as placeholders.
export const fairItems: FairItem[] = [
  { productId: "tiaraoluwa-dress", fairPrice: 55000 },
  { productId: "onyx-dress", fairPrice: 56000 },
  { productId: "amani-dress", fairPrice: 50000 },
  { productId: "ayomide-set", fairPrice: 69000 },
  { productId: "adebisi-boubou", fairPrice: 45000 },
];
