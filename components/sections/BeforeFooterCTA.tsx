import { BEFORE_FOOTER } from "@/lib/content";
import Eyebrow from "@/components/ui/Eyebrow";
import AnimatedHeading from "@/components/ui/AnimatedHeading";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import styles from "./BeforeFooterCTA.module.css";

export default function BeforeFooterCTA() {
  return (
    <section className={styles.section}>
      <div className={styles.box}>
        <div className={styles.content}>
          <Reveal>
            <Eyebrow light>{BEFORE_FOOTER.eyebrow}</Eyebrow>
          </Reveal>
          <AnimatedHeading
            as="h2"
            align="center"
            className={`t-display ${styles.title}`}
            segments={[{ text: BEFORE_FOOTER.title, color: "#fff" }]}
          />
          <Reveal delay={0.1}>
            <p className={`t-desc ${styles.desc}`}>
              {BEFORE_FOOTER.description}
            </p>
          </Reveal>
          <Reveal delay={0.18} className={styles.cta}>
            <Button href={BEFORE_FOOTER.cta.href} variant="primary">
              {BEFORE_FOOTER.cta.label}
            </Button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
