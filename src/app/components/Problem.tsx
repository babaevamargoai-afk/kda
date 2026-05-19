"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

/* ── Reveal hook ── */
function useReveal(delay = 0) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.opacity = "0";
    el.style.transform = "translateY(18px)";
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        el.style.transition = `opacity 650ms cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform 650ms cubic-bezier(0.16,1,0.3,1) ${delay}ms`;
        el.style.opacity = "1";
        el.style.transform = "none";
        obs.disconnect();
      }
    }, { threshold: 0.08 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);
  return ref;
}

/* ── Problems data ── */
const problems = [
  {
    num: "01",
    title: "Переплата за имя, а не за технологию",
    desc: "Часть цены уходит в бренд и маркетинг, а не в сам продукт.",
    icon: (
      <svg width="18" height="18" fill="none" viewBox="0 0 18 18">
        <path d="M2 10l6-8 8 8-8 6-6-6z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/>
        <path d="M9 5.5V9M9 11v1" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    num: "02",
    title: "Непрозрачный состав материалов",
    desc: "Покупатель не понимает, из чего сделаны насадки и насколько они безопасны.",
    icon: (
      <svg width="18" height="18" fill="none" viewBox="0 0 18 18">
        <path d="M7 2h4v5.5l3.5 7H3.5L7 7.5V2z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M5.5 11.5h7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    num: "03",
    title: "Зарядка каждые 2 недели",
    desc: "Низкая автономность превращает уход в лишний бытовой контроль.",
    icon: (
      <svg width="18" height="18" fill="none" viewBox="0 0 18 18">
        <rect x="3" y="3" width="10" height="13" rx="2" stroke="currentColor" strokeWidth="1.4"/>
        <path d="M7 1.5h4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
        <path d="M6 10.5l1.5-2.5h3L12 5.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    num: "04",
    title: "Разрозненный ассортимент",
    desc: "Щётка, ирригатор и насадки — разные продукты без единой системы.",
    icon: (
      <svg width="18" height="18" fill="none" viewBox="0 0 18 18">
        <rect x="2" y="2" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.4"/>
        <rect x="10" y="2" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.4"/>
        <rect x="2" y="10" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.4"/>
        <rect x="10" y="10" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.4"/>
      </svg>
    ),
  },
  {
    num: "05",
    title: "Потенциал продукта не раскрывается",
    desc: "Есть режимы и функции, но пользователю не объясняют их реальную ценность.",
    icon: (
      <svg width="18" height="18" fill="none" viewBox="0 0 18 18">
        <path d="M3 5h12M3 9h8M3 13h5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
        <circle cx="14" cy="13" r="2.5" stroke="currentColor" strokeWidth="1.3"/>
        <path d="M14 11.8v1.2l.8.8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
      </svg>
    ),
  },
];

/* ── Single card ── */
function ProblemCard({
  num, title, desc, icon, delay,
}: typeof problems[0] & { delay: number }) {
  const ref = useReveal(delay);
  return (
    <div
      ref={ref}
      className="rounded-2xl p-4 flex flex-col gap-3"
      style={{
        background: "#fff",
        border: "1px solid rgba(5,47,131,0.08)",
        boxShadow: "0 2px 16px rgba(5,47,131,0.05)",
      }}
    >
      <div className="flex items-start justify-between">
        <div
          className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0"
          style={{ background: "var(--brand-ice)", color: "var(--brand)" }}
        >
          {icon}
        </div>
        <span
          className="text-[10px] font-extrabold tracking-widest px-2 py-0.5 rounded-lg"
          style={{ background: "rgba(5,47,131,0.07)", color: "var(--brand)" }}
        >
          {num}
        </span>
      </div>
      <div>
        <h3 className="text-sm font-bold mb-1.5 leading-snug" style={{ color: "var(--neutral-900)" }}>
          {title}
        </h3>
        <p className="text-xs leading-relaxed" style={{ color: "var(--neutral-600)" }}>
          {desc}
        </p>
      </div>
    </div>
  );
}

/* ── Main section ── */
export default function Problem() {
  const headerRef = useReveal(0);
  const imageRef  = useReveal(300);

  return (
    <section className="py-24 px-4 sm:px-8" style={{ background: "#F7FAFF" }}>
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div ref={headerRef} className="text-center mb-12">
          <span
            className="inline-block text-xs font-bold tracking-[0.2em] uppercase mb-5 px-4 py-1.5 rounded-full"
            style={{ background: "rgba(5,47,131,0.07)", color: "var(--brand)" }}
          >
            Анализ рынка
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold leading-tight tracking-tight mb-4"
            style={{ color: "var(--neutral-900)" }}
          >
            Пять разрывов рынка —<br className="hidden sm:block" /> и один ответ
          </h2>
          <p
            className="text-base sm:text-[17px] max-w-xl mx-auto leading-relaxed"
            style={{ color: "var(--neutral-600)" }}
          >
            То, что мешает рынку дать покупателю честный и понятный продукт.
          </p>
        </div>

        {/* Composition: cards + lines + image */}
        <div className="flex flex-col lg:flex-row items-stretch gap-6 lg:gap-0">

          {/* ── Left: 5 problem cards (3+2 grid) ── */}
          <div className="lg:w-[56%]">
            {/* Row 1 */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-3">
              {problems.slice(0, 3).map((p, i) => (
                <ProblemCard key={p.num} {...p} delay={i * 70} />
              ))}
            </div>
            {/* Row 2 */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <ProblemCard {...problems[3]} delay={210} />
              <ProblemCard {...problems[4]} delay={280} />
              {/* empty cell — leaves breathing room aligned with cards above */}
              <div className="hidden sm:block" />
            </div>
          </div>

          {/* ── SVG connecting lines — desktop only ── */}
          <div
            className="hidden lg:block lg:w-[7%] relative flex-shrink-0"
            aria-hidden="true"
          >
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 56 310"
              preserveAspectRatio="none"
              className="absolute inset-0"
            >
              <defs>
                <marker
                  id="prob-arrow"
                  markerWidth="7" markerHeight="7"
                  refX="6" refY="3.5"
                  orient="auto"
                >
                  <polyline
                    points="1,1 6,3.5 1,6"
                    fill="none"
                    stroke="rgba(5,47,131,0.45)"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </marker>
              </defs>

              {/* Row 1: cards 01, 02, 03 — staggered y */}
              <path d="M0,62 C20,62 32,155 38,155"  fill="none" stroke="rgba(5,47,131,0.20)" strokeWidth="1" strokeDasharray="3 3"/>
              <path d="M0,75 C20,75 32,155 38,155"  fill="none" stroke="rgba(5,47,131,0.20)" strokeWidth="1" strokeDasharray="3 3"/>
              <path d="M0,88 C20,88 32,155 38,155"  fill="none" stroke="rgba(5,47,131,0.20)" strokeWidth="1" strokeDasharray="3 3"/>

              {/* Row 2: cards 04, 05 */}
              <path d="M0,222 C20,222 32,155 38,155" fill="none" stroke="rgba(5,47,131,0.20)" strokeWidth="1" strokeDasharray="3 3"/>
              <path d="M0,236 C20,236 32,155 38,155" fill="none" stroke="rgba(5,47,131,0.20)" strokeWidth="1" strokeDasharray="3 3"/>

              {/* Convergence → arrow */}
              <line x1="38" y1="155" x2="53" y2="155"
                stroke="rgba(5,47,131,0.45)" strokeWidth="1.4"
                markerEnd="url(#prob-arrow)"
              />

              {/* Node */}
              <circle cx="38" cy="155" r="4.5" fill="#fff" stroke="rgba(5,47,131,0.35)" strokeWidth="1.4"/>
              <circle cx="38" cy="155" r="2" fill="rgba(5,47,131,0.45)"/>
            </svg>
          </div>

          {/* ── Right: image placeholder ── */}
          <div
            ref={imageRef}
            className="lg:w-[37%] relative rounded-[24px] overflow-hidden"
            style={{
              minHeight: "320px",
              boxShadow: "0 20px 60px rgba(5,47,131,0.16), 0 0 0 1px rgba(5,47,131,0.08)",
            }}
          >
            <Image
              src="/images/problem-solution-v2.png"
              alt="KDA — ответ на запрос рынка"
              fill
              className="object-cover object-center"
              loading="lazy"
            />

            {/* CTA button overlay */}
            <a
              href="#solution"
              className="absolute bottom-6 left-6 z-10 inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-bold transition-all duration-200 group"
              style={{
                background: "#fff",
                color: "var(--brand)",
                boxShadow: "0 4px 20px rgba(5,47,131,0.18)",
              }}
            >
              Посмотреть решение
              <svg
                className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
                fill="none" viewBox="0 0 16 16"
              >
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
