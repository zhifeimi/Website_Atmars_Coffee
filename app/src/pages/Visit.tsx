import VisitHero from "@/components/visit/VisitHero";
import InfoCards from "@/components/visit/InfoCards";
import MapSection from "@/components/visit/MapSection";
import OrderPanel from "@/components/visit/OrderPanel";
import MumsStrip from "@/components/visit/MumsStrip";
import FaqSection from "@/components/visit/FaqSection";

/**
 * Visit Us — `/visit` (visit.md).
 * Rhythm: navy hero → cream info grid → cream-warm map → navy-deep order
 * panel (in cream) → cream Mum's strip → cream-warm FAQ.
 */
export default function Visit() {
  return (
    <>
      <VisitHero />
      <InfoCards />
      <MapSection />
      <OrderPanel />
      <MumsStrip />
      <FaqSection />
    </>
  );
}
