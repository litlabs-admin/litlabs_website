"use client";

import { useDeferredValue, useMemo, useState } from "react";
import Reveal from "@/components/ui/Reveal";
import PostCard from "@/components/blog/PostCard";
import type { BlogPost } from "@/lib/blog";
import styles from "./blog.module.css";

export default function BlogListing({
  posts,
  categories,
}: {
  posts: BlogPost[];
  categories: string[];
}) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<string | null>(null);
  const deferredQuery = useDeferredValue(query);

  const filtered = useMemo(() => {
    const q = deferredQuery.trim().toLowerCase();
    return posts.filter((post) => {
      const matchesCategory = !category || post.category === category;
      if (!matchesCategory) return false;
      if (!q) return true;
      const haystack = [post.title, post.excerpt, ...(post.tags ?? [])]
        .join(" ")
        .toLowerCase();
      return haystack.includes(q);
    });
  }, [posts, category, deferredQuery]);

  return (
    <>
      <div className={styles.controls}>
        <div className={styles.searchWrap}>
          <label htmlFor="blog-search" className="sr-only">
            Search articles
          </label>
          <input
            id="blog-search"
            type="text"
            placeholder="Search articles..."
            className={`t-body-sm ${styles.search}`}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>

        <div className={styles.pills} role="group" aria-label="Filter by category">
          <button
            type="button"
            className={`${styles.pill} ${!category ? styles.pillActive : ""}`}
            onClick={() => setCategory(null)}
            aria-pressed={!category}
          >
            All
          </button>
          {categories.map((c) => (
            <button
              key={c}
              type="button"
              className={`${styles.pill} ${
                category === c ? styles.pillActive : ""
              }`}
              onClick={() => setCategory(c === category ? null : c)}
              aria-pressed={category === c}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      {filtered.length > 0 ? (
        <div className={styles.grid}>
          {filtered.map((post, i) => (
            <Reveal key={post.slug} delay={Math.min(i, 5) * 0.08} y={30}>
              <PostCard post={post} />
            </Reveal>
          ))}
        </div>
      ) : (
        <p className={`t-body-sm ${styles.empty}`}>
          No articles match your search. Try a different term or category.
        </p>
      )}
    </>
  );
}
