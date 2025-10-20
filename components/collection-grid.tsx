"use client";

import { collectionsData } from "@/app/data";
import { ProductCard } from "./product-card";

export const CollectionGrid = ({ category }: { category: string }) => {
  const collection = collectionsData.filter(
    (item) => item.category === category
  );


  return (
    <div className="mt-4">
      <p className="text-[36px] font-normal leading-[14px]">{category}</p>
      <div className="mt-[38px] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-3 gap-y-4">
        {collection.map((item) => (
          <ProductCard
            key={item.id}
            imageSrc={item.images?.[0]?.url || "image 114.png"}
            title={item.title}
            description={item.description}
            link={item.link}
          />
        ))}
      </div>
    </div>
  );
};
