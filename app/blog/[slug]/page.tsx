import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BeforeFooterCTA from "@/components/sections/BeforeFooterCTA";
import Eyebrow from "@/components/ui/Eyebrow";
import Reveal from "@/components/ui/Reveal";
import BlockRenderer from "@/components/blog/BlockRenderer";
import ArticleFaq from "@/components/blog/ArticleFaq";
import RelatedPosts from "@/components/blog/RelatedPosts";
import {
  getAllPosts,
  getPostBySlug,
  getRelatedPosts,
  formatPostDate,
} from "@/lib/blog";
import styles from "./article.module.css";

type PageProps = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) {
    return { title: "Post not found | Lit Labs" };
  }

  const title = post.seo?.title ?? `${post.title} | Lit Labs`;
  const description = post.seo?.description ?? post.excerpt;

  return {
    title,
    description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title,
      description,
      url: `/blog/${post.slug}`,
      images: [post.cover.src],
      publishedTime: post.date,
      authors: [post.author.name],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [post.cover.src],
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  const related = await getRelatedPosts(post.slug, 3);

  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <section className={styles.section}>
          <div className={styles.container}>
            <Reveal>
              <Link href="/blog" className={`t-mono-sm ${styles.backLink}`}>
                ← All posts
              </Link>
            </Reveal>

            <Reveal delay={0.05}>
              <header className={styles.header}>
                <Eyebrow>{post.category}</Eyebrow>
                <h1 className={`t-display ${styles.title}`}>{post.title}</h1>
                <div className={`${styles.metaRow} t-caption`}>
                  <span>{formatPostDate(post.date)}</span>
                  <span className={styles.metaDot} aria-hidden="true" />
                  <span>{post.readingMinutes} min read</span>
                  <span className={styles.metaDot} aria-hidden="true" />
                  <span>
                    {post.author.name} · {post.author.role}
                  </span>
                </div>
              </header>
            </Reveal>

            <Reveal delay={0.1}>
              <div className={styles.heroImage}>
                <Image
                  src={post.cover.src}
                  alt={post.cover.alt}
                  fill
                  sizes="(max-width: 899px) 100vw, 820px"
                  priority
                />
              </div>
            </Reveal>

            <div className={styles.body}>
              <BlockRenderer blocks={post.body} />
            </div>

            {post.faq && post.faq.length > 0 && (
              <ArticleFaq items={post.faq} />
            )}
          </div>
        </section>
      </main>

      <RelatedPosts posts={related} />
      <BeforeFooterCTA />
      <Footer />
    </>
  );
}
