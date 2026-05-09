import AdBanner from "@/components/ad-banner";
import Banner from "@/components/banner";
import { BridalsCollection } from "@/components/bridals";
import Hero from "@/components/hero";
import { CategoryChips } from "@/components/category-chips";
import { LatestReleases } from "@/components/latest-release";
import { NuachCollection } from "@/components/nuach-collection";
import { ReadyToWearCollection } from "@/components/ready-to-wear-collection";

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
