import { SEO } from "@/components/SEO";
import { Layout } from "@/components/layout/Layout";
import { ConsultForm } from "@/components/consult/ConsultForm";

/**
 * Unlisted page: not linked from navigation and marked noindex.
 * The clinic sends this link to clients after they book a consultation.
 */
export default function ConsultationIntake() {
  return (
    <Layout>
      <SEO
        title="Consultation Intake Form"
        description="Pre-consultation intake form for booked clients of Blue Dragonfly Health & Wellness."
        noindex
      />

      <div className="bg-brand-sky/10 relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-sky/20 via-transparent to-transparent pointer-events-none"></div>
        <div className="container px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12 animate-in fade-in slide-in-from-bottom-8 duration-1000">
              <h1 className="text-4xl md:text-5xl font-serif text-brand-royal mb-6">
                Consultation Intake Form
              </h1>
              <p className="text-lg text-gray-700 font-light max-w-2xl mx-auto">
                Thank you for booking your consultation. Please complete this form before your
                appointment — the more you share, the more Cheryl can prepare for your session.
              </p>
              <p className="text-sm text-gray-500 mt-4">
                It takes about 15–20 minutes. Your answers save automatically on this device, so
                you can leave and come back anytime before submitting.
              </p>
            </div>

            <ConsultForm />
          </div>
        </div>
      </div>
    </Layout>
  );
}
