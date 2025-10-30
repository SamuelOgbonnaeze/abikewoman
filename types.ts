import { ReactNode } from "react";

export interface Image {
  id: string;
  url: string;
}

export interface PriceVariation {
  style: string;
  price: number;
  inStock?: boolean;
}

export type CollectionItem = {
  id: string;
  media: Image[];
  title: string;
  category: string;
  description: string | ReactNode;
  link: string;
  price?: number;
  priceVariations?: PriceVariation[];
};

export interface CartItem extends CollectionItem {
  selectedStyle?: string;
  selectedPrice?: number;
  quantity: number;
}
