const WB_URL = "https://www.wildberries.ru/seller/44368";
const OZ_URL = "https://www.ozon.ru/seller/kda-3183475/";
const YM_URL = "https://market.yandex.ru/search?merchant-filter=764547";

export default function Footer() {
  return (
    <footer className="py-14 px-4 sm:px-8 border-t" style={{ background: "#fff", borderColor: "rgba(5,47,131,0.08)" }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <svg width="52" height="24" viewBox="0 0 52 24" fill="none">
                <text x="0" y="20" fontFamily="Manrope, Century Gothic, sans-serif" fontWeight="800" fontSize="22" fill="#052F83" letterSpacing="-0.5">KDA</text>
              </svg>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: "var(--neutral-600)" }}>
              Профессиональный уход теперь у вас дома.
            </p>
            <p className="text-xs mt-3 font-medium" style={{ color: "var(--neutral-400)" }}>Key Dental Advantage</p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.15em] mb-4" style={{ color: "var(--neutral-400)" }}>Навигация</p>
            <div className="flex flex-col gap-3">
              {[
                { label: "Продукты", href: "#products" },
                { label: "О бренде", href: "#solution" },
                { label: "Для партнёров", href: "#partners" },
              ].map(l => (
                <a key={l.href} href={l.href} className="text-sm font-semibold transition-colors hover:opacity-70"
                  style={{ color: "var(--neutral-600)" }}>{l.label}</a>
              ))}
            </div>
          </div>

          {/* Marketplaces */}
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.15em] mb-4" style={{ color: "var(--neutral-400)" }}>Купить</p>
            <div className="flex flex-col gap-3">
              {[
                { label: "Wildberries", url: WB_URL, color: "#CB11AB" },
                { label: "Ozon",        url: OZ_URL, color: "#005BFF" },
                { label: "Яндекс Маркет", url: YM_URL, color: "#B8800A" },
              ].map(mp => (
                <a key={mp.label} href={mp.url} target="_blank" rel="noopener noreferrer"
                  className="text-sm font-semibold transition-opacity hover:opacity-70"
                  style={{ color: mp.color }}>
                  {mp.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.15em] mb-4" style={{ color: "var(--neutral-400)" }}>Партнёрство</p>
            <div className="flex flex-col gap-3">
              <a href="mailto:b2b@kda-brand.ru" className="text-sm font-semibold" style={{ color: "var(--brand)" }}>
                b2b@kda-brand.ru
              </a>
              <a href="https://t.me/kda_official" target="_blank" rel="noopener noreferrer"
                className="text-sm font-semibold" style={{ color: "var(--brand)" }}>
                Telegram @kda_official
              </a>
              <a href="https://vk.com/kda_brand" target="_blank" rel="noopener noreferrer"
                className="text-sm font-semibold" style={{ color: "var(--brand)" }}>
                ВКонтакте
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t"
          style={{ borderColor: "rgba(5,47,131,0.07)" }}>
          <p className="text-xs" style={{ color: "var(--neutral-400)" }}>© 2025 KDA. Все права защищены.</p>
          <div className="flex items-center gap-4">
            {["GMP", "IPX8", "DuPont Diamond"].map(b => (
              <span key={b} className="text-xs font-semibold px-3 py-1 rounded-lg"
                style={{ background: "rgba(5,47,131,0.06)", color: "var(--brand)" }}>{b}</span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
