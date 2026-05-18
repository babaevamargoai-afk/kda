"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

const features = [
  {
    icon: (
      <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
        <path d="M10 2a4 4 0 014 4v6a4 4 0 01-8 0V6a4 4 0 014-4z" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M7 9h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: "Электрические щётки",
    text: "H6, H8, T9, T5 — от входной до флагмана. До 6 режимов, до 200 дней без зарядки.",
  },
  {
    icon: (
      <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
        <path d="M10 2v16M6 4.5c0 0-2 1.2-2 3.5s2 3.5 2 3.5h8s2-1.2 2-3.5-2-3.5-2-3.5H6z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Ирригаторы",
    text: "HF-9 для дома и NC2001A складной для поездок. Глубокая очистка межзубных промежутков.",
  },
  {
    icon: (
      <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
        <circle cx="10" cy="10" r="7" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M7 10l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Сменные насадки",
    text: "Под каждую модель. Гипоаллергенные. Цветовой индикатор износа — видно, когда менять.",
  },
];

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
      }
    }, { threshold: 0.12 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);
  return ref;
}

export default function Solution() {
  const tag  = useReveal(0);
  const h2   = useReveal(100);
  const sub  = useReveal(180);
  const feat = useReveal(260);
  const qt   = useReveal(360);
  const btn  = useReveal(440);

  return (
    <section id="solution" className="relative w-full min-h-[85vh] flex items-center overflow-hidden">

      {/* ── Full-bleed background ── */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/solution-bg.png"
          alt="KDA — профессиональный уход дома"
          fill
          className="object-cover object-center"
          quality={92}
          loading="lazy"
        />
        {/* Left-dominant white overlay — text on the left over clean wall */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(255,255,255,0.97) 0%, rgba(255,255,255,0.94) 32%, rgba(255,255,255,0.75) 52%, rgba(255,255,255,0.20) 70%, rgba(255,255,255,0) 85%)",
          }}
        />
        {/* Soft blue tint */}
        <div
          className="absolute inset-0"
          style={{ background: "radial-gradient(ellipse 55% 70% at 0% 50%, rgba(234,242,255,0.40) 0%, transparent 60%)" }}
        />
      </div>

      {/* Mobile fallback background (no image) */}
      <div
        className="absolute inset-0 z-0 sm:hidden"
        style={{ background: "linear-gradient(160deg, #EAF2FF 0%, #F7FAFF 50%, #fff 100%)" }}
      />

      {/* ── Content ── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-14 py-24">
        <div className="max-w-[540px] lg:max-w-[580px] flex flex-col gap-7">

          {/* Supertag */}
          <div ref={tag}>
            <span
              className="inline-block text-xs font-bold tracking-[0.2em] uppercase px-4 py-1.5 rounded-full"
              style={{ background: "rgba(5,47,131,0.08)", color: "var(--brand)" }}
            >
              Наше решение
            </span>
          </div>

          {/* H2 */}
          <div ref={h2}>
            <h2
              className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold leading-tight tracking-tight"
              style={{ color: "var(--neutral-900)" }}
            >
              KDA — полная экосистема ухода за полостью рта
            </h2>
          </div>

          {/* Subtitle */}
          <div ref={sub}>
            <p className="text-base sm:text-[17px] leading-relaxed font-medium" style={{ color: "var(--neutral-600)" }}>
              Российский бренд. Производство по стандарту GMP на европейском оборудовании. С 2020 года.
            </p>
          </div>

          {/* Features */}
          <div ref={feat} className="flex flex-col gap-4">
            {features.map((f, i) => (
              <div
                key={i}
                className="flex gap-4 items-start p-4 rounded-2xl"
                style={{
                  background: "rgba(255,255,255,0.75)",
                  border: "1px solid rgba(5,47,131,0.09)",
                  backdropFilter: "blur(12px)",
                }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "var(--brand-ice)", color: "var(--brand)" }}
                >
                  {f.icon}
                </div>
                <div>
                  <div className="text-sm font-bold mb-0.5" style={{ color: "var(--neutral-900)" }}>{f.title}</div>
                  <div className="text-sm leading-relaxed" style={{ color: "var(--neutral-600)" }}>{f.text}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Pull-quote */}
          <div
            ref={qt}
            className="rounded-2xl px-6 py-5 relative overflow-hidden"
            style={{
              background: "rgba(255,255,255,0.85)",
              border: "1px solid rgba(5,47,131,0.12)",
              backdropFilter: "blur(16px)",
            }}
          >
            <div className="absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl" style={{ background: "var(--brand)" }} />
            <p className="text-sm sm:text-base font-semibold leading-relaxed italic pl-3" style={{ color: "var(--brand)" }}>
              «Доступная роскошь: аптечный стандарт качества, профессиональные технологии — по честной цене.»
            </p>
          </div>

          {/* CTA */}
          <div ref={btn}>
            <a href="#products" className="btn-primary inline-flex items-center gap-2 px-8 py-4 text-[15px]">
              Смотреть продукты
              <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
