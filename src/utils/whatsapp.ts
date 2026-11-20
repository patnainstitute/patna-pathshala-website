export const INSTITUTE_PHONE_RAW = '919229200467';
export const INSTITUTE_PHONE_DISPLAY = '+91 92292 00467';
export const INSTITUTE_TEL_LINK = 'tel:+919229200467';
export const INSTITUTE_EMAIL = 'patnapathshalaacademy@gmail.com';
export const INSTITUTE_EMAIL_LINK = 'mailto:patnapathshalaacademy@gmail.com';
export const INSTITUTE_ADDRESS = 'Bahadurpur, Patna, Bihar, India.';

export function getWhatsAppUrl(message: string): string {
  return `https://wa.me/${INSTITUTE_PHONE_RAW}?text=${encodeURIComponent(message)}`;
}

export const WHATSAPP_MESSAGES = {
  generalAdmission:
    'Hello Patna Pathshala Academy, I would like to enquire about Admissions 2026–27, available courses, and batch timings.',
  bookFreeDemo:
    'Hello Patna Pathshala Academy, I would like to book a 3-Day Free Demo Class for JEE / NEET preparation. Please share the schedule and available slots.',
  feeStructure:
    'Hello Patna Pathshala Academy, please share the complete fee structure and scholarship/batch details for Admissions 2026–27.',
  groundZero:
    'Hello Patna Pathshala Academy, I am interested in the GROUND ZERO 2-Year Foundation Program. Please share admission details, batch availability, and fee structure.',
  countdown:
    'Hello Patna Pathshala Academy, I am interested in the COUNTDOWN 1-Year Board + JEE Target Program. Please share admission details and fee structure.',
  reboost:
    'Hello Patna Pathshala Academy, I am interested in the REBOOST Dropper Program. Please share admission details, available centers, and fee structure.',
  admissionProcess:
    'Hello Patna Pathshala Academy, I want to start my admission enquiry for the 2026–27 session. Please guide me with the next steps.',
} as const;

export function buildLeadFormWhatsAppMessage(params: {
  studentName: string;
  course: string;
  message: string;
}): string {
  const cleanName = params.studentName.trim();
  const cleanMessage =
    params.message.trim() || 'I want to know about admission and fee structure.';

  return [
    'Hello Patna Pathshala Academy!',
    '',
    'I want to enquire about admission.',
    '',
    `Student Name: ${cleanName}`,
    `Class/Course: ${params.course}`,
    `Message: ${cleanMessage}`,
    '',
    'Please share the details.',
    '',
    'Thank you.',
  ].join('\n');
}
