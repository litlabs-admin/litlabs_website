import styles from "./Eyebrow.module.css";

export default function Eyebrow({
  children,
  className = "",
  light = false,
}: {
  children: React.ReactNode;
  className?: string;
  light?: boolean;
}) {
  return (
    <span className={`${styles.eyebrow} ${className}`}>
      <span className={styles.dot} />
      <span
        className={`t-eyebrow ${styles.label}`}
        style={light ? { color: "var(--color-white)" } : undefined}
      >
        {children}
      </span>
    </span>
  );
}
