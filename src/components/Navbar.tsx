import {useState} from 'react';
import {Menu, Phone, X} from 'lucide-react';
import {AcademyLogoMark, WhatsAppIcon} from './Icons';
import {
  getWhatsAppUrl,
  INSTITUTE_TEL_LINK,
  WHATSAPP_MESSAGES,
} from '../utils/whatsapp';

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    {label: 'Home', href: '#home'},
    {label: 'Courses', href: '#courses'},
    {label: 'Contact', href: '#contact'},
  ];

  const whatsAppHref = getWhatsAppUrl(WHATSAPP_MESSAGES.generalAdmission);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 sm:gap-8 h-16">
          {/* Left: Logo + Brand Name + Tagline */}
          <a
            href="#home"
            className="flex items-center gap-3 min-w-0 shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] rounded-lg"
          >
            <AcademyLogoMark className="w-9 h-9 shrink-0" />
            <div className="min-w-0">
              <span className="block font-display text-sm sm:text-base font-bold tracking-tight text-[#142B52] whitespace-nowrap leading-tight">
                PATNA PATHSHALA ACADEMY
              </span>
              <span className="hidden sm:block text-[11px] font-medium text-slate-500 whitespace-nowrap leading-tight">
                Learn Today, Lead Tomorrow.
              </span>
            </div>
          </a>

          {/* Right: Desktop Nav + WhatsApp CTA + Call Now */}
          <div className="hidden md:flex items-center gap-6 shrink-0">
            <nav aria-label="Primary Navigation" className="flex items-center gap-6">
              {navLinks.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium text-slate-600 hover:text-[#142B52] transition-colors whitespace-nowrap shrink-0 py-1 border-b-2 border-transparent hover:border-[#F59E0B] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] rounded-xs"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-2.5 shrink-0">
              <a
                href={INSTITUTE_TEL_LINK}
                aria-label="Call Patna Pathshala Academy"
                title="Call Now: +91 92292 00467"
                className="inline-flex items-center justify-center gap-1.5 h-10 px-3 rounded-lg border border-slate-200 text-sm font-semibold text-[#142B52] hover:bg-slate-50 transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB]"
              >
                <Phone className="w-4 h-4 text-[#2563EB]" aria-hidden="true" />
                <span className="hidden lg:inline">Call Now</span>
              </a>

              <a
                href={whatsAppHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 h-10 px-4 rounded-lg bg-[#25D366] hover:bg-[#1EBE5D] text-[#062412] text-sm font-semibold shadow-xs transition-all duration-150 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#142B52]"
              >
                <WhatsAppIcon className="w-4 h-4 shrink-0" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Mobile Controls: Visible WhatsApp CTA + Hamburger */}
          <div className="flex md:hidden items-center gap-2 shrink-0">
            <a
              href={whatsAppHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 h-10 px-3 rounded-lg bg-[#25D366] hover:bg-[#1EBE5D] text-[#062412] text-xs font-semibold whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#142B52]"
            >
              <WhatsAppIcon className="w-4 h-4 shrink-0" />
              <span>WhatsApp</span>
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              className="inline-flex items-center justify-center w-10 h-10 rounded-lg border border-slate-200 text-[#142B52] hover:bg-slate-50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB]"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white">
          <nav
            aria-label="Mobile Navigation"
            className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1"
          >
            <p className="px-3 pb-2 text-xs font-medium text-slate-500">
              Learn Today, Lead Tomorrow.
            </p>
            {navLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-lg text-sm font-medium text-[#1E293B] hover:bg-slate-50 hover:text-[#142B52] transition-colors"
              >
                {item.label}
              </a>
            ))}
            <div className="pt-3 mt-2 border-t border-slate-100 grid grid-cols-2 gap-2.5">
              <a
                href={INSTITUTE_TEL_LINK}
                onClick={() => setMobileMenuOpen(false)}
                className="inline-flex items-center justify-center gap-2 h-11 px-4 rounded-lg border border-slate-200 text-sm font-semibold text-[#142B52] hover:bg-slate-50 whitespace-nowrap"
              >
                <Phone className="w-4 h-4 text-[#2563EB]" aria-hidden="true" />
                <span>Call Now</span>
              </a>
              <a
                href={whatsAppHref}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="inline-flex items-center justify-center gap-2 h-11 px-4 rounded-lg bg-[#25D366] text-[#062412] text-sm font-semibold whitespace-nowrap"
              >
                <WhatsAppIcon className="w-4 h-4 shrink-0" />
                <span>Chat Now</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
