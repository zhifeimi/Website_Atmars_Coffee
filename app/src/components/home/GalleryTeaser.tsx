import { useRef } from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useGSAP } from "@gsap/react";
import { gsap, prefersReducedMotion } from "@/hooks/use-lenis";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const IMAGES = [
  { src: "/images/latte-pour.webp", alt: "Atmars navy takeaway cup outdoors" },
  { src: "/images/pancakes.webp", alt: "Ricotta hotcakes with berries" },
  { src: "/images/cafe-counter-customers.webp", alt: "Atmars kiosk counter with customers" },
  { src: "/images/waffles.webp", alt: "Waffles with maple syrup and blueberries" },
  { src: "/images/takeaway-cup.webp", alt: "Customer holding an Atmars navy branded cup" },
];

/** Gallery teaser strip (home.md §9). */
export default function GalleryTeaser() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      gsap.to("[data-gallery-badge]", {
        rotate: 3,
        ease: "none",
        scrollTrigger: {
          trigger: root.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    },
    { scope: root },
  );

  // Center-outward stagger order: 2,1,3,0,4
  const order = [2, 0, 1, 3, 4];

  return (
    <section ref={root} className="relative bg-cream-warm">
      <div className="group/strip relative flex">
        {IMAGES.map((img, i) => (
          <motion.div
            key={img.src}
            initial={{ clipPath: "inset(20% 20% 20% 20%)", scale: 1.15 }}
            whileInView={{ clipPath: "inset(0% 0% 0% 0%)", scale: 1 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 0.7, delay: order[i] * 0.09, ease: EASE }}
            className="aspect-square flex-1 overflow-hidden transition-opacity duration-400 hover:!opacity-100 group-hover/strip:opacity-70"
          >
            <img
              src={img.src}
              alt={img.alt}
              className="h-full w-full object-cover transition-transform duration-400 ease-out-expo hover:scale-[1.06]"
              loading="lazy"
            />
          </motion.div>
        ))}

        {/* Center badge */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <Link
            to="/gallery"
            data-gallery-badge
            className="pointer-events-auto flex h-32 w-32 -rotate-3 flex-col items-center justify-center gap-1 rounded-full border-2 border-gold bg-navy text-center shadow-card transition-transform duration-300 hover:scale-105 md:h-36 md:w-36"
          >
            <span className="font-display text-lg italic leading-tight text-cream">
              See the
              <br />
              gallery
            </span>
            <ArrowRight className="h-4 w-4 text-gold" />
          </Link>
        </div>
      </div>
    </section>
  );
}
