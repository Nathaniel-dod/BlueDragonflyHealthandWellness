import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

import logoHorizontal from "@assets/Blue_Dragon_Fly_Logo_2_1783523102207.png";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { 
    label: "Services", 
    subLinks: [
      { href: "/services/wolfe-non-surgical", label: "Wolfe Non-Surgical" },
      { href: "/services/perfect-day-consultations", label: "Perfect Day Consultations" },
      { href: "/services/cardio-medbed-eecp", label: "Cardio MedBed EECP" },
      { href: "/services/cellsonic-regeneration", label: "CellSonic Regeneration" },
      { href: "/services/bone-density-scanning", label: "Bone Density Scanning" },
    ]
  },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex-shrink-0">
            <img 
              src={logoHorizontal} 
              alt="Blue Dragonfly Health & Wellness" 
              className="h-10 md:h-12 w-auto object-contain"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <div key={link.label} className="relative group">
                {link.href ? (
                  <Link 
                    href={link.href}
                    className={`text-sm font-medium tracking-wide transition-colors hover:text-brand-dragonfly ${
                      location === link.href ? "text-brand-dragonfly" : "text-brand-royal"
                    }`}
                  >
                    {link.label}
                  </Link>
                ) : (
                  <div className="cursor-pointer text-sm font-medium tracking-wide text-brand-royal hover:text-brand-dragonfly py-2">
                    {link.label}
                    <div className="absolute top-full left-0 w-64 bg-white shadow-lg rounded-xl overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 translate-y-2 group-hover:translate-y-0">
                      <div className="py-2 flex flex-col">
                        {link.subLinks?.map((subLink) => (
                          <Link 
                            key={subLink.href} 
                            href={subLink.href}
                            className={`px-6 py-3 text-sm transition-colors hover:bg-muted/50 ${
                              location === subLink.href ? "text-brand-dragonfly font-medium bg-muted/20" : "text-gray-700"
                            }`}
                          >
                            {subLink.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
            <Button asChild className="bg-brand-royal hover:bg-brand-dragonfly text-white ml-2 rounded-full px-8">
              <Link href="/contact">Book Consultation</Link>
            </Button>
          </nav>

          {/* Mobile Toggle */}
          <button 
            className="lg:hidden p-2 text-brand-royal"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <div 
        inert={!isOpen}
        className={`lg:hidden fixed inset-x-0 top-full bg-white border-t border-border shadow-xl transition-[opacity,transform] duration-150 origin-top ${
          isOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
      >
        <div className="p-4 flex flex-col gap-2 h-[calc(100dvh-70px)] overflow-y-auto pb-24">
          {NAV_LINKS.map((link) => (
            <div key={link.label} className="border-b border-border/50 last:border-0">
              {link.href ? (
                <Link 
                  href={link.href}
                  className={`block py-4 px-4 text-lg font-medium ${
                    location === link.href ? "text-brand-dragonfly" : "text-brand-royal"
                  }`}
                >
                  {link.label}
                </Link>
              ) : (
                <div className="py-2">
                  <div className="px-4 py-2 text-lg font-medium text-brand-royal/70 uppercase text-xs tracking-wider">
                    {link.label}
                  </div>
                  <div className="flex flex-col ml-4 border-l border-border/50">
                    {link.subLinks?.map((subLink) => (
                      <Link 
                        key={subLink.href} 
                        href={subLink.href}
                        className={`block py-3 px-6 text-base ${
                          location === subLink.href ? "text-brand-dragonfly font-medium" : "text-gray-700"
                        }`}
                      >
                        {subLink.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
          <div className="mt-6 p-4">
            <Button asChild className="w-full bg-brand-royal hover:bg-brand-dragonfly text-white rounded-full h-12 text-lg">
              <Link href="/contact">Book Consultation</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
