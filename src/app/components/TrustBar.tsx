"use client";

const items = [
  {
    icon: (
      <svg width="16" height="16" fill="none" viewBox="0 0 16 16">
        <path d="M8 1.5l1.8 3.6 4 .6-2.9 2.8.7 4L8 10.4l-3.6 2.1.7-4L2.2 5.7l4-.6L8 1.5z" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    text: "Рейтинг 4.9–5.0",
  },
  {
    icon: (
      <svg width="16" height="16" fill="none" viewBox="0 0 16 16">
        <rect x="3" y="2" width="8" height="12" rx="2" stroke="currentColor" strokeWidth="1.3"/>
        <path d="M5 1h4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
        <path d="M5 9l1.5 1.5L9 7" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M11 6h2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
      </svg>
    ),
    text: "До 200 дней заряда",
  },
  {
    icon: (
      <svg width="16" height="16" fill="none" viewBox="0 0 16 16">
        <path d="M8 1.5A6.5 6.5 0 118 14.5 6.5 6.5 0 018 1.5z" stroke="currentColor" strokeWidth="1.3"/>
        <path d="M5.5 8l1.5 1.5L11 6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    text: "В аптечных сетях",
  },
  {
    icon: (
      <svg width="16" height="16" fill="none" viewBox="0 0 16 16">
        <path d="M1 14V7l3-2.5L7 7v7" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M7 14V9h4v5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M1 14h13" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
        <path d="M11 5V2h3v7" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    text: "Производство GMP",
  },
  {
    icon: (
      <svg width="16" height="16" fill="none" viewBox="0 0 16 16">
        <path d="M2 5h12l-1.5 7H3.5L2 5z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round"/>
        <path d="M5 5V3.5A3 3 0 0111 3.5V5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
      </svg>
    ),
    text: "WB · Ozon · Яндекс Маркет",
  },
];

const allItems = [...items, ...items];

export default function TrustBar() {
  return (
    <div
      className="w-full overflow-hidden py-4 border-y"
      style={{
        background: "linear-gradient(90deg, #EAF2FF 0%, #F7FAFF 50%, #EAF2FF 100%)",
        borderColor: "rgba(5,47,131,0.08)",
      }}
    >
      {/* Mobile: marquee */}
      <div className="flex md:hidden">
        <div className="flex gap-0 animate-marquee whitespace-nowrap">
          {allItems.map((item, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-2 px-6 text-sm font-semibold"
              style={{ color: "var(--brand)" }}
            >
              <span className="opacity-70">{item.icon}</span>
              <span style={{ color: "var(--neutral-600)" }}>{item.text}</span>
              <span className="mx-2" style={{ color: "rgba(5,47,131,0.20)" }}>|</span>
            </span>
          ))}
        </div>
      </div>

      {/* Desktop: static row */}
      <div className="hidden md:flex items-center justify-center gap-0 max-w-7xl mx-auto px-8">
        {items.map((item, i) => (
          <span key={i} className="flex items-center">
            <span
              className="inline-flex items-center gap-2.5 px-6 text-sm font-semibold"
              style={{ color: "var(--neutral-600)" }}
            >
              <span style={{ color: "var(--brand)" }}>{item.icon}</span>
              <span>{item.text}</span>
            </span>
            {i < items.length - 1 && (
              <span className="w-px h-4" style={{ background: "rgba(5,47,131,0.15)" }} />
            )}
          </span>
        ))}
      </div>
    </div>
  );
}
