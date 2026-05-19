"use client";

import { useEffect, useRef } from "react";

/* ── Reveal + clear so CSS hover works after animation ── */
function useReveal(delay = 0) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.opacity = "0";
    el.style.transform = "translateY(22px)";
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

/* ── SVG Icons ── */
function BatteryIcon() {
  return (
    <svg width="28" height="28" fill="none" viewBox="0 0 28 28">
      <rect x="2" y="7" width="19" height="14" rx="3" stroke="currentColor" strokeWidth="1.7"/>
      <path d="M21 12h4v4h-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12 13.5H9.5L12 9v4.5h2.5L12 19v-5.5z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
function SlidersIcon() {
  return (
    <svg width="28" height="28" fill="none" viewBox="0 0 28 28">
      <path d="M4 8h20M4 14h20M4 20h20" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/>
      <circle cx="9" cy="8" r="3" fill="white" stroke="currentColor" strokeWidth="1.7"/>
      <circle cx="19" cy="14" r="3" fill="white" stroke="currentColor" strokeWidth="1.7"/>
      <circle cx="9" cy="20" r="3" fill="white" stroke="currentColor" strokeWidth="1.7"/>
    </svg>
  );
}
function EcosystemIcon() {
  return (
    <svg width="28" height="28" fill="none" viewBox="0 0 28 28">
      <circle cx="14" cy="6" r="3.5" stroke="currentColor" strokeWidth="1.7"/>
      <circle cx="5" cy="22" r="3.5" stroke="currentColor" strokeWidth="1.7"/>
      <circle cx="23" cy="22" r="3.5" stroke="currentColor" strokeWidth="1.7"/>
      <line x1="14" y1="9.5" x2="5.8" y2="18.7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
      <line x1="14" y1="9.5" x2="22.2" y2="18.7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
      <line x1="8.5" y1="22" x2="19.5" y2="22" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
    </svg>
  );
}
function MemoryIcon() {
  return (
    <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
      <circle cx="10" cy="10.5" r="7" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M10 7v4l2.5 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}
function IndicatorIcon() {
  return (
    <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
      <path d="M4 16V10M8 16V6M12 16V9M16 16V7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M2 16.5h16" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" opacity="0.4"/>
    </svg>
  );
}
function ShieldIcon() {
  return (
    <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
      <path d="M10 2l7 2.8V10c0 3.9-2.9 6.8-7 7.8C7 17 3 14 3 10V4.8L10 2z"
        stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      <path d="M7 10l2 2 4-4" stroke="currentColor" strokeWidth="1.5"
        strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
function TimerIcon() {
  return (
    <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
      <circle cx="10" cy="11.5" r="7" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M10 8v4l2.5 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M7.5 2.5h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M10 2.5V4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

/* ── Background decoration ── */
function BackgroundDecor() {
  return (
    <>
      {/* Dot grid — left edge */}
      <div className="absolute left-0 top-0 bottom-0 w-56 pointer-events-none" style={{
        backgroundImage: "radial-gradient(circle, #AFCBFA 1px, transparent 1px)",
        backgroundSize: "24px 24px",
        opacity: 0.22,
        WebkitMaskImage: "linear-gradient(to right, rgba(0,0,0,0.7) 0%, transparent 100%)",
        maskImage: "linear-gradient(to right, rgba(0,0,0,0.7) 0%, transparent 100%)",
      }}/>
      {/* Dot grid — right edge */}
      <div className="absolute right-0 top-0 bottom-0 w-56 pointer-events-none" style={{
        backgroundImage: "radial-gradient(circle, #AFCBFA 1px, transparent 1px)",
        backgroundSize: "24px 24px",
        opacity: 0.22,
        WebkitMaskImage: "linear-gradient(to left, rgba(0,0,0,0.7) 0%, transparent 100%)",
        maskImage: "linear-gradient(to left, rgba(0,0,0,0.7) 0%, transparent 100%)",
      }}/>
      {/* Orbital ellipses */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="50%" cy="42%" rx="40%" ry="52%"
          stroke="#AFCBFA" strokeWidth="1" strokeDasharray="5 8" opacity="0.22"/>
        <ellipse cx="50%" cy="42%" rx="58%" ry="70%"
          stroke="#C0D8FF" strokeWidth="1" strokeDasharray="3 11" opacity="0.14"/>
      </svg>
    </>
  );
}

/* ── Hero card (large primary) ── */
function HeroCard({ icon, title, desc, delay }: {
  icon: React.ReactNode; title: string; desc: string; delay: number;
}) {
  const ref = useReveal(delay);
  return (
    <div
      ref={ref}
      className="benefit-card-hero rounded-[24px] p-8 flex flex-col"
      style={{
        background: "linear-gradient(180deg, #FFFFFF 0%, #F7FBFF 100%)",
        border: "1px solid #CFE0F8",
        boxShadow: "0 20px 50px rgba(23,60,120,0.08)",
      }}
    >
      {/* Icon with orbital ring */}
      <div className="relative mb-7 self-start" style={{ width: 56, height: 56 }}>
        <svg
          style={{ position: "absolute", top: -14, left: -14, width: 84, height: 84, pointerEvents: "none" }}
          viewBox="0 0 84 84" fill="none"
        >
          <circle cx="42" cy="42" r="38"
            stroke="#AFCBFA" strokeWidth="1" strokeDasharray="3 5" opacity="0.55"/>
          <circle cx="42" cy="4" r="2.5" fill="#AFCBFA" opacity="0.6"/>
          <circle cx="80" cy="42" r="2.5" fill="#AFCBFA" opacity="0.5"/>
          <circle cx="4" cy="42" r="2" fill="#AFCBFA" opacity="0.35"/>
        </svg>
        <div
          className="absolute inset-0 rounded-2xl flex items-center justify-center"
          style={{
            background: "radial-gradient(circle at 35% 35%, #FFFFFF, #EAF3FF)",
            border: "1px solid #D0E6FF",
            color: "#0A4FD6",
            boxShadow: "0 4px 16px rgba(10,79,214,0.10)",
          }}
        >
          {icon}
        </div>
      </div>

      <h3 className="text-[17px] font-extrabold mb-3 leading-tight" style={{ color: "#142033" }}>
        {title}
      </h3>
      <p className="text-sm leading-relaxed" style={{ color: "#53627A" }}>
        {desc}
      </p>
    </div>
  );
}

/* ── Detail card (smaller secondary) ── */
function DetailCard({ icon, title, desc, delay }: {
  icon: React.ReactNode; title: string; desc: string; delay: number;
}) {
  const ref = useReveal(delay);
  return (
    <div
      ref={ref}
      className="benefit-card-detail rounded-[20px] p-5 flex flex-col gap-3"
      style={{
        background: "#FFFFFF",
        border: "1px solid #DDE9FA",
        boxShadow: "0 12px 30px rgba(23,60,120,0.07)",
      }}
    >
      <div
        className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
        style={{ background: "#EAF3FF", color: "#0A4FD6" }}
      >
        {icon}
      </div>
      <div>
        <h3 className="text-sm font-bold mb-1.5 leading-snug" style={{ color: "#142033" }}>
          {title}
        </h3>
        <p className="text-xs leading-relaxed" style={{ color: "#53627A" }}>
          {desc}
        </p>
      </div>
    </div>
  );
}

/* ── Main export ── */
export default function Benefits() {
  const headerRef = useReveal(0);

  return (
    <section
      className="relative py-24 px-4 sm:px-8 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #FFFFFF 0%, #F4F8FF 45%, #EEF5FF 100%)" }}
    >
      <BackgroundDecor />

      {/* Radial glow behind top cards */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: "radial-gradient(ellipse 70% 40% at 50% 35%, rgba(77,163,255,0.09) 0%, transparent 65%)",
      }}/>

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Header */}
        <div ref={headerRef} className="text-center mb-14">
          <span
            className="inline-block text-xs font-bold tracking-[0.2em] uppercase mb-5 px-4 py-1.5 rounded-full"
            style={{ background: "#EAF3FF", color: "#0B4FD6" }}
          >
            Технология
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold leading-tight tracking-tight mb-4"
            style={{ color: "#142033" }}
          >
            Преимущества линейки KDA
          </h2>
          <p
            className="text-base sm:text-[17px] max-w-xl mx-auto leading-relaxed"
            style={{ color: "#53627A" }}
          >
            Технологии, которые делают ежедневный уход понятным, безопасным и удобным.
          </p>
        </div>

        {/* ── Row 1: 3 hero cards ── */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-5">
          <HeroCard
            icon={<BatteryIcon />}
            title="До 200 дней без зарядки"
            desc="H8 — до 200 дней, T9 — до 100 дней. Зарядка перестаёт быть фактором в повседневной и деловой жизни."
            delay={80}
          />
          <HeroCard
            icon={<SlidersIcon />}
            title="До 6 режимов чистки"
            desc="Стандарт, отбеливание, массаж, мягкий, интенсивный, полировка. Одна щётка — полный спектр задач."
            delay={160}
          />
          <HeroCard
            icon={<EcosystemIcon />}
            title="Единая экосистема ухода"
            desc="Щётки, ирригаторы и насадки разной жёсткости — всё совместимо, всё одного производственного стандарта."
            delay={240}
          />
        </div>

        {/* ── Row 2: 4 detail cards ── */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <DetailCard
            icon={<MemoryIcon />}
            title="Функция памяти режима"
            desc="Устройство фиксирует последние настройки. Следующее включение — сразу нужный режим."
            delay={120}
          />
          <DetailCard
            icon={<IndicatorIcon />}
            title="Цветовой индикатор износа насадки"
            desc="Щетинки меняют цвет при износе. Объективный сигнал к замене — без догадок."
            delay={180}
          />
          <DetailCard
            icon={<ShieldIcon />}
            title="Гипоаллергенные материалы"
            desc="DuPont Diamond щетинки. Безопасны при чувствительности, брекетах, детском использовании."
            delay={240}
          />
          <DetailCard
            icon={<TimerIcon />}
            title="Таймер по стандарту стоматолога"
            desc="2 минуты чистки, смена зоны каждые 30 секунд — протокол клинических рекомендаций встроен в устройство."
            delay={300}
          />
        </div>

      </div>
    </section>
  );
}
