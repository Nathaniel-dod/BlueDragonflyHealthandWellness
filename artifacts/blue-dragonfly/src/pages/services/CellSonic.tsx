import { SEO } from "@/components/SEO";
import { Layout } from "@/components/layout/Layout";
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
      <section className="py-20 bg-brand-warm">
        <div className="container px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-brand-royal mb-6">How CellSonic Works</h2>
            <p className="text-lg text-gray-700">
              A healthy body generates 0.04 volts per cell — across 50 trillion cells, that's 2 trillion volts of latent healing energy. CellSonic Regeneration taps directly into this natural electrical system rather than overriding it.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-border">
              <div className="text-brand-gold font-serif text-4xl mb-4">1</div>
              <h3 className="text-xl font-bold text-brand-royal mb-3">Bioelectric Foundation</h3>
              <p className="text-gray-600">Your body is a battery. CellSonic taps directly into this natural electrical system to power healing.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-border">
              <div className="text-brand-gold font-serif text-4xl mb-4">2</div>
              <h3 className="text-xl font-bold text-brand-royal mb-3">Targeted Acoustic Pulses</h3>
              <p className="text-gray-600">High-pressure waves surge through damaged tissue, triggering blood flow and activating stem cells.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-border">
              <div className="text-brand-gold font-serif text-4xl mb-4">3</div>
              <h3 className="text-xl font-bold text-brand-royal mb-3">Cascade of Regeneration</h3>
              <p className="text-gray-600">Healing mechanisms shift into overdrive. Inflammation drops. Tissue rebuilds. Pain often fades without surgery.</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Future of ESWT */}
      <section className="py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-brand-royal text-white p-6 rounded-2xl">
                  <h4 className="font-bold text-lg mb-2 text-brand-gold">50% Deeper</h4>
                  <p className="text-sm text-white/80">Penetration than other leading devices on the market.</p>
                </div>
                <div className="bg-brand-warm text-brand-royal p-6 rounded-2xl">
                  <h4 className="font-bold text-lg mb-2 text-brand-dragonfly">No Downtime</h4>
                  <p className="text-sm text-gray-700">Return to activity immediately following your 30-45 minute session.</p>
                </div>
                <div className="bg-brand-warm text-brand-royal p-6 rounded-2xl">
                  <h4 className="font-bold text-lg mb-2 text-brand-dragonfly">Precise</h4>
                  <p className="text-sm text-gray-700">Frequency adjustability to perfectly target trouble areas.</p>
                </div>
                <div className="bg-brand-royal text-white p-6 rounded-2xl">
                  <h4 className="font-bold text-lg mb-2 text-brand-gold">Measurable</h4>
                  <p className="text-sm text-white/80">Results visible within weeks without pharmaceuticals.</p>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="text-4xl font-serif text-brand-royal mb-6">The Future of ESWT</h2>
              <p className="text-lg text-gray-700 mb-6">
                CellSonic represents the absolute bleeding edge of regenerative acoustic therapy. Its electromagnetic pulse mechanism delivers documented effects across the entire body:
              </p>
              <ul className="space-y-4">
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
      <section className="py-20 bg-brand-warm border-t border-border">
        <div className="container px-4 md:px-6">
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
              <div key={app.num} className="bg-white p-6 rounded-2xl border border-border shadow-sm">
                <div className="text-brand-sky font-medium text-sm mb-2">{app.num} / 08</div>
                <h4 className="font-bold text-brand-royal mb-2">{app.title}</h4>
                <p className="text-sm text-gray-600">{app.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
