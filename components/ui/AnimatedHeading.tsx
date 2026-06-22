"use client";

import { Fragment } from "react";
import { motion } from "motion/react";
import { wordReveal, staggerContainer, VIEWPORT } from "@/lib/motion";

export type HeadingSegment = {
  text: string;
  /** CSS color value (e.g. var(--color-accent)); defaults to inherit */
  color?: string;
};

type AnimatedHeadingProps = {
  segments: HeadingSegment[];
  className?: string;
  as?: "h1" | "h2" | "h3";
  align?: "left" | "center";
  stagger?: number;
};

/**
 * Word-by-word blur + slide-in heading (matches Framer's headline appear).
 * Each segment renders on its own line and can carry its own color.
 */
export default function AnimatedHeading({
  segments,
  className = "",
  as = "h2",
  align = "left",
  stagger = 0.06,
}: AnimatedHeadingProps) {
  const Tag = motion[as];
  return (
    <Tag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT}
      variants={staggerContainer(stagger)}
      style={{
        display: "flex",
        flexWrap: "wrap",
        columnGap: "0.28em",
        rowGap: 0,
        justifyContent: align === "center" ? "center" : "flex-start",
        textAlign: align,
      }}
    >
      {segments.map((seg, si) => (
        <Fragment key={si}>
          {si > 0 && (
            <span aria-hidden="true" style={{ flexBasis: "100%", height: 0 }} />
          )}
          {seg.text.split(" ").map((word, wi) => (
            <motion.span
              key={`${si}-${wi}`}
              variants={wordReveal}
              style={{
                display: "inline-block",
                color: seg.color ?? "inherit",
                willChange: "transform, filter, opacity",
              }}
            >
              {word}
            </motion.span>
          ))}
        </Fragment>
      ))}
    </Tag>
  );
}
