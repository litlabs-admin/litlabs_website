"use client";

import { useState } from "react";
import Image from "next/image";
import { INDUSTRIES, SERVICES_EYEBROW } from "@/lib/content";
import SectionHeader from "@/components/ui/SectionHeader";
import Reveal from "@/components/ui/Reveal";
import styles from "./Services.module.css";

export default function Services() {
  const [active, setActive] = useState(0);

  return (
    <section className={styles.section} id="services">
      <div className={styles.container}>
        <SectionHeader
          eyebrow={SERVICES_EYEBROW}
          segments={[
            { text: "AI systems built around how your" },
            { text: "business already works" },
          ]}
        />

        <Reveal className={styles.row} y={40}>
          {INDUSTRIES.map((ind, i) => (
            <div
              key={ind.name}
              className={`${styles.card} ${i === active ? styles.active : ""}`}
              onMouseEnter={() => setActive(i)}
              onClick={() => setActive(i)}
            >
              <div className={styles.bg}>
                <Image
                  src={ind.image}
                  alt=""
                  fill
                  sizes="(max-width: 809.98px) 100vw, 460px"
                />
                <div className={styles.overlay} />
              </div>

              <div className={styles.content}>
                <h3 className={`t-h6 ${styles.cardTitle}`}>{ind.name}</h3>
                <p className={`t-body-sm ${styles.cardDesc}`}>
                  {ind.description}
                </p>
              </div>

              <div className={styles.stats}>
                {ind.stats.map((s) => (
                  <div className={styles.stat} key={s}>
                    <span className={styles.statIcon} aria-hidden="true" />
                    <span className={`t-eyebrow ${styles.statText}`}>{s}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
