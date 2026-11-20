import {useState} from 'react';
import {
  ArrowRight,
  BookOpen,
  CalendarCheck,
  CheckCircle2,
  GraduationCap,
  Users,
} from 'lucide-react';
import {WhatsAppIcon} from './Icons';
import {getWhatsAppUrl, WHATSAPP_MESSAGES} from '../utils/whatsapp';

const HERO_IMAGE_PATH = '/src/assets/images/hero_patna_classroom_1795166257809.jpg';

const HERO_HIGHLIGHTS = [
  'Experienced Faculty',
  'Limited Batch Size – 35 Students',
  'Weekly Test Series',
  'Dedicated Doubt Sessions',
];

const QUICK_OVERVIEW = [
  {
    icon: GraduationCap,
    title: 'Class 11th & 12th',
    detail: 'Structured JEE & NEET classroom preparation',
  },
  {
    icon: Users,
    title: '35 Students / Batch',
    detail: 'Focused personal attention in every class',
  },
  {
    icon: CalendarCheck,
    title: '3-Day Free Demo',
    detail: 'Experience teaching quality before enrolling',
  },
  {
    icon: BookOpen,
    title: '4 Patna Centers',
    detail: 'Boring Road, Kankarbagh, Bailey Road & Bazar Samiti',
  },
];

export function HeroSection() {
  const [imgError, setImgError] = useState(false);

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-b from-white via-[#F8FAFC] to-[#F8FAFC] pt-8 pb-12 sm:pt-12 sm:pb-16 lg:pt-16 lg:pb-20 border-b border-slate-200/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Two-column balanced hero split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Left Column: Conversion Copy + Dual WhatsApp CTAs */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <div className="mb-4">
              <span className="inline-block text-xs font-bold tracking-wider uppercase text-[#F59E0B] bg-[#142B52] px-3 py-1.5 rounded-md">
                ADMISSIONS OPEN 2026–27
              </span>
            </div>

            <h1
              className="font-display font-extrabold text-[#142B52] tracking-tight leading-[1.15] mb-3"
              style={{
                fontSize: 'clamp(2rem, 3.8vw, 3.25rem)',
                textWrap: 'balance',
              }}
            >
              Build Your Future with the Right Preparation!
            </h1>

            <p className="font-display text-lg sm:text-xl font-semibold text-[#2563EB] mb-4">
              JEE &amp; NEET Foundation Programs.
            </p>

            <p className="text-base sm:text-[17px] text-slate-600 leading-relaxed max-w-xl mb-6">
              Start your preparation with experienced faculty, focused classroom
              learning, limited batch sizes, and regular weekly test series at
              Patna Pathshala Academy.
            </p>

            {/* 4 Key Highlights */}
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 mb-8">
              {HERO_HIGHLIGHTS.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2.5 text-sm font-medium text-[#1E293B]"
                >
                  <CheckCircle2
                    className="w-4 h-4 text-[#2563EB] shrink-0"
                    aria-hidden="true"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* Primary & Secondary WhatsApp CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <a
                href={getWhatsAppUrl(WHATSAPP_MESSAGES.bookFreeDemo)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#1EBE5D] text-[#062412] font-semibold text-sm sm:text-base shadow-sm hover:-translate-y-0.5 transition-all duration-150 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#142B52]"
              >
                <WhatsAppIcon className="w-5 h-5 shrink-0" />
                <span>Book 3-Day Free Demo on WhatsApp</span>
              </a>

              <a
                href={getWhatsAppUrl(WHATSAPP_MESSAGES.feeStructure)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-[#142B52] border border-slate-300 font-semibold text-sm sm:text-base transition-all duration-150 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB]"
              >
                <span>Get Fee Structure on WhatsApp</span>
                <ArrowRight className="w-4 h-4 text-[#2563EB] shrink-0" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Right Column: Authentic Classroom Visual */}
          <div className="lg:col-span-6 flex">
            <div className="relative w-full rounded-2xl overflow-hidden border border-slate-200 bg-[#142B52] shadow-sm min-h-[280px] sm:min-h-[360px] lg:min-h-full">
              {!imgError ? (
                <img
                  src={HERO_IMAGE_PATH}
                  alt="Indian Class 11 and 12 students studying JEE Physics and NEET Chemistry textbooks inside a modern classroom at Patna Pathshala Academy"
                  referrerPolicy="no-referrer"
                  onError={() => setImgError(true)}
                  className="w-full h-full object-cover lg:absolute lg:inset-0"
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center bg-gradient-to-br from-[#142B52] via-[#1E3A6E] to-[#2563EB] text-white">
                  <GraduationCap className="w-14 h-14 text-[#F59E0B] mb-4" aria-hidden="true" />
                  <p className="font-display text-xl font-bold mb-2">
                    Patna Pathshala Academy
                  </p>
                  <p className="text-sm text-slate-200 max-w-sm">
                    Focused classroom learning for Class 11th, Class 12th, JEE, NEET, and Dropper students in Patna.
                  </p>
                </div>
              )}

              {/* Subtle bottom gradient scrim with campus caption */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#142B52]/90 via-[#142B52]/50 to-transparent p-5 sm:p-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-[#F59E0B] mb-1">
                  Focused Classroom Environment
                </p>
                <p className="text-sm sm:text-base font-medium text-white">
                  Morning &amp; Evening Batches · Class 11th, 12th, JEE, NEET &amp; Dropper Programs
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Full-width 4-column summary strip below hero split */}
        <div className="mt-10 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {QUICK_OVERVIEW.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="flex items-start gap-3.5 p-4 rounded-xl bg-white border border-slate-200"
              >
                <div className="w-10 h-10 rounded-lg bg-[#EFF6FF] text-[#2563EB] flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5" aria-hidden="true" />
                </div>
                <div className="min-w-0">
                  <h2 className="font-display text-sm font-bold text-[#142B52]">
                    {item.title}
                  </h2>
                  <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                    {item.detail}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
