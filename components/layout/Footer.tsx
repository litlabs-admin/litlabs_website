"use client";

import Link from "next/link";
import Image from "next/image";
import { FOOTER } from "@/lib/content";
import { useAnchorScroll } from "@/lib/useAnchorScroll";
import Logo from "@/components/ui/Logo";
import styles from "./Footer.module.css";

function FooterLink({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className: string;
}) {
  const onAnchor = useAnchorScroll(80);
  if (href.startsWith("#")) {
    return (
      <a href={href} className={className} onClick={onAnchor(href)}>
        {children}
      </a>
    );
  }
  if (/^(https?:|mailto:|tel:)/.test(href)) {
    const ext = href.startsWith("http");
    return (
      <a
        href={href}
        className={className}
        {...(ext ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
        <div className={styles.inner}>
          {/* Brand + socials */}
          <div className={`${styles.col} ${styles.brandCol}`}>
            <Link href="/" className={styles.logo} aria-label="LitLabs home">
              <Logo light />
            </Link>
            <div className={styles.socials}>
              {FOOTER.socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className={styles.social}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                >
                  <Image src={s.icon} alt={s.label} width={24} height={24} />
                </a>
              ))}
            </div>
          </div>

          {/* Solutions / Services columns */}
          {FOOTER.columns.map((col) => (
            <Column key={col.title} title={col.title}>
              {col.links.map((l) => (
                <FooterLink
                  key={l.label}
                  href={l.href}
                  className={`${styles.colLink} t-body-sm`}
                >
                  {l.label}
                </FooterLink>
              ))}
            </Column>
          ))}

          {/* Others column */}
          <Column title={FOOTER.others.title}>
            {FOOTER.others.links.map((l) => (
              <FooterLink
                key={l.label}
                href={l.href}
                className={`${styles.colLinkSmall} t-caption`}
              >
                {l.label}
              </FooterLink>
            ))}
          </Column>
        </div>

        <div className={styles.copyright}>
          <p className={`${styles.copyText} t-caption`}>{FOOTER.copyright}</p>
        </div>
      </div>
    </footer>
  );
}

function Column({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <div className={styles.divider} aria-hidden="true" />
      <div className={styles.col}>
        <p className={`${styles.colTitle} t-eyebrow`}>{title}</p>
        <div className={styles.colLinks}>{children}</div>
      </div>
    </>
  );
}
