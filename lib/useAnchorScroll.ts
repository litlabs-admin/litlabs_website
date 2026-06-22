"use client";

import { useRouter, usePathname } from "next/navigation";
import { useLenis } from "lenis/react";
import { useCallback } from "react";

/**
 * Returns a click handler for in-page anchor links (e.g. "#pricing").
 * Uses Lenis for smooth scroll when on the home page; otherwise routes home
 * then scrolls. The fixed navbar height is used as the scroll offset.
 */
export function useAnchorScroll(navOffset = 80) {
  const lenis = useLenis();
  const router = useRouter();
  const pathname = usePathname();

  return useCallback(
    (href: string) => (e: React.MouseEvent) => {
      if (!href.startsWith("#")) return;
      e.preventDefault();
      const id = href.slice(1);
      if (pathname !== "/") {
        router.push(`/${href}`);
        return;
      }
      const target = document.getElementById(id);
      if (target && lenis) {
        lenis.scrollTo(target, { offset: -navOffset });
      } else if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    },
    [lenis, router, pathname, navOffset]
  );
}
