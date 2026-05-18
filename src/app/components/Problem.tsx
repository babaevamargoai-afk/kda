"use client";

import { useEffect, useRef } from "react";

const pains = [
  {
    icon: (
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" fill="currentColor" opacity=".15"/>
        <path d="M12 22C6.48 22 2 17.52 2 12S6.48 2 12 2s10 4.48 10 10-4.48 10-10 10zm1-7h-2v2h2v-2zm0-8h-2v6h2V7z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: "Переплата за бренд",
    text: "Oral-B и Philips берут в первую очередь за имя. Вы платите за маркетинг, а не за технологию.",
  },
  {
    icon: (
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
        <path d="M12 3a9 9 0 100 18A9 9 0 0012 3z" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M12 8v5l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: "Дешёвые щётки не внушают доверия",
    text: "Непонятно, из чего сделаны насадки. Особенно тревожно, если пользуется вся семья.",
  },
  {
    icon: (
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
        <rect x="6" y="2" width="12" height="20" rx="3" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M10 18h4M12 6v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="12" cy="14" r="1" fill="currentColor"/>
      </svg>
    ),
    title: "Щётка садится в самый неподходящий момент",
    text: "В командировке, в отпуске — снова ищете розетку каждые две недели.",
  },
  {
    icon: (
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
        <path d="M4 6h16M4 10h16M4 14h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="17" cy="17" r="4" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M15 17l1.5 1.5L19 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Покупаете всё по отдельности",
    text: "Щётка одного бренда, ирригатор другого, насадки третьего. Хаос в ванной, разные стандарты.",
  },
  {
    icon: (
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M9.5 9.5c0-1.38 1.12-2.5 2.5-2.5s2.5 1.12 2.5 2.5c0 1.5-1.5 2.5-2.5 3v1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="12" cy="16.5" r="1" fill="currentColor"/>
      </svg>
    ),
    title: "Сложно разобраться в режимах",
    text: "Берёте умный девайс, а используете один режим — потому что некому объяснить разницу.",
  },
];

function useStaggerReveal(count: number) {
  const refs = Array.from({ length: count }, () => useRef<HTMLDivElement>(null));
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    refs.forEach((ref) => {
      if (ref.current) {
        ref.current.style.opacity = "0";
        ref.current.style.transform = "translateY(24px)";
      }
    });

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          refs.forEach((ref, i) => {
            if (ref.current) {
              ref.current.style.transition = `opacity 600ms cubic-bezier(0.16,1,0.3,1) ${i * 80}ms, transform 600ms cubic-bezier(0.16,1,0.3,1) ${i * 80}ms`;
              ref.current.style.opacity = "1";
              ref.current.style.transform = "none";
            }
          });
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  return { containerRef, refs };
}

export default function Problem() {
  const { containerRef, refs } = useStaggerReveal(pains.length);

  return (
    <section className="py-24 px-4 sm:px-8" style={{ background: "#F7FAFF" }}>
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14">
          <span
            className="inline-block text-xs font-bold tracking-[0.2em] uppercase mb-4 px-4 py-1.5 rounded-full"
            style={{ background: "rgba(5,47,131,0.07)", color: "var(--brand)" }}
          >
            Знакомо?
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold leading-tight tracking-tight"
            style={{ color: "var(--neutral-900)" }}
          >
            Хотите заботиться о зубах правильно,
            <br className="hidden sm:block" /> но что-то мешает?
          </h2>
        </div>

        {/* Cards grid */}
        <div
          ref={containerRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {pains.map((pain, i) => (
            <div
              key={i}
              ref={refs[i]}
              className="rounded-[24px] p-7 flex flex-col gap-4 transition-all duration-300"
              style={{
                background: "rgba(255,255,255,0.85)",
                border: "1px solid rgba(5,47,131,0.08)",
                boxShadow: "0 4px 24px rgba(5,47,131,0.06)",
                backdropFilter: "blur(8px)",
              }}
            >
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0"
                style={{ background: "var(--brand-ice)", color: "var(--brand)" }}
              >
                {pain.icon}
              </div>
              <div>
                <h3 className="text-base font-bold mb-2" style={{ color: "var(--neutral-900)" }}>
                  {pain.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--neutral-600)" }}>
                  {pain.text}
                </p>
              </div>
            </div>
          ))}

          {/* Last card — CTA card */}
          <div
            ref={refs[pains.length - 1] as React.RefObject<HTMLDivElement>}
            className="rounded-[24px] p-7 flex flex-col justify-between gap-6"
            style={{
              background: "linear-gradient(135deg, #052F83 0%, #0A4DCC 100%)",
              boxShadow: "0 8px 32px rgba(5,47,131,0.30)",
            }}
          >
            <div>
              <p className="text-base font-bold text-white mb-2">Мы создали решение</p>
              <p className="text-sm text-white/70 leading-relaxed">
                KDA закрывает все эти боли — одна экосистема для всей семьи.
              </p>
            </div>
            <a
              href="#solution"
              className="inline-flex items-center gap-2 text-sm font-bold text-white group"
            >
              Посмотреть решение
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 16 16">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
