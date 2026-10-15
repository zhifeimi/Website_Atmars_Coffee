import type { ReactNode } from "react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import CoffeeRing from "@/components/CoffeeRing";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

/** Line icon whose strokes draw in on scroll (stroke-dashoffset effect). */
function DrawnIcon({ children }: { children: ReactNode }) {
  return (
    <svg
      viewBox="0 0 56 56"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-14 w-14"
      aria-hidden
    >
      {children}
    </svg>
  );
}

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  shown: (i: number) => ({
    pathLength: 1,
    opacity: 1,
    transition: { delay: 0.15 + i * 0.12, duration: 0.8, ease: EASE },
  }),
};

function EggPlateIcon() {
  return (
    <DrawnIcon>
      <motion.circle variants={draw} custom={0} initial="hidden" whileInView="shown" viewport={{ once: true }} cx="28" cy="30" r="20" />
      <motion.ellipse variants={draw} custom={1} initial="hidden" whileInView="shown" viewport={{ once: true }} cx="28" cy="28" rx="9" ry="11" />
      <motion.circle variants={draw} custom={2} initial="hidden" whileInView="shown" viewport={{ once: true }} cx="28" cy="29" r="3" />
    </DrawnIcon>
  );
}

function CoffeeCupIcon() {
  return (
    <DrawnIcon>
      <motion.path variants={draw} custom={0} initial="hidden" whileInView="shown" viewport={{ once: true }} d="M14 22h24v10a9 9 0 0 1-9 9h-6a9 9 0 0 1-9-9V22z" />
      <motion.path variants={draw} custom={1} initial="hidden" whileInView="shown" viewport={{ once: true }} d="M38 24h3a5.5 5.5 0 0 1 0 11h-3" />
      <motion.path variants={draw} custom={2} initial="hidden" whileInView="shown" viewport={{ once: true }} d="M12 48h32" />
      <motion.path variants={draw} custom={3} initial="hidden" whileInView="shown" viewport={{ once: true }} d="M23 8q2.5 3 0 6M30 8q2.5 3 0 6" />
    </DrawnIcon>
  );
}

function HeartHandsIcon() {
  return (
    <DrawnIcon>
      <motion.path variants={draw} custom={0} initial="hidden" whileInView="shown" viewport={{ once: true }} d="M28 42C18 34 13 27 13 20.5A7.5 7.5 0 0 1 27 16a7.5 7.5 0 0 1 14 4.5C41 27 36 34 28 42z" transform="translate(1 0)" />
      <motion.path variants={draw} custom={1} initial="hidden" whileInView="shown" viewport={{ once: true }} d="M16 46l6 5M38 46l-6 5" />
    </DrawnIcon>
  );
}

const VALUES = [
  {
    title: "Honest Food",
    body: "Free-range eggs, local sourdough, dry-aged beef, and portions that never leave you hungry. If we wouldn't serve it to our family, it doesn't leave the pass.",
    icon: <EggPlateIcon />,
  },
  {
    title: "Honest Coffee",
    body: "Award-winning house-roasted beans on a La Marzocco, dialled in every morning. No shortcuts, no burnt milk — just a proper cup, every cup.",
    icon: <CoffeeCupIcon />,
  },
  {
    title: "Honest People",
    body: "We're your neighbours. We learn your name, your order, and how your kids take their babycino. That's the Atmars way.",
    icon: <HeartHandsIcon />,
  },
];

/** About §3 — The Three Honests value cards. */
export default function Values() {
  return (
    <section className="section-pad relative overflow-hidden bg-cream-warm">
      <CoffeeRing className="-right-24 -top-16 h-80 w-80" rotate={32} opacity={0.07} />

      <div className="container-site">
        <SectionHeading
          eyebrow="What We Stand For"
          title={
            <>
              Three words we <em className="italic text-caramel">cook by.</em>
            </>
          }
        />

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {VALUES.map((value, i) => (
            <motion.article
              key={value.title}
              initial={{ opacity: 0, y: 56 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-12%" }}
              transition={{ duration: 0.85, delay: i * 0.14, ease: EASE }}
              whileHover={{ y: -6 }}
              className="group relative rounded-[2rem] bg-cream p-10 shadow-card"
            >
              {/* Gold hairline top — thickens + tints butterscotch on hover */}
              <span className="absolute inset-x-10 top-0 block h-[3px] rounded-b-full bg-gold transition-all duration-300 group-hover:h-[6px] group-hover:bg-butterscotch" />

              <motion.div
                className="text-gold"
                whileHover={{ rotate: 6 }}
                transition={{ type: "spring", stiffness: 300, damping: 12 }}
              >
                {value.icon}
              </motion.div>
              <h3 className="mt-6 font-display text-2xl font-semibold text-espresso">
                {value.title}
              </h3>
              <p className="mt-3 font-sans text-[0.95rem] leading-[1.7] text-navy/75">
                {value.body}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
