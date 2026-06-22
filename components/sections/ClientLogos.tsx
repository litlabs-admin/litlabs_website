import Image from "next/image";
import { CLIENTS_LABEL, CLIENT_LOGOS } from "@/lib/content";
import Reveal from "@/components/ui/Reveal";
import Marquee from "@/components/ui/Marquee";
import styles from "./ClientLogos.module.css";

function Logo({ src }: { src: string }) {
  return (
    <span className={styles.logo}>
      <Image src={src} alt="" width={140} height={50} />
    </span>
  );
}

export default function ClientLogos() {
  return (
    <section className={styles.section} id="client-logo" aria-label="Clients">
      <div className={styles.container}>
        <Reveal>
          <span className={`t-eyebrow ${styles.label}`}>{CLIENTS_LABEL}</span>
        </Reveal>

        <Marquee duration={34} gap={64} className={styles.marquee}>
          {CLIENT_LOGOS.map((src) => (
            <Logo key={src} src={src} />
          ))}
        </Marquee>
      </div>
    </section>
  );
}
