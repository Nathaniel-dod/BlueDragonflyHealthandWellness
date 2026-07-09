import { SEO } from "@/components/SEO";
import { Layout } from "@/components/layout/Layout";
import { ServiceFAQ } from "@/components/ServiceFAQ";
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
      <section className="py-20 bg-brand-sky/10 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-sky/20 via-transparent to-transparent pointer-events-none"></div>
        <div className="container px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xl text-gray-700 leading-relaxed mb-12 font-light">
              The basic principle of Cardio MedBed EECP (Enhanced External Counterpulsation) treatment is to increase the amount of oxygen-rich blood returning to the heart during the resting interval between beats. By supplying more oxygen to oxygen-starved areas, the heart can function much more efficiently.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="bg-white/60 backdrop-blur-md p-6 rounded-3xl shadow-xl shadow-brand-royal/5 border border-white/40 transition-transform duration-300 hover:-translate-y-1">
                <h4 className="font-serif text-brand-royal text-xl mb-2">Restored Energy</h4>
              </div>
              <div className="bg-white/60 backdrop-blur-md p-6 rounded-3xl shadow-xl shadow-brand-royal/5 border border-white/40 transition-transform duration-300 hover:-translate-y-1">
                <h4 className="font-serif text-brand-royal text-xl mb-2">Reduced Chest Pain</h4>
              </div>
              <div className="bg-white/60 backdrop-blur-md p-6 rounded-3xl shadow-xl shadow-brand-royal/5 border border-white/40 transition-transform duration-300 hover:-translate-y-1">
                <h4 className="font-serif text-brand-royal text-xl mb-2">Improved Stamina</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-24 bg-brand-warm relative">
        <div className="container px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <div>
              <h2 className="text-4xl font-serif text-brand-royal mb-10">The 4-Step Sequential Squeeze</h2>
              
              <div className="space-y-8">
                <div className="flex group">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-brand-royal to-brand-dragonfly text-brand-gold rounded-full flex items-center justify-center font-sans font-semibold text-2xl mr-6 shadow-md transition-transform group-hover:scale-110">1</div>
                  <div>
                    <h3 className="text-xl font-medium text-brand-royal mb-2">Calf Cuffs Inflate</h3>
                    <p className="text-gray-600 font-light">Calf cuffs inflate first, pushing blood upward toward the heart.</p>
                  </div>
                </div>
                
                <div className="flex group">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-brand-royal to-brand-dragonfly text-brand-gold rounded-full flex items-center justify-center font-sans font-semibold text-2xl mr-6 shadow-md transition-transform group-hover:scale-110">2</div>
                  <div>
                    <h3 className="text-xl font-medium text-brand-royal mb-2">Lower-Thigh Cuffs</h3>
                    <p className="text-gray-600 font-light">Lower-thigh cuffs add a second wave of pressure, amplifying venous return.</p>
                  </div>
                </div>

                <div className="flex group">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-brand-royal to-brand-dragonfly text-brand-gold rounded-full flex items-center justify-center font-sans font-semibold text-2xl mr-6 shadow-md transition-transform group-hover:scale-110">3</div>
                  <div>
                    <h3 className="text-xl font-medium text-brand-royal mb-2">Upper-Thigh Cuffs</h3>
                    <p className="text-gray-600 font-light">Upper-thigh cuffs complete the sequential squeeze for maximum diastolic boost.</p>
                  </div>
                </div>

                <div className="flex group">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-brand-royal to-brand-dragonfly text-brand-gold rounded-full flex items-center justify-center font-sans font-semibold text-2xl mr-6 shadow-md transition-transform group-hover:scale-110">4</div>
                  <div>
                    <h3 className="text-xl font-medium text-brand-royal mb-2">Simultaneous Deflation</h3>
                    <p className="text-gray-600 font-light">All cuffs deflate at once before the next heartbeat, drastically easing the heart's workload.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/60 backdrop-blur-md p-10 rounded-3xl border border-white/40 shadow-2xl shadow-brand-royal/5">
              <h3 className="text-2xl font-serif text-brand-royal mb-6">Why Our MedBed is Superior</h3>
              
              <ul className="space-y-6">
                <li>
                  <strong className="block text-brand-dragonfly mb-1">Arm Cuffs For Upper Body Support</strong>
                  <span className="text-gray-700 font-light">Extra upper-body compression increases blood infusion volume for the heart, brain, and kidneys. Maximum vital organ perfusion.</span>
                </li>
                <li>
                  <strong className="block text-brand-dragonfly mb-1">Precision Pressure Control</strong>
                  <span className="text-gray-700 font-light">Digital control system maintains stable working pressure with a precision error of less than 2 kPa.</span>
                </li>
                <li>
                  <strong className="block text-brand-dragonfly mb-1">Automated Controls & Safety</strong>
                  <span className="text-gray-700 font-light">Intelligent arrhythmia tracking automatically adjusts timing. Automatic stop and deflation if heart rate falls outside safe ranges.</span>
                </li>
              </ul>

              <div className="mt-10 p-6 bg-white/80 rounded-2xl border border-white/40 shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold text-brand-royal">Session Length</span>
                  <span className="text-brand-dragonfly font-bold">60 minutes</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-brand-royal">After Session</span>
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
          <h2 className="text-3xl font-serif text-brand-gold mb-4">This Is EECP — One of the Most Studied Heart Therapies in the World</h2>
          <p className="text-white/80 max-w-3xl mx-auto mb-12 text-lg font-light">
            Cardio MedBed is Enhanced External Counterpulsation (EECP) — a therapy with decades of published research behind it, delivered in a next-generation bed.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="p-6">
              <h4 className="text-xl font-medium mb-3 text-brand-gold">FDA-Cleared</h4>
              <p className="text-white/80">EECP is cleared by the U.S. FDA for the treatment of angina (chest pain) and heart failure.</p>
            </div>
            <div className="p-6">
              <h4 className="text-xl font-medium mb-3 text-brand-gold">Landmark Clinical Trial</h4>
              <p className="text-white/80">The MUST-EECP randomized controlled trial, conducted at 7 U.S. university hospitals, was published in the Journal of the American College of Cardiology.</p>
            </div>
            <div className="p-6">
              <h4 className="text-xl font-medium mb-3 text-brand-gold">Offered at Leading Hospitals</h4>
              <p className="text-white/80">EECP programs run at world-renowned institutions including the Cleveland Clinic and University of Michigan Health.</p>
            </div>
            <div className="p-6">
              <h4 className="text-xl font-medium mb-3 text-brand-gold">Decades of Research</h4>
              <p className="text-white/80">Peer-reviewed studies report improved exercise tolerance, reduced angina episodes, and better quality of life.</p>
            </div>
          </div>
          
          <div className="mt-16">
            <Button asChild className="bg-brand-gold hover:bg-yellow-500 text-brand-royal h-14 px-10 rounded-full text-lg shadow-xl">
              <Link href="/contact">Book Your EECP Session</Link>
            </Button>
          </div>
        </div>
      </section>

      <ServiceFAQ
        subtitle="Everything you need to know about EECP therapy."
        items={[
          {
            question: "What is EECP therapy?",
            answer: "EECP stands for Enhanced External Counterpulsation. It's a non-invasive therapy that uses inflatable cuffs on your legs, timed precisely to your heartbeat, to increase the amount of oxygen-rich blood flowing back to your heart between beats. Over a course of sessions, it can encourage the body to open natural bypass pathways around narrowed vessels."
          },
          {
            question: "Is EECP scientifically proven?",
            answer: "EECP is one of the most studied non-invasive heart therapies available. It is FDA-cleared in the United States for angina and heart failure, and the landmark MUST-EECP randomized controlled trial — conducted across 7 U.S. university hospitals and published in the Journal of the American College of Cardiology — showed significant improvements in exercise tolerance and angina symptoms. It is offered at leading institutions such as the Cleveland Clinic."
          },
          {
            question: "Does EECP hurt?",
            answer: "No. Most people describe it as a firm, rhythmic squeeze on the legs — like a strong massage synchronized with your heartbeat. You lie comfortably on the bed for the duration of the session, and many clients read or relax during treatment."
          },
          {
            question: "How many sessions will I need?",
            answer: "A standard EECP course is typically around 35 one-hour sessions, though your plan is personalized to your goals and how your body responds. Many clients begin noticing gradual gains in energy and stamina partway through their course."
          },
          {
            question: "Who is EECP right for?",
            answer: "EECP is designed for people looking to support heart health and circulation without surgery or medication — including those experiencing chest pain, fatigue, or reduced stamina. During your free chat with Cheryl, she'll review your situation and help you decide if it's a good fit. EECP is complementary and doesn't replace the care of your physician or cardiologist."
          }
        ]}
      />
    </Layout>
  );
}
