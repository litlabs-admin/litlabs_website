// Public blog data API.
//
// Every accessor is async and returns plain BlogPost data, even though the
// current implementation reads from an in-memory array. That's deliberate:
// this file is the swap point for a future Airtable-backed source. When that
// happens, replace only the bodies below with `fetch` calls plus a
// `mapRecordToPost(record): BlogPost` adapter, keep the signatures exactly as
// they are, and add `export const revalidate = 300` to app/blog/page.tsx and
// app/blog/[slug]/page.tsx. No component or page above this file should need
// to change.

import { MOCK_POSTS } from "./posts";
import type { BlogPost } from "./types";

export type { BlogPost, PostBlock } from "./types";

function byDateDesc(a: BlogPost, b: BlogPost) {
  return b.date.localeCompare(a.date);
}

export async function getAllPosts(): Promise<BlogPost[]> {
  return [...MOCK_POSTS].sort(byDateDesc);
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  return MOCK_POSTS.find((p) => p.slug === slug) ?? null;
}

export async function getFeaturedPost(): Promise<BlogPost | null> {
  const posts = await getAllPosts();
  return posts.find((p) => p.featured) ?? posts[0] ?? null;
}

export async function getRelatedPosts(
  slug: string,
  limit = 3
): Promise<BlogPost[]> {
  const current = await getPostBySlug(slug);
  const all = await getAllPosts();
  if (!current) return all.slice(0, limit);

  const rest = all.filter((p) => p.slug !== slug);
  const sameCategory = rest.filter((p) => p.category === current.category);
  const others = rest.filter((p) => p.category !== current.category);
  return [...sameCategory, ...others].slice(0, limit);
}

export async function getCategories(): Promise<string[]> {
  const posts = await getAllPosts();
  return Array.from(new Set(posts.map((p) => p.category)));
}

/** Deterministic on server and client: fixed locale + UTC avoids hydration drift. */
export function formatPostDate(iso: string): string {
  return new Intl.DateTimeFormat("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${iso}T00:00:00Z`));
}
