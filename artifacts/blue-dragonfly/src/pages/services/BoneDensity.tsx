import { SEO } from "@/components/SEO";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function BoneDensity() {
  return (
    <Layout>
      <SEO 
        title="Advanced Bone Density Scanning" 
        description="Radiation-free, clinical-grade ultrasound scanning to accurately assess bone density and track skeletal health in minutes."
        schema={{
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Advanced Bone Density Scanning",
          "provider": {
            "@type": "HealthAndBeautyBusiness",
            "name": "Blue Dragonfly Health & Wellness"
          },
          "description": "Radiation-free quantitative ultrasound bone density assessment."
        }}
      />

      {/* Hero */}
      <section className="relative pt-24 pb-32 overflow-hidden bg-brand-royal text-white">
        <div className="absolute inset-0 z-0">
          <img 
            src="/assets/bone-density.jpg" 
            alt="Advanced Bone Density Scanning" 
            className="w-full h-full object-cover object-center opacity-30 mix-blend-multiply"
          />
        </div>
        <div className="container relative z-10 px-4 md:px-6">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-serif text-brand-gold mb-6">Advanced Bone Density Scanning</h1>
            <p className="text-xl md:text-2xl text-white/90 font-light mb-8">
              Clinical-grade, radiation-free quantitative ultrasound
            </p>
            <p className="text-lg text-white/80 max-w-2xl leading-relaxed">
              Measure the speed of sound through bone to assess bone density in minutes. Establish an objective baseline to track your skeletal health and regeneration across all your wellness protocols without a single drop of ionizing radiation.
            </p>
          </div>
        </div>
      </section>

      {/* Core Benefits */}
      <section className="py-20 bg-brand-sky/10 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-sky/20 via-transparent to-transparent pointer-events-none"></div>
        <div className="container px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/60 backdrop-blur-md p-10 rounded-3xl shadow-xl shadow-brand-royal/5 border border-white/40 text-center transition-transform duration-300 hover:-translate-y-2">
              <div className="w-20 h-20 bg-gradient-to-br from-brand-royal to-brand-dragonfly text-brand-gold rounded-full flex items-center justify-center mx-auto mb-8 shadow-md">
                <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-brand-royal mb-4">Radiation-Free</h3>
              <p className="text-gray-700 font-light leading-relaxed">No X-rays, no contrast, no shielding required. Safe for unlimited tracking scans.</p>
            </div>
            <div className="bg-white/60 backdrop-blur-md p-10 rounded-3xl shadow-xl shadow-brand-royal/5 border border-white/40 text-center transition-transform duration-300 hover:-translate-y-2">
              <div className="w-20 h-20 bg-gradient-to-br from-brand-royal to-brand-dragonfly text-brand-gold rounded-full flex items-center justify-center mx-auto mb-8 shadow-md">
                <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-brand-royal mb-4">Fast & Comfortable</h3>
              <p className="text-gray-700 font-light leading-relaxed">A typical assessment takes only minutes with you remaining fully clothed.</p>
            </div>
            <div className="bg-white/60 backdrop-blur-md p-10 rounded-3xl shadow-xl shadow-brand-royal/5 border border-white/40 text-center transition-transform duration-300 hover:-translate-y-2">
              <div className="w-20 h-20 bg-gradient-to-br from-brand-royal to-brand-dragonfly text-brand-gold rounded-full flex items-center justify-center mx-auto mb-8 shadow-md">
                <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-brand-royal mb-4">Objective Tracking</h3>
              <p className="text-gray-700 font-light leading-relaxed">Repeatable readings let you track skeletal health and regeneration over time.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-24 bg-brand-warm relative">
        <div className="container px-4 md:px-6 max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-serif text-brand-royal mb-6">How Quantitative Ultrasound Works</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto font-light">
              Quantitative ultrasound passes sound waves through bone and measures how fast they travel. Denser, healthier bone speeds up the signal in predictable ways — producing an objective bone density reading with zero ionizing radiation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-0.5 bg-brand-sky/30 z-0"></div>
            
            <div className="relative z-10 text-center group">
              <div className="w-24 h-24 bg-white/80 backdrop-blur-md border-4 border-brand-sky text-brand-royal rounded-full flex items-center justify-center font-serif text-3xl mx-auto mb-8 shadow-lg transition-transform group-hover:scale-110">1</div>
              <h4 className="text-xl font-bold text-brand-royal mb-4">Position & Scan</h4>
              <p className="text-gray-700 font-light leading-relaxed">A handheld probe is positioned against the measurement site, fully clothed. A coupling gel ensures clean signal transmission—no needles, no undressing.</p>
            </div>
            
            <div className="relative z-10 text-center group">
              <div className="w-24 h-24 bg-white/80 backdrop-blur-md border-4 border-brand-sky text-brand-royal rounded-full flex items-center justify-center font-serif text-3xl mx-auto mb-8 shadow-lg transition-transform group-hover:scale-110">2</div>
              <h4 className="text-xl font-bold text-brand-royal mb-4">Ultrasound Reading</h4>
              <p className="text-gray-700 font-light leading-relaxed">Sound waves pass through the bone and the device measures their speed. That value is used to assess bone density in minutes.</p>
            </div>
            
            <div className="relative z-10 text-center group">
              <div className="w-24 h-24 bg-gradient-to-br from-brand-royal to-brand-dragonfly border-4 border-brand-gold text-white rounded-full flex items-center justify-center font-serif text-3xl mx-auto mb-8 shadow-lg transition-transform group-hover:scale-110">3</div>
              <h4 className="text-xl font-bold text-brand-royal mb-4">Baseline & Track</h4>
              <p className="text-gray-700 font-light leading-relaxed">The reading becomes your baseline. We re-scan over the course of your protocol to quantify change and demonstrate measurable progress.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Data Driven */}
      <section className="py-20 bg-brand-royal text-white text-center">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-serif text-brand-gold mb-6">Measurement Is the Multiplier</h2>
            <p className="text-lg text-white/90 mb-10">
              You can't manage what you don't measure. Bone strength underpins mobility, posture, and recovery. Measuring it gives vital context to CellSonic Regeneration, Cardio MedBed, and other protocols across your lifespan. We turn your regenerative progress into data you can see.
            </p>
            <Button asChild className="bg-brand-gold hover:bg-yellow-500 text-brand-royal h-14 px-10 rounded-full text-lg shadow-xl">
              <Link href="/contact">Book a Scan Today</Link>
            </Button>
          </div>
        </div>
      </section>

    </Layout>
  );
}
