import AdBanner from "@/components/ad-banner";
import Banner from "@/components/banner";
import { BridalsCollection } from "@/components/bridals";
import Hero from "@/components/hero";
import { IgbatuntunCollection } from "@/components/igbatuntun-collection";
import { LatestReleases } from "@/components/latest-release";
import { NuachCollection } from "@/components/nuach-collection";

export default function Home() {
  return (
    <div className="text-3xl">
      <Hero />
      <div className="px-[63px] md:px-[120px] lg:px-[272px] mb-[48px]">
        <AdBanner />
      </div>
      <div className="flex-col w-full space-y-[65px] px-[8px] md:px-[15px] lg:px-[40px] ">
        <LatestReleases />
        <NuachCollection />
        <IgbatuntunCollection />
      </div>
      <Banner />
      <div className="flex-col w-full space-y-[65px] px-[8px] md:px-[15px] lg:px-[40px] ">
        <BridalsCollection />
      </div>
    </div>
  );
}
