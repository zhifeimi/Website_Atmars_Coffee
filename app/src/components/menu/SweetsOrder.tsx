/** Sweets & Extras + order-ahead CTA panel. Framer Motion only. */

import { memo, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { EASE, MenuRow, RowGroup } from "./bits";
import { ORDER_PLATFORMS, SWEET_ITEMS } from "./data";
import { SITE } from "@/lib/site";
import { cn } from "@/lib/utils";

/** Primary Bopple chip with a gentle periodic gold pulse (isolated loop). */
const BoppleChip = memo(function BoppleChip() {
  return (
    <motion.a
      href={SITE.bopple}
      target="_blank"
      rel="noopener noreferrer"
      animate={{
        boxShadow: [
          "0 0 0 0 rgba(224,164,88,0.45)",
          "0 0 0 14px rgba(224,164,88,0)",
        ],
      }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeOut" }}
      className="btn-gold group"
    >
      Order on Bopple
      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
    </motion.a>
  );
});

export default function SweetsOrder() {
  const panelRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: panelRef,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

  return (
    <section id="sweets" className="section-pad relative overflow-hidden bg-cream-warm">
      <div className="container-site relative">
        <SectionHeading
          align="left"
          eyebrow="Sweets & Extras"
          title={
            <>
              A little something <em className="italic text-caramel">extra.</em>
            </>
          }
        />

        <RowGroup className="mx-auto mt-10 max-w-3xl lg:mx-0">
          {SWEET_ITEMS.map((item) => (
            <MenuRow key={item.name} item={item} />
          ))}
        </RowGroup>

        {/* Order CTA panel */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.9, ease: EASE }}
          className="mt-16"
        >
          <div
            ref={panelRef}
            className="grain relative overflow-hidden rounded-[2rem] bg-navy-deep px-6 py-16 text-center sm:px-12 md:py-20"
          >
            {/* Background image at 15% with subtle parallax */}
            <motion.div
              aria-hidden
              style={{ y: bgY }}
              className="absolute -inset-y-[10%] inset-x-0"
            >
              <img
                src="/images/hero-iced-palms.webp"
                alt=""
                aria-hidden
                loading="lazy"
                className="h-full w-full object-cover opacity-[0.15]"
              />
            </motion.div>
            <div
              aria-hidden
              className="absolute inset-0 bg-gradient-to-b from-navy-deep/60 via-navy-deep/40 to-navy-deep/70"
            />

            <div className="relative">
              <h3 className="mx-auto max-w-2xl font-display text-[2.25rem] font-semibold leading-[1.15] text-cream">
                Skip the queue —{" "}
                <em className="italic text-butterscotch">order ahead.</em>
              </h3>
              <p className="mx-auto mt-4 max-w-[48ch] font-sans text-base font-light leading-relaxed text-cream/80">
                Order direct on Bopple, or search “Atmars” on your
                favourite delivery app.
              </p>

              <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-10%" }}
                transition={{ staggerChildren: 0.08, delayChildren: 0.2 }}
                className="mt-9 flex flex-wrap items-center justify-center gap-4"
              >
                <motion.span
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
                  }}
                >
                  <BoppleChip />
                </motion.span>
                {ORDER_PLATFORMS.filter((p) => !p.primary).map((p) => (
                  <motion.span
                    key={p.name}
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
                    }}
                  >
                    <a
                      href={p.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn("btn-ghost-gold", "px-6 py-3 text-xs")}
                    >
                      {p.name}
                    </a>
                  </motion.span>
                ))}
              </motion.div>

              <p className="mt-8 font-sans text-xs text-cream/60">
                Delivery prices may differ from in-store.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
