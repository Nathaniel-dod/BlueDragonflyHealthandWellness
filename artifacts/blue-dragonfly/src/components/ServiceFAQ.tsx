import { Helmet } from "react-helmet-async";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export interface FAQItem {
  question: string;
  answer: string;
}

interface ServiceFAQProps {
  title?: string;
  subtitle?: string;
  items: FAQItem[];
}

export function ServiceFAQ({ title = "Frequently Asked Questions", subtitle, items }: ServiceFAQProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": items.map((item) => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer,
      },
    })),
  };

  return (
    <section className="py-24 bg-brand-sky/10 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-brand-sky/20 via-transparent to-transparent pointer-events-none"></div>
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>
      <div className="container px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif text-brand-royal mb-4">{title}</h2>
            {subtitle && <p className="text-lg text-gray-700 font-light">{subtitle}</p>}
          </div>
          <Accordion type="single" collapsible className="space-y-4">
            {items.map((item, idx) => (
              <AccordionItem
                key={idx}
                value={`faq-${idx}`}
                className="bg-white/70 backdrop-blur-md rounded-2xl border border-white/40 shadow-lg shadow-brand-royal/5 px-6 data-[state=open]:shadow-xl transition-shadow"
              >
                <AccordionTrigger className="text-left text-lg font-medium text-brand-royal hover:text-brand-dragonfly hover:no-underline py-5">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 font-light text-base leading-relaxed pb-6">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
