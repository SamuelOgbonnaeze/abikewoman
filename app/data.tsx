import { AlheriDesc, AloraDesc, AriellaDesc, AtofaratiDesc, BarabaraDesc, DanielleDesc, IlerioluwaDesc, IyeDesc, KeziahDesc, ShalomDesc, TamaraDesc, TirzahDesc } from './description';
import { ReactNode } from "react";

export type CollectionItem = {
  id: string;
  media: { id: string; url: string }[];
  title: string;
  category: string;
  description: string | ReactNode;
  link: string;
};

export const collectionsData: CollectionItem[] = [
  // ===== Bridals Collection =====
  {
    id: "bridal-1",
    media: [
      { id: "1", url: "/hero_4.jpg" },
      { id: "2", url: "/hero_3.jpg" },
      { id: "3", url: "/hero_2.jpg" },
    ],
    title: "Classic Lace Gown First",
    category: "Bridals",
    description:
      "A timeless lace bridal gown featuring delicate floral patterns and a flowing silhouette.",
    link: "bridals/bridal-1",
  },
  {
    id: "bridal-2",
    media: [
      { id: "1", url: "/hero_4.jpg" },
      { id: "2", url: "/hero_3.jpg" },
      { id: "3", url: "/hero_2.jpg" },
    ],
    title: "Modern Mermaid Dress",
    category: "Bridals",
    description:
      "This figure-hugging mermaid dress is perfect for brides seeking a sleek, contemporary look.",
    link: "bridals/bridal-2",
  },
  {
    id: "bridal-3",
    media: [
      { id: "1", url: "/hero_4.jpg" },
      { id: "2", url: "/hero_3.jpg" },
      { id: "3", url: "/hero_2.jpg" },
    ],
    title: "Off-Shoulder Ball Gown",
    category: "Bridals",
    description:
      "A dreamy ball gown with off-shoulder sleeves and a full tulle skirt for a fairytale moment.",
    link: "bridals/bridal-3",
  },
  {
    id: "bridal-4",
    media: [
      { id: "1", url: "/hero_4.jpg" },
      { id: "2", url: "/hero_3.jpg" },
      { id: "3", url: "/hero_2.jpg" },
    ],
    title: "Vintage-Inspired Dress",
    category: "Bridals",
    description:
      "Charming vintage-inspired dress with lace detailing and a romantic neckline.",
    link: "bridals/bridal-4",
  },
  {
    id: "bridal-5",
    media: [
      { id: "1", url: "/hero_4.jpg" },
      { id: "2", url: "/hero_3.jpg" },
      { id: "3", url: "/hero_2.jpg" },
    ],
    title: "Silk A-Line Gown",
    category: "Bridals",
    description:
      "Sleek and simple silk A-line gown with a minimalist design and elegant flow.",
    link: "bridals/bridal-5",
  },
  {
    id: "bridal-6",
    media: [
      { id: "1", url: "/hero_4.jpg" },
      { id: "2", url: "/hero_3.jpg" },
      { id: "3", url: "/hero_2.jpg" },
    ],
    title: "Bohemian Chic Dress",
    category: "Bridals",
    description:
      "Free-spirited boho bridal dress with flowing fabrics and earthy details.",
    link: "bridals/bridal-6",
  },
  {
    id: "bridal-7",
    media: [
      { id: "1", url: "/hero_4.jpg" },
      { id: "2", url: "/hero_3.jpg" },
      { id: "3", url: "/hero_2.jpg" },
    ],
    title: "Strapless Satin Gown",
    category: "Bridals",
    description:
      "Elegant strapless satin gown with clean lines and a dramatic train.",
    link: "bridals/bridal-7",
  },
  {
    id: "bridal-8",
    media: [
      { id: "1", url: "/hero_4.jpg" },
      { id: "2", url: "/hero_3.jpg" },
      { id: "3", url: "/hero_2.jpg" },
    ],
    title: "Tulle and Beaded Bodice",
    category: "Bridals",
    description:
      "Soft tulle skirt paired with a sparkling beaded bodice for the ultimate bridal glamour.",
    link: "bridals/bridal-8",
  },

  // ===== Igbatuntun Collection =====
  {
    id: "ire-set",
    media: [
      { id: "1", url: "/ire-set-1.jpg" },
      { id: "2", url: "/ire-set-2.jpg" },
      { id: "3", url: "/ire-set-3.jpg" },
      { id: "4", url: "/ire-set-4.jpg" },
      { id: "5", url: "/ire-set-5.jpg" },
      { id: "6", url: "/ire-set-6.jpg" },
      { id: "7", url: "/ire-set-7.jpg" },
    ],
    title: "Ire Set",
    category: "Igbatuntun Collection",
    description:
      "Ire Collection Description goes here. This is some sample text to test layout.",
    link: "igbatuntun-collection/ire-set",
  },
  {
    id: "amani-dress",
    media: [
      { id: "1", url: "/amani-1.jpg" },
      { id: "2", url: "/amani-2.jpg" },
      { id: "3", url: "/amani-3.jpg" },
      { id: "4", url: "/amani-4.jpg" },
      { id: "5", url: "/amani-5.jpg" },
      { id: "6", url: "/amani-6.jpg" },
      { id: "7", url: "/amani-7.jpg" },
      { id: "8", url: "/amani-8.jpg" },
      { id: "9", url: "/amani-9.jpg" },
      { id: "10", url: "/amani-10.jpg" },
      { id: "11", url: "/amani-11.jpg" },
    ],
    title: "Amani Dress",
    category: "Igbatuntun Collection",
    description:
      "Ire Collection Description goes here. This is some sample text to test layout.",
    link: "igbatuntun-collection/amani-dress",
  },
  {
    id: "ayomide-set",
    media: [
      { id: "1", url: "/ayomide-1.jpg" },
      { id: "2", url: "/ayomide-2.jpg" },
      { id: "3", url: "/ayomide-3.jpg" },
      { id: "4", url: "/ayomide-4.jpg" },
      { id: "5", url: "/ayomide-5.jpg" },
      { id: "6", url: "/ayomide-6.jpg" },
      { id: "7", url: "/ayomide-7.jpg" },
      { id: "8", url: "/ayomide-8.jpg" },
      { id: "9", url: "/ayomide-9.jpg" },
      { id: "10", url: "/ayomide-10.jpg" },
    ],
    title: "Ayomide Set",
    category: "Igbatuntun Collection",
    description:
      "Ire Collection Description goes here. This is some sample text to test layout.",
    link: "igbatuntun-collection/ayomide-set",
  },
  {
    id: "favor-set",
    media: [
      { id: "1", url: "/favor-1.jpg" },
      { id: "2", url: "/favor-2.jpg" },
    ],
    title: "Favor Set",
    category: "Igbatuntun Collection",
    description:
      "Ire Collection Description goes here. This is some sample text to test layout.",
    link: "igbatuntun-collection/favor-set",
  },
  {
    id: "ibukun-set",
    media: [
      { id: "1", url: "/ibukun-1.jpeg" },
      { id: "2", url: "/ibukun-2.jpeg" },
      { id: "3", url: "/ibukun-3.jpeg" },
      { id: "4", url: "/ibukun-4.jpeg" },
    ],
    title: "Ibukun Set",
    category: "Igbatuntun Collection",
    description:
      "Ire Collection Description goes here. This is some sample text to test layout.",
    link: "igbatuntun-collection/ibukun-set",
  },
  {
    id: "ife-set",
    media: [
      { id: "1", url: "/ife-1.jpg" },
      { id: "2", url: "/ife-2.jpg" },
      { id: "3", url: "/ife-3.jpg" },
      { id: "4", url: "/ife-4.jpg" },
      { id: "5", url: "/ife-5.jpg" },
      { id: "6", url: "/ife-6.jpg" },
      { id: "7", url: "/ife-7.jpg" },
      { id: "8", url: "/ife-8.jpg" },
      { id: "9", url: "/ife-9.jpg" },
      { id: "10", url: "/ife-10.jpg" },
      { id: "11", url: "/ife-11.jpg" },
    ],
    title: "Ife Set",
    category: "Igbatuntun Collection",
    description:
      "Ire Collection Description goes here. This is some sample text to test layout.",
    link: "igbatuntun-collection/ife-set",
  },
  {
    id: "irawo-dress",
    media: [
      { id: "1", url: "/irawo-dress-1.jpg" },
      { id: "2", url: "/irawo-dress-2.jpg" },
    ],
    title: "Irawo Dress",
    category: "Igbatuntun Collection",
    description:
      "Ire Collection Description goes here. This is some sample text to test layout.",
    link: "igbatuntun-collection/irawo-dress",
  },
  {
    id: "irawo-set",
    media: [
      { id: "1", url: "/irawo-set-1.jpg" },
      { id: "2", url: "/irawo-set-2.jpg" },
      { id: "3", url: "/irawo-set-3.jpg" },
      { id: "4", url: "/irawo-set-4.jpg" },
      { id: "5", url: "/irawo-set-5.jpg" },
      { id: "6", url: "/irawo-set-6.jpg" },
      { id: "7", url: "/irawo-set-7.jpg" },
      { id: "8", url: "/irawo-set-8.jpg" },
      { id: "9", url: "/irawo-set-9.jpg" },
      { id: "10", url: "/irawo-set-10.jpg" },
    ],
    title: "Irawo Set",
    category: "Igbatuntun Collection",
    description:
      "Ire Collection Description goes here. This is some sample text to test layout.",
    link: "igbatuntun-collection/irawo-set",
  },
  {
    id: "iyanu-dress",
    media: [
      { id: "1", url: "/iyanu-dress-1.jpg" },
      { id: "2", url: "/iyanu-dress-2.jpg" },
      { id: "3", url: "/iyanu-dress-3.jpg" },
      { id: "4", url: "/iyanu-dress-4.jpg" },
      { id: "5", url: "/iyanu-dress-5.jpg" },
      { id: "6", url: "/iyanu-dress-6.jpg" },
      { id: "7", url: "/iyanu-dress-7.jpg" },
      { id: "8", url: "/iyanu-dress-8.jpg" },
      { id: "9", url: "/iyanu-dress-9.jpg" },
      { id: "10", url: "/iyanu-dress-10.jpg" },
      { id: "11", url: "/iyanu-dress-11.jpg" },
    ],
    title: "Iyanu Dress",
    category: "Igbatuntun Collection",
    description:
      "Ire Collection Description goes here. This is some sample text to test layout.",
    link: "igbatuntun-collection/iyanu-dress",
  },
  {
    id: "kuku-set",
    media: [
      { id: "1", url: "/kuku-set-1.jpg" },
      { id: "2", url: "/kuku-set-2.jpg" },
      { id: "3", url: "/kuku-set-3.jpg" },
      { id: "4", url: "/kuku-set-4.jpg" },
      { id: "5", url: "/kuku-set-5.jpg" },
      { id: "6", url: "/kuku-set-6.jpg" },
      { id: "7", url: "/kuku-set-7.jpg" },
      { id: "8", url: "/kuku-set-8.jpg" },
      { id: "9", url: "/kuku-set-9.jpg" },
      { id: "10", url: "/kuku-set-10.jpg" },
    ],
    title: "Kuku Set",
    category: "Igbatuntun Collection",
    description:
      "Ire Collection Description goes here. This is some sample text to test layout.",
    link: "igbatuntun-collection/kuku-set",
  },
  {
    id: "oreoluwa-dress",
    media: [
      { id: "1", url: "/oreoluwa-dress-1.jpg" },
      { id: "2", url: "/oreoluwa-dress-2.jpg" },
      { id: "3", url: "/oreoluwa-dress-3.jpg" },
      { id: "4", url: "/oreoluwa-dress-4.jpg" },
      { id: "5", url: "/oreoluwa-dress-5.jpg" },
      { id: "6", url: "/oreoluwa-dress-6.jpg" },
      { id: "7", url: "/oreoluwa-dress-7.jpg" },
    ],
    title: "Oreoluwa Dress",
    category: "Igbatuntun Collection",
    description:
      "Ire Collection Description goes here. This is some sample text to test layout.",
    link: "igbatuntun-collection/oreoluwa-dress",
  },
  {
    id: "one-thing",
    media: [
      { id: "1", url: "/one-thing-dress-1.jpg" },
      { id: "2", url: "/one-thing-dress-2.jpg" },
      { id: "3", url: "/one-thing-dress-3.jpg" },
      { id: "4", url: "/one-thing-dress-4.jpg" },
      { id: "5", url: "/one-thing-dress-5.jpg" },
      { id: "6", url: "/one-thing-dress-6.jpg" },
      { id: "7", url: "/one-thing-dress-7.jpg" },
      { id: "7", url: "/one-thing-dress-8.jpg" },
      { id: "7", url: "/one-thing-dress-9.jpg" },
      { id: "7", url: "/one-thing-dress-10.jpg" },
    ],
    title: "One Thing Dress",
    category: "Igbatuntun Collection",
    description:
      "Ire Collection Description goes here. This is some sample text to test layout.",
    link: "igbatuntun-collection/one-thing",
  },
  {
    id: "isinmi-dress",
    media: [
      { id: "1", url: "/isinmi-dress-1.jpg" },
      { id: "2", url: "/isinmi-dress-2.jpg" },
      { id: "3", url: "/isinmi-dress-3.jpg" },
      { id: "4", url: "/isinmi-dress-4.jpg" },
      { id: "5", url: "/isinmi-dress-5.jpg" },
      { id: "6", url: "/isinmi-dress-6.jpg" },
      { id: "7", url: "/isinmi-dress-7.jpg" },
      { id: "8", url: "/isinmi-dress-8.jpg" },
      { id: "9", url: "/isinmi-dress-9.jpg" },
      { id: "10", url: "/isinmi-dress-10.jpg" },
      { id: "11", url: "/isinmi-dress-11.jpg" },
      { id: "12", url: "/isinmi-dress-12.jpg" },
      { id: "13", url: "/isinmi-dress-13.jpg" },
      { id: "14", url: "/isinmi-dress-14.jpg" },
      { id: "15", url: "/isinmi-dress-15.jpg" },
      { id: "16", url: "/isinmi-dress-16.jpg" },
      { id: "17", url: "/isinmi-dress-17.jpg" },
      { id: "18", url: "/isinmi-dress-18.jpg" },
      { id: "19", url: "/isinmi-dress-19.jpg" },
      { id: "20", url: "/isinmi-dress-20.jpg" },
      { id: "21", url: "/isinmi-dress-21.jpg" },
    ],
    title: "Isinmi Dress",
    category: "Igbatuntun Collection",
    description:
      "Ire Collection Description goes here. This is some sample text to test layout.",
    link: "igbatuntun-collection/isinmi-dress",
  },
   //  Nuach Collection 
  {
    id: "alheri-set",
    media: [{ id: "1", url: "/alheri-set-1.mp4" }],
    title: "ALHERI SET",
    category: "Nuach Collection",
    description: <AlheriDesc />,
    link: "nuach/alheri-set",
  },
  {
    id: "alora-dress",
    media: [{ id: "1", url: "/alora-dress-1.mp4" }],
    title: "ALORA DRESS",
    category: "Nuach Collection",
    description: <AloraDesc />,
    link: "nuach/alora-dress",
  },
  {
    id: "ariella-dress",
    media: [{ id: "1", url: "/ariella-dress-1.mp4" }],
    title: "ARIELLA DRESS",
    category: "Nuach Collection",
    description: <AriellaDesc />,
    link: "nuach/ariella-dress",
  },
  {
    id: "atofarati-set",
    media: [{ id: "1", url: "/atofarati-set-1.mp4" }],
    title: "ATOFARATI SET",
    category: "Nuach Collection",
    description: <AtofaratiDesc />,
    link: "nuach/atofarati-set",
  },
  {
    id: "barabara-dress",
    media: [{ id: "1", url: "/barabara-dress-1.mp4" }],
    title: "BARABARA DRESS",
    category: "Nuach Collection",
    description: <BarabaraDesc />,
    link: "nuach/barabara-dress",
  },
 {
    id: "danielle-set",
    media: [{ id: "1", url: "/danielle-set-1.mp4" }],
    title: "DANIELLE SET",
    category: "Nuach Collection",
    description: <DanielleDesc />,
    link: "nuach/danielle-set",
  },
  {
    id: "ileri-boubou",
    media: [{ id: "1", url: "/ileri-boubou-1.mp4" }],
    title: "ILERIOLUWA SET/BOUBOU",
    category: "Nuach Collection",
    description: <IlerioluwaDesc />,
    link: "nuach/ileri-boubou",
  },
   {
    id: "iye-dress",
    media: [{ id: "1", url: "/iye-dress-1.mp4" }],
    title: "IYE DRESS",
    category: "Nuach Collection",
    description: <IyeDesc />,
    link: "nuach/iye-dress",
  },
   {
    id: "keziah-set",
    media: [{ id: "1", url: "/keziah-set-1.mp4" }],
    title: "KEZIAH SET",
    category: "Nuach Collection",
    description: <KeziahDesc />,
    link: "nuach/keziah-set",
  },
   {
    id: "shalom-set",
    media: [{ id: "1", url: "/shalom-set-1.mp4" }],
    title: "SHALOM SET",
    category: "Nuach Collection",
    description: <ShalomDesc />,
    link: "nuach/shalom-set",
  },
  {
    id: "tamara-dress",
    media: [{ id: "1", url: "/tamara-dress-1.mp4" }],
    title: "TAMARA DRESS",
    category: "Nuach Collection",
    description: <TamaraDesc />,
    link: "nuach/tamara-dress",
  },
  {
    id: "tirzah-dress",
    media: [{ id: "1", url: "/tirzah-dress-1.mp4" }],
    title: "TIRZAH DRESS",
    category: "Nuach Collection",
    description: <TirzahDesc />,
    link: "nuach/tirzah-dress",
  },
];



