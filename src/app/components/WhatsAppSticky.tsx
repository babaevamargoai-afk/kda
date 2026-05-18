"use client";

export default function WhatsAppSticky() {
  return (
    <a
      href="https://wa.me/78001234567"
      target="_blank"
      rel="noopener noreferrer"
      className="md:hidden fixed bottom-5 right-4 z-50 flex items-center gap-2.5 bg-[#25D366] text-white rounded-full px-5 py-3.5 shadow-2xl shadow-[#25D366]/40 hover:bg-[#20ba5a] transition-all duration-200 hover:scale-105 active:scale-95"
      aria-label="Написать в WhatsApp"
    >
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11 1C5.477 1 1 5.477 1 11c0 1.89.518 3.66 1.42 5.18L1 21l4.94-1.4A9.96 9.96 0 0011 21c5.523 0 10-4.477 10-10S16.523 1 11 1zm-1.29 5.71c-.21-.52-.43-.53-.63-.54l-.54-.01c-.19 0-.49.07-.74.35-.26.28-.98.96-.98 2.34s1 2.71 1.14 2.9c.14.18 1.96 3.09 4.8 4.21.67.29 1.19.46 1.6.59.67.21 1.28.18 1.76.11.54-.08 1.65-.67 1.88-1.32.23-.65.23-1.2.16-1.32-.07-.12-.26-.19-.55-.33-.29-.14-1.67-.82-1.93-.92-.26-.1-.44-.14-.63.14-.18.29-.72.92-.88 1.1-.16.19-.33.21-.62.07-.29-.14-1.22-.45-2.32-1.43-.86-.77-1.44-1.71-1.6-2-.17-.29-.02-.45.13-.59.13-.13.29-.33.43-.5.14-.17.19-.29.28-.48.1-.19.05-.36-.02-.5-.07-.14-.62-1.53-.86-2.09z"
          fill="white"
        />
      </svg>
      <span className="text-sm font-semibold">Написать в WhatsApp</span>
    </a>
  );
}
