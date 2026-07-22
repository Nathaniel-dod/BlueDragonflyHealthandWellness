import { SEO } from "@/components/SEO";
import { Layout } from "@/components/layout/Layout";
import { Link } from "wouter";

const LAST_UPDATED = "July 13, 2026";

export default function PrivacyPolicy() {
  return (
    <Layout>
      <SEO
        title="Privacy Policy"
        description="How Blue Dragonfly Health & Wellness collects, uses, and protects your personal information."
        canonicalUrl="https://bluedragonflyhealthandwellness.com/privacy-policy"
      />

      <div className="bg-brand-sky/10 relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-brand-sky/20 via-transparent to-transparent pointer-events-none"></div>
        <div className="container px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12 animate-in fade-in slide-in-from-bottom-8 duration-1000">
              <h1 className="text-5xl md:text-6xl font-serif text-brand-royal mb-4">Privacy Policy</h1>
              <p className="text-gray-500">Last updated: {LAST_UPDATED}</p>
            </div>

            <div className="bg-white/60 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-2xl shadow-brand-royal/5 border border-white/40 space-y-8 text-gray-700 font-light leading-relaxed animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-150">
              <section>
                <p>
                  Blue Dragonfly Health &amp; Wellness (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;), located in Calgary, Alberta, Canada, respects your privacy and is committed to protecting the personal information you share with us. This Privacy Policy explains what information we collect through this website, how we use it, and the choices you have. We handle personal information in accordance with Alberta&rsquo;s Personal Information Protection Act (PIPA) and Canada&rsquo;s Personal Information Protection and Electronic Documents Act (PIPEDA), as applicable.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif text-brand-royal mb-3">Information We Collect</h2>
                <p className="mb-3">We collect personal information only when you choose to provide it, including when you:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Submit our contact form</strong> — your name, email address, phone number, and the message you send.</li>
                  <li><strong>Complete a consultation or intake form</strong> — contact details and any health, lifestyle, or wellness information you choose to share so we can prepare for your consultation.</li>
                </ul>
                <p className="mt-3">
                  We do not require you to create an account, and we do not use advertising or tracking cookies on this website. Our consultation form temporarily saves your in-progress answers in your own browser&rsquo;s local storage so you don&rsquo;t lose your work; that draft stays on your device and is not transmitted to us until you submit the form.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif text-brand-royal mb-3">How We Use Your Information</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>To respond to your inquiries and messages;</li>
                  <li>To prepare for, schedule, and provide consultations and wellness services you request;</li>
                  <li>To communicate with you about your appointments and our services;</li>
                  <li>To meet legal, regulatory, or insurance requirements where applicable.</li>
                </ul>
                <p className="mt-3">We do not sell, rent, or trade your personal information to third parties.</p>
              </section>

              <section>
                <h2 className="text-2xl font-serif text-brand-royal mb-3">How Your Information Is Transmitted and Stored</h2>
                <p>
                  Forms on this website are delivered to us by a third-party form-delivery service (Web3Forms), which transmits your submission to our email inbox. Your submission is processed by that service solely to deliver it to us. Third-party services may process data on servers located outside of Canada; by submitting a form, you consent to this transfer. We retain the information you send us only as long as reasonably necessary to serve you and to meet our legal obligations.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif text-brand-royal mb-3">Health Information</h2>
                <p>
                  Information you share about your health and lifestyle in our intake and consultation forms is treated as sensitive. It is used only to prepare for and provide your consultation and services, is accessed only by the practitioner and the service providers needed to deliver it to us (such as our form-delivery and email providers), and is never used for marketing without your separate consent. Please share only the information you are comfortable providing; only a small number of fields are required.
                </p>
                <p className="mt-3">
                  Please note that no method of electronic transmission or storage is completely secure. While we take reasonable steps to protect your information, we cannot guarantee absolute security, and we encourage you to avoid including highly sensitive details in your submissions unless necessary.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif text-brand-royal mb-3">Your Rights</h2>
                <p>
                  You may request access to the personal information we hold about you, ask us to correct it, or ask us to delete it (subject to any legal retention requirements). You may also withdraw your consent to our use of your information at any time. To make any of these requests, please <Link href="/contact" className="text-brand-dragonfly underline hover:text-brand-royal">contact us</Link>.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif text-brand-royal mb-3">Third-Party Links</h2>
                <p>
                  This website may contain links to external websites. We are not responsible for the privacy practices or content of those sites, and we encourage you to review their privacy policies.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif text-brand-royal mb-3">Children&rsquo;s Privacy</h2>
                <p>
                  This website and our services are intended for adults. We do not knowingly collect personal information from children under 18 without the consent of a parent or guardian.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif text-brand-royal mb-3">Changes to This Policy</h2>
                <p>
                  We may update this Privacy Policy from time to time. The &ldquo;Last updated&rdquo; date at the top of this page reflects the most recent revision. Your continued use of this website after changes are posted constitutes your acceptance of the updated policy.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif text-brand-royal mb-3">Contact</h2>
                <p>
                  Questions about this Privacy Policy or how your information is handled? Please reach out through our <Link href="/contact" className="text-brand-dragonfly underline hover:text-brand-royal">contact page</Link>.
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
