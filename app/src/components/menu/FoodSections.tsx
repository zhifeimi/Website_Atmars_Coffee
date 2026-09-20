/** Breakfast, Waffles & Lunch sections — Framer Motion UI components. */

import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import CoffeeRing from "@/components/CoffeeRing";
import {
  BreathingGlow,
  DishGrid,
  EASE,
  MenuRow,
  RowGroup,
} from "./bits";
import {
  BREAKFAST_FEATURES,
  BREAKFAST_ITEMS,
  LUNCH_FEATURES,
  LUNCH_ITEMS,
  WAFFLE_FEATURES,
  WAFFLE_ITEMS,
} from "./data";

/* ------------------------------------------------------------------ */
/* All-Day Breakfast                                                   */
/* ------------------------------------------------------------------ */

export function BreakfastSection() {
  return (
    <section id="breakfast" className="section-pad relative overflow-hidden bg-cream">
      <CoffeeRing className="-right-20 top-10 h-72 w-72" opacity={0.07} rotate={24} />
      <div className="container-site relative">
        <SectionHeading
          align="left"
          eyebrow="Served All Day"
          title={
            <>
              All-Day <em className="italic text-caramel">Breakfast</em>
            </>
          }
          lead="Free-range eggs, Brasserie sourdough, generous plates — from open to close."
        />

        <DishGrid dishes={BREAKFAST_FEATURES} />

        <RowGroup className="mx-auto mt-14 grid max-w-5xl gap-x-12 md:grid-cols-2">
          {BREAKFAST_ITEMS.map((item) => (
            <MenuRow key={item.name} item={item} />
          ))}
        </RowGroup>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Waffles & Pancakes                                                  */
/* ------------------------------------------------------------------ */

export function WafflesSection() {
  return (
    <section id="waffles" className="section-pad relative overflow-hidden bg-cream-warm">
      <div className="container-site relative">
        <div className="relative mx-auto max-w-3xl text-center">
          <BreathingGlow className="-top-24 left-1/2 h-[26rem] w-[46rem] max-w-[120vw] -translate-x-1/2" />
          <SectionHeading
            eyebrow="House-Made"
            title={
              <>
                Waffles &amp; <em className="italic text-caramel">Pancakes</em>
              </>
            }
          />
          {/* Review quote annotation, spring-pops after the H2 */}
          <motion.span
            initial={{ opacity: 0, scale: 0.6, rotate: -10 }}
            whileInView={{ opacity: 1, scale: 1, rotate: -3 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 14,
              delay: 0.5,
            }}
            className="pointer-events-none absolute -right-2 top-1/2 font-hand text-2xl text-berry sm:right-0 lg:-right-16"
          >
            the pancakes are 10/10!!
          </motion.span>
        </div>

        <DishGrid dishes={WAFFLE_FEATURES} />

        <RowGroup className="mx-auto mt-14 max-w-3xl">
          {WAFFLE_ITEMS.map((item) => (
            <MenuRow key={item.name} item={item} />
          ))}
        </RowGroup>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Burgers & Lunch                                                     */
/* ------------------------------------------------------------------ */

export function LunchSection() {
  return (
    <section id="lunch" className="section-pad relative overflow-hidden bg-cream">
      <CoffeeRing className="-left-24 bottom-16 h-80 w-80" opacity={0.06} rotate={-30} />
      <div className="container-site relative">
        <SectionHeading
          align="left"
          eyebrow="From the Grill"
          title={
            <>
              Burgers &amp; <em className="italic text-caramel">Lunch</em>
            </>
          }
        />

        <DishGrid dishes={LUNCH_FEATURES} />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.6, ease: EASE }}
          className="mx-auto mt-14 max-w-3xl"
        >
          <RowGroup>
            {LUNCH_ITEMS.map((item) => (
              <MenuRow key={item.name} item={item} />
            ))}
          </RowGroup>
        </motion.div>
      </div>
    </section>
  );
}
