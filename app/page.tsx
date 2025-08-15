import AdBanner from "@/components/ad-banner";
import {AnuCollection} from "@/components/anu-collection";
import Banner from "@/components/banner";
import {BridalsCollection} from "@/components/bridals";
import Hero from "@/components/hero";
import {IreCollection} from "@/components/ire-collection";

import {ReadyToWear} from "@/components/ready-to-wear";

export default function Home() {
    return (
        <div className="text-3xl">
            <Hero/>
            <div className="px-[63px] md:px-[120px] lg:px-[272px] mb-[48px]">
                <AdBanner/>
            </div>
            <div className='flex-col w-full space-y-[65px] px-[8px] md:px-[15px] lg:px-[50px] '>
                <IreCollection/>
                <BridalsCollection/>
                <Banner/>
                <AnuCollection/>
                <ReadyToWear/>
            </div>
        </div>
    );
}
