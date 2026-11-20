import type {SVGProps} from 'react';

export function AcademyLogoMark({className = 'w-9 h-9', ...props}: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
      {...props}
    >
      <rect width="44" height="44" rx="10" fill="#142B52" />
      {/* Rising apex / academic flame */}
      <path
        d="M22 8.5L26.2 16.5H17.8L22 8.5Z"
        fill="#F59E0B"
      />
      {/* Open book left & right pages */}
      <path
        d="M11 19.5C14.5 18.2 18.5 18.8 22 21.2V33.5C18.5 31.3 14.5 30.8 11 32V19.5Z"
        fill="#FFFFFF"
      />
      <path
        d="M33 19.5C29.5 18.2 25.5 18.8 22 21.2V33.5C25.5 31.3 29.5 30.8 33 32V19.5Z"
        fill="#DBEAFE"
      />
      {/* Subtle spine accent */}
      <path
        d="M22 21.2V33.5"
        stroke="#2563EB"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function WhatsAppIcon({className = 'w-5 h-5', ...props}: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
      {...props}
    >
      <path d="M12.031 2C6.506 2 2.028 6.478 2.028 12.003C2.028 13.767 2.489 15.489 3.364 17.007L2 22L7.114 20.659C8.583 21.459 10.285 21.883 12.031 21.883C17.556 21.883 22.034 17.405 22.034 11.88C22.034 9.211 20.994 6.702 19.106 4.815C17.219 2.927 14.709 2 12.031 2ZM17.854 16.091C17.608 16.782 16.433 17.358 15.855 17.445C15.335 17.522 14.678 17.555 13.956 17.326C13.516 17.187 12.952 16.999 12.238 16.69C9.222 15.388 7.253 12.345 7.101 12.143C6.95 11.941 5.875 10.514 5.875 9.037C5.875 7.56 6.647 6.834 6.921 6.535C7.195 6.236 7.519 6.161 7.721 6.161C7.923 6.161 8.125 6.163 8.301 6.172C8.487 6.181 8.738 6.101 8.984 6.693C9.237 7.302 9.845 8.781 9.921 8.932C9.997 9.084 10.047 9.261 9.946 9.463C9.845 9.665 9.795 9.791 9.643 9.968C9.492 10.145 9.326 10.363 9.19 10.499C9.038 10.651 8.88 10.814 9.057 11.117C9.234 11.42 9.842 12.411 10.743 13.214C11.901 14.247 12.878 14.567 13.181 14.718C13.484 14.87 13.661 14.844 13.838 14.642C14.015 14.44 14.596 13.759 14.798 13.456C15 13.153 15.202 13.204 15.48 13.305C15.758 13.406 17.248 14.139 17.551 14.29C17.854 14.442 18.056 14.517 18.132 14.644C18.208 14.77 18.208 15.4 17.854 16.091Z" />
    </svg>
  );
}

export function StudentPlaceholderAvatar({className = 'w-14 h-14'}: {className?: string}) {
  return (
    <div
      className={`flex items-center justify-center rounded-full bg-slate-100 border border-slate-200 text-slate-400 shrink-0 ${className}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-7 h-7"
      >
        <circle cx="18" cy="13" r="5.5" stroke="currentColor" strokeWidth="1.8" />
        <path
          d="M8.5 29.5C9.8 24.7 13.5 22 18 22C22.5 22 26.2 24.7 27.5 29.5"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}
