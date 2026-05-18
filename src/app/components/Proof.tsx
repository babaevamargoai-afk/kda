"use client";

import { useEffect, useRef, useState } from "react";

function useCountUp(target: number, suffix = "", duration = 1500) {
  const [value, setValue] = useState("0");
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started.current) {
        started.current = true;
        const start = performance.now();
        const tick = (now: number) => {
          const p = Math.min((now - start) / duration, 1);
          const ease = 1 - Math.pow(1 - p, 3);
          const cur = Math.round(ease * target * 10) / 10;
          setValue(cur % 1 === 0 ? String(Math.round(cur)) + suffix : cur.toFixed(1) + suffix);
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
        obs.disconnect();
      }
    }, { threshold: 0.4 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [target, suffix, duration]);

  return { ref, value };
}

const metrics = [
  { target: 4.9, suffix: "", label: "Рейтинг", sub: "WB и Ozon" },
  { target: 200, suffix: " дн", label: "Без зарядки", sub: "модель H8" },
  { target: 6, suffix: "", label: "Режимов", sub: "в щётке H6" },
  { target: 2020, suffix: "", label: "На рынке", sub: "с этого года" },
];

const reviews = [
  {
    text: "Купила H8 для мужа и себя. Заряжали первый раз в октябре — к январю ещё держит. Это просто другой уровень.",
    author: "Мария", city: "Москва", platform: "Wildberries", color: "#CB11AB",
  },
  {
    text: "С брекетами ирригатор — это не роскошь, а необходимость. HF-9 езжу с собой везде, не представляю без него поездки.",
    author: "Андрей", city: "Екатеринбург", platform: "Ozon", color: "#005BFF",
  },
  {
    text: "Перешла с Oral-B на H6. Дисплей, 6 режимов, база в комплекте — и дешевле. Зачем я столько лет переплачивала?",
    author: "Елена", city: "Санкт-Петербург", platform: "Яндекс Маркет", color: "#B8800A",
  },
];

function MetricCard({ target, suffix, label, sub }: typeof metrics[0]) {
  const { ref, value } = useCountUp(target, suffix);
  return (
    <div
      ref={ref}
      className="rounded-[24px] p-7 flex flex-col items-center text-center"
      style={{
        background: "linear-gradient(145deg, #EAF2FF 0%, #F7FAFF 100%)",
        border: "1px solid rgba(5,47,131,0.10)",
      }}
    >
      <span className="text-4xl lg:text-5xl font-extrabold mb-2 tabular-nums" style={{ color: "var(--brand)" }}>
        {value}
      </span>
      <span className="text-sm font-bold mb-1" style={{ color: "var(--neutral-900)" }}>{label}</span>
      <span className="text-xs font-medium" style={{ color: "var(--neutral-400)" }}>{sub}</span>
    </div>
  );
}

export default function Proof() {
  return (
    <section className="py-24 px-4 sm:px-8" style={{ background: "#F7FAFF" }}>
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-14">
          <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase mb-5 px-4 py-1.5 rounded-full"
            style={{ background: "rgba(5,47,131,0.07)", color: "var(--brand)" }}>Доверие</span>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold leading-tight tracking-tight"
            style={{ color: "var(--neutral-900)" }}>
            Почему KDA выбирают — факты, а не слова
          </h2>
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
          {metrics.map((m, i) => <MetricCard key={i} {...m} />)}
        </div>

        {/* Platform logos */}
        <div
          className="rounded-[24px] px-8 py-7 mb-10 flex flex-col sm:flex-row gap-8 justify-between"
          style={{ background: "#fff", border: "1px solid rgba(5,47,131,0.07)" }}
        >
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.15em] mb-4" style={{ color: "var(--neutral-400)" }}>
              Купить KDA можно здесь
            </p>
            <div className="flex flex-wrap gap-3">
              {[
                { label: "Wildberries", color: "#CB11AB", bg: "rgba(203,17,171,0.08)" },
                { label: "Ozon",        color: "#005BFF", bg: "rgba(0,91,255,0.08)" },
                { label: "Яндекс Маркет", color: "#B8800A", bg: "rgba(244,169,29,0.10)" },
                { label: "АптекиПлюс", color: "#0A6D3A", bg: "rgba(10,109,58,0.08)" },
              ].map(p => (
                <span key={p.label} className="px-4 py-2 rounded-xl text-sm font-bold"
                  style={{ background: p.bg, color: p.color }}>
                  {p.label}
                </span>
              ))}
            </div>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.15em] mb-4" style={{ color: "var(--neutral-400)" }}>
              Производство и стандарты
            </p>
            <div className="flex flex-wrap gap-3">
              {["GMP", "IPX8", "DuPont Diamond", "Гипоаллерген"].map(badge => (
                <span key={badge} className="px-4 py-2 rounded-xl text-sm font-bold"
                  style={{ background: "rgba(5,47,131,0.07)", color: "var(--brand)" }}>
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Reviews */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {reviews.map((r, i) => (
            <div key={i} className="rounded-[24px] p-6 flex flex-col gap-4"
              style={{ background: "#fff", border: "1px solid rgba(5,47,131,0.07)", boxShadow: "0 4px 20px rgba(5,47,131,0.05)" }}>
              <div className="text-amber-400 text-lg">★★★★★</div>
              <p className="text-sm leading-relaxed flex-1 italic" style={{ color: "var(--neutral-600)" }}>
                «{r.text}»
              </p>
              <div className="flex items-center justify-between pt-3 border-t" style={{ borderColor: "rgba(5,47,131,0.07)" }}>
                <span className="text-sm font-bold" style={{ color: "var(--neutral-900)" }}>
                  {r.author}, {r.city}
                </span>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-lg"
                  style={{ background: `${r.color}12`, color: r.color }}>
                  {r.platform}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a href="#products" className="btn-outline inline-flex items-center gap-2 px-8 py-3.5 text-sm">
            Смотреть все продукты
          </a>
        </div>
      </div>
    </section>
  );
}
