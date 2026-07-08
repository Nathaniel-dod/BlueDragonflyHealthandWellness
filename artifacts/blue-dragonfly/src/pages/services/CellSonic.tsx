import { SEO } from "@/components/SEO";
import { Layout } from "@/components/layout/Layout";
import { ServiceFAQ } from "@/components/ServiceFAQ";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function CellSonic() {
  return (
    <Layout>
      <SEO 
        title="CellSonic Regeneration ESWT" 
        description="Innovative shockwave technology for deep tissue regeneration, pain relief, and cellular repair without downtime."
        schema={{
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "CellSonic Regeneration Treatments",
          "provider": {
            "@type": "HealthAndBeautyBusiness",
            "name": "Blue Dragonfly Health & Wellness"
          },
          "description": "Extracorporeal Shock Wave Therapy (ESWT) for tissue regeneration."
        }}
      />

      {/* Hero */}
      <section className="relative pt-24 pb-32 overflow-hidden bg-brand-royal text-white">
        <div className="absolute inset-0 z-0">
          <img 
            src="/assets/cellsonic.jpg" 
            alt="CellSonic ESWT Therapy" 
            className="w-full h-full object-cover object-center opacity-30 mix-blend-multiply"
          />
        </div>
        <div className="container relative z-10 px-4 md:px-6">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-serif text-brand-gold mb-6">CellSonic Regeneration</h1>
            <p className="text-xl md:text-2xl text-white/90 font-light mb-8">
              Innovative Technology for Tissue Regeneration
            </p>
            <p className="text-lg text-white/80 max-w-2xl leading-relaxed">
              Extracorporeal Shock Wave Therapy (ESWT) is a non-invasive technology for stimulating tissue regeneration. It is clinically proven to be effective for chronic pain, circulatory disorders, and wound healing without medication or downtime.
            </p>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-20 bg-brand-sky/10 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-sky/20 via-transparent to-transparent pointer-events-none"></div>
        <div className="container px-4 md:px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-brand-royal mb-6">How CellSonic Works</h2>
            <p className="text-lg text-gray-700 font-light">
              A healthy body generates 0.04 volts per cell — across 50 trillion cells, that's 2 trillion volts of latent healing energy. CellSonic Regeneration taps directly into this natural electrical system rather than overriding it.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/60 backdrop-blur-md p-8 rounded-3xl shadow-xl shadow-brand-royal/5 border border-white/40 transition-transform duration-300 hover:-translate-y-1">
              <div className="text-brand-gold font-serif text-4xl mb-4 opacity-50">1</div>
              <h3 className="text-xl font-bold text-brand-royal mb-3">Bioelectric Foundation</h3>
              <p className="text-gray-700 font-light">Your body is a battery. CellSonic taps directly into this natural electrical system to power healing.</p>
            </div>
            <div className="bg-white/60 backdrop-blur-md p-8 rounded-3xl shadow-xl shadow-brand-royal/5 border border-white/40 transition-transform duration-300 hover:-translate-y-1">
              <div className="text-brand-gold font-serif text-4xl mb-4 opacity-50">2</div>
              <h3 className="text-xl font-bold text-brand-royal mb-3">Targeted Acoustic Pulses</h3>
              <p className="text-gray-700 font-light">High-pressure waves surge through damaged tissue, triggering blood flow and activating stem cells.</p>
            </div>
            <div className="bg-white/60 backdrop-blur-md p-8 rounded-3xl shadow-xl shadow-brand-royal/5 border border-white/40 transition-transform duration-300 hover:-translate-y-1">
              <div className="text-brand-gold font-serif text-4xl mb-4 opacity-50">3</div>
              <h3 className="text-xl font-bold text-brand-royal mb-3">Cascade of Regeneration</h3>
              <p className="text-gray-700 font-light">Healing mechanisms shift into overdrive. Inflammation drops. Tissue rebuilds. Pain often fades without surgery.</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Future of ESWT */}
      <section className="py-24 bg-brand-warm relative">
        <div className="container px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-brand-royal to-brand-dragonfly text-white p-8 rounded-3xl shadow-lg">
                  <h4 className="font-bold text-xl mb-2 text-brand-gold">50% Deeper</h4>
                  <p className="text-sm text-white/90 font-light">Penetration than other leading devices on the market.</p>
                </div>
                <div className="bg-white/80 backdrop-blur-md text-brand-royal p-8 rounded-3xl shadow-lg border border-white/40">
                  <h4 className="font-bold text-xl mb-2 text-brand-dragonfly">No Downtime</h4>
                  <p className="text-sm text-gray-700 font-light">Return to activity immediately following your 30-45 minute session.</p>
                </div>
                <div className="bg-white/80 backdrop-blur-md text-brand-royal p-8 rounded-3xl shadow-lg border border-white/40">
                  <h4 className="font-bold text-xl mb-2 text-brand-dragonfly">Precise</h4>
                  <p className="text-sm text-gray-700 font-light">Frequency adjustability to perfectly target trouble areas.</p>
                </div>
                <div className="bg-gradient-to-br from-brand-royal to-brand-dragonfly text-white p-8 rounded-3xl shadow-lg">
                  <h4 className="font-bold text-xl mb-2 text-brand-gold">Measurable</h4>
                  <p className="text-sm text-white/90 font-light">Results visible within weeks without pharmaceuticals.</p>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="text-4xl font-serif text-brand-royal mb-6">The Future of ESWT</h2>
              <p className="text-lg text-gray-700 mb-6 font-light">
                CellSonic represents the absolute bleeding edge of regenerative acoustic therapy. Its electromagnetic pulse mechanism delivers documented effects across the entire body:
              </p>
              <ul className="space-y-4 font-light">
                <li className="flex items-center text-gray-700"><div className="w-2 h-2 bg-brand-gold rounded-full mr-3"></div> Better Blood Flow & More Oxygen</li>
                <li className="flex items-center text-gray-700"><div className="w-2 h-2 bg-brand-gold rounded-full mr-3"></div> Breaks Down Calcium Deposits</li>
                <li className="flex items-center text-gray-700"><div className="w-2 h-2 bg-brand-gold rounded-full mr-3"></div> Activates Stem Cell Growth</li>
                <li className="flex items-center text-gray-700"><div className="w-2 h-2 bg-brand-gold rounded-full mr-3"></div> Reduces Cellular Inflammation</li>
                <li className="flex items-center text-gray-700"><div className="w-2 h-2 bg-brand-gold rounded-full mr-3"></div> Collagen Stimulation & Cellulite Reduction</li>
              </ul>
              
              <div className="mt-10">
                <Button asChild className="bg-brand-royal hover:bg-brand-dragonfly text-white h-14 px-8 rounded-full text-lg shadow-md">
                  <Link href="/contact">Book CellSonic Session</Link>
                </Button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-20 bg-brand-sky/10 relative border-t border-white/40">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-brand-sky/20 via-transparent to-transparent pointer-events-none"></div>
        <div className="container px-4 md:px-6 relative z-10">
          <h2 className="text-3xl font-serif text-brand-royal text-center mb-16">Eight Areas of Application</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { num: "01", title: "Joints & Mobility", desc: "Reduces pain and inflammation, promoting cartilage regeneration." },
              { num: "02", title: "Pain Relief", desc: "Stimulates natural healing processes and improves circulation." },
              { num: "03", title: "Wounds", desc: "Accelerates wound healing and supports new cell formation." },
              { num: "04", title: "Bones", desc: "Strengthens bones and enhances blood flow in bone tissue." },
              { num: "05", title: "Jaw & Dental", desc: "Alleviates jaw pain and TMJ disorder relief." },
              { num: "06", title: "Tissues", desc: "Boosts collagen production and supports cell renewal." },
              { num: "07", title: "Tendons & Ligaments", desc: "Restores fibers, reduces microdamage, and alleviates stiffness." },
              { num: "08", title: "Erectile Dysfunction", desc: "Improves blood flow, restores function, and supports tissue healing." }
            ].map(app => (
              <div key={app.num} className="bg-white/60 backdrop-blur-md p-6 rounded-3xl border border-white/40 shadow-xl shadow-brand-royal/5 transition-all duration-300 hover:-translate-y-1">
                <div className="text-brand-sky font-medium text-sm mb-2">{app.num} / 08</div>
                <h4 className="font-bold text-brand-royal mb-2">{app.title}</h4>
                <p className="text-sm text-gray-700 font-light">{app.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ESWT Credentials */}
      <section className="py-20 bg-brand-royal text-white text-center">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-serif text-brand-gold mb-4">Built on 40+ Years of Medical Science</h2>
          <p className="text-white/80 max-w-3xl mx-auto mb-12 text-lg font-light">
            CellSonic is the next generation of Extracorporeal Shockwave Therapy (ESWT) — a technology with deep roots in mainstream medicine.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="p-6">
              <h4 className="text-xl font-medium mb-3 text-brand-gold">Proven Medical Origins</h4>
              <p className="text-white/80">Shockwave technology was introduced clinically in 1980 in Munich, Germany, and became the gold standard for treating kidney stones without surgery.</p>
            </div>
            <div className="p-6">
              <h4 className="text-xl font-medium mb-3 text-brand-gold">FDA-Cleared Technology</h4>
              <p className="text-white/80">ESWT devices are FDA-cleared in the United States for conditions such as plantar fasciitis and tennis elbow.</p>
            </div>
            <div className="p-6">
              <h4 className="text-xl font-medium mb-3 text-brand-gold">Extensively Published</h4>
              <p className="text-white/80">Decades of peer-reviewed research document ESWT's effects on tissue regeneration, blood vessel growth, and pain relief.</p>
            </div>
            <div className="p-6">
              <h4 className="text-xl font-medium mb-3 text-brand-gold">Used Worldwide</h4>
              <p className="text-white/80">Shockwave therapy is used in orthopedics, sports medicine, and physiotherapy clinics around the globe — including for professional athletes.</p>
            </div>
          </div>
        </div>
      </section>

      <ServiceFAQ
        subtitle="Everything you need to know about CellSonic and shockwave therapy."
        items={[
          {
            question: "What is ESWT, and how does CellSonic relate to it?",
            answer: "ESWT stands for Extracorporeal Shockwave Therapy — 'extracorporeal' simply means 'outside the body.' It uses focused acoustic pressure pulses to stimulate healing in targeted tissue. The technology has been used in mainstream medicine since 1980, when it revolutionized kidney stone treatment. CellSonic is an advanced evolution of this technology, using very intense pressure pulses designed to reach deeper tissue."
          },
          {
            question: "Is shockwave therapy scientifically supported?",
            answer: "Yes. ESWT has decades of peer-reviewed research behind it, and devices are FDA-cleared in the U.S. for conditions like plantar fasciitis and tennis elbow. Published studies document effects including new blood vessel growth, up-regulation of growth factors, improved blood supply, and tissue regeneration. It's widely used in orthopedics and sports medicine worldwide."
          },
          {
            question: "Does the treatment hurt?",
            answer: "Most clients feel a series of rapid pulses against the skin — often described as tolerable tapping. Sensitivity varies by treatment area, and the intensity is fully adjustable to your comfort. There are no needles, no incisions, and no medication involved."
          },
          {
            question: "Is there any downtime?",
            answer: "No downtime. Sessions run 30–45 minutes and you can return to your normal activities immediately afterward. Some people experience mild redness or tenderness in the treated area, which typically settles quickly as the healing response gets to work."
          },
          {
            question: "How many sessions will I need?",
            answer: "It depends on the condition and how long you've had it. Some clients notice changes within a few sessions, while chronic conditions may benefit from a longer course. Cheryl will map out a recommended plan for your specific situation during your consultation."
          }
        ]}
      />
    </Layout>
  );
}
