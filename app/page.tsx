import AdBanner from "@/components/ad-banner";
import { AnuCollection } from "@/components/anu-collection";
import Banner from "@/components/banner";
import { BridalsCollection } from "@/components/bridals";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import { IreCollection } from "@/components/ire-collection";
import { Navigation } from "@/components/navigation";
import { ReadyToWear } from "@/components/ready-to-wear";


export default function Home() {
  return (
    <div className="text-3xl">
      <Navigation />
      <Hero />

      <div className="px-[83px] lg:px-[272px] mb-[48px]">
        <AdBanner />
      </div>
      <div className='flex-col space-y-[65px]'>
        <IreCollection />
        <BridalsCollection />
        <Banner />
        <AnuCollection />
        <ReadyToWear />
      </div>

      <Footer />

    </div>
  );
}
