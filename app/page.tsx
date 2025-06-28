import AdBanner from "@/components/ad-banner";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import { Navigation } from "@/components/navigation";
import { ProductCard } from "@/components/product-card";

export default function Home() {
  return (
    <div className="text-3xl">
      <Navigation />
      <Hero />

      <div className="px-[83px] lg:px-[272px]">
        <AdBanner />
      </div>
        <ProductCard />
        <Footer />

    </div>
  );
}
