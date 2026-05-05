import { ReactNode } from "react";

export interface Image {
  id: string;
  url: string;
}

export interface PriceVariation {
  style: string;
  price: number;        // NGN — the transactional currency
  priceGBP?: number;    // GBP — set manually, leave undefined until ready
  priceCAD?: number;    // CAD — set manually, leave undefined until ready
  inStock?: boolean;
}

export type CollectionItem = {
  id: string;
  media: Image[];
  title: string;
  category: string;
  description: string | ReactNode;
  link: string;
  price?: number;           // NGN
  priceGBP?: number;        // GBP — flat price items
  priceCAD?: number;        // CAD — flat price items
  priceVariations?: PriceVariation[];
};

export interface CartItem extends CollectionItem {
  selectedStyle?: string;
  selectedPrice?: number;
  selectedCurrency?: "NGN" | "GBP" | "CAD";
  selectedSize?: number;
  quantity: number;
}
