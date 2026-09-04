"use client";

import { ReactLenis, useLenis } from "lenis/react";
import { usePathname } from "next/navigation";
import { useEffect, type ReactNode } from "react";

/**
 * Resets Lenis's virtual scroll to the top on every route change.
 *
 * Lenis persists as a single instance across App Router navigations (it's
 * mounted once here in the root layout), so its internal momentum/target
 * state doesn't reset on its own. Next.js resets the native scrollTop
 * instantly on navigation, but Lenis's own rAF loop keeps running with its
 * stale pre-navigation state (target position and any residual wheel
 * momentum) and re-derives a scroll position from it on the next tick —
 * dragging the new page back toward the old scroll position before slowly
 * settling at the top over several hundred ms. A plain `scrollTo(0,
 * {immediate:true})` isn't enough to stop that: it snaps the position but
 * doesn't clear the in-flight momentum driving the next tick. Fully
 * stopping Lenis, forcing the native reset, then restarting it makes it
 * re-sync from the real (now-zero) scrollTop with zero velocity.
 *
 * Skipped when the URL carries a hash so in-page anchor navigation
 * (useAnchorScroll) keeps control of where the page lands.
 */
function ScrollToTopOnNavigate() {
  const lenis = useLenis();
  const pathname = usePathname();

  useEffect(() => {
    if (window.location.hash) return;
    if (!lenis) return;
    lenis.stop();
    window.scrollTo(0, 0);
    lenis.scrollTo(0, { immediate: true });
    lenis.start();
    // A scroll that was still in flight the instant navigation committed
    // (e.g. momentum from the previous page, or the browser's own
    // scrollIntoView on the clicked link) can resume once Lenis restarts.
    // Re-assert the reset one frame later so it always wins.
    requestAnimationFrame(() => lenis.scrollTo(0, { immediate: true }));
  }, [pathname, lenis]);

  return null;
}

/**
 * Global Lenis smooth-scroll wrapper (matches the Framer site's Lenis setup).
 * Uses `root` so it drives window scrolling.
 */
export default function LenisProvider({ children }: { children: ReactNode }) {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.1,
        duration: 1.2,
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 1.5,
      }}
    >
      <ScrollToTopOnNavigate />
      {children}
    </ReactLenis>
  );
}
