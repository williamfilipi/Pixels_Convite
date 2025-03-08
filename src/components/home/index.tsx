import { HeroSection } from "./hero-section";
import { ProductCategories } from "./product-categories";
import { FeaturedProducts } from "./featured-products";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";

export function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <FeaturedProducts title="Convites Mais Populares" />
      <FeaturedProducts title="Novos Convites" />
      <ProductCategories />
      <WhatsAppButton />
    </div>
  );
}
