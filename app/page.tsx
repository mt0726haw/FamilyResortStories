import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import CategoryStrip from "@/components/CategoryStrip";
import DestinationMap from "@/components/DestinationMap";
import FeaturedResorts from "@/components/FeaturedResorts";
import StoriesGuides from "@/components/StoriesGuides";
import InstagramGallery from "@/components/InstagramGallery";
import { TrustRow, Newsletter, Footer } from "@/components/BottomSections";

export default function HomePage() {
  return (
    <main>
      <Nav />
      <Hero />
      <CategoryStrip />
      <DestinationMap />
      <FeaturedResorts />
      <StoriesGuides />
      <InstagramGallery />
      <TrustRow />
      <Newsletter />
      <Footer />
    </main>
  );
}
