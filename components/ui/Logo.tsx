import Image from "next/image";
import styles from "./Logo.module.css";

/**
 * Official LitLabs logo — the exact supplied artwork (twin orange pills + the
 * staggered "LIT LABS." lockup), cut out to transparent. Dark-text variant for
 * light surfaces (navbar), white-text variant for dark surfaces (footer).
 */
const LOGO_W = 135;
const LOGO_H = 110;

export default function Logo({
  light = false,
  size = 50,
}: {
  light?: boolean;
  size?: number;
}) {
  const width = Math.round((size * LOGO_W) / LOGO_H);
  return (
    <Image
      className={styles.logo}
      src={light ? "/litlabs-logo-light.png" : "/litlabs-logo-dark.png"}
      alt="Lit Labs"
      width={width}
      height={size}
      priority={!light}
    />
  );
}
