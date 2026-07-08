import { SEO } from "@/components/SEO";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Blog() {
  return (
    <Layout>
      <SEO 
        title="Wellness Blog" 
        description="Read the latest insights on regenerative health, non-surgical therapies, and longevity from Blue Dragonfly Health & Wellness in Calgary."
      />

      <div className="bg-brand-warm min-h-[70vh] py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            
            <h1 className="text-5xl md:text-6xl font-serif text-brand-royal mb-6">Wellness Insights</h1>
            <p className="text-xl text-gray-600 mb-16">
              Articles, case studies, and insights on regenerative health and feeling your best at any age.
            </p>

            <div className="bg-white rounded-3xl p-12 md:p-20 shadow-sm border border-border">
              <div className="w-24 h-24 bg-brand-sky/10 rounded-full flex items-center justify-center mx-auto mb-8 text-brand-sky">
                <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2.5 2.5 0 00-2.5-2.5H15" />
                </svg>
              </div>
              <h2 className="text-3xl font-serif text-brand-royal mb-4">Posts Coming Soon</h2>
              <p className="text-gray-500 text-lg mb-8 max-w-lg mx-auto">
                We're currently preparing our first series of articles. Check back soon for deep dives into our therapies and tips for crafting your perfect day.
              </p>
              
              <Button asChild className="bg-brand-royal hover:bg-brand-dragonfly text-white rounded-full px-8">
                <Link href="/">Return to Home</Link>
              </Button>
            </div>

          </div>
        </div>
      </div>
    </Layout>
  );
}
