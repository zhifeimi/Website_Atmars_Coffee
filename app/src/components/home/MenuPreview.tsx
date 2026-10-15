import { useState } from "react";
import { Link } from "react-router";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Star } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { SITE } from "@/lib/site";
import { cn } from "@/lib/utils";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

type Item = { name: string; price?: string; desc: string; signature?: boolean };

const TABS: { id: string; label: string; items: Item[] }[] = [
  {
    id: "breakfast",
    label: "Breakfast",
    items: [
      { name: "Eggs Your Way", price: "12.50", desc: "Poached, fried or scrambled on sourdough or rye." },
      { name: "Island Big Breakfast", price: "21.00", desc: "Eggs, bacon, sausage, rosti, roast tomato & mushrooms." },
      { name: "Brioche Bacon & Egg", price: "14.50", desc: "Smoky bacon, fried egg & tomato jam on brioche." },
      { name: "Smashed Avo & Feta", price: "17.80", desc: "Lemony avo, whipped feta, dukkah & a poached egg." },
      { name: "Meridian Benedict", price: "19.50", desc: "Poached eggs, wilted greens & golden turmeric hollandaise.", signature: true },
      { name: "Equator Burrito", price: "17.90", desc: "Eggs, black beans, corn, pico & cheddar — grilled.", signature: true },
    ],
  },
  {
    id: "waffles",
    label: "Waffles & Pancakes",
    items: [
      { name: "Big Spread Waffle", price: "22.50", desc: "Waffle, bacon, fried egg, rosti & hollandaise." },
      { name: "Ricotta Hotcake Tower", price: "18.50", desc: "Berries, mascarpone & warm maple.", signature: true },
      { name: "Blueberry Maple Waffle", price: "17.90", desc: "Blueberries, maple & vanilla bean cream.", signature: true },
      { name: "Churro Waffle", price: "16.80", desc: "Cinnamon sugar, dulce de leche & vanilla gelato." },
    ],
  },
  {
    id: "lunch",
    label: "Burgers & Lunch",
    items: [
      { name: "Orbit Smash Burger", price: "19.90", desc: "Double smashed beef, aged cheddar, pickles & house sauce.", signature: true },
      { name: "Beer-Battered Fish & Chips", price: "22.50", desc: "Crisp batter, thick-cut chips, tartare & lemon." },
      { name: "Seared Beef Salad", price: "21.50", desc: "Sirloin, crisp leaves & sesame-lime dressing." },
      { name: "Toasties & Wraps", price: "12.90", desc: "Made fresh daily — ask what's in the cabinet." },
    ],
  },
  {
    id: "drinks",
    label: "Drinks",
    items: [
      { name: "Cappuccino", price: "5.20", desc: "House-roasted beans, poured on the La Marzocco." },
      { name: "Latte", price: "5.20", desc: "Silky steamed milk over a double ristretto." },
      { name: "Iced Latte Float", price: "8.20", desc: "Double shot, cold milk & a scoop of vanilla gelato." },
      { name: "Cold-Pressed Juice", price: "8.50", desc: "Orange, apple or watermelon & mint." },
      { name: "Classic Milkshake", price: "7.90", desc: "Chocolate, caramel, vanilla or strawberry." },
      { name: "Green Lagoon Smoothie", price: "10.50", desc: "Spinach, pineapple, cucumber, mint & coconut water." },
    ],
  },
];

/** Menu preview with interactive tabs (home.md §7). */
export default function MenuPreview() {
  const [active, setActive] = useState(TABS[0].id);
  const tab = TABS.find((t) => t.id === active)!;

  return (
    <section className="section-pad bg-cream-warm">
      <div className="container-site">
        <SectionHeading
          eyebrow="The Menu"
          title={
            <>
              Something for <em className="italic text-caramel">every craving.</em>
            </>
          }
        />

        {/* Tab bar */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-10%" }}
          transition={{ staggerChildren: 0.06 }}
          className="mt-10 flex flex-wrap justify-center gap-3"
          role="tablist"
          aria-label="Menu categories"
        >
          {TABS.map((t) => (
            <motion.button
              key={t.id}
              variants={{
                hidden: { opacity: 0, y: 16 },
                show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: EASE } },
              }}
              role="tab"
              aria-selected={active === t.id}
              onClick={() => setActive(t.id)}
              className={cn(
                "relative rounded-full border px-5 py-2.5 font-sans text-[13px] font-semibold uppercase tracking-[0.12em] transition-colors duration-300",
                active === t.id
                  ? "border-navy bg-navy text-cream"
                  : "border-navy/30 bg-transparent text-navy hover:border-navy",
              )}
            >
              {t.label}
              {active === t.id && (
                <motion.span
                  layoutId="tab-underline"
                  className="absolute -bottom-[3px] left-1/2 h-[2px] w-8 -translate-x-1/2 bg-gold"
                />
              )}
            </motion.button>
          ))}
        </motion.div>

        {/* Rows */}
        <div className="mx-auto mt-10 max-w-5xl">
          <AnimatePresence mode="wait">
            <motion.ul
              key={tab.id}
              initial="hidden"
              animate="show"
              exit={{ opacity: 0, y: -12, transition: { duration: 0.2 } }}
              transition={{ staggerChildren: 0.05 }}
              className="grid grid-cols-1 gap-x-12 gap-y-2 md:grid-cols-2"
            >
              {tab.items.map((item) => (
                <motion.li
                  key={item.name}
                  variants={{
                    hidden: { opacity: 0, y: 24 },
                    show: { opacity: 1, y: 0, transition: { duration: 0.35, ease: EASE } },
                  }}
                  className="group rounded-xl px-4 py-4 transition-colors duration-300 hover:bg-cream"
                >
                  <div className="flex items-baseline gap-3">
                    <span className="font-display text-[1.375rem] font-semibold leading-[1.15] text-espresso">
                      {item.name}
                    </span>
                    {item.signature && (
                      <span className="inline-flex translate-y-[-2px] items-center gap-1 rounded-full bg-caramel/15 px-2 py-0.5 font-sans text-[10px] font-semibold uppercase tracking-[0.12em] text-caramel">
                        <Star className="h-2.5 w-2.5 fill-caramel" />
                        signature
                      </span>
                    )}
                    <span className="dotted-leader mx-1 flex-1 transition-colors duration-300 group-hover:border-[rgba(59,42,30,0.6)]" />
                    {item.price && (
                      <span className="tnum font-sans text-base font-semibold text-caramel transition-transform duration-300 group-hover:translate-x-1">
                        ${item.price}
                      </span>
                    )}
                  </div>
                  <p className="mt-1 font-sans text-sm leading-relaxed text-navy-ink/70">
                    {item.desc}
                  </p>
                </motion.li>
              ))}
            </motion.ul>
          </AnimatePresence>

          <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-8">
            <Link to="/menu" className="btn-navy group">
              Full Menu &amp; Prices
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
            </Link>
            <a
              href={SITE.bopple}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 font-sans text-sm font-semibold text-navy underline decoration-gold decoration-2 underline-offset-4 transition-colors hover:text-caramel"
            >
              Order ahead on Bopple
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
