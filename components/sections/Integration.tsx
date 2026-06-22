import Image from "next/image";
import { INTEGRATION } from "@/lib/content";
import Eyebrow from "@/components/ui/Eyebrow";
import AnimatedHeading from "@/components/ui/AnimatedHeading";
import Reveal from "@/components/ui/Reveal";
import Marquee from "@/components/ui/Marquee";
import styles from "./Integration.module.css";

function LogoCard({ src }: { src: string }) {
  return (
    <span className={styles.logoCard}>
      <Image src={src} alt="" width={32} height={32} />
    </span>
  );
}

export default function Integration() {
  return (
    <section className={styles.section} id="integration">
      <div className={styles.container}>
        <div className={styles.head}>
          <Reveal>
            <Eyebrow className="">{INTEGRATION.eyebrow}</Eyebrow>
          </Reveal>
          <AnimatedHeading
            as="h2"
            align="center"
            className={`t-h2 ${styles.title}`}
            segments={[{ text: "Plugs into the tools you already use." }]}
          />
        </div>

        <div className={styles.tickers}>
          {INTEGRATION.logoRows.map((row, i) => (
            <Marquee key={i} duration={32 + i * 4} gap={24} reverse={i % 2 === 1}>
              {row.map((src) => (
                <LogoCard key={src} src={src} />
              ))}
            </Marquee>
          ))}
        </div>

        <div className={styles.features}>
          {INTEGRATION.features.map((f, i) => (
            <Reveal
              key={f.title}
              delay={i * 0.08}
              className={styles.feature}
              y={30}
            >
              <h3 className={`t-h6 ${styles.featureTitle}`}>{f.title}</h3>
              <p className={`t-body-sm ${styles.featureDesc}`}>
                {f.description}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
