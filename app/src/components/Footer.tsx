import { motion } from "framer-motion";
import { Link } from "react-router";
import { MapPin, Phone, Mail, Instagram, Facebook } from "lucide-react";
import { SITE, getOpenState } from "@/lib/site";
import { LogoLockup } from "@/components/Navbar";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

function OpenBadge() {
  const [state, setState] = useState(() => getOpenState());
  useEffect(() => {
    const id = window.setInterval(() => setState(getOpenState()), 60_000);
    return () => window.clearInterval(id);
  }, []);
  return (
    <span
      className={cn(
        "mt-3 inline-flex items-center gap-2 rounded-full border px-3 py-1 font-sans text-[11px] font-semibold uppercase tracking-[0.16em]",
        state.open
          ? "border-gold/50 text-gold"
          : "border-berry/60 text-[#e2907f]",
      )}
    >
      <span className={cn("h-1.5 w-1.5 rounded-full", state.open ? "bg-gold animate-pulse-dot" : "bg-berry")} />
      {state.open ? "Open now" : "Closed"}
    </span>
  );
}

export default function Footer() {
  return (
    <footer className="grain relative overflow-hidden bg-navy-deep pt-20 pb-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="container-site"
      >
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link to="/" aria-label="Atmars — home">
              <LogoLockup />
            </Link>
            <p className="mt-5 max-w-[26ch] font-display text-lg italic leading-relaxed text-cream/80">
              “{SITE.motto}”
            </p>
          </div>

          {/* Visit */}
          <div>
            <h3 className="font-sans text-xs font-semibold uppercase tracking-[0.28em] text-gold">
              Visit
            </h3>
            <ul className="mt-5 space-y-4 text-sm leading-relaxed text-cream/80">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <span>{SITE.address}</span>
              </li>
              <li>
                <a href={SITE.phoneHref} className="flex gap-3 transition-colors hover:text-gold-soft">
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                  {SITE.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${SITE.email}`} className="flex gap-3 transition-colors hover:text-gold-soft">
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                  {SITE.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="font-sans text-xs font-semibold uppercase tracking-[0.28em] text-gold">
              Hours
            </h3>
            <ul className="mt-5 space-y-2 text-sm text-cream/80">
              <li className="flex justify-between gap-6">
                <span>Mon &amp; Sun</span>
                <span className="tnum">{SITE.hours.monSun}</span>
              </li>
              <li className="flex justify-between gap-6">
                <span>Tue – Sat</span>
                <span className="tnum">{SITE.hours.tueSat}</span>
              </li>
            </ul>
            <OpenBadge />
          </div>

          {/* Follow */}
          <div>
            <h3 className="font-sans text-xs font-semibold uppercase tracking-[0.28em] text-gold">
              Follow
            </h3>
            <div className="mt-5 flex gap-3">
              <a
                href={SITE.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram — @atmars"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-gold/60 text-gold transition-all duration-300 hover:bg-gold hover:text-navy-ink"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href={SITE.facebook}
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook — Atmars"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-gold/60 text-gold transition-all duration-300 hover:bg-gold hover:text-navy-ink"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
            <p className="mt-5 text-sm text-cream/60">
              @atmars — daily specials, latte art &amp; community love.
            </p>
          </div>
        </div>

        <div className="gold-line mt-14 h-px w-full opacity-60" />

        <div className="mt-6 flex flex-col items-center justify-between gap-3 text-[13px] text-cream/60 sm:flex-row">
          <p>
            © 2025 {SITE.chain}
          </p>
          <p className="font-hand text-xl text-butterscotch">
            A fictional café · demo site only
          </p>
        </div>
      </motion.div>
    </footer>
  );
}
