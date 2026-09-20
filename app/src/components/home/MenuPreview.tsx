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
      { name: "Eggs on Toast", price: "13.90", desc: "Free-range eggs your way on Brasserie sourdough." },
      { name: "Big Breakfast", price: "15.90", desc: "Eggs, bacon, chorizo, hash brown, tomato, spinach & mushrooms." },
      { name: "Ariel's Bacon & Egg Roll", price: "15.90", desc: "Way more elevated than your regular bacon & egg." },
      { name: "Avocado Toast", price: "16.90", desc: "Smashed avo, poached egg, dukkah & lemon on sourdough." },
      { name: "Ariel's Benni", price: "18.90", desc: "Poached eggs, wilted spinach & saffron hollandaise.", signature: true },
      { name: "Breakfast Burrito", price: "17.50", desc: "Salsa, avo, rice, corn, beans & cheese — grilled.", signature: true },
    ],
  },
  {
    id: "waffles",
    label: "Waffles & Pancakes",
    items: [
      { name: "Waffle Brekky Stack", price: "20.90", desc: "House waffle, eggs, bacon, hash brown & maple." },
      { name: "Buttermilk Pancakes", price: "18.50", desc: "Stacked with berries & butterscotch sauce. 10/10!!", signature: true },
      { name: "Nutella Waffle", price: "18.50", desc: "Nutella, butterscotch & berry compote, strawberries.", signature: true },
      { name: "Cinnamon Waffles", price: "16.50", desc: "Cinnamon sugar, vanilla ice cream & maple." },
    ],
  },
  {
    id: "lunch",
    label: "Burgers & Lunch",
    items: [
      { name: "Ariel's Cheeseburger", price: "19.90", desc: "100% Aussie Angus, American cheese, pickles, lettuce.", signature: true },
      { name: "Fish & Chips", price: "21.50", desc: "Crispy battered fish, hot chips, tartare & lemon." },
      { name: "Beef Salad Bowl", price: "20.50", desc: "Grilled beef, fresh greens, roast veg & house dressing." },
      { name: "Sandwiches & Wraps", price: "12.50", desc: "Made fresh daily — ask what's in the cabinet." },
    ],
  },
  {
    id: "drinks",
    label: "Drinks",
    items: [
      { name: "Cappuccino", price: "5.00", desc: "Campos beans, poured on the La Marzocco." },
      { name: "Latte", price: "5.00", desc: "Silky steamed milk over a double ristretto." },
      { name: "Iced Coffee", price: "8.50", desc: "Double shot, cold milk, ice cream & whipped cream." },
      { name: "Fresh Orange Juice", price: "9.00", desc: "Squeezed to order, nothing added." },
      { name: "Milkshake", price: "7.50", desc: "Thick, old-school — chocolate, caramel or vanilla." },
      { name: "Evergreen Smoothie", price: "9.50", desc: "Spinach, mango, banana, coconut water & lime." },
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
