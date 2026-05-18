"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

function useFadeIn(delay: number, from: "bottom" | "scale" = "bottom") {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const initial = from === "bottom" ? "translateY(28px)" : "scale(0.95)";
    el.style.opacity = "0";
    el.style.transform = initial;
    el.style.transition = `opacity 700ms cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform 700ms cubic-bezier(0.16,1,0.3,1) ${delay}ms`;
    const t = setTimeout(() => { el.style.opacity = "1"; el.style.transform = "none"; }, 60);
    return () => clearTimeout(t);
  }, [delay, from]);
  return ref;
}

export default function Hero() {
  const tag = useFadeIn(0);
  const h1  = useFadeIn(130);
  const sub = useFadeIn(240);
  const cta = useFadeIn(360);
  const mp  = useFadeIn(460);
  const b1  = useFadeIn(620, "scale");
  const b2  = useFadeIn(770, "scale");

  return (
    <section className="relative w-full min-h-screen flex items-center overflow-hidden">

      {/* ── Background image — hidden on mobile ── */}
      <div className="absolute inset-0 z-0 hidden sm:block">
        <Image
          src="/images/hero-new.png"
          alt="KDA Oral Care"
          fill
          priority
          className="object-cover object-center"
          quality={95}
        />
        {/* Left gradient for text legibility */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(255,255,255,1) 0%, rgba(255,255,255,0.96) 28%, rgba(255,255,255,0.72) 50%, rgba(255,255,255,0.18) 72%, rgba(255,255,255,0) 100%)",
          }}
        />
      </div>

      {/* Mobile-only background — soft gradient, no image */}
      <div
        className="absolute inset-0 z-0 sm:hidden"
        style={{
          background: "linear-gradient(160deg, #EAF2FF 0%, #F7FAFF 40%, #ffffff 100%)",
        }}
      />

      {/* ── Content ── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-14 pt-28 pb-20">
        <div className="max-w-[560px] lg:max-w-[620px] flex flex-col gap-7">

          {/* Supertag */}
          <div ref={tag} className="flex items-center gap-3">
            <span className="w-8 h-px" style={{ background: "var(--brand)" }} />
            <span
              className="text-[11px] sm:text-xs font-bold tracking-[0.18em] uppercase"
              style={{ color: "var(--brand)" }}
            >
              Профессиональный уход теперь у вас дома
            </span>
          </div>

          {/* H1 */}
          <div ref={h1}>
            <h1
              className="text-[40px] sm:text-[52px] lg:text-[60px] font-extrabold leading-[1.07] tracking-tight"
              style={{ color: "var(--neutral-900)" }}
            >
              Уход за зубами —<br />
              <span style={{ color: "var(--brand)" }}>без переплаты</span><br />
              за чужое имя
            </h1>
          </div>

          {/* Subtitle */}
          <div ref={sub}>
            <p
              className="text-base sm:text-[17px] leading-relaxed font-medium max-w-md"
              style={{ color: "var(--neutral-600)" }}
            >
              Электрощётки с зарядом до&nbsp;200&nbsp;дней,
              ирригаторы и сменные насадки —
              полная экосистема гигиены для всей семьи.
            </p>
          </div>

          {/* CTA */}
          <div ref={cta} className="flex flex-col sm:flex-row gap-3">
            <a
              href="#products"
              className="btn-primary inline-flex items-center justify-center gap-2 px-8 py-4 text-[15px] tracking-wide"
            >
              Смотреть продукты
              <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a
              href="#partners"
              className="btn-outline inline-flex items-center justify-center px-8 py-4 text-[15px] tracking-wide"
            >
              Скачать прайс
            </a>
          </div>

          {/* Marketplace pills */}
          <div ref={mp} className="flex items-center gap-2 flex-wrap">
            <span className="text-sm font-medium" style={{ color: "var(--neutral-400)" }}>Доступно на</span>
            <span className="px-3 py-1 rounded-full text-xs font-bold" style={{ background: "rgba(203,17,171,0.10)", color: "#CB11AB" }}>Wildberries</span>
            <span className="px-3 py-1 rounded-full text-xs font-bold" style={{ background: "rgba(0,91,255,0.10)", color: "#005BFF" }}>Ozon</span>
            <span className="px-3 py-1 rounded-full text-xs font-bold" style={{ background: "rgba(244,169,29,0.12)", color: "#C4850D" }}>Яндекс Маркет</span>
          </div>
        </div>

        {/* ── Floating badge: 200 days — desktop only ── */}
        <div
          ref={b1}
          className="glass-card rounded-2xl px-5 py-3.5 items-center gap-3 hidden sm:flex"
          style={{ position: "absolute", right: "3.5rem", top: "10rem" }}
        >
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
            style={{ background: "var(--brand-ice)" }}
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 20 20" style={{ color: "var(--brand)" }}>
              <path d="M4 8h12M4 12h12M8 4v2M12 4v2M4 6a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 01-2 2H6a2 2 0 01-2-2V6z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </div>
          <div>
            <div className="text-[11px] font-medium" style={{ color: "var(--neutral-400)" }}>Заряд батареи</div>
            <div className="text-sm font-bold" style={{ color: "var(--neutral-900)" }}>200 дней без зарядки</div>
          </div>
        </div>

        {/* ── Floating badge: Rating — desktop only ── */}
        <div
          ref={b2}
          className="glass-card rounded-2xl px-5 py-3.5 items-center gap-3 hidden sm:flex"
          style={{ position: "absolute", right: "3.5rem", bottom: "5rem" }}
        >
          <div className="text-amber-400 text-lg leading-none">★★★★★</div>
          <div>
            <div className="text-sm font-bold" style={{ color: "var(--neutral-900)" }}>4.9 / 5.0</div>
            <div className="text-[11px] font-medium" style={{ color: "var(--neutral-400)" }}>на маркетплейсах</div>
          </div>
        </div>
      </div>
    </section>
  );
}
