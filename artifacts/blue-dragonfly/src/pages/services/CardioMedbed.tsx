import { SEO } from "@/components/SEO";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function CardioMedBed() {
  return (
    <Layout>
      <SEO 
        title="Cardio MedBed EECP Treatments" 
        description="Regenerate your heart and circulatory system with our Cardio MedBed EECP therapy in Calgary."
        schema={{
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Cardio MedBed EECP Treatments",
          "provider": {
            "@type": "HealthAndBeautyBusiness",
            "name": "Blue Dragonfly Health & Wellness"
          },
          "description": "Enhanced External Counterpulsation (EECP) therapy for cardiovascular health."
        }}
      />

      {/* Hero */}
      <section className="relative pt-24 pb-32 overflow-hidden bg-brand-royal text-white">
        <div className="absolute inset-0 z-0">
          <img 
            src="/assets/cardio-medbed.jpg" 
            alt="Cardio MedBed EECP" 
            className="w-full h-full object-cover object-center opacity-30 mix-blend-multiply"
          />
        </div>
        <div className="container relative z-10 px-4 md:px-6">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-serif text-brand-gold mb-6">Cardio MedBed EECP</h1>
            <p className="text-xl md:text-2xl text-white/90 font-light mb-8">
              Complete Regeneration of Heart & Circulatory System
            </p>
            <blockquote className="border-l-4 border-brand-gold pl-6 py-2 mb-8 text-xl italic text-white/90 font-serif">
              "After 40 hours on the Cardio MedBed, many patients describe it as a second chance for their heart."
            </blockquote>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 bg-brand-warm">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xl text-gray-700 leading-relaxed mb-12">
              The basic principle of Cardio MedBed EECP (Enhanced External Counterpulsation) treatment is to increase the amount of oxygen-rich blood returning to the heart during the resting interval between beats. By supplying more oxygen to oxygen-starved areas, the heart can function much more efficiently.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-border">
                <h4 className="font-serif text-brand-royal text-xl mb-2">Restored Energy</h4>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-border">
                <h4 className="font-serif text-brand-royal text-xl mb-2">Reduced Chest Pain</h4>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-border">
                <h4 className="font-serif text-brand-royal text-xl mb-2">Improved Stamina</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <div>
              <h2 className="text-4xl font-serif text-brand-royal mb-10">The 4-Step Sequential Squeeze</h2>
              
              <div className="space-y-8">
                <div className="flex">
                  <div className="flex-shrink-0 w-12 h-12 bg-brand-royal text-brand-gold rounded-full flex items-center justify-center font-serif text-xl mr-6">1</div>
                  <div>
                    <h3 className="text-xl font-medium text-gray-900 mb-2">Calf Cuffs Inflate</h3>
                    <p className="text-gray-600">Calf cuffs inflate first, pushing blood upward toward the heart.</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 w-12 h-12 bg-brand-royal text-brand-gold rounded-full flex items-center justify-center font-serif text-xl mr-6">2</div>
                  <div>
                    <h3 className="text-xl font-medium text-gray-900 mb-2">Lower-Thigh Cuffs</h3>
                    <p className="text-gray-600">Lower-thigh cuffs add a second wave of pressure, amplifying venous return.</p>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0 w-12 h-12 bg-brand-royal text-brand-gold rounded-full flex items-center justify-center font-serif text-xl mr-6">3</div>
                  <div>
                    <h3 className="text-xl font-medium text-gray-900 mb-2">Upper-Thigh Cuffs</h3>
                    <p className="text-gray-600">Upper-thigh cuffs complete the sequential squeeze for maximum diastolic boost.</p>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0 w-12 h-12 bg-brand-royal text-brand-gold rounded-full flex items-center justify-center font-serif text-xl mr-6">4</div>
                  <div>
                    <h3 className="text-xl font-medium text-gray-900 mb-2">Simultaneous Deflation</h3>
                    <p className="text-gray-600">All cuffs deflate at once before the next heartbeat, drastically easing the heart's workload.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-brand-warm p-10 rounded-3xl border border-border">
              <h3 className="text-2xl font-serif text-brand-royal mb-6">Why Our MedBed is Superior</h3>
              
              <ul className="space-y-6">
                <li>
                  <strong className="block text-brand-dragonfly mb-1">Arm Cuffs For Upper Body Support</strong>
                  <span className="text-gray-700">Extra upper-body compression increases blood infusion volume for the heart, brain, and kidneys. Maximum vital organ perfusion.</span>
                </li>
                <li>
                  <strong className="block text-brand-dragonfly mb-1">Precision Pressure Control</strong>
                  <span className="text-gray-700">Digital control system maintains stable working pressure with a precision error of less than 2 kPa.</span>
                </li>
                <li>
                  <strong className="block text-brand-dragonfly mb-1">Automated Controls & Safety</strong>
                  <span className="text-gray-700">Intelligent arrhythmia tracking automatically adjusts timing. Automatic stop and deflation if heart rate falls outside safe ranges.</span>
                </li>
              </ul>

              <div className="mt-10 p-6 bg-white rounded-xl border border-border">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold text-gray-900">Session Length</span>
                  <span className="text-brand-dragonfly font-bold">60 minutes</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-gray-900">After Session</span>
                  <span className="text-brand-dragonfly font-bold">Gradual energy gains</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Validation */}
      <section className="py-20 bg-brand-royal text-white text-center">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-serif text-brand-gold mb-12">Clinically Recognized</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="p-6">
              <h4 className="text-xl font-medium mb-3">FDA-Approved (USA)</h4>
              <p className="text-white/80">Recognized as an effective therapy for angina and heart failure.</p>
            </div>
            <div className="p-6">
              <h4 className="text-xl font-medium mb-3">European Society of Cardiology</h4>
              <p className="text-white/80">Endorsed and recommended for enhancing blood circulation and heart function.</p>
            </div>
            <div className="p-6">
              <h4 className="text-xl font-medium mb-3">Clinically Validated</h4>
              <p className="text-white/80">Studies confirm EECP's effectiveness in patients with coronary artery disease.</p>
            </div>
          </div>
          
          <div className="mt-16">
            <Button asChild className="bg-brand-gold hover:bg-yellow-500 text-brand-royal h-14 px-10 rounded-full text-lg shadow-xl">
              <Link href="/contact">Book Your EECP Session</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
