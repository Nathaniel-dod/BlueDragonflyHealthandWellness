import { SEO } from "@/components/SEO";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link, useRoute } from "wouter";
import { ArrowLeft, Clock } from "lucide-react";
import NotFound from "@/pages/not-found";
import {
  CATEGORY_LABELS,
  CATEGORY_SERVICE_LINKS,
  getPostBySlug,
  type BlogSection,
} from "@/content/blogPosts";

function Section({ section }: { section: BlogSection }) {
  return (
    <section className="mb-10">
      {section.heading && (
        <h2 className="text-2xl md:text-3xl font-serif text-brand-royal mb-4">
          {section.heading}
        </h2>
      )}
      {section.paragraphs?.map((p, i) => (
        <p key={i} className="text-gray-700 font-light leading-relaxed mb-4">
          {p}
        </p>
      ))}
      {section.bullets && (
        <ul className="space-y-4 mt-2">
          {section.bullets.map((b, i) => (
            <li key={i} className="flex gap-3">
              <span className="mt-2 w-2 h-2 rounded-full bg-brand-gold shrink-0" />
              <p className="text-gray-700 font-light leading-relaxed">
                {b.title && <strong className="font-medium text-brand-royal">{b.title}: </strong>}
                {b.text}
              </p>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default function BlogPost() {
  const [, params] = useRoute("/blog/:slug");
  const post = params ? getPostBySlug(params.slug) : undefined;

  if (!post) {
    return <NotFound />;
  }

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    author: {
      "@type": "Person",
      name: "Cheryl Hathaway, NWP",
    },
    publisher: {
      "@type": "Organization",
      name: "Blue Dragonfly Health & Wellness",
    },
  };

  return (
    <Layout>
      <SEO
        title={post.title.split("?")[0] + "?"}
        description={post.excerpt}
        canonicalUrl={`https://bluedragonflyhealthandwellness.com/blog/${post.slug}`}
        ogType="article"
        schema={articleSchema}
      />

      <div className="bg-brand-sky/10 relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-brand-sky/20 via-transparent to-transparent pointer-events-none"></div>
        <div className="container px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-brand-dragonfly font-medium mb-8 hover:text-brand-royal transition-colors"
            >
              <ArrowLeft className="w-4 h-4" /> All Articles
            </Link>

            <div className="flex flex-wrap items-center gap-2 mb-6">
              {post.categories.map((c) => (
                <span
                  key={c}
                  className="text-xs font-medium tracking-wide uppercase bg-brand-sky/15 text-brand-dragonfly px-3 py-1 rounded-full"
                >
                  {CATEGORY_LABELS[c]}
                </span>
              ))}
              <span className="inline-flex items-center gap-1.5 text-gray-400 text-sm ml-2">
                <Clock className="w-4 h-4" /> {post.readTime}
              </span>
            </div>

            <h1 className="text-3xl md:text-5xl font-serif text-brand-royal mb-8 leading-tight">
              {post.title}
            </h1>

            <div className="bg-white/70 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-xl shadow-brand-royal/5 border border-white/40">
              {post.intro.map((p, i) => (
                <p key={i} className="text-lg text-gray-700 font-light leading-relaxed mb-4">
                  {p}
                </p>
              ))}

              <div className="w-16 h-1 bg-gradient-to-r from-brand-sky to-brand-gold rounded-full my-8" />

              {post.sections.map((s, i) => (
                <Section key={i} section={s} />
              ))}
            </div>

            {/* Contact CTA */}
            <div className="mt-12 bg-gradient-to-br from-brand-royal to-brand-dragonfly text-white rounded-3xl p-8 md:p-12 shadow-2xl shadow-brand-royal/20 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-sky/30 via-transparent to-transparent pointer-events-none"></div>
              <div className="relative z-10">
                <h2 className="text-3xl font-serif text-white mb-4">Ready to Experience It for Yourself?</h2>
                <p className="text-white/80 font-light mb-8 max-w-xl mx-auto">
                  Book a consultation at our Calgary clinic and find out whether this therapy is
                  the right fit for your health journey.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button asChild className="bg-brand-gold hover:bg-brand-gold/90 text-brand-royal font-medium rounded-full h-12 px-8">
                    <Link href="/contact">Contact Us</Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="border-white/40 bg-transparent text-white hover:bg-white/10 hover:text-white rounded-full h-12 px-8"
                  >
                    <Link href={CATEGORY_SERVICE_LINKS[post.categories[0]]}>
                      Learn About the Therapy
                    </Link>
                  </Button>
                </div>
              </div>
            </div>

            <p className="text-xs text-gray-400 mt-8 text-center max-w-2xl mx-auto">
              The information in this article is for educational purposes and reflects the
              experiences reported by our clients. It is not medical advice and is not a substitute
              for the diagnosis or care of your physician.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
