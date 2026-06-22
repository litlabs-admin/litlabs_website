import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Eyebrow from "@/components/ui/Eyebrow";
import Reveal from "@/components/ui/Reveal";
import ContactForm from "./ContactForm";
import styles from "./contact.module.css";

export const metadata: Metadata = {
  title: "Contact | Lit Labs — Book a call",
  description:
    "Book a 30-minute call. We'll map your highest-leverage workflows, show you what we'd build, and the impact you can expect.",
};

const POINTS = [
  "A 30-minute, no-pressure call",
  "A map of your highest-leverage workflows",
  "What we'd build and the impact to expect",
];

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <section className={styles.section}>
          <div className={styles.container}>
            <div className={styles.left}>
              <Reveal>
                <Eyebrow>book a call</Eyebrow>
              </Reveal>
              <Reveal delay={0.05}>
                <h1 className={`t-display ${styles.title}`}>
                  Let&apos;s build your{" "}
                  <span className={styles.titleAccent}>next employee.</span>
                </h1>
              </Reveal>
              <Reveal delay={0.1}>
                <p className={`t-desc ${styles.desc}`}>
                  Book a 30-minute call. We&apos;ll map your highest-leverage
                  workflows, show you what we&apos;d build, and the impact you
                  can expect—before you commit to anything.
                </p>
              </Reveal>
              <Reveal delay={0.15}>
                <div className={styles.points}>
                  {POINTS.map((p) => (
                    <div className={styles.point} key={p}>
                      <span className={styles.pointIcon} aria-hidden="true" />
                      <span className={`t-body-sm ${styles.pointText}`}>
                        {p}
                      </span>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.1} y={40}>
              <ContactForm />
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
