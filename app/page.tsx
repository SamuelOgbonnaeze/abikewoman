import dynamic from "next/dynamic";
import AdBanner from "@/components/ad-banner";
import Banner from "@/components/banner";
import Hero from "@/components/hero";
import { CategoryChips } from "@/components/category-chips";
import { LatestReleases } from "@/components/latest-release";
import { AdelaideCollection } from "@/components/adelaide-collection";

const NuachCollection = dynamic(
  () => import("@/components/nuach-collection").then((mod) => mod.NuachCollection)
);
const BridalsCollection = dynamic(
  () => import("@/components/bridals").then((mod) => mod.BridalsCollection)
);
const ReadyToWearCollection = dynamic(
  () => import("@/components/ready-to-wear-collection").then((mod) => mod.ReadyToWearCollection)
);

export default function Home() {
  return (
    <div className="text-3xl ">
      <Hero />
      <CategoryChips />
      <div className="px-[63px] md:px-[120px] lg:px-[272px] mb-[48px]">
        <AdBanner />
      </div>
      <div className="flex-col w-full space-y-[65px] px-[8px] md:px-[15px] lg:px-[40px] ">
        <LatestReleases />
        <AdelaideCollection />
        <NuachCollection />
        <BridalsCollection />
      </div>
      <div className=" mt-6 md:mt-10">
        <Banner />
      </div>
      <div className="flex-col w-full space-y-[65px] px-[8px] md:px-[15px] lg:px-[40px] mt-[65px]">
        <ReadyToWearCollection />
      </div>
    </div>
  );
}
