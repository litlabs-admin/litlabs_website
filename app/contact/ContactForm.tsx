"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";
import styles from "./contact.module.css";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div className={styles.form}>
        <div className={styles.success}>
          <p className="t-body-lg" style={{ marginBottom: 8 }}>
            Thanks — we&apos;ll be in touch.
          </p>
          <p className="t-body-sm" style={{ color: "var(--gray-767)" }}>
            Our team will reach out within one business day to set up your call.
            Prefer to book instantly?{" "}
            <a
              href="https://cal.com/vandan-mandloi/30min?user=vandan-mandloi"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "var(--color-accent)", textDecoration: "underline" }}
            >
              Grab a time here.
            </a>
          </p>
        </div>
      </div>
    );
  }

  return (
    <form
      className={styles.form}
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
    >
      <div className={styles.field}>
        <label className={`t-eyebrow ${styles.label}`} htmlFor="name">
          Full name
        </label>
        <input id="name" name="name" className={styles.input} required />
      </div>
      <div className={styles.field}>
        <label className={`t-eyebrow ${styles.label}`} htmlFor="email">
          Work email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          className={styles.input}
          required
        />
      </div>
      <div className={styles.field}>
        <label className={`t-eyebrow ${styles.label}`} htmlFor="company">
          Company
        </label>
        <input id="company" name="company" className={styles.input} />
      </div>
      <div className={styles.field}>
        <label className={`t-eyebrow ${styles.label}`} htmlFor="message">
          What would you like to automate?
        </label>
        <textarea
          id="message"
          name="message"
          className={styles.textarea}
          required
        />
      </div>
      <Button type="submit" variant="primary" fullWidth className={styles.submit}>
        Request a call
      </Button>
    </form>
  );
}
