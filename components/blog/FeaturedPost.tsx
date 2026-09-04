import Image from "next/image";
import Eyebrow from "@/components/ui/Eyebrow";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import type { BlogPost } from "@/lib/blog";
import { formatPostDate } from "@/lib/blog";
import styles from "./FeaturedPost.module.css";

export default function FeaturedPost({ post }: { post: BlogPost }) {
  return (
    <Reveal className={styles.card}>
      <div className={styles.cardImage}>
        <Image
          src={post.cover.src}
          alt={post.cover.alt}
          fill
          sizes="(max-width: 809px) 100vw, 45vw"
          className={styles.photo}
          priority
        />
        <div className={styles.imageOverlay} aria-hidden="true" />
      </div>

      <div className={styles.cardContent}>
        <Eyebrow>{post.category}</Eyebrow>
        <h2 className={`t-h4 ${styles.title}`}>{post.title}</h2>
        <p className={`t-body-sm ${styles.excerpt}`}>{post.excerpt}</p>
        <div className={`${styles.meta} t-mono-sm`}>
          <span>{formatPostDate(post.date)}</span>
          <span className={styles.dot} aria-hidden="true" />
          <span>{post.readingMinutes} min read</span>
        </div>
        <div className={styles.cta}>
          <Button href={`/blog/${post.slug}`} variant="alt">
            Read more
          </Button>
        </div>
      </div>
    </Reveal>
  );
}
