import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Instagram, Facebook, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import { SITE } from "@/lib/site";

const LINKS = [
  { to: "/", label: "Home" },
  { to: "/menu", label: "Menu" },
  { to: "/about", label: "About" },
  { to: "/gallery", label: "Gallery" },
  { to: "/visit", label: "Visit" },
];

export function LogoLockup({ className }: { className?: string }) {
  return (
    <span className={cn("flex flex-col leading-none", className)}>
      <span className="font-display text-[1.65rem] font-semibold tracking-[0.06em] text-cream">
        ARIEL'S
      </span>
      <span className="mt-1 font-sans text-[9px] font-semibold uppercase tracking-[0.3em] text-gold">
        Dapto · Est 2015
      </span>
    </span>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile overlay when a link is tapped.
  const close = () => setOpen(false);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 z-50 w-full transition-all duration-400 ease-out-expo",
          scrolled
            ? "border-b border-[rgba(192,163,78,0.25)] bg-[rgba(8,44,82,0.92)] backdrop-blur-md"
            : "border-b border-transparent bg-transparent",
        )}
      >
        <div className="container-site flex h-16 items-center justify-between md:h-20">
          <Link to="/" aria-label="Ariel's Dapto — home">
            <LogoLockup />
          </Link>

          <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
            {LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                className={({ isActive }) =>
                  cn(
                    "nav-link font-sans text-[13px] font-semibold uppercase tracking-[0.14em] transition-colors duration-300",
                    isActive ? "active text-gold" : "text-cream/90 hover:text-cream",
                  )
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <a
              href={SITE.bopple}
              target="_blank"
              rel="noreferrer"
              className="btn-gold hidden !py-2.5 !px-6 text-xs md:inline-flex"
            >
              Order Online
              <ArrowUpRight className="h-4 w-4" />
            </a>

            {/* Hamburger — two gold bars */}
            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="relative flex h-10 w-10 items-center justify-center lg:hidden"
            >
              <span
                className={cn(
                  "absolute h-[2px] w-7 bg-gold transition-all duration-300",
                  open ? "rotate-45" : "-translate-y-[5px]",
                )}
              />
              <span
                className={cn(
                  "absolute h-[2px] w-7 bg-gold transition-all duration-300",
                  open ? "-rotate-45" : "translate-y-[5px]",
                )}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Full-screen mobile menu overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grain fixed inset-0 z-40 flex flex-col bg-navy-deep pt-24 lg:hidden"
          >
            <nav className="container-site flex flex-1 flex-col justify-center gap-2" aria-label="Mobile">
              {LINKS.map((link, i) => (
                <motion.div
                  key={link.to}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 12 }}
                  transition={{ delay: 0.07 * i, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                >
                  <NavLink
                    to={link.to}
                    end={link.to === "/"}
                    onClick={close}
                    className={({ isActive }) =>
                      cn(
                        "block py-2 font-display text-5xl font-semibold",
                        isActive ? "italic text-gold" : "text-cream",
                      )
                    }
                  >
                    {link.label}
                  </NavLink>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.07 * LINKS.length, duration: 0.4 }}
                className="mt-6"
              >
                <a href={SITE.bopple} target="_blank" rel="noreferrer" className="btn-gold">
                  Order Online <ArrowUpRight className="h-4 w-4" />
                </a>
              </motion.div>
            </nav>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45 }}
              className="container-site flex flex-wrap items-center justify-between gap-4 border-t border-[rgba(192,163,78,0.25)] py-6"
            >
              <div className="font-sans text-xs uppercase tracking-[0.18em] text-cream/60">
                {SITE.hours.short}
              </div>
              <div className="flex items-center gap-3">
                <a
                  href={SITE.phoneHref}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/60 text-gold"
                  aria-label="Call Ariel's Dapto"
                >
                  <Phone className="h-4 w-4" />
                </a>
                <a
                  href={SITE.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/60 text-gold"
                  aria-label="Instagram"
                >
                  <Instagram className="h-4 w-4" />
                </a>
                <a
                  href={SITE.facebook}
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/60 text-gold"
                  aria-label="Facebook"
                >
                  <Facebook className="h-4 w-4" />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
