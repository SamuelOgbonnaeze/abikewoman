import AdBanner from "@/components/ad-banner";
import Hero from "@/components/hero";
import { Navigation } from "@/components/navigation";

export default function Home() {
  return (
    <div className="text-3xl">
      <Navigation />
      <Hero />
      <AdBanner />
    </div>
  );
}
