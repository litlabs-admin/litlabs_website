import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BeforeFooterCTA from "@/components/sections/BeforeFooterCTA";
import Eyebrow from "@/components/ui/Eyebrow";
import Reveal from "@/components/ui/Reveal";
import AnimatedHeading from "@/components/ui/AnimatedHeading";
import FeaturedPost from "@/components/blog/FeaturedPost";
import BlogListing from "./BlogListing";
import { getAllPosts, getFeaturedPost, getCategories } from "@/lib/blog";
import styles from "./blog.module.css";

export const metadata: Metadata = {
  title: "Blog | Lit Labs",
  description:
    "Insights on AI agents, automation, and building systems that scale, from the team at Lit Labs.",
};

export default async function BlogPage() {
  const [posts, featured, categories] = await Promise.all([
    getAllPosts(),
    getFeaturedPost(),
    getCategories(),
  ]);
  const gridPosts = featured
    ? posts.filter((p) => p.slug !== featured.slug)
    : posts;

  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.heroInner}>
            <Reveal>
              <Eyebrow>Resources</Eyebrow>
            </Reveal>
            <AnimatedHeading
              as="h1"
              className={`t-display ${styles.title}`}
              segments={[{ text: "Insights on AI, automation, and growth" }]}
            />
            <Reveal delay={0.1}>
              <p className={`t-desc ${styles.lede}`}>
                Field notes on deploying AI agents, automating workflows, and
                building systems that keep compounding results.
              </p>
            </Reveal>
          </div>
        </section>

        {featured && (
          <section className={styles.featuredSection}>
            <div className={styles.featuredInner}>
              <FeaturedPost post={featured} />
            </div>
          </section>
        )}

        <section className={styles.section} id="all-posts">
          <div className={styles.container}>
            <div className={styles.listHead}>
              <div className={styles.listHeadCopy}>
                <Reveal>
                  <h2 className={`t-h2 ${styles.listHeadTitle}`}>
                    All Posts
                  </h2>
                </Reveal>
                <Reveal delay={0.05}>
                  <p className={`t-body-sm ${styles.listHeadDesc}`}>
                    Insights on modern AI systems, automation, and how we
                    build them.
                  </p>
                </Reveal>
              </div>
            </div>

            <BlogListing posts={gridPosts} categories={categories} />
          </div>
        </section>
      </main>
      <BeforeFooterCTA />
      <Footer />
    </>
  );
}
