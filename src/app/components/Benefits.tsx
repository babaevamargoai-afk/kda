"use client";

import { useEffect, useRef } from "react";

const benefits = [
  {
    icon: (
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
        <rect x="6" y="2" width="12" height="20" rx="3" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M10 18h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M12 6v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: "Заряжаете раз в несколько месяцев",
    text: "H8 — 200 дней, T9 — 100 дней. Никакой тревоги о зарядке в отпуске или перед важным днём.",
  },
  {
    icon: (
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
        <path d="M12 2a10 10 0 100 20A10 10 0 0012 2z" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M8 12l2.5 2.5L16 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Щётка помнит ваш режим",
    text: "Функция памяти фиксирует последние настройки. Включили — уже работает как надо.",
  },
  {
    icon: (
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M12 7v5l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: "Знаете, когда менять насадку",
    text: "Цветовой индикатор меняется при износе. Без догадок — просто видно.",
  },
  {
    icon: (
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: "Один бренд для всей семьи",
    text: "Щётки, ирригаторы, насадки разной жёсткости. Всё совместимо, всё одного стандарта.",
  },
  {
    icon: (
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "До 6 режимов под любую задачу",
    text: "Стандарт, отбеливание, массаж, мягкий, интенсивный, полировка. Одна щётка — много задач.",
  },
  {
    icon: (
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Гипоаллергенные материалы",
    text: "Безопасно для детей, людей с чувствительностью и пользователей брекетов.",
  },
  {
    icon: (
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M12 7v5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M12 17h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    title: "Таймер считает за вас",
    text: "2 минуты — стоматологический стандарт. Щётка напомнит каждые 30 секунд о смене зоны.",
  },
];

export default function Benefits() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRefs = benefits.map(() => useRef<HTMLDivElement>(null));

  useEffect(() => {
    cardRefs.forEach(r => {
      if (r.current) { r.current.style.opacity = "0"; r.current.style.transform = "translateY(20px)"; }
    });
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        cardRefs.forEach((r, i) => {
          if (r.current) {
            r.current.style.transition = `opacity 600ms cubic-bezier(0.16,1,0.3,1) ${i * 60}ms, transform 600ms cubic-bezier(0.16,1,0.3,1) ${i * 60}ms`;
            r.current.style.opacity = "1";
            r.current.style.transform = "none";
          }
        });
        obs.disconnect();
      }
    }, { threshold: 0.1 });
    if (containerRef.current) obs.observe(containerRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="py-24 px-4 sm:px-8" style={{ background: "#fff" }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase mb-5 px-4 py-1.5 rounded-full"
            style={{ background: "rgba(5,47,131,0.07)", color: "var(--brand)" }}>Выгоды</span>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold leading-tight tracking-tight"
            style={{ color: "var(--neutral-900)" }}>
            Что вы получаете с KDA — конкретно
          </h2>
        </div>

        <div ref={containerRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {benefits.map((b, i) => (
            <div
              key={i}
              ref={cardRefs[i]}
              className="rounded-[24px] p-6 flex flex-col gap-4"
              style={{
                background: i % 2 === 0 ? "#F7FAFF" : "#fff",
                border: "1px solid rgba(5,47,131,0.07)",
                boxShadow: "0 2px 16px rgba(5,47,131,0.05)",
              }}
            >
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center"
                style={{ background: "var(--brand-ice)", color: "var(--brand)" }}>
                {b.icon}
              </div>
              <div>
                <h3 className="text-sm font-bold mb-2 leading-snug" style={{ color: "var(--neutral-900)" }}>{b.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--neutral-600)" }}>{b.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
