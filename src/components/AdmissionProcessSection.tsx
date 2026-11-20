import {ArrowRight} from 'lucide-react';
import {WhatsAppIcon} from './Icons';
import {getWhatsAppUrl, WHATSAPP_MESSAGES} from '../utils/whatsapp';

const STEPS = [
  {
    step: 'Step 1',
    title: 'Contact Us',
    description: 'Connect with our admission team through WhatsApp.',
  },
  {
    step: 'Step 2',
    title: 'Get Course Details',
    description: 'Understand the courses, batch timings, and fee structure.',
  },
  {
    step: 'Step 3',
    title: 'Book Free Demo',
    description: 'Schedule your 3-day free demo classes.',
  },
  {
    step: 'Step 4',
    title: 'Complete Admission',
    description: 'Choose your batch and complete the admission process.',
  },
];

export function AdmissionProcessSection() {
  return (
    <section id="admission-process" className="py-16 sm:py-20 bg-[#142B52] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-wider text-[#F59E0B] mb-2">
              Simple 4-Step Enrollment
            </p>
            <h2
              className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight"
              style={{textWrap: 'balance'}}
            >
              Admission Process
            </h2>
            <p className="mt-3 text-base text-slate-300 leading-relaxed">
              From your first WhatsApp enquiry to attending your 3-day free demo class, getting started takes only a few minutes.
            </p>
          </div>

          <a
            href={getWhatsAppUrl(WHATSAPP_MESSAGES.admissionProcess)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#1EBE5D] text-[#062412] font-semibold text-sm sm:text-base transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <WhatsAppIcon className="w-5 h-5 shrink-0" />
            <span>Start Your Admission Enquiry</span>
            <ArrowRight className="w-4 h-4 shrink-0" aria-hidden="true" />
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {STEPS.map((item, idx) => (
            <div
              key={item.step}
              className="relative rounded-2xl bg-white/6 border border-white/15 p-6 flex flex-col"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#F59E0B]">
                  {item.step}
                </span>
                <span className="font-display text-lg font-bold text-white/25 tabular-nums">
                  0{idx + 1}
                </span>
              </div>
              <h3 className="font-display text-lg font-bold text-white mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
