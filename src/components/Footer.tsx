import {AcademyLogoMark, WhatsAppIcon} from './Icons';
import {
  getWhatsAppUrl,
  INSTITUTE_ADDRESS,
  INSTITUTE_EMAIL,
  INSTITUTE_EMAIL_LINK,
  INSTITUTE_PHONE_DISPLAY,
  WHATSAPP_MESSAGES,
} from '../utils/whatsapp';

export function Footer() {
  return (
    <footer className="bg-[#0F203D] text-slate-300 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10">
          {/* Brand Summary */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-4">
              <AcademyLogoMark className="w-10 h-10 shrink-0" />
              <div>
                <p className="font-display text-base font-bold text-white leading-tight">
                  PATNA PATHSHALA ACADEMY
                </p>
                <p className="text-xs text-[#F59E0B] font-medium mt-0.5">
                  Learn Today, Lead Tomorrow.
                </p>
              </div>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed max-w-sm">
              Dedicated JEE, NEET, and Class 11th–12th classroom coaching institute in Patna focused on small batches, experienced faculty, weekly tests, and personal doubt support.
            </p>
          </div>

          {/* Quick Navigation */}
          <div className="lg:col-span-2">
            <h3 className="font-display text-sm font-bold text-white uppercase tracking-wider mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#home" className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#results" className="hover:text-white transition-colors">
                  Results
                </a>
              </li>
              <li>
                <a href="#enquire" className="hover:text-white transition-colors">
                  Enquiry Form
                </a>
              </li>
            </ul>
          </div>

          {/* Courses Links */}
          <div className="lg:col-span-3">
            <h3 className="font-display text-sm font-bold text-white uppercase tracking-wider mb-4">
              Courses &amp; Batches
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#courses" className="hover:text-white transition-colors">
                  GROUND ZERO (2-Year Foundation)
                </a>
              </li>
              <li>
                <a href="#courses" className="hover:text-white transition-colors">
                  COUNTDOWN (1-Year Board + JEE)
                </a>
              </li>
              <li>
                <a href="#courses" className="hover:text-white transition-colors">
                  REBOOST (1-Year Dropper Batch)
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-3">
            <h3 className="font-display text-sm font-bold text-white uppercase tracking-wider mb-4">
              Contact Details
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>{INSTITUTE_ADDRESS}</li>
              <li>
                <a
                  href={getWhatsAppUrl(WHATSAPP_MESSAGES.generalAdmission)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#25D366] hover:underline font-medium tabular-nums"
                >
                  <WhatsAppIcon className="w-4 h-4 shrink-0" />
                  <span>WhatsApp: {INSTITUTE_PHONE_DISPLAY}</span>
                </a>
              </li>
              <li>
                <a
                  href={INSTITUTE_EMAIL_LINK}
                  className="hover:text-white transition-colors break-all"
                >
                  {INSTITUTE_EMAIL}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© 2026 Patna Pathshala Academy. All Rights Reserved.</p>
          <p>Admissions Open 2026–27 · Patna, Bihar</p>
        </div>
      </div>
    </footer>
  );
}
