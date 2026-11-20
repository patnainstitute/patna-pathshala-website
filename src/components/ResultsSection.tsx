import {Award} from 'lucide-react';
import {StudentPlaceholderAvatar} from './Icons';

const PLACEHOLDER_ACHIEVERS = [
  {
    id: 'achiever-1',
    namePlaceholder: '[Student Name Placeholder 01]',
    examName: 'JEE Main / Advanced',
    rankPlaceholder: '[Verified Rank / Percentile Placeholder]',
    badgePlaceholder: '[Achievement Badge Placeholder]',
  },
  {
    id: 'achiever-2',
    namePlaceholder: '[Student Name Placeholder 02]',
    examName: 'NEET (UG)',
    rankPlaceholder: '[Verified Score / Rank Placeholder]',
    badgePlaceholder: '[Achievement Badge Placeholder]',
  },
  {
    id: 'achiever-3',
    namePlaceholder: '[Student Name Placeholder 03]',
    examName: 'Class 12th Board Exam',
    rankPlaceholder: '[Verified Percentage Placeholder]',
    badgePlaceholder: '[Achievement Badge Placeholder]',
  },
  {
    id: 'achiever-4',
    namePlaceholder: '[Student Name Placeholder 04]',
    examName: 'JEE / Foundation Batch',
    rankPlaceholder: '[Verified Rank / Score Placeholder]',
    badgePlaceholder: '[Achievement Badge Placeholder]',
  },
];

export function ResultsSection() {
  return (
    <section id="results" className="py-16 sm:py-20 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10 sm:mb-12">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-wider text-[#2563EB] mb-2">
              Student Achievements
            </p>
            <h2
              className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-[#142B52] tracking-tight"
              style={{textWrap: 'balance'}}
            >
              Our Students, Our Pride!
            </h2>
            <p className="mt-3 text-base text-slate-600 leading-relaxed">
              Celebrating dedication, hard work, and academic achievements.
            </p>
          </div>
          <p className="text-xs font-medium text-slate-500 max-w-sm">
            Editable placeholder cards shown below. Verified student photos, names, and official exam results will be published here once confirmed.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PLACEHOLDER_ACHIEVERS.map((student) => (
            <article
              key={student.id}
              className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col"
            >
              <div className="flex items-center gap-3.5 mb-5">
                <StudentPlaceholderAvatar className="w-16 h-16" />
                <div className="min-w-0">
                  <span className="block text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                    Photo Placeholder
                  </span>
                  <h3 className="font-display text-sm font-bold text-[#142B52] mt-0.5 leading-snug">
                    {student.namePlaceholder}
                  </h3>
                </div>
              </div>

              <div className="space-y-3 pt-4 border-t border-slate-100 flex-1 text-sm">
                <div>
                  <span className="block text-xs font-medium text-slate-500">
                    Examination
                  </span>
                  <span className="font-semibold text-[#1E293B]">
                    {student.examName}
                  </span>
                </div>

                <div>
                  <span className="block text-xs font-medium text-slate-500">
                    Rank / Percentage
                  </span>
                  <span className="font-semibold text-[#2563EB]">
                    {student.rankPlaceholder}
                  </span>
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-[#B45309]">
                <Award className="w-4 h-4 text-[#F59E0B] shrink-0" aria-hidden="true" />
                <span>{student.badgePlaceholder}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
