"use client";

import {
  Children,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { motion, useMotionValue, animate } from "motion/react";
import { EASE_OUT } from "@/lib/motion";
import styles from "./Carousel.module.css";

type CarouselProps = {
  children: React.ReactNode;
  perView?: number;
  perViewTablet?: number;
  perViewPhone?: number;
  gap?: number;
  autoplay?: number; // ms; 0 = off
  controls?: boolean;
  className?: string;
  ariaLabel?: string;
};

export default function Carousel({
  children,
  perView = 1,
  perViewTablet,
  perViewPhone,
  gap = 24,
  autoplay = 0,
  controls = true,
  className = "",
  ariaLabel = "Carousel",
}: CarouselProps) {
  const slides = Children.toArray(children);
  const viewportRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const [pv, setPv] = useState(perView);
  const [page, setPage] = useState(0);
  const [width, setWidth] = useState(0);

  // Responsive perView
  useEffect(() => {
    const compute = () => {
      const w = window.innerWidth;
      if (w <= 809.98) setPv(perViewPhone ?? perViewTablet ?? perView);
      else if (w <= 1199.98) setPv(perViewTablet ?? perView);
      else setPv(perView);
    };
    compute();
    window.addEventListener("resize", compute);
    return () => window.removeEventListener("resize", compute);
  }, [perView, perViewTablet, perViewPhone]);

  const pageCount = Math.max(1, slides.length - pv + 1);

  useEffect(() => {
    const measure = () => setWidth(viewportRef.current?.offsetWidth ?? 0);
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [pv]);

  // slide width in px (one slide + gap)
  const slidePx = width > 0 ? (width - (pv - 1) * gap) / pv + gap : 0;

  const goTo = useCallback(
    (p: number) => {
      const clamped = Math.max(0, Math.min(p, pageCount - 1));
      setPage(clamped);
    },
    [pageCount]
  );

  // Keep page within range when perView (and thus pageCount) changes.
  const safePage = Math.min(page, pageCount - 1);

  // animate track to page
  useEffect(() => {
    const controls = animate(x, -safePage * slidePx, {
      duration: 0.6,
      ease: EASE_OUT,
    });
    return controls.stop;
  }, [safePage, slidePx, x]);

  // autoplay
  useEffect(() => {
    if (!autoplay) return;
    const id = setInterval(() => {
      setPage((p) => (p >= pageCount - 1 ? 0 : p + 1));
    }, autoplay);
    return () => clearInterval(id);
  }, [autoplay, pageCount]);

  const onDragEnd = (
    _e: unknown,
    info: { offset: { x: number }; velocity: { x: number } }
  ) => {
    const threshold = slidePx / 3;
    if (info.offset.x < -threshold || info.velocity.x < -400) goTo(page + 1);
    else if (info.offset.x > threshold || info.velocity.x > 400)
      goTo(page - 1);
    else goTo(page);
  };

  return (
    <div
      className={`${styles.root} ${className}`}
      role="group"
      aria-roledescription="carousel"
      aria-label={ariaLabel}
    >
      <div
        className={styles.viewport}
        ref={viewportRef}
        style={
          {
            "--per-view": pv,
            "--carousel-gap": `${gap}px`,
          } as React.CSSProperties
        }
      >
        <motion.div
          className={styles.track}
          style={{ x }}
          drag="x"
          dragConstraints={{
            left: -(pageCount - 1) * slidePx,
            right: 0,
          }}
          dragElastic={0.08}
          onDragEnd={onDragEnd}
        >
          {slides.map((slide, i) => (
            <div className={styles.slide} key={i}>
              {slide}
            </div>
          ))}
        </motion.div>
      </div>

      {controls && pageCount > 1 && (
        <div className={styles.controls}>
          <button
            type="button"
            className={styles.arrow}
            onClick={() => goTo(safePage - 1)}
            disabled={safePage === 0}
            aria-label="Previous"
          >
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M15 18l-6-6 6-6"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <div className={styles.dots}>
            {Array.from({ length: pageCount }).map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Go to slide ${i + 1}`}
                aria-current={i === safePage}
                className={`${styles.dot} ${
                  i === safePage ? styles.dotActive : ""
                }`}
                onClick={() => goTo(i)}
              />
            ))}
          </div>
          <button
            type="button"
            className={styles.arrow}
            onClick={() => goTo(safePage + 1)}
            disabled={safePage === pageCount - 1}
            aria-label="Next"
          >
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M9 6l6 6-6 6"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}
