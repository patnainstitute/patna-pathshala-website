import {BookOpenCheck, Calendar, Clock, MapPin, Sparkles} from 'lucide-react';
import {WhatsAppIcon} from './Icons';
import {getWhatsAppUrl, WHATSAPP_MESSAGES} from '../utils/whatsapp';

interface CourseItem {
  id: string;
  name: string;
  category: string;
  description: string;
  eligibility: string;
  duration: string;
  coverage?: string;
  timings: string[];
  timingNote?: string;
  centers?: string[];
  additionalBenefit?: string;
  highlights: string[];
  ctaLabel: string;
  whatsappMessage: string;
  featured?: boolean;
}

const COURSES: CourseItem[] = [
  {
    id: 'ground-zero',
    name: 'GROUND ZERO',
    category: '2-Year Foundation & Target Program',
    description:
      'Strong early foundation covering Class 11 & 12 concepts alongside competitive JEE & NEET exam readiness.',
    eligibility: 'Class 10th pass / Class 11th moving students.',
    duration: '2 Years Classroom Program.',
    timings: ['Morning: 08:00 AM – 01:50 PM', 'Evening: 04:00 PM – 08:05 PM'],
    timingNote: 'Two batch options available.',
    highlights: [
      'Concept building from basics to competitive level',
      'Limited batch size – 35 students',
      'Weekly practice test series & doubt sessions',
    ],
    ctaLabel: 'Enquire for Ground Zero Batch',
    whatsappMessage: WHATSAPP_MESSAGES.groundZero,
  },
  {
    id: 'countdown',
    name: 'COUNTDOWN',
    category: '1-Year Board + JEE Target Program',
    description:
      'Focused single-year program balancing Class 12 Board excellence with full competitive syllabus mastery.',
    eligibility: 'Class 12th studying students.',
    duration: '1 Year Classroom Program.',
    coverage: 'Complete Class 11 and Class 12 syllabus.',
    timings: ['Morning: 08:00 AM – 01:50 PM', 'Evening: 04:00 PM – 08:05 PM'],
    timingNote: 'Two batch options available.',
    highlights: [
      'Synchronized Board + JEE preparation',
      'Regular revision tests & performance tracking',
      'Dedicated doubt-clearing support',
    ],
    ctaLabel: 'Enquire for Countdown Batch',
    whatsappMessage: WHATSAPP_MESSAGES.countdown,
    featured: true,
  },
  {
    id: 'reboost',
    name: 'REBOOST',
    category: '1-Year Dropper / Repeater Special Program',
    description:
      'High-intensity full-day classroom program tailored for students dedicating a focused year to improve their rank.',
    eligibility: 'Class 12th passed students.',
    duration: '1-Year Intensive Classroom Program.',
    coverage: 'Complete Class 11 and Class 12 syllabus.',
    timings: ['08:00 AM – 01:50 PM.'],
    centers: ['Boring Road', 'Kankarbagh', 'Bailey Road', 'Bazar Samiti'],
    additionalBenefit:
      'Special doubt-solving and revision classes on Sundays and holidays.',
    highlights: [
      'Intensive full-syllabus coverage',
      'Special Sunday & holiday revision sessions',
      'Available across 4 Patna centers',
    ],
    ctaLabel: 'Enquire for Reboost Batch',
    whatsappMessage: WHATSAPP_MESSAGES.reboost,
  },
];

export function CoursesSection() {
  return (
    <section
      id="courses"
      className="py-16 sm:py-20 bg-white border-y border-slate-200/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10 sm:mb-12">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-wider text-[#F59E0B] mb-2">
              Classroom Programs · 2026–27
            </p>
            <h2
              className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-[#142B52] tracking-tight"
              style={{textWrap: 'balance'}}
            >
              Courses &amp; Batches
            </h2>
            <p className="mt-3 text-base text-slate-600 leading-relaxed">
              Choose the classroom batch designed for your current academic stage and target examination.
            </p>
          </div>
          <p className="text-sm font-medium text-slate-500">
            Morning &amp; Evening timings · Limited 35 seats per batch
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-7 items-stretch">
          {COURSES.map((course) => (
            <article
              key={course.id}
              className={`flex flex-col rounded-2xl border bg-[#F8FAFC] p-6 sm:p-7 transition-transform duration-200 hover:-translate-y-1 ${
                course.featured
                  ? 'border-[#2563EB] bg-white shadow-sm'
                  : 'border-slate-200'
              }`}
            >
              {/* Unboxed category kicker + Course Name */}
              <div className="pb-5 border-b border-slate-200">
                <p className="text-xs font-semibold uppercase tracking-wider text-[#2563EB] mb-1.5">
                  {course.category}
                </p>
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="font-display text-2xl font-extrabold text-[#142B52] tracking-tight">
                    {course.name}
                  </h3>
                  {course.featured && (
                    <span className="text-xs font-bold text-[#F59E0B] whitespace-nowrap">
                      Class 12 Target
                    </span>
                  )}
                </div>
                <p className="mt-2.5 text-sm text-slate-600 leading-relaxed">
                  {course.description}
                </p>
              </div>

              {/* Structured Details */}
              <dl className="py-5 space-y-4 text-sm flex-1">
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Eligibility
                  </dt>
                  <dd className="mt-0.5 font-medium text-[#1E293B]">
                    {course.eligibility}
                  </dd>
                </div>

                <div>
                  <dt className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-slate-500">
                    <Calendar className="w-3.5 h-3.5 text-[#2563EB]" aria-hidden="true" />
                    <span>Duration</span>
                  </dt>
                  <dd className="mt-0.5 font-medium text-[#1E293B]">
                    {course.duration}
                  </dd>
                </div>

                {course.coverage && (
                  <div>
                    <dt className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-slate-500">
                      <BookOpenCheck className="w-3.5 h-3.5 text-[#2563EB]" aria-hidden="true" />
                      <span>Syllabus Coverage</span>
                    </dt>
                    <dd className="mt-0.5 font-medium text-[#1E293B]">
                      {course.coverage}
                    </dd>
                  </div>
                )}

                <div>
                  <dt className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-slate-500">
                    <Clock className="w-3.5 h-3.5 text-[#2563EB]" aria-hidden="true" />
                    <span>Class Timing</span>
                  </dt>
                  <dd className="mt-1 space-y-1 font-medium text-[#1E293B] tabular-nums">
                    {course.timings.map((time) => (
                      <div key={time}>{time}</div>
                    ))}
                    {course.timingNote && (
                      <div className="text-xs font-medium text-[#2563EB] pt-0.5">
                        {course.timingNote}
                      </div>
                    )}
                  </dd>
                </div>

                {course.centers && (
                  <div>
                    <dt className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-slate-500">
                      <MapPin className="w-3.5 h-3.5 text-[#F59E0B]" aria-hidden="true" />
                      <span>Available Centers</span>
                    </dt>
                    <dd className="mt-1 font-medium text-[#1E293B]">
                      {course.centers.join(' · ')}
                    </dd>
                  </div>
                )}

                {course.additionalBenefit && (
                  <div>
                    <dt className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-slate-500">
                      <Sparkles className="w-3.5 h-3.5 text-[#F59E0B]" aria-hidden="true" />
                      <span>Additional Benefits</span>
                    </dt>
                    <dd className="mt-0.5 font-medium text-[#1E293B]">
                      {course.additionalBenefit}
                    </dd>
                  </div>
                )}

                <div className="pt-2 border-t border-slate-200/80">
                  <dt className="text-xs font-semibold uppercase tracking-wide text-slate-500 mb-2">
                    Course Highlights
                  </dt>
                  <dd>
                    <ul className="space-y-1.5 text-slate-700">
                      {course.highlights.map((highlight) => (
                        <li key={highlight} className="flex items-start gap-2 text-xs sm:text-sm">
                          <span className="text-[#F59E0B] font-bold" aria-hidden="true">
                            •
                          </span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </dd>
                </div>
              </dl>

              {/* WhatsApp Course Enquiry CTA */}
              <div className="pt-4 mt-auto">
                <a
                  href={getWhatsAppUrl(course.whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#1EBE5D] text-[#062412] font-semibold text-sm transition-colors duration-150 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#142B52]"
                >
                  <WhatsAppIcon className="w-4 h-4 shrink-0" />
                  <span>{course.ctaLabel}</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
