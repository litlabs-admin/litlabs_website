"use client";

import Image from "next/image";
import { TESTIMONIALS, TESTIMONIALS_EYEBROW } from "@/lib/content";
import SectionHeader from "@/components/ui/SectionHeader";
import Reveal from "@/components/ui/Reveal";
import Carousel from "@/components/ui/Carousel";
import styles from "./Testimonials.module.css";

function Stars() {
  return (
    <div className={styles.stars} aria-hidden="true">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" fill="currentColor">
          <path d="M10 1.5l2.47 5.26 5.78.62-4.32 3.86 1.2 5.7L10 14.9l-5.13 2.94 1.2-5.7L1.75 7.38l5.78-.62L10 1.5z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className={styles.section} aria-label="Client reviews">
      <div className={styles.container}>
        <SectionHeader
          eyebrow={TESTIMONIALS_EYEBROW}
          segments={[{ text: "What our clients say" }]}
        />

        <Reveal y={40} className={styles.carouselWrap}>
          <Carousel
            perView={3}
            perViewTablet={2}
            perViewPhone={1}
            gap={24}
            autoplay={5000}
            ariaLabel="Client testimonials"
          >
            {TESTIMONIALS.map((t, i) => (
              <blockquote className={styles.card} key={i}>
                <Stars />
                <p className={`t-body-lg ${styles.quote}`}>
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className={styles.author}>
                  <span className={styles.avatar}>
                    <Image
                      src={t.avatar}
                      alt={t.author}
                      width={48}
                      height={48}
                    />
                  </span>
                  <div>
                    <p className={`t-mono-lg ${styles.authorName}`}>
                      {t.author}
                    </p>
                    <p className={`t-caption ${styles.authorTitle}`}>
                      {t.title}
                    </p>
                  </div>
                </div>
              </blockquote>
            ))}
          </Carousel>
        </Reveal>
      </div>
    </section>
  );
}
