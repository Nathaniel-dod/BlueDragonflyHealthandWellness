import { SEO } from "@/components/SEO";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function WolfeNonSurgical() {
  return (
    <Layout>
      <SEO 
        title="Wolfe Non-Surgical Treatments" 
        description="Target the underlying cause of pain with the most powerful bodywork developed. Wolfe Non-Surgical treatments available in Calgary."
        schema={{
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Wolfe Non-Surgical Treatments",
          "provider": {
            "@type": "HealthAndBeautyBusiness",
            "name": "Blue Dragonfly Health & Wellness"
          },
          "description": "Powerful bodywork targeting scar tissue, inflammation, and physical blocks."
        }}
      />

      {/* Hero */}
      <section className="relative pt-24 pb-32 overflow-hidden bg-brand-royal text-white">
        <div className="absolute inset-0 z-0">
          <img 
            src="/assets/wolfe.jpg" 
            alt="Wolfe Non-Surgical Bodywork" 
            className="w-full h-full object-cover object-center opacity-30 mix-blend-multiply"
          />
        </div>
        <div className="container relative z-10 px-4 md:px-6">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-serif text-brand-gold mb-6">Wolfe Non-Surgical Treatments</h1>
            <p className="text-xl md:text-2xl text-white/90 font-light mb-8">
              The Most Powerful Bodywork Ever Developed
            </p>
            <p className="text-lg text-white/80 max-w-2xl leading-relaxed">
              Unlike conventional therapies that only address symptoms, Wolfe Non-Surgical Treatments target the underlying cause of acute and chronic conditions. We target scar tissue, inflammation, calcification, and crystallization: the physical blocks that create aches and pain.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-brand-warm">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            <div className="lg:col-span-8">
              <div className="prose prose-lg prose-blue max-w-none text-gray-700">
                <h2 className="text-3xl font-serif text-brand-royal mb-6">Results from the first treatment</h2>
                <p>
                  Most clients notice better results from their first treatment than anything they've tried before. Many issues resolve in just a few sessions, sometimes only one. Our approach physically removes the restrictions preventing your body from healing itself.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
                  <div className="bg-white p-8 rounded-2xl shadow-sm border border-border">
                    <h3 className="text-xl font-serif text-brand-royal mb-2">Session Length</h3>
                    <p className="text-3xl text-brand-dragonfly font-light">60 - 90 <span className="text-base text-gray-500 font-normal">minutes</span></p>
                  </div>
                  <div className="bg-white p-8 rounded-2xl shadow-sm border border-border">
                    <h3 className="text-xl font-serif text-brand-royal mb-2">After Session</h3>
                    <p className="text-lg text-gray-700">Mild soreness, comparable to a deep workout as the body heals.</p>
                  </div>
                </div>

                <h3 className="text-2xl font-serif text-brand-royal mt-12 mb-6">Effective on All Joints & Organs</h3>
                <div className="columns-1 sm:columns-2 md:columns-3 gap-8">
                  <ul className="list-disc pl-5 space-y-2 marker:text-brand-gold">
                    <li>Abdominal Pain</li>
                    <li>Ankle Problems</li>
                    <li>Back Pain</li>
                    <li>Bone Spurs</li>
                    <li>Bursitis</li>
                    <li>Disc Problems</li>
                    <li>Displaced Calcium</li>
                    <li>Fibromyalgia</li>
                    <li>Frozen Neck</li>
                    <li>Headache & Migraines</li>
                    <li>Hip/Knee Problems</li>
                    <li>Muscle Spasm</li>
                    <li>Neck & Nerve Pain</li>
                    <li>Numbness & Tingling</li>
                    <li>Osteoarthritis</li>
                    <li>Overuse Syndrome</li>
                    <li>Pregnancy Complications</li>
                    <li>Rheumatoid Arthritis</li>
                    <li>Sciatica</li>
                    <li>Sports Injuries</li>
                    <li>Sprains & Strains</li>
                    <li>Tendinitis</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4">
              <div className="sticky top-32 bg-white rounded-3xl p-8 shadow-xl border border-brand-warm text-center">
                <h3 className="text-2xl font-serif text-brand-royal mb-4">Book Your Session</h3>
                <p className="text-gray-600 mb-8">
                  Experience the most profound physical restoration available in Calgary.
                </p>
                <Button asChild className="w-full bg-brand-royal hover:bg-brand-dragonfly text-white h-14 rounded-full text-lg shadow-md mb-4">
                  <Link href="/contact">Contact to Book</Link>
                </Button>
                <p className="text-sm text-gray-500">Appointments available at our Calgary clinic.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Specialty Restorations */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-6 text-center max-w-4xl mx-auto">
          <h2 className="text-3xl font-serif text-brand-royal mb-6">Specialty Restorations</h2>
          <p className="text-lg text-gray-600 mb-12">
            In addition to general pain relief, Wolfe Non-Surgical provides profound, targeted restorations including:
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Abdominal Lift", "Arthritis Joint Restoration", "Face Lift", "Frozen Shoulder", 
              "Heart Release", "Joint Replacement Prevention", "Pelvic Clearance", "Post-Surgery Scar Tissue",
              "Spinal Restoration", "Surgery Prevention", "TMJ Restoration"
            ].map(item => (
              <span key={item} className="px-4 py-2 bg-brand-warm text-brand-royal rounded-full text-sm font-medium border border-border">
                {item}
              </span>
            ))}
          </div>
          <p className="mt-8 text-gray-500 italic">And more upon request.</p>
        </div>
      </section>
    </Layout>
  );
}
