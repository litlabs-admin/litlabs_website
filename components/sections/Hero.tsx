"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { HERO } from "@/lib/content";
import { EASE_OUT } from "@/lib/motion";
import Button from "@/components/ui/Button";
import AnimatedHeading from "@/components/ui/AnimatedHeading";
import HeroVisual from "./HeroVisual";
import styles from "./Hero.module.css";

const appear = (delay: number) => ({
  initial: { opacity: 0.001, y: 12 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: EASE_OUT, delay },
});

export default function Hero() {
  return (
    <section className={styles.section} id="hero">
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.textWrapper}>
            <motion.div className={styles.contentTop} {...appear(0.05)}>
              <div className={styles.avatars}>
                {HERO.avatars.map((src, i) => (
                  <span className={styles.avatar} key={i}>
                    <Image src={src} alt="" width={40} height={40} />
                  </span>
                ))}
              </div>
              <span className={`t-eyebrow ${styles.eyebrowText}`}>
                {HERO.eyebrow}
              </span>
            </motion.div>

            <AnimatedHeading
              as="h1"
              className={`t-hero ${styles.title}`}
              segments={[
                { text: HERO.titleLine1 },
                { text: HERO.titleAccent, color: "var(--color-accent)" },
              ]}
            />
          </div>

          <div className={styles.descCol}>
            <motion.p
              className={`t-desc ${styles.description}`}
              {...appear(0.15)}
            >
              {HERO.description}
            </motion.p>
            <motion.div className={styles.ctaWrapper} {...appear(0.25)}>
              <Button href={HERO.primaryCta.href} variant="primary">
                {HERO.primaryCta.label}
              </Button>
              <Button
                href={HERO.secondaryCta.href}
                variant="secondary"
                icon={false}
              >
                {HERO.secondaryCta.label}
              </Button>
            </motion.div>
          </div>
        </div>

        <motion.div
          className={styles.shotWrapper}
          initial={{ opacity: 0.001, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: EASE_OUT }}
        >
          <div className={styles.shot}>
            <HeroVisual />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
