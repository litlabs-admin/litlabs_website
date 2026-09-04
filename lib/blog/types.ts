// Blog content types.
// The block union is the normalization boundary: whatever the source (mock
// consts today, an Airtable record tomorrow), it gets mapped into this shape
// once, and every renderer downstream only ever sees PostBlock[].

export type PostBlock =
  | { type: "heading"; text: string; level?: 2 | 3; id?: string }
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[]; ordered?: boolean }
  | { type: "callout"; text: string; title?: string; variant?: "note" | "accent" }
  | { type: "quote"; text: string; attribution?: string }
  | {
      type: "image";
      src: string;
      alt: string;
      width: number;
      height: number;
      caption?: string;
    }
  | { type: "stats"; items: { value: string; label: string }[] };

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string; // ISO date only, e.g. "2026-08-14"
  readingMinutes: number;
  featured?: boolean;
  isNew?: boolean;
  tags?: string[];
  cover: { src: string; alt: string; width: number; height: number };
  author: { name: string; role: string; avatar?: string };
  body: PostBlock[];
  faq?: { q: string; a: string }[];
  seo?: { title?: string; description?: string };
};
