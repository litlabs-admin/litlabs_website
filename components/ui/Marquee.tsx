import type { ReactNode } from "react";
import styles from "./Marquee.module.css";

type MarqueeProps = {
  children: ReactNode;
  /** seconds for one full loop */
  duration?: number;
  gap?: number;
  className?: string;
  reverse?: boolean;
};

/**
 * Infinite horizontal ticker. Renders the children twice and translates the
 * track by -50% so the loop is seamless.
 */
export default function Marquee({
  children,
  duration = 30,
  gap = 64,
  className = "",
  reverse = false,
}: MarqueeProps) {
  return (
    <div
      className={`${styles.viewport} ${className}`}
      style={
        {
          "--marquee-duration": `${duration}s`,
          "--marquee-gap": `${gap}px`,
          "--marquee-direction": reverse ? "reverse" : "normal",
        } as React.CSSProperties
      }
    >
      <div className={styles.track}>
        <div className={styles.group}>{children}</div>
        <div className={styles.group} aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}
