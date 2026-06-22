import Image from "next/image";
import { SINGLE_TESTIMONIAL } from "@/lib/content";
import AnimatedHeading from "@/components/ui/AnimatedHeading";
import Reveal from "@/components/ui/Reveal";
import styles from "./SingleTestimonial.module.css";

export default function SingleTestimonial() {
  const t = SINGLE_TESTIMONIAL;
  return (
    <section className={styles.section}>
      <div className={styles.box}>
        <Image
          src={t.bgImage}
          alt=""
          fill
          className={styles.bg}
          sizes="(max-width: 1400px) 100vw, 1400px"
        />
        <div className={styles.scrim} />
        <div className={styles.content}>
          <Reveal>
            <span className={styles.quoteIcon} aria-hidden="true">
              &ldquo;
            </span>
          </Reveal>
          <AnimatedHeading
            as="h2"
            align="center"
            className={`t-h4 ${styles.quote}`}
            segments={[{ text: t.quote, color: "#fff" }]}
            stagger={0.04}
          />
          <Reveal delay={0.15}>
            <div className={styles.author}>
              <span className={styles.avatar}>
                <Image src={t.avatar} alt={t.author} width={55} height={55} />
              </span>
              <div>
                <p className={`t-body ${styles.name}`}>{t.author}</p>
                <p className={`t-body-sm ${styles.role}`}>{t.title}</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
