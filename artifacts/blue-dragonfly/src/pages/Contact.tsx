import { SEO } from "@/components/SEO";
import { Layout } from "@/components/layout/Layout";
import { ContactForm } from "@/components/ContactForm";

export default function Contact() {
  return (
    <Layout>
      <SEO 
        title="Contact Us" 
        description="Book a consultation at Blue Dragonfly Health & Wellness in Calgary, Alberta. Get in touch to learn more about our regenerative therapies."
      />

      <div className="bg-brand-sky/10 relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-sky/20 via-transparent to-transparent pointer-events-none"></div>
        <div className="container px-4 md:px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            
            <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-8 duration-1000">
              <h1 className="text-5xl md:text-6xl font-serif text-brand-royal mb-6">Contact Us</h1>
              <p className="text-xl text-gray-700 max-w-2xl mx-auto font-light">
                Ready to take the next step in your health journey? Reach out to schedule a consultation or ask any questions.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-150">
              
              <div className="lg:col-span-5 space-y-8">
                <div className="bg-white/60 backdrop-blur-md p-8 rounded-3xl shadow-xl shadow-brand-royal/5 border border-white/40">
                  <h3 className="text-2xl font-serif text-brand-royal mb-6">Clinic Information</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <svg className="w-6 h-6 text-brand-gold mt-1 mr-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <div>
                        <h4 className="font-semibold text-brand-royal text-lg">Location</h4>
                        <p className="text-gray-600 mt-1">Calgary, Alberta<br/>Canada</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <svg className="w-6 h-6 text-brand-gold mt-1 mr-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <div>
                        <h4 className="font-semibold text-brand-royal text-lg">Online Consultations</h4>
                        <p className="text-gray-600 mt-1">Available via Skype, FaceTime, WhatsApp, and Phone for clients anywhere.</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <svg className="w-6 h-6 text-brand-gold mt-1 mr-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                      <div>
                        <h4 className="font-semibold text-brand-royal text-lg">In-Person Treatments</h4>
                        <p className="text-gray-600 mt-1 mb-2">Available at our Calgary clinic only:</p>
                        <ul className="text-gray-600 space-y-1">
                          <li>Wolfe Non-Surgical Treatments</li>
                          <li>Cardio MedBed EECP</li>
                          <li>CellSonic Regeneration ESWT</li>
                          <li>Advanced Bone Density Scanning</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

              <div className="lg:col-span-7">
                <ContactForm />
              </div>

            </div>

          </div>
        </div>
      </div>
    </Layout>
  );
}
