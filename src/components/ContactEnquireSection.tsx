import {useState, type FormEvent} from 'react';
import {AlertCircle, ExternalLink, Info, Mail, MapPin, Phone} from 'lucide-react';
import {WhatsAppIcon} from './Icons';
import {
  buildLeadFormWhatsAppMessage,
  getWhatsAppUrl,
  INSTITUTE_ADDRESS,
  INSTITUTE_EMAIL,
  INSTITUTE_EMAIL_LINK,
  INSTITUTE_PHONE_DISPLAY,
  INSTITUTE_TEL_LINK,
  WHATSAPP_MESSAGES,
} from '../utils/whatsapp';

const COURSE_OPTIONS = [
  'Class 11th Ground Zero',
  'Class 12th Countdown',
  'Class 12th Pass out Reboots',
] as const;

export function ContactEnquireSection() {
  const [studentName, setStudentName] = useState('');
  const [selectedCourse, setSelectedCourse] = useState<string>(COURSE_OPTIONS[0]);
  const [message, setMessage] = useState('');
  const [nameError, setNameError] = useState('');
  const [preparedLink, setPreparedLink] = useState<string | null>(null);
  const [preparedPreview, setPreparedPreview] = useState<string>('');

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const trimmedName = studentName.trim();
    if (!trimmedName) {
      setNameError('Please enter the student name to continue to WhatsApp.');
      setPreparedLink(null);
      return;
    }

    setNameError('');

    const formattedMessage = buildLeadFormWhatsAppMessage({
      studentName: trimmedName,
      course: selectedCourse,
      message,
    });
    const whatsappUrl = getWhatsAppUrl(formattedMessage);

    setPreparedLink(whatsappUrl);
    setPreparedPreview(formattedMessage);

    const anchor = document.createElement('a');
    anchor.href = whatsappUrl;
    anchor.target = '_blank';
    anchor.rel = 'noopener noreferrer';
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
  }

  return (
    <section
      id="enquire"
      className="py-16 sm:py-20 bg-white border-t border-slate-200/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* Left Column: Visit Our Coaching Institute (Contact Info) */}
          <div
            id="contact"
            className="lg:col-span-5 scroll-mt-24 rounded-2xl bg-[#F8FAFC] border border-slate-200 p-6 sm:p-8 flex flex-col justify-between"
          >
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-[#2563EB] mb-2">
                Campus &amp; Admission Desk
              </p>
              <h2
                className="font-display text-2xl sm:text-3xl font-bold text-[#142B52] tracking-tight"
                style={{textWrap: 'balance'}}
              >
                Visit Our Coaching Institute
              </h2>
              <p className="mt-2 text-base font-semibold text-[#1E293B]">
                Patna Pathshala Academy
              </p>

              <dl className="mt-6 space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <MapPin
                    className="w-5 h-5 text-[#2563EB] shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                      Address
                    </dt>
                    <dd className="text-base font-medium text-[#1E293B] mt-0.5">
                      {INSTITUTE_ADDRESS}
                    </dd>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail
                    className="w-5 h-5 text-[#2563EB] shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                      Email
                    </dt>
                    <dd className="mt-0.5">
                      <a
                        href={INSTITUTE_EMAIL_LINK}
                        className="text-base font-medium text-[#142B52] hover:text-[#2563EB] underline underline-offset-4 break-all"
                      >
                        {INSTITUTE_EMAIL}
                      </a>
                    </dd>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <WhatsAppIcon className="w-5 h-5 text-[#16A34A] shrink-0 mt-0.5" />
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                      WhatsApp &amp; Phone
                    </dt>
                    <dd className="text-base font-semibold text-[#1E293B] tabular-nums mt-0.5">
                      {INSTITUTE_PHONE_DISPLAY}
                    </dd>
                  </div>
                </div>
              </dl>

              <div className="mt-6 pt-5 border-t border-slate-200">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 mb-1">
                  Reboost Centers
                </p>
                <p className="text-sm font-medium text-[#1E293B]">
                  Boring Road · Kankarbagh · Bailey Road · Bazar Samiti
                </p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-200 flex flex-wrap items-center gap-3">
              <a
                href={getWhatsAppUrl(WHATSAPP_MESSAGES.generalAdmission)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#25D366] hover:bg-[#1EBE5D] text-[#062412] font-semibold text-sm transition-colors whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#142B52]"
              >
                <WhatsAppIcon className="w-4 h-4 shrink-0" />
                <span>Chat on WhatsApp</span>
              </a>

              <a
                href={INSTITUTE_TEL_LINK}
                className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#142B52] hover:bg-[#1E3A6E] text-white font-semibold text-sm transition-colors whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB]"
              >
                <Phone className="w-4 h-4 shrink-0" aria-hidden="true" />
                <span>Call Now</span>
              </a>

              <a
                href={INSTITUTE_EMAIL_LINK}
                className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-white hover:bg-slate-50 text-[#142B52] border border-slate-300 font-semibold text-sm transition-colors whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB]"
              >
                <Mail className="w-4 h-4 text-[#2563EB] shrink-0" aria-hidden="true" />
                <span>Send Email</span>
              </a>
            </div>
          </div>

          {/* Right Column: Lead Generation Form */}
          <div className="lg:col-span-7 bg-[#F8FAFC] rounded-2xl border border-slate-200 p-6 sm:p-8 flex flex-col justify-center">
            <div className="mb-6">
              <p className="text-xs font-bold uppercase tracking-wider text-[#2563EB] mb-2">
                Direct WhatsApp Admission Desk
              </p>
              <h2
                className="font-display text-2xl sm:text-3xl font-bold text-[#142B52] tracking-tight"
                style={{textWrap: 'balance'}}
              >
                Start Your Journey Towards Success!
              </h2>
              <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed">
                Fill in your details and our admission team will contact you on WhatsApp.
              </p>
            </div>

            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              {/* Field 1: Student Name */}
              <div>
                <label
                  htmlFor="student-name"
                  className="block text-sm font-semibold text-[#142B52] mb-1.5"
                >
                  Student Name <span className="text-red-600" aria-hidden="true">*</span>
                </label>
                <input
                  id="student-name"
                  name="studentName"
                  type="text"
                  required
                  value={studentName}
                  onChange={(e) => {
                    setStudentName(e.target.value);
                    if (nameError) setNameError('');
                  }}
                  placeholder="Enter student's full name"
                  aria-invalid={Boolean(nameError)}
                  aria-describedby={nameError ? 'student-name-error' : undefined}
                  className={`w-full h-12 px-4 rounded-xl border bg-white text-sm text-[#1E293B] placeholder:text-slate-400 focus:outline-none focus:ring-2 transition-colors ${
                    nameError
                      ? 'border-red-500 focus:ring-red-200'
                      : 'border-slate-300 focus:border-[#2563EB] focus:ring-[#2563EB]/20'
                  }`}
                />
                {nameError && (
                  <p
                    id="student-name-error"
                    role="alert"
                    className="mt-1.5 flex items-center gap-1.5 text-xs font-medium text-red-600"
                  >
                    <AlertCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
                    <span>{nameError}</span>
                  </p>
                )}
              </div>

              {/* Field 2: Select Class / Course */}
              <div>
                <label
                  htmlFor="course-select"
                  className="block text-sm font-semibold text-[#142B52] mb-1.5"
                >
                  Select Class / Course
                </label>
                <select
                  id="course-select"
                  name="course"
                  value={selectedCourse}
                  onChange={(e) => setSelectedCourse(e.target.value)}
                  className="w-full h-12 px-4 rounded-xl border border-slate-300 bg-white text-sm font-medium text-[#1E293B] focus:outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20 transition-colors"
                >
                  {COURSE_OPTIONS.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              {/* Field 3: Your Message */}
              <div>
                <label
                  htmlFor="student-message"
                  className="block text-sm font-semibold text-[#142B52] mb-1.5"
                >
                  Your Message <span className="text-xs font-normal text-slate-500">(Optional)</span>
                </label>
                <textarea
                  id="student-message"
                  name="message"
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="e.g., I want to know about admission, demo classes, and fee structure."
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-sm text-[#1E293B] placeholder:text-slate-400 focus:outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20 transition-colors resize-y"
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2.5 h-13 px-6 rounded-xl bg-[#25D366] hover:bg-[#1EBE5D] text-[#062412] font-bold text-sm sm:text-base tracking-wide shadow-sm transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#142B52]"
              >
                <WhatsAppIcon className="w-5 h-5 shrink-0" />
                <span>SEND DETAILS ON WHATSAPP</span>
              </button>

              <p className="flex items-start gap-2 text-xs text-slate-600 leading-relaxed">
                <Info className="w-4 h-4 text-[#2563EB] shrink-0 mt-0.5" aria-hidden="true" />
                <span>
                  After clicking the button above, WhatsApp will open with your pre-filled enquiry. Please press <strong>Send</strong> in WhatsApp to submit your enquiry to our admission team.
                </span>
              </p>
            </form>

            {preparedLink && (
              <div className="mt-5 p-4 rounded-xl bg-white border border-slate-200 space-y-3">
                <p className="text-xs font-semibold text-[#142B52]">
                  WhatsApp enquiry ready — remember to tap Send in WhatsApp:
                </p>
                <pre className="text-xs text-slate-600 whitespace-pre-wrap font-sans bg-[#F8FAFC] p-3 rounded-lg border border-slate-200">
                  {preparedPreview}
                </pre>
                <a
                  href={preparedLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#142B52] hover:bg-[#1E3A6E] text-white text-xs font-semibold transition-colors"
                >
                  <WhatsAppIcon className="w-4 h-4 text-[#25D366] shrink-0" />
                  <span>Open WhatsApp Chat</span>
                  <ExternalLink className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
