"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";
import { VIEWPORT } from "@/lib/motion";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  /** distance to slide up from (defaults to 50, matching Framer) */
  y?: number;
  as?: "div" | "span" | "li" | "section";
};

/**
 * Scroll-triggered fade + slide-up wrapper. Mirrors the Framer
 * "appear" effect: opacity 0.001 → 1, translateY(50px) → 0.
 */
export default function Reveal({
  children,
  className,
  delay = 0,
  y = 50,
  as = "div",
}: RevealProps) {
  const MotionTag = motion[as];
  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT}
      variants={{
        hidden: { opacity: 0.001, y },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, ease: [0.27, 0, 0.51, 1], delay },
        },
      }}
    >
      {children}
    </MotionTag>
  );
}
