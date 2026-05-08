"use client";
import Link from "next/link";
import React from "react";

const collections = [
  { name: "Nuach Collection", href: "#nuach" },
  { name: "Igbatuntun Collection", href: "#igbatuntun" },
  { name: "Bridals", href: "#bridals" },
  { name: "Ready To Wear", href: "#ready-to-wear" },
];

export const CategoryChips = () => {
  return (
    <div className="w-full py-6 md:py-10">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex items-center justify-start md:justify-center gap-2 md:gap-4 overflow-x-auto no-scrollbar pb-1 md:pb-0 px-4 md:px-6 snap-x snap-mandatory">
          {collections.map((collection) => (
            <Link
              key={collection.href}
              href={collection.href}
              className="snap-center whitespace-nowrap px-5 py-2 rounded-full border border-[#3D021E]/10 text-[#3D021E] text-[13px] md:text-base font-medium transition-all duration-300 hover:bg-[#3D021E] hover:text-white hover:border-[#3D021E] hover:shadow-md active:scale-95 bg-white/80 shadow-sm"
            >
              {collection.name}
            </Link>
          ))}
        </div>
      </div>
      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};
