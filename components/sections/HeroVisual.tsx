"use client";

import { motion } from "motion/react";
import { EASE_OUT } from "@/lib/motion";
import styles from "./HeroVisual.module.css";

function Spark({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="4" y="2" width="6.5" height="20" rx="3.25" fill="var(--color-accent)" />
      <rect x="13.5" y="2" width="6.5" height="20" rx="3.25" fill="var(--color-accent)" />
    </svg>
  );
}

const NAV = ["Dashboard", "Agents", "Pipeline", "Inbox"];

const STATS = [
  { label: "Qualified leads", value: "1,284", trend: "▲ 38%", accent: true, spark: [40, 62, 50, 78, 66, 90] },
  { label: "Reply rate", value: "42%", trend: "▲ 12%", accent: false, spark: [55, 48, 70, 60, 82, 75] },
  { label: "Meetings booked", value: "96", trend: "▲ 21%", accent: false, spark: [30, 52, 44, 68, 58, 80] },
];

const BARS = [38, 54, 44, 66, 52, 80, 70, 92];

const AGENTS = [
  { name: "Outreach Agent", role: "Sequencing 240 leads" },
  { name: "SDR Agent", role: "Booking demos · 6 today" },
  { name: "Support Agent", role: "Resolving tickets" },
];

/**
 * On-brand LitLabs dashboard mock for the hero — real labels/numbers, no
 * third-party branding, scales with its frame via container-query units.
 */
export default function HeroVisual() {
  return (
    <div className={styles.window} aria-hidden="true">
      {/* title bar */}
      <div className={styles.titlebar}>
        <div className={styles.dots}>
          <span className={`${styles.dot} ${styles.r}`} />
          <span className={`${styles.dot} ${styles.y}`} />
          <span className={`${styles.dot} ${styles.g}`} />
        </div>
        <div className={styles.urlpill}>
          <Spark className={styles.miniSpark} />
          <span className={styles.urltext}>app.litlabs.io</span>
        </div>
      </div>

      <div className={styles.body}>
        {/* sidebar */}
        <div className={styles.sidebar}>
          <div className={styles.brand}>
            <Spark />
            <span className={styles.brandName}>Lit Labs</span>
          </div>
          {NAV.map((n, i) => (
            <div
              key={n}
              className={`${styles.navItem} ${i === 0 ? styles.navActive : ""}`}
            >
              <i />
              {n}
            </div>
          ))}
        </div>

        {/* main */}
        <div className={styles.main}>
          <div className={styles.mainHeader}>
            <span className={styles.headTitle}>Agent Overview</span>
            <span className={styles.livePill}>
              <span className={styles.liveDot} />
              Live
            </span>
          </div>

          <div className={styles.stats}>
            {STATS.map((s) => (
              <div
                key={s.label}
                className={`${styles.statCard} ${
                  s.accent ? styles.statCardAccent : ""
                }`}
              >
                <span className={styles.statLabel}>{s.label}</span>
                <div className={styles.statRow}>
                  <span className={styles.statValue}>{s.value}</span>
                  <span className={styles.trend}>{s.trend}</span>
                </div>
                <div className={styles.spark}>
                  {s.spark.map((h, j) => (
                    <span key={j} style={{ height: `${h}%` }} />
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className={styles.chartCard}>
            <div className={styles.chartHead}>
              <span className={styles.chartTitle}>Pipeline this month</span>
              <span className={styles.chartLegend}>Last 8 weeks</span>
            </div>
            <div className={styles.chartBars}>
              {BARS.map((h, i) => (
                <motion.span
                  key={i}
                  className={`${styles.bar} ${
                    i % 3 === 1 ? styles.barMuted : ""
                  }`}
                  initial={{ scaleY: 0.12, opacity: 0.4 }}
                  whileInView={{ scaleY: 1, opacity: 1 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.6, ease: EASE_OUT, delay: i * 0.06 }}
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
          </div>

          <div className={styles.agents}>
            {AGENTS.map((a) => (
              <div key={a.name} className={styles.agentRow}>
                <span className={styles.agentAvatar}>
                  <Spark />
                </span>
                <div className={styles.agentText}>
                  <span className={styles.agentName}>{a.name}</span>
                  <span className={styles.agentRole}>{a.role}</span>
                </div>
                <span className={styles.statusPill}>
                  <i />
                  Active
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
