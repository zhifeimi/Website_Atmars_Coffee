import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

/**
 * Shared Section Heading Block (design.md §6.4):
 * eyebrow (Inter caps + gold rule) → H2 (Cormorant) → optional lead.
 */
export default function SectionHeading({
  eyebrow,
  title,
  lead,
  align = "center",
  tone = "cream",
  className,
}: {
  eyebrow: string;
  title: ReactNode;
  lead?: ReactNode;
  align?: "center" | "left";
  /** Section background tone: cream sections or navy sections. */
  tone?: "cream" | "navy";
  className?: string;
}) {
  const centered = align === "center";
  return (
    <div
      className={cn(
        "max-w-3xl",
        centered && "mx-auto text-center",
        className,
      )}
    >
      <motion.span
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-15%" }}
        transition={{ duration: 0.6, ease: EASE }}
        className={cn(
          "eyebrow",
          tone === "navy" ? "eyebrow-on-navy" : "eyebrow-on-cream",
          centered && "justify-center",
        )}
      >
        {eyebrow}
      </motion.span>
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-15%" }}
        transition={{ duration: 0.9, delay: 0.1, ease: EASE }}
        className={cn(
          "mt-5 font-display text-[clamp(2.25rem,4.5vw,3.75rem)] font-semibold leading-[1.08] tracking-[-0.005em] text-balance",
          tone === "navy" ? "text-cream" : "text-navy",
        )}
      >
        {title}
      </motion.h2>
      {lead && (
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.8, delay: 0.22, ease: EASE }}
          className={cn(
            "mt-5 font-sans text-xl font-light leading-[1.65]",
            tone === "navy" ? "text-cream/85" : "text-navy-ink/80",
          )}
        >
          {lead}
        </motion.p>
      )}
    </div>
  );
}
