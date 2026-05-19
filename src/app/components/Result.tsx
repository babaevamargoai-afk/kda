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

/* ── Icons ── */
function TimerIcon() {
  return (
    <svg width="28" height="28" fill="none" viewBox="0 0 28 28">
      <circle cx="14" cy="15.5" r="9" stroke="currentColor" strokeWidth="1.7"/>
      <path d="M14 11.5v4.5l3 1.8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9.5 5h9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M14 5v2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}
function ShieldCheckIcon() {
  return (
    <svg width="28" height="28" fill="none" viewBox="0 0 28 28">
      <path d="M14 2.5l10 3.6V14c0 5.3-4.2 9.2-10 10.8C8.2 23 4 19 4 14V6.1L14 2.5z"
        stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round"/>
      <path d="M9.5 14l3 3 6-6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
function LeafIcon() {
  return (
    <svg width="28" height="28" fill="none" viewBox="0 0 28 28">
      <path d="M7 21C7 21 7 9 20 6.5C20 6.5 22.5 16 16 20C13 22 7 21 7 21z"
        stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M7 21l7.5-7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}
function SparkleIcon() {
  return (
    <svg width="28" height="28" fill="none" viewBox="0 0 28 28">
      <path d="M14 3.5v5M14 19.5v5M3.5 14h5M19.5 14h5"
        stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/>
      <path d="M7 7l3.5 3.5M17.5 17.5l3.5 3.5M7 21l3.5-3.5M17.5 10.5l3.5-3.5"
        stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
      <circle cx="14" cy="14" r="2.8" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
  );
}

/* ── Inner background decorations ── */
function InnerDecor() {
  return (
    <>
      {/* Dot grid top-left */}
      <div className="absolute top-0 left-0 w-80 h-64 pointer-events-none" style={{
        backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.22) 1.2px, transparent 1.2px)",
        backgroundSize: "24px 24px",
        WebkitMaskImage: "linear-gradient(135deg, rgba(0,0,0,0.9) 0%, transparent 62%)",
        maskImage: "linear-gradient(135deg, rgba(0,0,0,0.9) 0%, transparent 62%)",
      }}/>

      {/* Orbital lines SVG */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" fill="none" preserveAspectRatio="none" aria-hidden="true">
        {/* Large arc below cards */}
        <ellipse cx="50%" cy="115%" rx="58%" ry="42%"
          stroke="rgba(160,220,255,0.28)" strokeWidth="1" strokeDasharray="4 8"/>
        <ellipse cx="50%" cy="122%" rx="76%" ry="58%"
          stroke="rgba(160,220,255,0.16)" strokeWidth="1" strokeDasharray="3 11"/>
        {/* Right vertical arc */}
        <ellipse cx="94%" cy="50%" rx="20%" ry="58%"
          stroke="rgba(255,255,255,0.14)" strokeWidth="1" strokeDasharray="3 7"/>
        {/* Orbital nodes */}
        <circle cx="82%" cy="13%" r="2.5" fill="rgba(174,228,255,0.70)"/>
        <circle cx="94%" cy="54%" r="2" fill="rgba(174,228,255,0.50)"/>
        <circle cx="17%" cy="88%" r="2" fill="rgba(174,228,255,0.45)"/>
      </svg>

      {/* Right radial highlight */}
      <div className="absolute top-0 right-0 w-[480px] h-[480px] pointer-events-none" style={{
        background: "radial-gradient(circle at 88% 18%, rgba(79,180,255,0.48) 0%, transparent 52%)",
      }}/>

      {/* Bottom glow under cards */}
      <div className="absolute bottom-0 left-0 right-0 h-72 pointer-events-none" style={{
        background: "radial-gradient(ellipse 78% 55% at 50% 100%, rgba(120,200,255,0.22) 0%, transparent 65%)",
      }}/>

      {/* Pulsing glow dots */}
      <div className="glow-dot absolute pointer-events-none" style={{
        top: "16%", left: "7%", width: 8, height: 8, borderRadius: "50%",
        background: "#AEE4FF", boxShadow: "0 0 14px 5px rgba(174,228,255,0.55)",
      }}/>
      <div className="glow-dot absolute pointer-events-none" style={{
        top: "65%", left: "3.5%", width: 6, height: 6, borderRadius: "50%",
        background: "#AEE4FF", boxShadow: "0 0 10px 3px rgba(174,228,255,0.45)",
        animationDelay: "1.3s",
      }}/>
      <div className="glow-dot absolute pointer-events-none" style={{
        top: "10%", right: "13%", width: 5, height: 5, borderRadius: "50%",
        background: "#AEE4FF", boxShadow: "0 0 8px 2px rgba(174,228,255,0.40)",
        animationDelay: "2.2s",
      }}/>
      <div className="glow-dot absolute pointer-events-none" style={{
        top: "45%", right: "5%", width: 4, height: 4, borderRadius: "50%",
        background: "#AEE4FF", boxShadow: "0 0 7px 2px rgba(174,228,255,0.35)",
        animationDelay: "0.7s",
      }}/>
    </>
  );
}

/* ── Card ── */
function ResultCard({ icon, title, desc, delay }: {
  icon: React.ReactNode; title: string; desc: string; delay: number;
}) {
  const ref = useReveal(delay);
  return (
    <div
      ref={ref}
      className="result-card flex flex-col items-center text-center p-7 rounded-[24px]"
      style={{
        background: "linear-gradient(180deg, rgba(255,255,255,0.97) 0%, rgba(239,247,255,0.93) 100%)",
        border: "1px solid rgba(180,215,255,0.58)",
        boxShadow: "0 22px 50px rgba(0,35,100,0.20), inset 0 1px 0 rgba(255,255,255,0.85)",
      }}
    >
      {/* Icon badge */}
      <div
        className="result-icon-badge w-16 h-16 rounded-full flex items-center justify-center mb-5 flex-shrink-0"
        style={{
          background: "linear-gradient(180deg, #F7FBFF 0%, #EAF3FF 100%)",
          border: "1px solid #D5E6FA",
          boxShadow: "inset 0 1px 0 rgba(255,255,255,0.9), 0 10px 24px rgba(20,80,160,0.08)",
          color: "#0A55D8",
        }}
      >
        {icon}
      </div>
      <h3
        className="text-[15px] sm:text-[16px] font-extrabold mb-3 leading-snug whitespace-pre-line"
        style={{ color: "#063A91" }}
      >
        {title}
      </h3>
      <p
        className="text-xs sm:text-[13px] leading-relaxed"
        style={{ color: "#53627A" }}
      >
        {desc}
      </p>
    </div>
  );
}

const cards = [
  {
    icon: <TimerIcon />,
    title: "Экономия\nвремени",
    desc: "Автоматические режимы и таймеры делают чистку эффективной и быстрой",
    delay: 80,
  },
  {
    icon: <ShieldCheckIcon />,
    title: "Уверенность\nв результате",
    desc: "Технологии KDA обеспечивают глубокую очистку и здоровье дёсен",
    delay: 160,
  },
  {
    icon: <LeafIcon />,
    title: "Комфорт\nкаждый день",
    desc: "Деликатный уход даже при чувствительности и проблемах с дёснами",
    delay: 240,
  },
  {
    icon: <SparkleIcon />,
    title: "Красивый\nрезультат",
    desc: "Белые зубы, свежее дыхание и ощущение чистоты на весь день",
    delay: 320,
  },
];

/* ── Main export ── */
export default function Result() {
  const headerRef = useReveal(0);

  return (
    <section
      className="py-8 sm:py-10 px-4 sm:px-6 lg:px-8"
      style={{ background: "#F3F7FF" }}
    >
      <div className="max-w-7xl mx-auto">

        {/* Blue rounded block */}
        <div
          className="relative rounded-[28px] sm:rounded-[32px] overflow-hidden px-6 sm:px-10 lg:px-14 pt-14 sm:pt-16 pb-14 sm:pb-16"
          style={{
            background: "radial-gradient(circle at 88% 18%, rgba(79,180,255,0.50) 0%, transparent 35%), linear-gradient(135deg, #062D7A 0%, #0046B8 52%, #148CFF 100%)",
            boxShadow: "0 32px 80px rgba(6,45,122,0.30)",
          }}
        >
          <InnerDecor />

          <div className="relative z-10">

            {/* Header */}
            <div ref={headerRef} className="text-center mb-12 sm:mb-14">
              <h2
                className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold text-white leading-tight tracking-tight mb-4"
                style={{ textShadow: "0 4px 18px rgba(0,0,0,0.12)" }}
              >
                Как изменится ваш уход
              </h2>
              <p
                className="text-base sm:text-[17px] max-w-lg mx-auto leading-relaxed"
                style={{ color: "rgba(255,255,255,0.85)" }}
              >
                KDA берёт на себя рутину, чтобы вы могли сосредоточиться
                <br className="hidden sm:block" />
                на важных моментах жизни
              </p>
            </div>

            {/* Cards grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
              {cards.map((c, i) => (
                <ResultCard key={i} {...c} />
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
