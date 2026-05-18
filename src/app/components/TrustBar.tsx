"use client";

const items = [
  { icon: "⭐", text: "Рейтинг 4.9–5.0" },
  { icon: "🔋", text: "До 200 дней заряда" },
  { icon: "🏥", text: "В аптечных сетях" },
  { icon: "🏭", text: "Производство GMP" },
  { icon: "📦", text: "WB · Ozon · Яндекс Маркет" },
  { icon: "⭐", text: "Рейтинг 4.9–5.0" },
  { icon: "🔋", text: "До 200 дней заряда" },
  { icon: "🏥", text: "В аптечных сетях" },
  { icon: "🏭", text: "Производство GMP" },
  { icon: "📦", text: "WB · Ozon · Яндекс Маркет" },
];

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
          {items.map((item, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-2 px-6 text-sm font-semibold"
              style={{ color: "var(--neutral-600)" }}
            >
              <span>{item.icon}</span>
              <span>{item.text}</span>
              <span className="mx-2" style={{ color: "rgba(5,47,131,0.20)" }}>|</span>
            </span>
          ))}
        </div>
      </div>

      {/* Desktop: static row */}
      <div className="hidden md:flex items-center justify-center gap-0 max-w-7xl mx-auto px-8">
        {items.slice(0, 5).map((item, i) => (
          <span key={i} className="flex items-center">
            <span
              className="inline-flex items-center gap-2 px-6 text-sm font-semibold"
              style={{ color: "var(--neutral-600)" }}
            >
              <span>{item.icon}</span>
              <span>{item.text}</span>
            </span>
            {i < 4 && (
              <span className="w-px h-4" style={{ background: "rgba(5,47,131,0.15)" }} />
            )}
          </span>
        ))}
      </div>
    </div>
  );
}
