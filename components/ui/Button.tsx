import Link from "next/link";
import type { ReactNode } from "react";
import styles from "./Button.module.css";

type Variant = "primary" | "secondary" | "alt" | "ghost";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: Variant;
  icon?: boolean;
  fullWidth?: boolean;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
};

function Inner({ children, icon }: { children: ReactNode; icon?: boolean }) {
  return (
    <>
      <span className={styles.label}>{children}</span>
      {icon && (
        <span className={styles.iconWrap} aria-hidden="true">
          <span className={styles.iconTrack}>
            <span className={styles.icon} />
            <span className={styles.icon} />
          </span>
        </span>
      )}
    </>
  );
}

export default function Button({
  children,
  href,
  variant = "primary",
  icon = true,
  fullWidth = false,
  className = "",
  onClick,
  type = "button",
}: ButtonProps) {
  const cls = [
    styles.btn,
    styles[variant],
    fullWidth ? styles.fullWidth : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if (href) {
    const isAnchor = href.startsWith("#");
    const isExternal = /^(https?:|mailto:|tel:)/.test(href);
    if (isAnchor || isExternal) {
      return (
        <a
          href={href}
          className={cls}
          onClick={onClick}
          {...(isExternal && href.startsWith("http")
            ? { target: "_blank", rel: "noopener noreferrer" }
            : {})}
        >
          <Inner icon={icon}>{children}</Inner>
        </a>
      );
    }
    return (
      <Link href={href} className={cls} onClick={onClick}>
        <Inner icon={icon}>{children}</Inner>
      </Link>
    );
  }

  return (
    <button type={type} className={cls} onClick={onClick}>
      <Inner icon={icon}>{children}</Inner>
    </button>
  );
}
