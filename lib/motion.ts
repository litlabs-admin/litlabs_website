import type { Variants, Transition } from "motion/react";

// Framer's default entrance easing (tween) — approximated from the export.
export const EASE_OUT: [number, number, number, number] = [0.27, 0, 0.51, 1];

export const revealTransition: Transition = {
  duration: 0.6,
  ease: EASE_OUT,
};

// Fade + slide-up on viewport enter (used across sections).
export const revealUp: Variants = {
  hidden: { opacity: 0.001, y: 50 },
  visible: { opacity: 1, y: 0, transition: revealTransition },
};

// Container that staggers its children.
export const staggerContainer = (stagger = 0.08, delay = 0): Variants => ({
  hidden: {},
  visible: {
    transition: { staggerChildren: stagger, delayChildren: delay },
  },
});

// Word-by-word headline entrance (blur + slide).
export const wordReveal: Variants = {
  hidden: {
    opacity: 0.001,
    y: 10,
    filter: "blur(10px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: EASE_OUT },
  },
};

// Shared viewport config so reveals only fire once, slightly before fully in view.
export const VIEWPORT = { once: true, amount: 0.2, margin: "0px 0px -10% 0px" };
