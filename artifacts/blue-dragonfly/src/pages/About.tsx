import { SEO } from "@/components/SEO";
import { Layout } from "@/components/layout/Layout";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import cherylImg from "@assets/cheryl_image-w_logo_1783984989766.png";
import dragonflyJourneyImg from "@/assets/dragonfly-journey.png";

export default function About() {
  return (
    <Layout>
      <SEO 
        title="About Cheryl Hathaway, NWP" 
        description="Meet Cheryl Hathaway, New World Practitioner at Blue Dragonfly Health & Wellness in Calgary. Discover her approach to regenerative wellness."
      />

      <div className="bg-brand-sky/10 relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-sky/20 via-transparent to-transparent pointer-events-none"></div>
        <div className="container px-4 md:px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            
            {/* Header */}
            <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-8 duration-1000">
              <h1 className="text-5xl md:text-6xl font-serif text-brand-royal mb-6">About Me</h1>
              <p className="text-xl text-gray-700 max-w-2xl mx-auto font-light">
                I'm dedicated to helping you reverse the signs of aging and eliminate pain through advanced, non-surgical regeneration.
              </p>
            </div>

            {/* Cheryl Bio */}
            <div className="bg-white/60 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-2xl shadow-brand-royal/5 border border-white/40 animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-150">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                
                <div className="lg:col-span-5">
                  <div className="sticky top-32">
                    <img 
                      src={cherylImg} 
                      alt="Cheryl Hathaway, NWP" 
                      className="w-full rounded-2xl shadow-lg"
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
                    I'm Cheryl Hathaway, a New World Practitioner (NWP), and I operate on a simple but profound principle: your body is designed to heal itself. Often, what stands in the way of that healing is deep tissue blockages, cellular starvation, or simply not having the right protocol in place.
                  </p>
                  
                  <p>
                    At Blue Dragonfly Health & Wellness, I use state-of-the-art technologies and techniques that are clinically studied but operate outside the paradigm of invasive surgery or pharmaceuticals. From unlocking cellular energy with CellSonic Regeneration to revitalizing the circulatory system with Cardio MedBed EECP, my approach is comprehensive and data-driven.
                  </p>
                  
                </div>

              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mt-16 pt-16 border-t border-brand-sky/20">

                <div className="lg:col-span-7 prose prose-lg prose-blue max-w-none text-gray-700">
                  <h3 className="text-2xl font-serif text-brand-royal mb-4">My Personalized Approach</h3>
                  <p>
                    No two bodies are exactly alike, which is why I champion the <strong>Perfect Day Consultation</strong>. This isn't a quick 15-minute visit. It's a deep dive into your daily routine, your health history, and your goals. Whether you are dealing with a degenerating condition or want to stay vibrantly healthy to prevent conditions from developing, I build a customized, actionable protocol that fits your life.
                  </p>

                  <p>
                    My clients often tell me they feel heard, understood, and—most importantly—empowered. I offer lifetime support and guidance, because I want you to have every tool you need to achieve extraordinary results.
                  </p>

                  <div className="mt-12 p-8 bg-brand-warm rounded-2xl border border-brand-gold/30">
                    <h4 className="text-xl font-serif text-brand-royal mb-4">Ready to start your journey?</h4>
                    <p className="mb-6">Connect with me in person at my Calgary clinic, or online from the comfort of your home.</p>
                    <Button asChild className="bg-brand-royal hover:bg-brand-dragonfly text-white rounded-full">
                      <Link href="/services/perfect-day-consultations">Book a Perfect Day Consultation</Link>
                    </Button>
                  </div>
                </div>

                <div className="lg:col-span-5">
                  <div className="relative">
                    <div className="absolute -inset-3 border-2 border-brand-gold/30 rounded-2xl rounded-br-[80px] transform rotate-2"></div>
                    <img
                      src={dragonflyJourneyImg}
                      alt="A blue dragonfly rising along a golden path of light — the journey to renewed wellness"
                      className="w-full h-auto rounded-2xl rounded-br-[80px] shadow-2xl relative z-10"
                    />
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </Layout>
  );
}
