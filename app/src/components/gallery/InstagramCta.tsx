import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import CoffeeRing from "@/components/CoffeeRing";
import { SITE } from "@/lib/site";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  shown: (i: number) => ({
    pathLength: 1,
    opacity: 1,
    transition: { delay: i * 0.15, duration: 0.9, ease: EASE },
  }),
};

/** Instagram glyph that draws itself in (stroke-dashoffset effect). */
function DrawnInstagram() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-16 w-16"
      aria-hidden
    >
      <motion.rect variants={draw} custom={0} initial="hidden" whileInView="shown" viewport={{ once: true }} x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <motion.path variants={draw} custom={1} initial="hidden" whileInView="shown" viewport={{ once: true }} d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <motion.line variants={draw} custom={2} initial="hidden" whileInView="shown" viewport={{ once: true }} x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

/** Gallery §5 — Instagram CTA band. */
export default function InstagramCta() {
  return (
    <section className="section-pad relative overflow-hidden bg-cream-warm">
      <CoffeeRing className="-left-20 bottom-0 h-72 w-72" rotate={-30} opacity={0.07} />

      <div className="container-site relative">
        <div className="group mx-auto max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 0.7, ease: EASE }}
            className="inline-block text-caramel transition-colors duration-500 group-hover:text-berry"
          >
            <DrawnInstagram />
          </motion.div>

          <motion.h3
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 0.8, delay: 0.15, ease: EASE }}
            className="mt-6 font-display text-[2rem] font-semibold leading-[1.15] text-espresso"
          >
            Fresh from the grid —{" "}
            <em className="italic text-caramel">@atmars</em>
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 0.7, delay: 0.25, ease: EASE }}
            className="mt-4 font-sans text-[1.05rem] leading-[1.7] text-navy/75"
          >
            Follow along for daily specials, new menu drops and the occasional
            latte-art flex.
          </motion.p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-15%" }}
              transition={{ duration: 0.7, delay: 0.35, ease: EASE }}
            >
              <a
                href={SITE.instagram}
                target="_blank"
                rel="noreferrer"
                className="btn-navy group/btn"
              >
                Follow on Instagram
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-0.5" />
              </a>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-15%" }}
              transition={{ duration: 0.7, delay: 0.45, ease: EASE }}
            >
              <a
                href={SITE.facebook}
                target="_blank"
                rel="noreferrer"
                className="btn-ghost-navy group/btn"
              >
                Facebook
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-0.5" />
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
