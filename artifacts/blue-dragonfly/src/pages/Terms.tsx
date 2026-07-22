import { SEO } from "@/components/SEO";
import { Layout } from "@/components/layout/Layout";
import { Link } from "wouter";

const LAST_UPDATED = "July 13, 2026";

export default function Terms() {
  return (
    <Layout>
      <SEO
        title="Terms of Use & Disclaimer"
        description="Terms of use, medical disclaimer, and conditions for the Blue Dragonfly Health & Wellness website and services."
        canonicalUrl="https://bluedragonflyhealthandwellness.com/terms"
      />

      <div className="bg-brand-sky/10 relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-brand-sky/20 via-transparent to-transparent pointer-events-none"></div>
        <div className="container px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12 animate-in fade-in slide-in-from-bottom-8 duration-1000">
              <h1 className="text-5xl md:text-6xl font-serif text-brand-royal mb-4">Terms of Use &amp; Disclaimer</h1>
              <p className="text-gray-500">Last updated: {LAST_UPDATED}</p>
            </div>

            <div className="bg-white/60 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-2xl shadow-brand-royal/5 border border-white/40 space-y-8 text-gray-700 font-light leading-relaxed animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-150">
              <section>
                <p>
                  Welcome to the website of Blue Dragonfly Health &amp; Wellness (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;), a wellness clinic located in Calgary, Alberta, Canada. By accessing or using this website, or by booking or receiving our services, you agree to these Terms of Use. If you do not agree, please do not use this website or our services.
                </p>
              </section>

              <section className="bg-brand-sky/10 border border-brand-sky/30 rounded-2xl p-6">
                <h2 className="text-2xl font-serif text-brand-royal mb-3">Important Medical Disclaimer</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    The content on this website and the services we offer are provided for <strong>general wellness and informational purposes only</strong>. They are not medical advice and are not intended to diagnose, treat, cure, or prevent any disease or medical condition.
                  </li>
                  <li>
                    Our services are <strong>complementary wellness therapies</strong>. They are not a substitute for professional medical care, diagnosis, or treatment from a licensed physician or other qualified healthcare provider.
                  </li>
                  <li>
                    Cheryl Hathaway practices as a New World Practitioner (NWP). She is <strong>not a licensed physician</strong>, and nothing on this website or in our services creates a doctor&ndash;patient relationship.
                  </li>
                  <li>
                    <strong>Always consult your physician</strong> or another qualified healthcare provider before starting any new wellness program, and never disregard professional medical advice or delay seeking it because of something you read on this website or heard during a consultation.
                  </li>
                  <li>
                    If you believe you are experiencing a medical emergency, call 911 or go to the nearest emergency department immediately.
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-serif text-brand-royal mb-3">No Guarantee of Results</h2>
                <p>
                  Wellness outcomes vary from person to person. Any testimonials, client experiences, statistics, or descriptions of results on this website reflect individual experiences and available research; they are not a promise or guarantee that you will achieve the same or similar results. We make no representations or warranties regarding the outcome of any service.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif text-brand-royal mb-3">Your Responsibilities</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Provide accurate and complete information in our intake and consultation forms, including relevant health conditions, medications, and contraindications;</li>
                  <li>Continue any care prescribed by your physician or healthcare providers, and keep them informed of complementary therapies you receive;</li>
                  <li>Use your own judgment, in consultation with your healthcare providers, when deciding whether our services are appropriate for you;</li>
                  <li>Follow any safety guidance provided before, during, or after a session.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-serif text-brand-royal mb-3">Assumption of Risk</h2>
                <p>
                  By choosing to receive our services, you acknowledge that you do so voluntarily and that you have had the opportunity to consult your physician beforehand. You accept responsibility for your decision to participate in complementary wellness therapies and agree to promptly inform the practitioner of any discomfort or concerns before, during, or after a session.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif text-brand-royal mb-3">Limitation of Liability</h2>
                <p>
                  To the maximum extent permitted by applicable law, Blue Dragonfly Health &amp; Wellness, its practitioner, and its representatives will not be liable for any indirect, incidental, consequential, special, or punitive damages arising out of or related to your use of this website or our services, including reliance on any information provided. Where liability cannot be excluded, it is limited to the amount you paid for the service giving rise to the claim. Nothing in these terms excludes liability that cannot be excluded under the laws of Alberta or Canada.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif text-brand-royal mb-3">Bookings, Cancellations &amp; Payment</h2>
                <p>
                  Appointment availability, pricing, and any cancellation or rescheduling terms will be communicated to you when you book. We ask that you provide reasonable notice if you need to cancel or reschedule so the time can be offered to another client.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif text-brand-royal mb-3">Website Content &amp; Intellectual Property</h2>
                <p>
                  All content on this website — including text, images, logos, and branding — is the property of Blue Dragonfly Health &amp; Wellness or its licensors and is protected by copyright and trademark laws. You may not reproduce, distribute, or use our content for commercial purposes without our prior written permission.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif text-brand-royal mb-3">Accuracy of Information</h2>
                <p>
                  We strive to keep the information on this website current and accurate, but we make no warranty that it is complete, reliable, or error-free. Content may be updated, corrected, or removed at any time without notice.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif text-brand-royal mb-3">Third-Party Devices &amp; Regulatory Status</h2>
                <p>
                  References to third-party technologies, devices, or their regulatory clearances describe those products generally and are based on information published by their manufacturers or regulators. Regulatory clearance of a device does not constitute an endorsement of any particular wellness outcome.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif text-brand-royal mb-3">Governing Law</h2>
                <p>
                  These Terms of Use are governed by the laws of the Province of Alberta and the federal laws of Canada applicable therein. Any dispute arising from these terms or your use of this website will be subject to the exclusive jurisdiction of the courts of Alberta.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif text-brand-royal mb-3">Changes to These Terms</h2>
                <p>
                  We may revise these Terms of Use from time to time. The &ldquo;Last updated&rdquo; date above reflects the most recent version. Continued use of the website after changes are posted constitutes acceptance of the revised terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif text-brand-royal mb-3">Contact</h2>
                <p>
                  Questions about these terms? Please reach out through our <Link href="/contact" className="text-brand-dragonfly underline hover:text-brand-royal">contact page</Link>.
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
