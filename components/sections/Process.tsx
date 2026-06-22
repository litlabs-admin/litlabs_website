"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { PROCESS } from "@/lib/content";
import { EASE_OUT } from "@/lib/motion";
import Eyebrow from "@/components/ui/Eyebrow";
import AnimatedHeading from "@/components/ui/AnimatedHeading";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import Collapse from "@/components/ui/Collapse";
import styles from "./Process.module.css";

export default function Process() {
  const [active, setActive] = useState(0);
  const step = PROCESS.steps[active];

  return (
    <section className={styles.section} id="our-process">
      <div className={styles.container}>
        <div className={styles.titleBlock}>
          <div className={styles.titleLeft}>
            <Reveal>
              <Eyebrow light>{PROCESS.eyebrow}</Eyebrow>
            </Reveal>
            <AnimatedHeading
              as="h2"
              className={`t-h2 ${styles.titleHeading}`}
              segments={[
                { text: "From first call to fully", color: "#fff" },
                { text: "deployed in weeks.", color: "#fff" },
              ]}
            />
          </div>
          <Reveal className={styles.titleDesc} delay={0.1}>
            <p className="t-desc" style={{ color: "var(--gray-d1)" }}>
              {PROCESS.description}
            </p>
          </Reveal>
        </div>

        <div className={styles.divider} />

        <div className={styles.tab}>
          <div className={styles.steps}>
            {PROCESS.steps.map((s, i) => {
              const open = i === active;
              return (
                <div
                  key={s.num}
                  className={styles.step}
                  onClick={() => setActive(i)}
                >
                  <div className={styles.stepHeader}>
                    <div className={styles.stepHeaderLeft}>
                      <span className={styles.stepIcon}>
                        <span className={styles.stepIconGlyph} />
                      </span>
                      <span className={`t-body-lg ${styles.stepTitle}`}>
                        {s.title}
                      </span>
                    </div>
                    <span className={`t-mono-lg ${styles.stepNum}`}>
                      {s.num}
                    </span>
                  </div>
                  <Collapse open={open}>
                    <div className={styles.stepBody}>
                      <p className={`t-body-sm ${styles.stepDesc}`}>
                        {s.description}
                      </p>
                      <Button href={PROCESS.cta.href} variant="primary">
                        {PROCESS.cta.label}
                      </Button>
                    </div>
                  </Collapse>
                </div>
              );
            })}
          </div>

          <div className={styles.graphic}>
            <Image
              src={step.graphicOuter}
              alt=""
              fill
              className={styles.graphicBg}
              sizes="530px"
            />
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                className={styles.graphicInner}
                initial={{ opacity: 0.001, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0.001, y: -16 }}
                transition={{ duration: 0.4, ease: EASE_OUT }}
              >
                <Image
                  src={step.graphicInner}
                  alt={`${step.title} illustration`}
                  width={1278}
                  height={1001}
                  sizes="450px"
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
