import { SEO } from "@/components/SEO";
import { Layout } from "@/components/layout/Layout";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import cherylImg from "@assets/cheryl_image_1783523109696.jpeg";

export default function About() {
  return (
    <Layout>
      <SEO 
        title="About Cheryl Hathaway, NWP" 
        description="Meet Cheryl Hathaway, New World Practitioner at Blue Dragonfly Health & Wellness in Calgary. Discover her approach to regenerative wellness."
      />

      <div className="bg-brand-warm py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            
            {/* Header */}
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-serif text-brand-royal mb-6">About Us</h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Dedicated to helping you reverse the signs of aging and eliminate pain through advanced, non-surgical regeneration.
              </p>
            </div>

            {/* Cheryl Bio */}
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-border">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                
                <div className="lg:col-span-5">
                  <div className="sticky top-32">
                    <img 
                      src={cherylImg} 
                      alt="Cheryl Hathaway, NWP" 
                      className="w-full rounded-2xl shadow-lg object-cover aspect-[4/5]"
                    />
                    <div className="mt-8 text-center lg:text-left">
                      <h2 className="text-3xl font-serif text-brand-royal">Cheryl Hathaway</h2>
                      <p className="text-brand-gold font-medium tracking-wide mt-1 uppercase text-sm">New World Practitioner (NWP)</p>
                    </div>
                  </div>
                </div>
                
                <div className="lg:col-span-7 prose prose-lg prose-blue max-w-none text-gray-700">
                  <p className="lead text-xl text-brand-royal font-medium">
                    "True healing isn't about managing symptoms—it's about removing the physical blocks that create aches, pains, and disease."
                  </p>
                  
                  <p>
                    As a New World Practitioner (NWP), Cheryl Hathaway operates on a simple but profound principle: your body is designed to heal itself. Often, what stands in the way of that healing is deep tissue blockages, cellular starvation, or simply not having the right protocol in place.
                  </p>
                  
                  <p>
                    At Blue Dragonfly Health & Wellness, Cheryl utilizes state-of-the-art technologies and techniques that are clinically proven but operate outside the paradigm of invasive surgery or pharmaceuticals. From unlocking cellular energy with CellSonic Regeneration to completely revitalizing the circulatory system with Cardio MedBed EECP, her approach is comprehensive and data-driven.
                  </p>
                  
                  <h3 className="text-2xl font-serif text-brand-royal mt-10 mb-4">A Personalized Approach</h3>
                  <p>
                    No two bodies are exactly alike, which is why Cheryl champions the <strong>Perfect Day Consultation</strong>. This isn't a quick 15-minute visit. It's a deep dive into your daily routine, your health history, and your goals. Whether you are dealing with a degenerating condition or want to stay vibrantly healthy to prevent conditions from developing, Cheryl builds a customized, actionable protocol that fits your life.
                  </p>

                  <p>
                    Her clients often report feeling heard, understood, and—most importantly—empowered. She offers lifetime support and guidance to ensure her clients have the tools they need to achieve extraordinary results.
                  </p>

                  <div className="mt-12 p-8 bg-brand-warm rounded-2xl border border-brand-gold/30">
                    <h4 className="text-xl font-serif text-brand-royal mb-4">Ready to start your journey?</h4>
                    <p className="mb-6">Connect with Cheryl in person at our Calgary clinic, or online from the comfort of your home.</p>
                    <Button asChild className="bg-brand-royal hover:bg-brand-dragonfly text-white rounded-full">
                      <Link href="/services/perfect-day-consultations">Book a Perfect Day Consultation</Link>
                    </Button>
                  </div>
                </div>

              </div>
            </div>

            {/* Practitioner Placeholder (Reused from Home) */}
            <div className="mt-24 max-w-4xl mx-auto text-center border border-dashed border-brand-sky/50 rounded-3xl p-12 bg-white">
              <div className="w-20 h-20 bg-brand-warm rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm text-brand-sky">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-serif text-brand-royal mb-4">More Practitioners Coming Soon</h3>
              <p className="text-gray-500 max-w-lg mx-auto">
                Our clinic is growing to better serve the Calgary community. We will be welcoming new expert practitioners to the Blue Dragonfly team shortly. Check back soon!
              </p>
            </div>

          </div>
        </div>
      </div>
    </Layout>
  );
}
