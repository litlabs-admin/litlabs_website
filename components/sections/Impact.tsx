import { IMPACT } from "@/lib/content";
import Eyebrow from "@/components/ui/Eyebrow";
import AnimatedHeading from "@/components/ui/AnimatedHeading";
import Reveal from "@/components/ui/Reveal";
import CountUp from "@/components/ui/CountUp";
import styles from "./Impact.module.css";

export default function Impact() {
  return (
    <section className={styles.section} id="impact">
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.topContent}>
            <Reveal>
              <Eyebrow>{IMPACT.eyebrow}</Eyebrow>
            </Reveal>
            <AnimatedHeading
              as="h2"
              className="t-h2"
              segments={[{ text: "Outcomes that compound" }]}
            />
          </div>
          <Reveal delay={0.1}>
            <p className={`t-desc ${styles.topDesc}`}>{IMPACT.description}</p>
          </Reveal>
        </div>

        <div className={styles.divider} />

        <div className={styles.stats}>
          {IMPACT.stats.map((s, i) => (
            <Reveal key={i} delay={i * 0.1} className={styles.stat}>
              <span className={styles.statPill}>
                <CountUp
                  className={styles.statNum}
                  value={s.value}
                  prefix={s.prefix}
                  suffix={s.suffix}
                />
              </span>
              <p className={`t-body-sm ${styles.statLabel}`}>{s.label}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
