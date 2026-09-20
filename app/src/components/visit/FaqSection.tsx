import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import SectionHeading from "@/components/SectionHeading";

const FAQS = [
  {
    q: "Do you serve breakfast all day?",
    a: "Yes — the full breakfast menu runs from open to close, seven days. Big Breakfast at 2:45pm? Absolutely.",
  },
  {
    q: "What coffee do you use?",
    a: "Award-winning Campos Coffee, poured on our La Marzocco. We also do a chai that's been called Australia's favourite.",
  },
  {
    q: "Can I order ahead?",
    a: "Yes — order on Bopple or Hey You and skip the queue, or get delivery via Uber Eats and DoorDash.",
  },
  {
    q: "Is there parking?",
    a: "Free undercover parking at Dapto Mall, off the Princes Highway. We're on the Ground Floor near Coles.",
  },
  {
    q: "Do you cater for kids?",
    a: "We do — kids' menu items, babycinos, and a team that's famously patient with little ones (our reviewers say so).",
  },
  {
    q: "When is Mum's Café Day?",
    a: "Every second Tuesday of the month — mums with prams get a free coffee on us.",
  },
];

/** FAQ accordion (visit.md §6). */
export default function FaqSection() {
  return (
    <section className="section-pad bg-cream-warm">
      {/* Answer body fade-up after expansion */}
      <style>{`
        .visit-faq-content[data-state="open"] > div {
          animation: visit-faq-fade 0.4s cubic-bezier(0.22, 1, 0.36, 1) 0.05s both;
        }
        @keyframes visit-faq-fade {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @media (prefers-reduced-motion: reduce) {
          .visit-faq-content[data-state="open"] > div { animation: none; }
        }
      `}</style>

      <div className="container-site">
        <SectionHeading
          eyebrow="Good to Know"
          title={
            <>
              Quick <em className="italic text-caramel">answers.</em>
            </>
          }
        />
        <div className="mx-auto mt-12 max-w-[800px]">
          <Accordion type="single" collapsible defaultValue="item-0">
            {FAQS.map((f, i) => (
              <AccordionItem
                key={f.q}
                value={`item-${i}`}
                className="border-b border-gold/30 last:border-b-0"
              >
                <AccordionTrigger className="py-5 font-display text-[1.375rem] font-semibold leading-[1.15] text-espresso transition-colors hover:text-caramel hover:no-underline [&>svg]:size-5 [&>svg]:text-gold [&>svg]:transition-transform [&>svg]:duration-300">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="visit-faq-content font-sans text-base leading-[1.7] text-navy-ink/80 [animation-duration:0.35s]">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
