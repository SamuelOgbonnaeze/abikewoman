import { ReactNode } from "react";

export interface Image {
  id: string;
  url: string;
}

export type CollectionItem = {
  id: string;
  media: { id: string; url: string }[];
  title: string;
  category: string;
  description: string | ReactNode;
  link: string;
};
