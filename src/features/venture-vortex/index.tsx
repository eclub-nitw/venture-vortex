import { SmoothScroll } from "@/components/SmoothScroll";
import { Nav } from "./sections/Nav";
import { Hero } from "./sections/Hero";
import { Ticker } from "./sections/Ticker";
import { FactsStrip } from "./sections/FactsStrip";
import { Journey } from "./sections/Journey";
import { Round1 } from "./sections/Round1";
import { Round2 } from "./sections/Round2";
import { Round3 } from "./sections/Round3";
import { Prizes } from "./sections/Prizes";
import { Startups } from "./sections/Startups";
import { Eligibility } from "./sections/Eligibility";
import { Faq } from "./sections/Faq";
import { Partners } from "./sections/Partners";
import { Footer } from "./sections/Footer";
import { FloatingRegister } from "./components/FloatingRegister";

/** The whole page. Merge into the E-Club site = copy this folder + render this component at /venture-vortex. */
export function VentureVortexPage() {
  return (
    <div data-theme="vortex" className="grain min-h-screen bg-bg text-fg">
      <SmoothScroll />
      <a href="#hero" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-accent focus:px-3 focus:py-2 focus:text-accent-fg">Skip to content</a>
      <Nav />
      <main>
        <Hero />
        <Ticker />
        <FactsStrip />
        <Journey />
        <Round1 />
        <Round2 />
        <Round3 />
        <Prizes />
        <Startups />
        <Eligibility />
        <Faq />
      </main>
      <Partners />
      <Footer />
      <FloatingRegister />
    </div>
  );
}
