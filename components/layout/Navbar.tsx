"use client";

import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { NAV_LINKS, CAL_LINK } from "@/lib/content";
import { useAnchorScroll } from "@/lib/useAnchorScroll";
import Button from "@/components/ui/Button";
import Logo from "@/components/ui/Logo";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const onAnchor = useAnchorScroll(80);

  return (
    <header className={styles.nav}>
      <div className={styles.inner}>
        <Link href="/" className={styles.logo} aria-label="LitLabs home">
          <Logo />
        </Link>

        <nav className={`${styles.links} ${styles.desktopOnly}`}>
          {NAV_LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className={`${styles.link} t-eyebrow`}
              onClick={onAnchor(l.href)}
            >
              <span className={styles.linkTrack}>
                <span>{l.label}</span>
                <span aria-hidden="true">{l.label}</span>
              </span>
            </a>
          ))}
        </nav>

        <div className={styles.desktopOnly}>
          <Button href={CAL_LINK} variant="alt">
            Book a call
          </Button>
        </div>

        <button
          type="button"
          className={`${styles.hamburger} ${open ? styles.open : ""}`}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            className={styles.mobileMenu}
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            transition={{ duration: 0.35, ease: [0.27, 0, 0.51, 1] }}
          >
            <div className={styles.mobileMenuInner}>
              {NAV_LINKS.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  className={`${styles.mobileLink} t-eyebrow`}
                  onClick={(e) => {
                    onAnchor(l.href)(e);
                    setOpen(false);
                  }}
                >
                  {l.label}
                </a>
              ))}
              <div className={styles.mobileCta}>
                <Button href={CAL_LINK} variant="primary" fullWidth>
                  Book a call
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
