"use client";

import { useEffect, useRef } from "react";

function useReveal(delay = 0) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        el.style.transition = `opacity 700ms cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform 700ms cubic-bezier(0.16,1,0.3,1) ${delay}ms`;
        el.style.opacity = "1";
        el.style.transform = "none";
        obs.disconnect();
        setTimeout(() => {
          if (el) {
            el.style.removeProperty("opacity");
            el.style.removeProperty("transform");
            el.style.removeProperty("transition");
          }
        }, delay + 820);
      }
    }, { threshold: 0.08 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);
  return ref;
}

/* ── Background decor ── */
function BackgroundDecor() {
  return (
    <>
      {/* Top-left arcs */}
      <svg
        className="absolute top-0 left-0 pointer-events-none"
        width="300" height="280" fill="none" aria-hidden="true"
      >
        <ellipse cx="0" cy="0" rx="155" ry="135" stroke="#BFD7FF" strokeWidth="1" opacity="0.32"/>
        <ellipse cx="0" cy="0" rx="215" ry="188" stroke="#BFD7FF" strokeWidth="1" opacity="0.22"/>
        <ellipse cx="0" cy="0" rx="275" ry="240" stroke="#BFD7FF" strokeWidth="1" opacity="0.14"/>
      </svg>
      {/* Top-right dot grid */}
      <div
        className="absolute top-0 right-0 w-64 h-60 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #AFCBFA 1px, transparent 1px)",
          backgroundSize: "22px 22px",
          opacity: 0.17,
          WebkitMaskImage: "radial-gradient(ellipse 85% 85% at 100% 0%, rgba(0,0,0,0.85) 0%, transparent 100%)",
          maskImage: "radial-gradient(ellipse 85% 85% at 100% 0%, rgba(0,0,0,0.85) 0%, transparent 100%)",
        }}
      />
    </>
  );
}

/* ── Manufacturer fact icons ── */
function CalendarIcon() {
  return (
    <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
      <rect x="2" y="4" width="16" height="13" rx="3" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M2 8h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M6 2v3M14 2v3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M5.5 12h2M9.5 12h2M5.5 15h2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
    </svg>
  );
}
function ShieldCheckIcon() {
  return (
    <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
      <path d="M10 2l7 2.5V10c0 3.9-3 6.6-7 7.8C7 17 3 14 3 10V4.5L10 2z"
        stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      <path d="M7 10l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
function CertIcon() {
  return (
    <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
      <path d="M12 2H5a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7l-5-5z"
        stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      <path d="M12 2v5h5" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      <path d="M6 10h8M6 13h5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
    </svg>
  );
}
function BoxIcon() {
  return (
    <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
      <path d="M3 7l7-4 7 4v8l-7 4-7-4V7z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      <path d="M10 3v14M3 7l7 4 7-4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
function CrossMedIcon() {
  return (
    <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
      <rect x="7.5" y="2" width="5" height="16" rx="2.5" stroke="currentColor" strokeWidth="1.5"/>
      <rect x="2" y="7.5" width="16" height="5" rx="2.5" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
  );
}
function StarIcon() {
  return (
    <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
      <path d="M10 2l2.4 4.9 5.4.8-3.9 3.8.9 5.3-4.8-2.5-4.8 2.5.9-5.3-3.9-3.8 5.4-.8L10 2z"
        stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

/* ── Partner benefit icons ── */
function CardPayIcon() {
  return (
    <svg width="18" height="18" fill="none" viewBox="0 0 18 18">
      <rect x="1" y="4" width="16" height="11" rx="2.5" stroke="currentColor" strokeWidth="1.4"/>
      <path d="M1 8h16" stroke="currentColor" strokeWidth="1.4"/>
      <path d="M4 12h3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
    </svg>
  );
}
function TruckIcon() {
  return (
    <svg width="18" height="18" fill="none" viewBox="0 0 18 18">
      <path d="M1 4h11v9H1V4z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/>
      <path d="M12 7h3l2 3v3h-5V7z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/>
      <circle cx="4" cy="14.5" r="1.5" stroke="currentColor" strokeWidth="1.3"/>
      <circle cx="14" cy="14.5" r="1.5" stroke="currentColor" strokeWidth="1.3"/>
    </svg>
  );
}
function SlidersIcon() {
  return (
    <svg width="18" height="18" fill="none" viewBox="0 0 18 18">
      <path d="M3 5h12M3 9h12M3 13h12" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
      <circle cx="7" cy="5" r="2" fill="white" stroke="currentColor" strokeWidth="1.4"/>
      <circle cx="12" cy="9" r="2" fill="white" stroke="currentColor" strokeWidth="1.4"/>
      <circle cx="7" cy="13" r="2" fill="white" stroke="currentColor" strokeWidth="1.4"/>
    </svg>
  );
}
function MegaphoneIcon() {
  return (
    <svg width="18" height="18" fill="none" viewBox="0 0 18 18">
      <path d="M3 7v4h2l6 4V3L5 7H3z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/>
      <path d="M13 6c1.1.9 1.7 1.7 1.7 3s-.6 2.1-1.7 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
    </svg>
  );
}
function GradCapIcon() {
  return (
    <svg width="18" height="18" fill="none" viewBox="0 0 18 18">
      <path d="M9 4l8 4-8 4-8-4 8-4z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/>
      <path d="M5 10v3.5c0 1.2 1.8 2.2 4 2.2s4-1 4-2.2V10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
      <path d="M17 8v3.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
    </svg>
  );
}
function DocIcon() {
  return (
    <svg width="18" height="18" fill="none" viewBox="0 0 18 18">
      <path d="M11 2H5a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7l-4-5z"
        stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/>
      <path d="M11 2v5h4" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/>
      <path d="M6 10h6M6 13h4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
    </svg>
  );
}
function DownloadIcon() {
  return (
    <svg width="18" height="18" fill="none" viewBox="0 0 18 18">
      <path d="M9 2v10M5 8l4 4 4-4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M3 15h12" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/>
    </svg>
  );
}

/* ── Data ── */
const manufacturerFacts = [
  { icon: <CalendarIcon />, label: "С 2020 года",       desc: "Работаем на рынке и наращиваем дистрибуцию" },
  { icon: <ShieldCheckIcon />, label: "GMP-производство", desc: "Европейское оборудование, фармстандарт" },
  { icon: <CertIcon />,     label: "ISO 13485",          desc: "Сертификация производства медицинских изделий" },
  { icon: <BoxIcon />,      label: "10+ SKU",            desc: "Щётки, ирригаторы, насадки" },
  { icon: <CrossMedIcon />, label: "Аптечные сети",      desc: "Присутствие в розничных аптечных каналах" },
  { icon: <StarIcon />,     label: "Рейтинг 4.9",        desc: "Тысячи верифицированных отзывов" },
];

const partnerTerms = [
  { icon: <CardPayIcon />,   label: "Отсрочка платежа",         desc: "Гибкие условия и удобные финансовые решения" },
  { icon: <TruckIcon />,     label: "Логистика и доставка",      desc: "Быстрая отгрузка и надёжная доставка по всей России" },
  { icon: <SlidersIcon />,   label: "Индивидуальные условия",    desc: "Специальные условия для стратегических партнёров" },
  { icon: <MegaphoneIcon />, label: "Маркетинговая поддержка",   desc: "POS-материалы, совместные акции и продвижение" },
  { icon: <GradCapIcon />,   label: "Обучающие материалы",       desc: "Продуктовые тренинги и методические материалы" },
  { icon: <DocIcon />,       label: "Полный пакет документов",   desc: "Сертификаты, регистрационные удостоверения, ЭДО" },
];

/* ── Main export ── */
export default function B2BPartners() {
  const headerRef = useReveal(0);
  const leftRef   = useReveal(120);
  const rightRef  = useReveal(200);
  const ctaRef    = useReveal(300);

  return (
    <section
      id="b2b"
      className="relative py-24 px-4 sm:px-8 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #FFFFFF 0%, #F6FAFF 48%, #EEF5FF 100%)" }}
    >
      <BackgroundDecor />

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* ── Header ── */}
        <div ref={headerRef} className="text-center mb-14">
          <span
            className="inline-block text-xs font-bold tracking-[0.18em] uppercase mb-5 px-5 py-1.5 rounded-full"
            style={{ background: "#EAF3FF", color: "#0A45B8" }}
          >
            Для партнёров и дистрибьюторов
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold leading-tight tracking-tight mb-4"
            style={{ color: "#13213A" }}
          >
            Надёжный производитель.<br className="hidden sm:block" /> Прозрачные условия.
          </h2>
          <p
            className="text-base sm:text-[17px] max-w-xl mx-auto leading-relaxed"
            style={{ color: "#5A6A84" }}
          >
            KDA — российский бренд с собственным производством.<br className="hidden sm:block" />
            Работаем с дистрибьюторами, аптечными сетями и маркетплейс-партнёрами напрямую.
          </p>
        </div>

        {/* ── Two main cards ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">

          {/* Left card — О производителе */}
          <div
            ref={leftRef}
            className="rounded-[28px] p-7 sm:p-8"
            style={{
              background: "linear-gradient(180deg, #FFFFFF 0%, #F9FCFF 100%)",
              border: "1px solid #D8E6F8",
              boxShadow: "0 18px 45px rgba(22,50,100,0.08)",
            }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div
                className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ background: "#EAF3FF", color: "#0A45B8" }}
              >
                <svg width="22" height="22" fill="none" viewBox="0 0 22 22">
                  <path d="M2 20V9l9-6 9 6v11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                  <rect x="8" y="13" width="6" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M2 20h18" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
                </svg>
              </div>
              <h3 className="text-[17px] font-extrabold" style={{ color: "#13213A" }}>О производителе</h3>
            </div>

            {/* 2×3 mini-card grid */}
            <div className="grid grid-cols-2 gap-3">
              {manufacturerFacts.map((f, i) => (
                <div
                  key={i}
                  className="flex flex-col gap-3 p-4"
                  style={{
                    background: "#FFFFFF",
                    border: "1px solid #DDE9FA",
                    borderRadius: "18px",
                  }}
                >
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ background: "#EAF3FF", color: "#0A45B8" }}
                  >
                    {f.icon}
                  </div>
                  <div>
                    <div className="text-sm font-bold leading-snug mb-0.5" style={{ color: "#13213A" }}>
                      {f.label}
                    </div>
                    <div className="text-xs leading-relaxed" style={{ color: "#5A6A84" }}>
                      {f.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right card — Что получает партнёр */}
          <div
            ref={rightRef}
            className="rounded-[28px] p-7 sm:p-8"
            style={{
              background: "linear-gradient(180deg, #FFFFFF 0%, #F9FCFF 100%)",
              border: "1px solid #D8E6F8",
              boxShadow: "0 18px 45px rgba(22,50,100,0.08)",
            }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div
                className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ background: "#EAF3FF", color: "#0A45B8" }}
              >
                <svg width="22" height="22" fill="none" viewBox="0 0 22 22">
                  <path
                    d="M6 14c-2.5.7-4 2.3-4 4h18c0-1.7-1.5-3.3-4-4"
                    stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
                  />
                  <circle cx="7" cy="8" r="3.2" stroke="currentColor" strokeWidth="1.5"/>
                  <circle cx="15" cy="8" r="3.2" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M10.5 12.5l1.5-1.5 1.5 1.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-[17px] font-extrabold" style={{ color: "#13213A" }}>Что получает партнёр</h3>
            </div>

            {/* Benefit rows */}
            <div className="flex flex-col gap-2.5">
              {partnerTerms.map((t, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 px-4 py-3.5"
                  style={{
                    background: "#FFFFFF",
                    border: "1px solid #DDE9FA",
                    borderRadius: "16px",
                  }}
                >
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ background: "#EAF3FF", color: "#0A45B8" }}
                  >
                    {t.icon}
                  </div>
                  <div>
                    <div className="text-sm font-bold leading-snug" style={{ color: "#13213A" }}>
                      {t.label}
                    </div>
                    <div className="text-xs leading-relaxed mt-0.5" style={{ color: "#5A6A84" }}>
                      {t.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── CTA strip ── */}
        <div
          ref={ctaRef}
          className="relative rounded-[26px] overflow-hidden"
          style={{
            background: "linear-gradient(90deg, #063A91 0%, #0057D8 55%, #0A65E8 100%)",
            boxShadow: "0 20px 45px rgba(0,70,184,0.22)",
          }}
        >
          {/* Subtle wave decor */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            fill="none" preserveAspectRatio="none" aria-hidden="true"
          >
            <ellipse cx="12%" cy="50%" rx="18%" ry="120%" stroke="rgba(255,255,255,0.055)" strokeWidth="38"/>
            <ellipse cx="32%" cy="50%" rx="22%" ry="100%" stroke="rgba(255,255,255,0.035)" strokeWidth="28"/>
          </svg>

          {/* Inner layout */}
          <div className="relative flex flex-col sm:flex-row items-center sm:items-stretch gap-6 px-8 sm:px-10 py-8 sm:pr-44">

            {/* Left — text */}
            <div className="flex-1 min-w-0">
              <h3 className="text-xl sm:text-2xl font-extrabold text-white mb-2 leading-snug">
                Получить партнёрские условия
              </h3>
              <p className="text-sm leading-relaxed max-w-sm" style={{ color: "#DCEAFF" }}>
                Оставьте заявку — наш менеджер свяжется с вами в ближайшее время и предложит оптимальные условия сотрудничества.
              </p>
            </div>

            {/* Right — buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-3 flex-shrink-0 self-center">
              <a
                href="#b2b-form"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-[15px] text-sm font-bold transition-all duration-200 hover:-translate-y-px whitespace-nowrap"
                style={{
                  background: "#FFFFFF",
                  color: "#0A45B8",
                  boxShadow: "0 4px 18px rgba(0,30,90,0.18)",
                }}
              >
                Оставить заявку
              </a>
              <a
                href="mailto:b2b@kda-brand.ru?subject=Запрос презентации KDA"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-[15px] text-sm font-bold text-white transition-all duration-200 hover:bg-white/10 whitespace-nowrap"
                style={{ border: "1px solid rgba(255,255,255,0.45)" }}
              >
                <DownloadIcon />
                Скачать презентацию
              </a>
            </div>
          </div>

          {/* presentation mockup */}
          <div
            className="absolute right-4 bottom-0 hidden sm:block pointer-events-none"
            style={{
              width: 130,
              height: 168,
              transform: "rotate(3deg) translateY(-10px)",
              filter: "drop-shadow(0 20px 30px rgba(0,20,80,0.45))",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/presentation-mockup.png"
              alt=""
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
                mixBlendMode: "screen",
              }}
            />
          </div>
        </div>

      </div>
    </section>
  );
}
