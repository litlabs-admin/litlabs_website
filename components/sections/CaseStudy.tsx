"use client";

import Image from "next/image";
import { CASE_STUDIES, CASE_STUDY_EYEBROW, CAL_LINK } from "@/lib/content";
import Eyebrow from "@/components/ui/Eyebrow";
import AnimatedHeading from "@/components/ui/AnimatedHeading";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import Carousel from "@/components/ui/Carousel";
import styles from "./CaseStudy.module.css";

export default function CaseStudy() {
  return (
    <section className={styles.section} id="case-study">
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.topContent}>
            <Reveal>
              <Eyebrow>{CASE_STUDY_EYEBROW}</Eyebrow>
            </Reveal>
            <AnimatedHeading
              as="h2"
              className="t-h2"
              segments={[{ text: "Real systems, real outcomes" }]}
            />
          </div>
          <Reveal delay={0.1}>
            <Button href={CAL_LINK} variant="primary">
              Book a call
            </Button>
          </Reveal>
        </div>

        <Reveal y={40} className={styles.carouselWrap}>
          <Carousel perView={1} gap={24} ariaLabel="Case studies">
            {CASE_STUDIES.map((cs) => (
              <article className={styles.card} key={cs.author}>
                <div className={styles.cardContent}>
                  <h3 className={`t-h4 ${styles.headline}`}>{cs.headline}</h3>
                  <div className={styles.cardDivider} />
                  <div className={styles.stats}>
                    {cs.stats.map((s) => (
                      <div className={styles.stat} key={s.label}>
                        <span className={`t-display ${styles.statValue}`}>
                          {s.value}
                        </span>
                        <span className={`t-body-sm ${styles.statLabel}`}>
                          {s.label}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className={styles.testimonial}>
                    <span className={styles.quoteMark} aria-hidden="true">
                      &ldquo;
                    </span>
                    <p className={`t-body ${styles.quote}`}>{cs.quote}</p>
                    <div className={styles.authorCard}>
                      <span className={styles.avatar}>
                        <Image
                          src={cs.avatar}
                          alt={cs.author}
                          width={48}
                          height={48}
                        />
                      </span>
                      <div>
                        <p className={`t-mono-lg ${styles.authorName}`}>
                          {cs.author}
                        </p>
                        <p className={`t-caption ${styles.authorTitle}`}>
                          {cs.authorTitle}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className={styles.cardImage}>
                  <span className={styles.brandLogo}>
                    <Image
                      src={cs.brandLogo}
                      alt=""
                      width={120}
                      height={28}
                    />
                  </span>
                  <div className={styles.imageOverlay} />
                  <Image
                    src={cs.image}
                    alt=""
                    fill
                    className={styles.photo}
                    sizes="(max-width: 809.98px) 100vw, 45vw"
                  />
                </div>
              </article>
            ))}
          </Carousel>
        </Reveal>
      </div>
    </section>
  );
}
