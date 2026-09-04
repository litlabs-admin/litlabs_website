import Link from "next/link";
import Image from "next/image";
import type { BlogPost } from "@/lib/blog";
import { formatPostDate } from "@/lib/blog";
import styles from "./PostCard.module.css";

export default function PostCard({ post }: { post: BlogPost }) {
  return (
    <Link href={`/blog/${post.slug}`} className={styles.card}>
      <div className={styles.thumb}>
        {post.isNew && (
          <span className={`${styles.badge} t-mono-sm`}>New</span>
        )}
        <Image
          src={post.cover.src}
          alt={post.cover.alt}
          fill
          sizes="(max-width: 809px) 100vw, (max-width: 1199px) 50vw, 33vw"
          className={styles.thumbImg}
        />
      </div>

      <h3 className={`t-h6 ${styles.title}`}>{post.title}</h3>
      <p className={`t-body-sm ${styles.excerpt}`}>{post.excerpt}</p>

      <div className={`${styles.meta} t-mono-sm`}>
        <span>{post.category}</span>
        <span>{formatPostDate(post.date)}</span>
      </div>
    </Link>
  );
}
