import {WhatsAppIcon} from './Icons';
import {getWhatsAppUrl, WHATSAPP_MESSAGES} from '../utils/whatsapp';

export function FloatingWhatsApp() {
  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 group">
      {/* Hover Tooltip */}
      <span
        role="tooltip"
        className="pointer-events-none hidden sm:block absolute right-16 top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-lg bg-[#142B52] text-white text-xs font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-150 shadow-md"
      >
        Chat with Admission Team
      </span>

      <a
        href={getWhatsAppUrl(WHATSAPP_MESSAGES.generalAdmission)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Admission Team on WhatsApp"
        title="Chat with Admission Team"
        className="whatsapp-pulse flex items-center justify-center w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#25D366] hover:bg-[#1EBE5D] text-[#062412] shadow-lg transition-transform duration-150 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#142B52]"
      >
        <WhatsAppIcon className="w-7 h-7" />
      </a>
    </div>
  );
}
