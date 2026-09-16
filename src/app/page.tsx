import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Trust } from "@/components/Trust";
import { Menu } from "@/components/Menu";
import { SpecialtyBand } from "@/components/SpecialtyBand";
import { Reviews } from "@/components/Reviews";
import { Visit } from "@/components/Visit";
import { CallBand } from "@/components/CallBand";
import { Footer } from "@/components/Footer";
import { StickyCallBar } from "@/components/StickyCallBar";

export default function HomePage() {
  return (
    <main>
      <Header />
      <Hero />
      <Trust />
      <Menu />
      <SpecialtyBand />
      <Reviews />
      <Visit />
      <CallBand />
      <Footer />
      <StickyCallBar />
    </main>
  );
}
