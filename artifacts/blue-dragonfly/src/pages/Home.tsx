import { SEO } from "@/components/SEO";
import { Layout } from "@/components/layout/Layout";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import cherylImg from "@assets/cheryl_with_logo.png";

// We'll use the generated clinic image for the hero
const heroImg = "/assets/hero-clinic.jpg";

const SERVICES = [
  {
    id: "wolfe",
    title: "Wolfe Non-Surgical",
    desc: "Target the underlying cause of pain and physical blocks with the most powerful bodywork developed.",
    link: "/services/wolfe-non-surgical"
  },
  {
    id: "cellsonic",
    title: "CellSonic Regeneration",
    desc: "Clinically proven shockwave therapy to stimulate deep tissue regeneration and pain relief.",
    link: "/services/cellsonic-regeneration"
  },
  {
    id: "cardio-medbed",
    title: "Cardio MedBed EECP",
    desc: "A non-invasive treatment to completely regenerate the heart and circulatory system.",
    link: "/services/cardio-medbed-eecp"
  },
  {
    id: "bone-density",
    title: "Advanced Bone Density Scanning",
    desc: "Clinical-grade, radiation-free ultrasound scanning to track your skeletal health in minutes.",
    link: "/services/bone-density-scanning"
  },
  {
    id: "perfect-day",
    title: "Perfect Day Consultations",
    desc: "Personalized lifestyle protocols designed to help you self-heal and stay vibrantly healthy.",
    link: "/services/perfect-day-consultations"
  }
];

export default function Home() {
  return (
    <Layout>
      <SEO 
        title="Regenerative Health & Wellness" 
        description="Blue Dragonfly Health & Wellness is a premium clinic in Calgary offering non-surgical, regenerative options including EECP, ESWT, and personalized wellness protocols."
        schema={{
          "@context": "https://schema.org",
          "@type": "HealthAndBeautyBusiness",
          "name": "Blue Dragonfly Health & Wellness",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Calgary",
            "addressRegion": "AB",
            "addressCountry": "CA"
          },
          "description": "Premium health and wellness clinic in Calgary specializing in non-surgical regenerative therapies.",
        }}
      />

      {/* Hero Section */}
      <section className="relative min-h-[90svh] flex items-center pt-10 pb-20 overflow-hidden bg-gradient-to-br from-brand-sky/25 via-brand-warm to-brand-sky/15">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImg} 
            alt="Calm premium clinic interior" 
            className="w-full h-full object-cover object-center opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-warm via-brand-warm/80 to-brand-sky/30"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-brand-royal/15 via-transparent to-transparent"></div>
          <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] rounded-full bg-brand-sky/20 blur-3xl"></div>
          <div className="absolute -top-24 right-1/4 w-[400px] h-[400px] rounded-full bg-brand-gold/15 blur-3xl"></div>
        </div>
        
        <div className="container relative z-10 px-4 md:px-6">
          <div className="max-w-3xl space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <div className="inline-block border border-brand-gold text-brand-royal px-4 py-1.5 rounded-full text-sm font-medium tracking-wide uppercase">
              Calgary, Alberta
            </div>
            <h1 className="text-5xl md:text-7xl font-serif text-brand-royal leading-[1.1]">
              Regenerate your body. <br/>
              <span className="text-gradient-gold">Restore your life.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-2xl">
              As we age, our bodies shouldn't have to break down. We offer powerful, non-surgical therapies that target the underlying cause of pain, stimulate natural healing, and help you live vibrantly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button asChild className="bg-brand-royal hover:bg-brand-dragonfly text-white h-14 px-8 rounded-full text-lg shadow-lg hover-elevate">
                <Link href="/contact">Contact Us</Link>
              </Button>
              <Button asChild variant="outline" className="h-14 px-8 rounded-full text-lg border-brand-royal text-brand-royal hover:bg-brand-royal/5">
                <a href="#services">Explore Services</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Glance */}
      <section id="services" className="py-24 bg-brand-sky/10 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-sky/20 via-transparent to-transparent pointer-events-none"></div>
        <div className="container px-4 md:px-6 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-brand-royal mb-6">Our Flagship Therapies</h2>
            <p className="text-gray-700 text-lg font-light">
              We provide the most advanced regenerative technologies available, completely non-invasive and designed to work with your body's natural healing systems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service, idx) => (
              <Link key={service.id} href={service.link}>
                <div className="group h-full bg-white/60 backdrop-blur-md rounded-3xl p-8 border border-white/40 transition-all duration-500 hover:shadow-2xl hover:shadow-brand-royal/10 hover:-translate-y-2 cursor-pointer flex flex-col relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/10 rounded-bl-full -mr-16 -mt-16 transition-transform duration-500 group-hover:scale-150"></div>
                  <div className="relative z-10 w-12 h-12 bg-gradient-to-br from-brand-royal to-brand-dragonfly rounded-full flex items-center justify-center text-brand-gold font-sans font-semibold text-2xl mb-6 shadow-md">
                    {idx + 1}
                  </div>
                  <h3 className="relative z-10 text-2xl font-serif text-brand-royal mb-4 group-hover:text-brand-dragonfly transition-colors">
                    {service.title}
                  </h3>
                  <p className="relative z-10 text-gray-700 mb-8 flex-grow">
                    {service.desc}
                  </p>
                  <div className="relative z-10 flex items-center text-brand-dragonfly font-medium text-sm mt-auto">
                    Learn more 
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Practitioner Intro */}
      <section className="py-24 bg-brand-royal text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('/assets/wellness-bg.jpg')] bg-cover bg-center"></div>
        <div className="container px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 space-y-6">
              <h2 className="text-4xl md:text-5xl font-serif text-brand-gold mb-6">Meet Cheryl Hathaway, NWP</h2>
              <p className="text-lg text-white/90 leading-relaxed">
                As a New World Practitioner, Cheryl believes that the body holds immense potential to heal itself when given the right support. She brings decades of understanding to the practice of non-surgical restoration.
              </p>
              <p className="text-lg text-white/90 leading-relaxed">
                Whether you're looking to eliminate pain, improve heart health, or simply craft the perfect daily routine for longevity, Cheryl provides the personalized, lifetime support necessary to achieve extraordinary results.
              </p>
              <div className="pt-8">
                <Button asChild className="bg-brand-gold hover:bg-brand-gold/90 text-brand-royal h-14 px-8 rounded-full text-lg font-medium">
                  <Link href="/about">Read Full Bio</Link>
                </Button>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative">
                <div className="absolute -inset-4 border-2 border-brand-gold/30 rounded-2xl rounded-bl-[100px] transform rotate-3"></div>
                <img 
                  src={cherylImg} 
                  alt="Cheryl Hathaway, NWP" 
                  className="w-full h-auto rounded-2xl rounded-bl-[100px] shadow-2xl relative z-10"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-brand-warm relative overflow-hidden">
        <div className="absolute -top-24 -left-24 w-[400px] h-[400px] rounded-full bg-brand-sky/15 blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-24 -right-24 w-[400px] h-[400px] rounded-full bg-brand-gold/10 blur-3xl pointer-events-none"></div>
        <div className="container px-4 md:px-6 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-brand-royal mb-6">Your Journey Starts With a Conversation</h2>
            <p className="text-gray-700 text-lg font-light">
              No pressure, no obligation — just a real conversation about what your body needs to heal.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="relative bg-white/70 backdrop-blur-md rounded-3xl p-8 border border-white/40 shadow-xl shadow-brand-royal/5 text-center">
              <div className="w-14 h-14 mx-auto bg-gradient-to-br from-brand-royal to-brand-dragonfly rounded-full flex items-center justify-center text-brand-gold font-sans font-semibold text-3xl mb-6 shadow-md">1</div>
              <h3 className="text-2xl font-serif text-brand-royal mb-4">Reach Out</h3>
              <p className="text-gray-700 font-light">
                Send us a message — it takes less than a minute. Tell us what's been holding you back, whether it's pain, fatigue, or simply wanting more out of life.
              </p>
            </div>
            <div className="relative bg-white/70 backdrop-blur-md rounded-3xl p-8 border border-white/40 shadow-xl shadow-brand-royal/5 text-center">
              <div className="w-14 h-14 mx-auto bg-gradient-to-br from-brand-royal to-brand-dragonfly rounded-full flex items-center justify-center text-brand-gold font-sans font-semibold text-3xl mb-6 shadow-md">2</div>
              <h3 className="text-2xl font-serif text-brand-royal mb-4">Talk With Cheryl — Free</h3>
              <p className="text-gray-700 font-light">
                Book a complimentary 15-minute chat with Cheryl herself. She'll listen to your story, answer your questions, and tell you honestly whether she can help.
              </p>
            </div>
            <div className="relative bg-white/70 backdrop-blur-md rounded-3xl p-8 border border-white/40 shadow-xl shadow-brand-royal/5 text-center">
              <div className="w-14 h-14 mx-auto bg-gradient-to-br from-brand-royal to-brand-dragonfly rounded-full flex items-center justify-center text-brand-gold font-sans font-semibold text-3xl mb-6 shadow-md">3</div>
              <h3 className="text-2xl font-serif text-brand-royal mb-4">Get Your Personalized Plan</h3>
              <p className="text-gray-700 font-light">
                Receive a plan built around your body, your history, and your goals — then begin your journey back to a pain-free, vibrant life.
              </p>
            </div>
          </div>

          <div className="text-center mt-14">
            <Button asChild className="bg-brand-royal hover:bg-brand-dragonfly text-white h-14 px-10 rounded-full text-lg shadow-lg">
              <Link href="/contact">Start With a Free 15-Minute Chat</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-brand-warm">
        <div className="container px-4 md:px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-serif text-brand-royal mb-8">Ready to reclaim your health?</h2>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Take the first step toward a pain-free, energetic life. Schedule a consultation or send us a message today.
          </p>
          <Button asChild className="bg-brand-royal hover:bg-brand-dragonfly text-white h-16 px-10 rounded-full text-xl shadow-xl">
            <Link href="/contact">Contact Us Today</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
