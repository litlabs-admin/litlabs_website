import styles from "./Logo.module.css";

/**
 * LitLabs brand lockup: the "spark" mark (indigo gradient) + "Lit Labs"
 * wordmark. Recreated from litlabs.io (the brand has no logo image file).
 */
export default function Logo({
  light = false,
  size = 24,
}: {
  light?: boolean;
  size?: number;
}) {
  return (
    <span className={styles.logo}>
      <svg
        className={styles.spark}
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient
            id="litspark"
            x1="4"
            y1="2"
            x2="20"
            y2="22"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#A1ADFF" />
            <stop offset="1" stopColor="#6F84ED" />
          </linearGradient>
        </defs>
        <path
          d="M12 2c.5 4.2 1.8 5.5 6 6-4.2.5-5.5 1.8-6 6-.5-4.2-1.8-5.5-6-6 4.2-.5 5.5-1.8 6-6Z"
          fill="url(#litspark)"
        />
        <path
          d="M18.5 13.5c.2 1.7.7 2.2 2.4 2.4-1.7.2-2.2.7-2.4 2.4-.2-1.7-.7-2.2-2.4-2.4 1.7-.2 2.2-.7 2.4-2.4Z"
          fill="#fff"
          fillOpacity="0.85"
        />
      </svg>
      <span
        className={styles.wordmark}
        style={light ? { color: "var(--color-white)" } : undefined}
      >
        Lit Labs
      </span>
    </span>
  );
}
