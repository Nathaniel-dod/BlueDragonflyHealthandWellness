import { Link } from "wouter";
import logoFull from "@assets/logo_circle.png";

export function Footer() {
  return (
    <footer className="bg-brand-royal text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-6">
            <div className="bg-white p-4 rounded-2xl inline-block">
              <img 
                src={logoFull} 
                alt="Blue Dragonfly Health & Wellness Emblem" 
                className="w-32 h-auto"
              />
            </div>
            <p className="text-brand-sky text-sm max-w-xs">
              A premium health and wellness clinic in Calgary, Alberta offering regenerative and non-surgical treatments.
            </p>
          </div>

          <div>
            <h4 className="text-brand-gold font-serif text-xl mb-6">Services</h4>
            <ul className="space-y-4 text-sm text-brand-warm/80">
              <li>
                <Link href="/services/wolfe-non-surgical" className="hover:text-white transition-colors">Wolfe Non-Surgical</Link>
              </li>
              <li>
                <Link href="/services/cellsonic-regeneration" className="hover:text-white transition-colors">CellSonic Regeneration</Link>
              </li>
              <li>
                <Link href="/services/cardio-medbed-eecp" className="hover:text-white transition-colors">Cardio MedBed EECP</Link>
              </li>
              <li>
                <Link href="/services/bone-density-scanning" className="hover:text-white transition-colors">Bone Density Scanning</Link>
              </li>
              <li>
                <Link href="/services/perfect-day-consultations" className="hover:text-white transition-colors">Perfect Day Consultations</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-brand-gold font-serif text-xl mb-6">Clinic</h4>
            <ul className="space-y-4 text-sm text-brand-warm/80">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">About Cheryl Hathaway, NWP</Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white transition-colors">Wellness Blog</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">Contact & Location</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-brand-gold font-serif text-xl mb-6">Contact</h4>
            <ul className="space-y-4 text-sm text-brand-warm/80">
              <li>Calgary, Alberta</li>
              <li>Canada</li>
              <li className="pt-4">
                <Link href="/contact" className="inline-block border border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-brand-royal transition-all px-6 py-2 rounded-full font-medium">
                  Get in Touch
                </Link>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-brand-sky/60">
          <p>&copy; {new Date().getFullYear()} Blue Dragonfly Health & Wellness. All rights reserved.</p>
          <p className="max-w-xl text-center md:text-right">
            Disclaimer: The services offered at Blue Dragonfly Health & Wellness are complementary therapies and are not intended to substitute for professional medical care, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider.
          </p>
        </div>
      </div>
    </footer>
  );
}
