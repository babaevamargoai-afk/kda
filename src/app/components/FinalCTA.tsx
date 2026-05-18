"use client";

import { useState } from "react";

const WB_URL = "https://www.wildberries.ru/seller/44368";
const OZ_URL = "https://www.ozon.ru/seller/kda-3183475/";
const YM_URL = "https://market.yandex.ru/search?merchant-filter=764547";

function PhoneInput({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  const format = (raw: string) => {
    const digits = raw.replace(/\D/g, "").slice(0, 11);
    if (!digits) return "";
    let result = "+7";
    if (digits.length > 1) result += " (" + digits.slice(1, 4);
    if (digits.length >= 4) result += ") " + digits.slice(4, 7);
    if (digits.length >= 7) result += "-" + digits.slice(7, 9);
    if (digits.length >= 9) result += "-" + digits.slice(9, 11);
    return result;
  };

  return (
    <input
      type="tel"
      inputMode="tel"
      placeholder="+7 (___) ___-__-__"
      value={value}
      onChange={(e) => onChange(format(e.target.value))}
      className="w-full px-4 py-3.5 rounded-xl text-sm font-medium outline-none transition-all duration-200"
      style={{
        background: "rgba(255,255,255,0.10)",
        border: "1px solid rgba(255,255,255,0.22)",
        color: "#fff",
      }}
    />
  );
}

export default function FinalCTA() {
  const [name, setName]   = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [sent, setSent]   = useState(false);
  const [error, setError] = useState("");

  const validate = () => {
    if (!name.trim()) return "Укажите имя";
    if (phone.replace(/\D/g, "").length < 11) return "Введите полный номер телефона";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return "Введите корректный email";
    return "";
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const err = validate();
    if (err) { setError(err); return; }
    setError("");
    setSent(true);
  };

  return (
    <section id="partners" className="py-24 px-4 sm:px-8"
      style={{ background: "linear-gradient(160deg, #EAF2FF 0%, #F7FAFF 50%, #EAF2FF 100%)" }}>
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-extrabold leading-tight tracking-tight"
            style={{ color: "var(--neutral-900)" }}>
            Готовы начать?
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          {/* B2C */}
          <div className="rounded-[28px] p-8 flex flex-col gap-7"
            style={{ background: "#fff", border: "1px solid rgba(5,47,131,0.08)", boxShadow: "0 8px 40px rgba(5,47,131,0.07)" }}>
            <div>
              <h3 className="text-xl font-extrabold mb-3" style={{ color: "var(--neutral-900)" }}>Для покупателей</h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--neutral-600)" }}>
                Выберите свою модель и купите на удобном маркетплейсе — с бесплатной доставкой и защитой покупателя.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              {[
                { label: "Wildberries", color: "#CB11AB", bg: "rgba(203,17,171,0.07)", url: WB_URL },
                { label: "Ozon",        color: "#005BFF", bg: "rgba(0,91,255,0.07)",   url: OZ_URL },
                { label: "Яндекс Маркет", color: "#B8800A", bg: "rgba(244,169,29,0.09)", url: YM_URL },
              ].map((mp) => (
                <a key={mp.label} href={mp.url} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-3 px-5 py-4 rounded-2xl text-sm font-bold transition-opacity hover:opacity-80"
                  style={{ background: mp.bg, color: mp.color, border: `1.5px solid ${mp.color}22` }}>
                  <span className="w-2.5 h-2.5 rounded-full" style={{ background: mp.color }} />
                  {mp.label}
                  <svg className="w-4 h-4 ml-auto" fill="none" viewBox="0 0 16 16">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              ))}
            </div>
            <p className="text-xs text-center" style={{ color: "var(--neutral-400)" }}>
              Рейтинг 4.9 · Возврат по условиям площадки · Быстрая доставка
            </p>
          </div>

          {/* B2B */}
          <div className="rounded-[28px] p-8 flex flex-col gap-7"
            style={{
              background: "linear-gradient(145deg, #052F83 0%, #0A4DCC 100%)",
              boxShadow: "0 12px 48px rgba(5,47,131,0.28)",
            }}>
            <div>
              <h3 className="text-xl font-extrabold text-white mb-3">Для партнёров и дистрибьюторов</h3>
              <p className="text-sm leading-relaxed text-white/70">
                Оставьте заявку — менеджер свяжется в течение 1 рабочего дня и пришлёт полный каталог с оптовыми условиями.
              </p>
            </div>

            {!sent ? (
              <form onSubmit={submit} className="flex flex-col gap-3">
                <input
                  type="text"
                  placeholder="Ваше имя"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  className="w-full px-4 py-3.5 rounded-xl text-sm font-medium outline-none"
                  style={{ background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.22)", color: "#fff" }}
                />
                <PhoneInput value={phone} onChange={setPhone} />
                <input
                  type="email"
                  placeholder="example@company.ru"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  className="w-full px-4 py-3.5 rounded-xl text-sm font-medium outline-none"
                  style={{ background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.22)", color: "#fff" }}
                />
                {error && (
                  <p className="text-xs text-red-300 font-semibold">{error}</p>
                )}
                <button
                  type="submit"
                  className="w-full py-4 rounded-xl text-sm font-extrabold transition-all duration-200 hover:-translate-y-px mt-1"
                  style={{ background: "#fff", color: "var(--brand)", boxShadow: "0 4px 20px rgba(0,0,0,0.16)" }}
                >
                  Отправить заявку
                </button>
                <p className="text-[11px] text-center text-white/40">
                  Нажимая кнопку, вы соглашаетесь на обработку персональных данных
                </p>
              </form>
            ) : (
              <div className="flex flex-col items-center text-center gap-4 py-6"
                style={{ animation: "fadeInUp 500ms cubic-bezier(0.16,1,0.3,1)" }}>
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center"
                  style={{ background: "rgba(255,255,255,0.20)" }}>
                  <svg width="32" height="32" fill="none" viewBox="0 0 32 32">
                    <path d="M6 16l7 7L26 9" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h4 className="text-lg font-extrabold text-white">Спасибо! Заявка отправлена.</h4>
                <p className="text-sm text-white/70 leading-relaxed">
                  Менеджер свяжется с вами в течение 1 рабочего дня и пришлёт полный каталог KDA с оптовыми условиями.
                </p>
                <p className="text-xs text-white/50">Если срочно — напишите нам в Telegram: @kda_b2b</p>
              </div>
            )}

            <p className="text-xs text-center text-white/40">Оптовые условия · MOQ · Маркетинговая поддержка</p>
          </div>

        </div>
      </div>
    </section>
  );
}
