import SectionHeader from "@/components/ui/SectionHeader";
import Reveal from "@/components/ui/Reveal";
import PostCard from "@/components/blog/PostCard";
import type { BlogPost } from "@/lib/blog";
import styles from "./RelatedPosts.module.css";

export default function RelatedPosts({ posts }: { posts: BlogPost[] }) {
  if (posts.length === 0) return null;

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <SectionHeader
          eyebrow="Keep reading"
          segments={[{ text: "More posts" }]}
        />
        <div className={styles.grid}>
          {posts.map((post, i) => (
            <Reveal key={post.slug} delay={i * 0.08} y={30}>
              <PostCard post={post} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
