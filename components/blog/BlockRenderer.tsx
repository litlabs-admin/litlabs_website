import Image from "next/image";
import type { PostBlock } from "@/lib/blog";
import styles from "./BlockRenderer.module.css";

function headingId(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export default function BlockRenderer({ blocks }: { blocks: PostBlock[] }) {
  return (
    <>
      {blocks.map((block, i) => {
        switch (block.type) {
          case "heading": {
            const id = block.id ?? headingId(block.text);
            if (block.level === 3) {
              return (
                <h3 key={i} id={id} className={`t-h6 ${styles.h3}`}>
                  {block.text}
                </h3>
              );
            }
            return (
              <h2 key={i} id={id} className={`t-h4 ${styles.h2}`}>
                {block.text}
              </h2>
            );
          }

          case "paragraph":
            return (
              <p key={i} className={`t-body ${styles.p}`}>
                {block.text}
              </p>
            );

          case "list": {
            const ListTag = block.ordered ? "ol" : "ul";
            return (
              <ListTag
                key={i}
                className={`${styles.list} ${
                  block.ordered ? styles.listOrdered : ""
                }`}
              >
                {block.items.map((item, j) => (
                  <li key={j} className="t-body">
                    {item}
                  </li>
                ))}
              </ListTag>
            );
          }

          case "callout":
            return (
              <div
                key={i}
                className={`${styles.callout} ${
                  block.variant === "accent" ? styles.calloutAccent : ""
                }`}
              >
                {block.title && (
                  <p className={`t-h6 ${styles.calloutTitle}`}>
                    {block.title}
                  </p>
                )}
                <p className={`t-body-sm ${styles.calloutText}`}>
                  {block.text}
                </p>
              </div>
            );

          case "quote":
            return (
              <blockquote key={i} className={styles.quote}>
                <p className={`t-body-lg ${styles.quoteText}`}>
                  {block.text}
                </p>
                {block.attribution && (
                  <p className={`t-mono-sm ${styles.quoteAttr}`}>
                    {block.attribution}
                  </p>
                )}
              </blockquote>
            );

          case "image":
            return (
              <figure key={i} className={styles.figure}>
                <Image
                  src={block.src}
                  alt={block.alt}
                  width={block.width}
                  height={block.height}
                  className={styles.figureImg}
                />
                {block.caption && (
                  <figcaption className={`t-caption ${styles.caption}`}>
                    {block.caption}
                  </figcaption>
                )}
              </figure>
            );

          case "stats":
            return (
              <div key={i} className={styles.stats}>
                {block.items.map((stat, j) => (
                  <div key={j} className={styles.stat}>
                    <span className={`t-h4 ${styles.statValue}`}>
                      {stat.value}
                    </span>
                    <span className={`t-body-sm ${styles.statLabel}`}>
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            );

          default:
            return null;
        }
      })}
    </>
  );
}
