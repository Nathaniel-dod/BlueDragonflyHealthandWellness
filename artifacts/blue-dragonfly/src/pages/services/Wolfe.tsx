import { SEO } from "@/components/SEO";
import { Layout } from "@/components/layout/Layout";
import { ServiceFAQ } from "@/components/ServiceFAQ";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import wolfeTreatmentImg from "@assets/ChatGPT_Image_Jul_20,_2026,_04_25_47_PM_1784575565342.png";

export default function WolfeNonSurgical() {
  return (
    <Layout>
      <SEO 
        title="Wolfe Non-Surgical Treatments" 
        description="Target the underlying cause of pain with the most powerful bodywork developed. Wolfe Non-Surgical treatments available in Calgary."
        schema={{
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Wolfe Non-Surgical Treatments",
          "provider": {
            "@type": "HealthAndBeautyBusiness",
            "name": "Blue Dragonfly Health & Wellness"
          },
          "description": "Powerful bodywork targeting scar tissue, inflammation, and physical blocks."
        }}
      />

      {/* Hero */}
      <section className="relative pt-24 pb-32 overflow-hidden bg-brand-royal text-white">
        <div className="absolute inset-0 z-0">
          <img 
            src="/assets/wolfe-hero.png" 
            alt="Wolfe Non-Surgical Bodywork" 
            className="w-full h-full object-cover object-[75%_center] md:object-center opacity-45 md:opacity-30 mix-blend-multiply"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-royal/80 via-brand-royal/50 to-brand-royal/70 md:hidden"></div>
        </div>
        <div className="container relative z-10 px-4 md:px-6">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-serif text-brand-gold mb-6">Wolfe Non-Surgical Treatments</h1>
            <p className="text-xl md:text-2xl text-white/90 font-light mb-8">
              The Most Powerful Bodywork Ever Developed
            </p>
            <p className="text-lg text-white/80 max-w-2xl leading-relaxed">
              Unlike conventional therapies that only address symptoms, Wolfe Non-Surgical Treatments target the underlying cause of acute and chronic conditions. We target scar tissue, inflammation, calcification, and crystallization: the physical blocks that create aches and pain.
            </p>
          </div>
        </div>
      </section>

      {/* Heritage & Credentials */}
      <section className="py-20 bg-brand-warm relative overflow-hidden">
        <div className="absolute -top-24 -right-24 w-[400px] h-[400px] rounded-full bg-brand-gold/10 blur-3xl pointer-events-none"></div>
        <div className="container px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white/70 backdrop-blur-md p-8 rounded-3xl border border-white/40 shadow-xl shadow-brand-royal/5 text-center">
              <div className="text-5xl font-serif text-brand-gold mb-4">40+</div>
              <h3 className="text-xl font-serif text-brand-royal mb-3">Years in the Trenches</h3>
              <p className="text-gray-700 font-light">Developed by Dr. Darrell Wolfe over 40 years of hands-on, in-the-trenches clinical care — refined not in a lab, but on real bodies with real pain.</p>
            </div>
            <div className="bg-white/70 backdrop-blur-md p-8 rounded-3xl border border-white/40 shadow-xl shadow-brand-royal/5 text-center">
              <div className="text-5xl font-serif text-brand-gold mb-4">4</div>
              <h3 className="text-xl font-serif text-brand-royal mb-3">Continents of Practice</h3>
              <p className="text-gray-700 font-light">This deep tissue therapy is known and practiced throughout North America, South America, Australia, and Europe — trusted by practitioners from massage therapists to medical doctors.</p>
            </div>
            <div className="bg-white/70 backdrop-blur-md p-8 rounded-3xl border border-white/40 shadow-xl shadow-brand-royal/5 text-center">
              <div className="w-14 h-14 mx-auto bg-gradient-to-br from-brand-royal to-brand-dragonfly rounded-full flex items-center justify-center mb-4 shadow-md">
                <svg className="w-7 h-7 text-brand-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-serif text-brand-royal mb-3">Certified Practitioner</h3>
              <p className="text-gray-700 font-light">Cheryl Hathaway, NWP is certified to practice Wolfe Non-Surgical deep tissue therapy — bringing this world-renowned technique to Calgary.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-brand-sky/10 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-sky/20 via-transparent to-transparent pointer-events-none"></div>
        <div className="container px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            <div className="lg:col-span-8">
              <div className="prose prose-lg prose-blue max-w-none text-gray-700">
                <h2 className="text-3xl font-serif text-brand-royal mb-6">Results from the first treatment</h2>
                <p>
                  Most clients notice better results from their first treatment than anything they've tried before. Many issues resolve in just a few sessions, sometimes only one. Our approach physically removes the restrictions preventing your body from healing itself.
                </p>

                <div className="relative max-w-xl mx-auto my-12 not-prose">
                  <div className="absolute -inset-3 border-2 border-brand-gold/30 rounded-2xl rounded-bl-[80px] transform -rotate-2"></div>
                  <img 
                    src={wolfeTreatmentImg} 
                    alt="Wolfe Non-Surgical deep tissue treatment targeting the source of pain" 
                    className="w-full h-auto rounded-2xl rounded-bl-[80px] shadow-2xl relative z-10"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
                  <div className="bg-white/60 backdrop-blur-md p-8 rounded-3xl shadow-xl shadow-brand-royal/5 border border-white/40">
                    <h3 className="text-xl font-serif text-brand-royal mb-2">Session Length</h3>
                    <p className="text-3xl text-brand-dragonfly font-light">60 - 90 <span className="text-base text-gray-500 font-normal">minutes</span></p>
                  </div>
                  <div className="bg-white/60 backdrop-blur-md p-8 rounded-3xl shadow-xl shadow-brand-royal/5 border border-white/40">
                    <h3 className="text-xl font-serif text-brand-royal mb-2">After Session</h3>
                    <p className="text-lg text-gray-700 font-light">Mild soreness, comparable to a deep workout as the body heals.</p>
                  </div>
                </div>

                <h3 className="text-2xl font-serif text-brand-royal mt-12 mb-6">Effective on All Joints & Organs</h3>
                <div className="columns-1 sm:columns-2 md:columns-3 gap-8">
                  <ul className="list-disc pl-5 space-y-2 marker:text-brand-gold">
                    <li>Abdominal Pain</li>
                    <li>Ankle Problems</li>
                    <li>Back Pain</li>
                    <li>Bone Spurs</li>
                    <li>Bursitis</li>
                    <li>Disc Problems</li>
                    <li>Displaced Calcium</li>
                    <li>Fibromyalgia</li>
                    <li>Frozen Neck</li>
                    <li>Headache & Migraines</li>
                    <li>Hip/Knee Problems</li>
                    <li>Muscle Spasm</li>
                    <li>Neck & Nerve Pain</li>
                    <li>Numbness & Tingling</li>
                    <li>Osteoarthritis</li>
                    <li>Overuse Syndrome</li>
                    <li>Pregnancy Complications</li>
                    <li>Rheumatoid Arthritis</li>
                    <li>Sciatica</li>
                    <li>Sports Injuries</li>
                    <li>Sprains & Strains</li>
                    <li>Tendinitis</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4">
              <div className="sticky top-32 bg-white rounded-3xl p-8 shadow-xl border border-brand-warm text-center">
                <h3 className="text-2xl font-serif text-brand-royal mb-4">Book Your Session</h3>
                <p className="text-gray-600 mb-8">
                  Experience the most profound physical restoration available in Calgary.
                </p>
                <Button asChild className="w-full bg-brand-royal hover:bg-brand-dragonfly text-white h-14 rounded-full text-lg shadow-md mb-4">
                  <Link href="/contact">Contact to Book</Link>
                </Button>
                <p className="text-sm text-gray-500">Appointments available at our Calgary clinic.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Specialty Restorations */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-6 text-center max-w-4xl mx-auto">
          <h2 className="text-3xl font-serif text-brand-royal mb-6">Specialty Restorations</h2>
          <p className="text-lg text-gray-600 mb-12">
            Wolfe Non-Surgical provides profound, targeted restorations including:
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Abdominal Lift", "Arthritis Joint Restoration", "Face Lift", "Frozen Shoulder", 
              "Heart Release", "Joint Replacement Prevention", "Pelvic Clearance", "Post-Surgery Scar Tissue",
              "Spinal Restoration", "Surgery Prevention", "TMJ Restoration"
            ].map(item => (
              <span key={item} className="px-4 py-2 bg-brand-warm text-brand-royal rounded-full text-sm font-medium border border-border">
                {item}
              </span>
            ))}
          </div>
          <p className="mt-8 text-gray-500 italic">And more upon request.</p>
        </div>
      </section>

      {/* FAQ */}
      <ServiceFAQ
        subtitle="Everything you need to know about Wolfe Non-Surgical therapy."
        items={[
          {
            question: "What is Wolfe Non-Surgical therapy?",
            answer: "Wolfe Non-Surgical is a highly specialized bodywork and elbow therapy technique refined over 40 years. Instead of just managing your symptoms, this therapy addresses the root causes of acute and chronic pain, muscle restrictions, and internal scar tissue to help restore optimal circulation and vitality to your body."
          },
          {
            question: "How does the treatment actually work?",
            answer: "The therapy works by safely and effectively pulling muscle fibers apart to break up accumulated scar tissue. This specialized technique is designed to restore the natural flow of blood, lymph fluid, and life force to your tendons, ligaments, muscles, joints, and organs. By creating space within the tissues, it brings life back to the muscle and supports your body's ability to actively restructure and heal."
          },
          {
            question: "Does this therapy physically break up scar tissue?",
            answer: "Yes. A core focus of the Wolfe Non-Surgical approach is physically breaking up the internal scar tissue, crystallization, and displaced calcium that build up from past surgeries, injuries, or daily lifestyle habits. By breaking down these physical blockages, the goal is to restore life to the muscle tissue so it can return toward its original, healthy, and functional state."
          },
          {
            question: "What conditions can it help with?",
            answer: "This therapy is designed to support conditions often thought to be stubborn or chronic, including joint and structural issues (arthritis, osteoarthritis, bursitis, joint stiffness, and TMJ disorders), muscle conditions (spasms, cramps, strains, restless leg syndrome, and neck spasms known as torticollis), headaches (migraines, tension, exertion, cervicogenic, and post-traumatic headaches), and abdominal and pelvic concerns (gastritis, gastroenteritis, peptic ulcers, pancreatitis, and inflammatory bowel disease)."
          },
          {
            question: "What kind of results can I expect?",
            answer: "Many patients report noticeable pain relief alongside increased range of motion, flexibility, and strength. By clearing out the physical blocks that contribute to swelling and inflammation, the therapy aims to trigger a domino effect of deep, lasting healing throughout the body. Individual results vary from person to person."
          },
          {
            question: "How fast will I see a difference?",
            answer: "Patients often report feeling a remarkable difference in just one session. For example, many clients with arthritic joint pain have reported substantial relief — in some cases a 70–80% reduction — within a single 30-minute treatment. Every body is different, and your practitioner will discuss what to expect for your specific situation."
          }
        ]}
      />
    </Layout>
  );
}
