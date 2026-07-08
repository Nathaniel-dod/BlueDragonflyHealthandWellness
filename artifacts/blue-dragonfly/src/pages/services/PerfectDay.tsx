import { SEO } from "@/components/SEO";
import { Layout } from "@/components/layout/Layout";
import { IntakeForm } from "@/components/IntakeForm";

export default function PerfectDay() {
  return (
    <Layout>
      <SEO 
        title="Perfect Day Consultations" 
        description="Create your perfect day with a personalized lifestyle and health protocol by Cheryl Hathaway, NWP."
        schema={{
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Perfect Day Consultations",
          "provider": {
            "@type": "HealthAndBeautyBusiness",
            "name": "Blue Dragonfly Health & Wellness"
          },
          "description": "Personalized health protocol and lifestyle consultation for vibrant health and longevity."
        }}
      />

      {/* Hero */}
      <section className="relative pt-24 pb-32 overflow-hidden bg-brand-royal text-white">
        <div className="absolute inset-0 z-0">
          <img 
            src="/assets/perfect-day.jpg" 
            alt="Perfect Day Consultation" 
            className="w-full h-full object-cover object-center opacity-30 mix-blend-multiply"
          />
        </div>
        <div className="container relative z-10 px-4 md:px-6">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-serif text-brand-gold mb-6">Perfect Day Consultations</h1>
            <p className="text-xl md:text-2xl text-white/90 font-light mb-8">
              Create Your Perfect Day With A Personalized Consultation
            </p>
            <p className="text-lg text-white/80 max-w-2xl leading-relaxed">
              Start today in person or from the comfort and privacy of your own home to speak directly with Cheryl Hathaway, NWP. This is for people who are dealing with a condition, or who want the ultimate proactive protocol to stay vibrantly healthy for decades to come.
            </p>
          </div>
        </div>
      </section>

      {/* Journey & Benefits */}
      <section className="py-20 bg-brand-sky/10 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-sky/20 via-transparent to-transparent pointer-events-none"></div>
        <div className="container px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20">
            
            <div className="bg-white/60 backdrop-blur-md p-10 rounded-3xl shadow-xl shadow-brand-royal/5 border border-white/40">
              <h2 className="text-3xl font-serif text-brand-royal mb-6">Your Journey</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-brand-gold/20 text-brand-gold flex items-center justify-center mt-1 mr-4 flex-shrink-0">✓</div>
                  <span className="text-gray-700">One-Hour Initial Consultation With Cheryl Hathaway, NWP.</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-brand-gold/20 text-brand-gold flex items-center justify-center mt-1 mr-4 flex-shrink-0">✓</div>
                  <span className="text-gray-700">Personalized Perfect Day Lifestyle Protocol for Health and Happiness.</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-brand-gold/20 text-brand-gold flex items-center justify-center mt-1 mr-4 flex-shrink-0">✓</div>
                  <span className="text-gray-700">Deep examination of health history and daily routine.</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-brand-gold/20 text-brand-gold flex items-center justify-center mt-1 mr-4 flex-shrink-0">✓</div>
                  <span className="text-gray-700">Digital audio recording or written protocols of your consultation.</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-brand-gold/20 text-brand-gold flex items-center justify-center mt-1 mr-4 flex-shrink-0">✓</div>
                  <span className="text-gray-700">Simple daily detox protocols to fit your lifestyle.</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-brand-sky/20 text-brand-dragonfly flex items-center justify-center mt-1 mr-4 flex-shrink-0">✦</div>
                  <span className="text-brand-royal font-medium">Lifetime Support & Guidance.</span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-serif text-brand-royal mb-6">Benefits to Expect</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Mental Clarity & Focus", "Peace of Mind", "Balanced Hormones",
                  "Healthy Glowing Skin", "Self-Awareness", "The Power to Self-Heal",
                  "Weight Balance", "Abundant Energy", "Pain-Free Muscles & Joints",
                  "Healthy Diet & Recipes"
                ].map(benefit => (
                  <div key={benefit} className="bg-white/60 backdrop-blur-md px-4 py-3 rounded-xl border border-white/40 text-gray-700 flex items-center shadow-sm">
                    <div className="w-2 h-2 bg-brand-dragonfly rounded-full mr-3"></div>
                    {benefit}
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-24 bg-brand-warm relative">
        <div className="absolute top-0 left-0 w-full h-1/2 bg-brand-sky/10 pointer-events-none"></div>
        <div className="container relative z-10 px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-4xl font-serif text-brand-royal mb-4">Start Your Intake</h2>
            <p className="text-lg text-gray-600 font-light">
              Please complete this guided intake form so we can begin preparing your personalized protocol.
            </p>
          </div>
          
          <IntakeForm />
          
        </div>
      </section>

    </Layout>
  );
}
