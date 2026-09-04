"use client";

import { useState } from "react";
import Eyebrow from "@/components/ui/Eyebrow";
import Reveal from "@/components/ui/Reveal";
import Collapse from "@/components/ui/Collapse";
import styles from "./ArticleFaq.module.css";

export default function ArticleFaq({
  items,
}: {
  items: { q: string; a: string }[];
}) {
  const [open, setOpen] = useState(0);

  return (
    <Reveal className={styles.section}>
      <Eyebrow>FAQ</Eyebrow>
      <h2 className={`t-h4 ${styles.title}`}>Frequently asked questions</h2>
      <div className={styles.list}>
        {items.map((item, i) => {
          const isOpen = i === open;
          return (
            <div
              key={item.q}
              className={`${styles.item} ${isOpen ? styles.open : ""}`}
            >
              <button
                type="button"
                className={styles.qBtn}
                aria-expanded={isOpen}
                onClick={() => setOpen(isOpen ? -1 : i)}
              >
                <span className={`t-body-lg ${styles.qText}`}>{item.q}</span>
                <span className={styles.toggle} aria-hidden="true" />
              </button>
              <Collapse open={isOpen}>
                <p className={`t-desc ${styles.answer}`}>{item.a}</p>
              </Collapse>
            </div>
          );
        })}
      </div>
    </Reveal>
  );
}
