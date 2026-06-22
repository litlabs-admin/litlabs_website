"use client";

import { useState } from "react";
import { FAQ_EYEBROW, FAQ_GROUPS } from "@/lib/content";
import Eyebrow from "@/components/ui/Eyebrow";
import AnimatedHeading from "@/components/ui/AnimatedHeading";
import Reveal from "@/components/ui/Reveal";
import Collapse from "@/components/ui/Collapse";
import styles from "./FAQ.module.css";

export default function FAQ() {
  const [tab, setTab] = useState(0);
  const [open, setOpen] = useState(0);

  return (
    <section className={styles.section} id="faq">
      <div className={styles.container}>
        <div className={styles.head}>
          <Reveal>
            <Eyebrow>{FAQ_EYEBROW}</Eyebrow>
          </Reveal>
          <AnimatedHeading
            as="h2"
            align="center"
            className={`t-h2 ${styles.title}`}
            segments={[{ text: "Get the answers you need to move forward" }]}
          />
        </div>

        <div className={styles.inner}>
          <div className={styles.tabs} role="tablist">
            {FAQ_GROUPS.map((g, i) => (
              <button
                key={g.tab}
                type="button"
                role="tab"
                aria-selected={i === tab}
                className={`${styles.tab} ${i === tab ? styles.tabActive : ""}`}
                onClick={() => {
                  setTab(i);
                  setOpen(0);
                }}
              >
                <span className={styles.tabIcon} aria-hidden="true" />
                <span className="t-eyebrow" style={{ color: "inherit" }}>
                  {g.tab}
                </span>
              </button>
            ))}
          </div>

          <div className={styles.list}>
            {FAQ_GROUPS[tab].items.map((item, i) => {
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
                    <span className={`t-body-lg ${styles.qText}`}>
                      {item.q}
                    </span>
                    <span className={styles.toggle} aria-hidden="true" />
                  </button>
                  <Collapse open={isOpen}>
                    {item.a && (
                      <p className={`t-desc ${styles.answer}`}>{item.a}</p>
                    )}
                  </Collapse>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
