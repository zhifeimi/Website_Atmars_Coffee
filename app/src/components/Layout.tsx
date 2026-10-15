import { Suspense, useEffect } from "react";
import { Outlet, useLocation } from "react-router";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLenis, ScrollTrigger } from "@/hooks/use-lenis";

/**
 * Shared layout (nested-route pattern — renders <Outlet/>, App.tsx uses
 * nested <Route>s).
 *
 * The Navbar is `fixed top-0 z-50` (h-16 mobile / h-20 desktop), so this
 * layout owns the matching top padding on the content slot. Pages never add
 * nav-height offsets themselves; full-bleed heroes opt out inside the page
 * with a negative top margin (-mt-16 md:-mt-20).
 */
export default function Layout() {
  useLenis();
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    // Recalculate pinned/scroll positions after route swap.
    const id = window.setTimeout(() => ScrollTrigger.refresh(), 60);
    return () => window.clearTimeout(id);
  }, [pathname]);

  return (
    <div className="min-h-[100dvh] bg-cream">
      <Navbar />
      <main className="pt-16 md:pt-20">
        {/* Keeps nav/footer mounted while a lazy page chunk loads. */}
        <Suspense fallback={<div className="min-h-[100svh]" />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
