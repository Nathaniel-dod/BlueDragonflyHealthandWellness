import { useState } from "react";
import { SEO } from "@/components/SEO";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, Clock } from "lucide-react";
import {
  BLOG_POSTS,
  CATEGORY_LABELS,
  type BlogCategory,
} from "@/content/blogPosts";

type Filter = "all" | BlogCategory;

const FILTERS: { value: Filter; label: string }[] = [
  { value: "all", label: "All Articles" },
  { value: "wolfe", label: CATEGORY_LABELS.wolfe },
  { value: "cellsonic", label: CATEGORY_LABELS.cellsonic },
  { value: "cardio", label: CATEGORY_LABELS.cardio },
];

function CategoryBadges({ categories }: { categories: BlogCategory[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((c) => (
        <span
          key={c}
          className="text-xs font-medium tracking-wide uppercase bg-brand-sky/15 text-brand-dragonfly px-3 py-1 rounded-full"
        >
          {CATEGORY_LABELS[c]}
        </span>
      ))}
    </div>
  );
}

export default function Blog() {
  const [filter, setFilter] = useState<Filter>("all");

  const heroPost = BLOG_POSTS.find((p) => p.isHero);
  const posts = BLOG_POSTS.filter(
    (p) => filter === "all" || p.categories.includes(filter),
  );
  // In the filtered grid, don't duplicate the hero when showing "all".
  const gridPosts =
    filter === "all" ? posts.filter((p) => !p.isHero) : posts;

  return (
    <Layout>
      <SEO
        title="Wellness Blog"
        description="Insights on Wolfe Non Surgical Therapy, CellSonic Regeneration ESWT, and Cardio MedBed EECP from Blue Dragonfly Health & Wellness in Calgary — results, recovery, and what to expect."
        canonicalUrl="https://bluedragonflyhealthandwellness.com/blog"
      />

      <div className="bg-brand-sky/10 relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-brand-sky/20 via-transparent to-transparent pointer-events-none"></div>
        <div className="container px-4 md:px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 animate-in fade-in slide-in-from-bottom-8 duration-1000">
              <h1 className="text-5xl md:text-6xl font-serif text-brand-royal mb-6">Wellness Insights</h1>
              <p className="text-xl text-gray-700 font-light max-w-2xl mx-auto">
                Deep dives into our therapies — how they work, what to expect, and the results our clients experience.
              </p>
            </div>

            {/* Hero post */}
            {heroPost && (filter === "all" || heroPost.categories.includes(filter)) && (
              <Link
                href={`/blog/${heroPost.slug}`}
                className="block group mb-12"
              >
                <article className="bg-gradient-to-br from-brand-royal to-brand-dragonfly text-white rounded-3xl p-8 md:p-14 shadow-2xl shadow-brand-royal/20 relative overflow-hidden transition-transform duration-300 group-hover:scale-[1.01]">
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-sky/30 via-transparent to-transparent pointer-events-none"></div>
                  <div className="relative z-10">
                    <div className="flex flex-wrap items-center gap-2 mb-6">
                      <span className="text-xs font-semibold tracking-wide uppercase bg-brand-gold/90 text-brand-royal px-3 py-1 rounded-full">
                        Featured
                      </span>
                      {heroPost.categories.map((c) => (
                        <span
                          key={c}
                          className="text-xs font-medium tracking-wide uppercase bg-white/15 text-white px-3 py-1 rounded-full"
                        >
                          {CATEGORY_LABELS[c]}
                        </span>
                      ))}
                    </div>
                    <h2 className="text-3xl md:text-4xl font-serif text-white mb-4 leading-tight max-w-3xl">
                      {heroPost.title}
                    </h2>
                    <p className="text-white/80 font-light text-lg mb-8 max-w-2xl">
                      {heroPost.excerpt}
                    </p>
                    <div className="flex items-center gap-6">
                      <span className="inline-flex items-center gap-2 text-brand-gold font-medium">
                        Read the article <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-white/60 text-sm">
                        <Clock className="w-4 h-4" /> {heroPost.readTime}
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            )}

            {/* Filters */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {FILTERS.map((f) => (
                <button
                  key={f.value}
                  aria-pressed={filter === f.value}
                  onClick={() => setFilter(f.value)}
                  className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
                    filter === f.value
                      ? "bg-brand-royal text-white shadow-lg shadow-brand-royal/20"
                      : "bg-white/70 text-brand-royal border border-brand-royal/15 hover:border-brand-royal/40"
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>

            {/* Post grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {gridPosts.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`} className="block group">
                  <article className="bg-white/70 backdrop-blur-md rounded-3xl p-8 h-full shadow-xl shadow-brand-royal/5 border border-white/40 flex flex-col transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-brand-royal/10 group-hover:-translate-y-1">
                    <div className="mb-4">
                      <CategoryBadges categories={post.categories} />
                    </div>
                    <h3 className="text-xl font-serif text-brand-royal mb-3 leading-snug">
                      {post.title.split("?")[0]}?
                    </h3>
                    <p className="text-gray-600 font-light text-sm mb-6 flex-1">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between mt-auto">
                      <span className="inline-flex items-center gap-2 text-brand-dragonfly font-medium text-sm">
                        Read more <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-gray-400 text-xs">
                        <Clock className="w-3.5 h-3.5" /> {post.readTime}
                      </span>
                    </div>
                  </article>
                </Link>
              ))}
            </div>

            {gridPosts.length === 0 && (
              <div className="text-center py-16">
                <p className="text-gray-500 text-lg mb-6">No articles in this category yet.</p>
                <Button
                  onClick={() => setFilter("all")}
                  className="bg-brand-royal hover:bg-brand-dragonfly text-white rounded-full px-8"
                >
                  View All Articles
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}
