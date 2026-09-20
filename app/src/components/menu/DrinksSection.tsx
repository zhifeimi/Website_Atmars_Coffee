/** Smoothies, Juices & Shakes — lighter navy section. Framer Motion only. */

import SectionHeading from "@/components/SectionHeading";
import { MenuRow, RowGroup, SpinMotif } from "./bits";
import { DRINK_ITEMS } from "./data";

export default function DrinksSection() {
  return (
    <section id="drinks" className="grain section-pad relative overflow-hidden bg-navy">
      {/* Rotating gold fruit-slice motif in the corner */}
      <SpinMotif className="-right-10 -top-10 h-48 w-48 opacity-20 md:h-64 md:w-64" />

      <div className="container-site relative">
        <SectionHeading
          tone="navy"
          eyebrow="Fresh & Cold"
          title={
            <>
              Smoothies, Juices &amp;{" "}
              <em className="italic text-butterscotch">Shakes</em>
            </>
          }
        />

        <RowGroup
          stagger={0.06}
          className="mx-auto mt-12 grid max-w-5xl gap-x-12 md:grid-cols-2"
        >
          {DRINK_ITEMS.map((item) => (
            <MenuRow key={item.name} item={item} tone="navy" />
          ))}
        </RowGroup>
      </div>
    </section>
  );
}
