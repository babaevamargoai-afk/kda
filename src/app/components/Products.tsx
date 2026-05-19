"use client";

import { useState } from "react";
import Image from "next/image";

const WB_URL  = "https://www.wildberries.ru/seller/44368";
const OZ_URL  = "https://www.ozon.ru/seller/kda-3183475/";
const YM_URL  = "https://market.yandex.ru/search?merchant-filter=764547";

function MPButtons() {
  return (
    <div className="flex flex-col gap-2 mt-4">
      {[
        { label: "Wildberries", color: "#CB11AB", bg: "rgba(203,17,171,0.07)", url: WB_URL },
        { label: "Ozon",        color: "#005BFF", bg: "rgba(0,91,255,0.07)",   url: OZ_URL },
        { label: "Яндекс Маркет", color: "#B8800A", bg: "rgba(244,169,29,0.10)", url: YM_URL },
      ].map((mp) => (
        <a
          key={mp.label}
          href={mp.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 hover:opacity-80"
          style={{ background: mp.bg, color: mp.color, border: `1px solid ${mp.color}22` }}
        >
          <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: mp.color }} />
          {mp.label}
        </a>
      ))}
      <p className="text-[11px] font-medium mt-1" style={{ color: "rgba(5,47,131,0.40)" }}>📄 Есть в каталоге B2B</p>
    </div>
  );
}

function Pill({ label, accent }: { label: string; accent?: boolean }) {
  return (
    <span
      className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-semibold"
      style={
        accent
          ? { background: "var(--brand)", color: "#fff" }
          : { background: "rgba(5,47,131,0.07)", color: "var(--brand)" }
      }
    >
      {label}
    </span>
  );
}

function Badge({ label, color }: { label: string; color: string }) {
  return (
    <span
      className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-bold absolute top-4 left-4 z-10"
      style={{ background: color, color: "#fff" }}
    >
      {label}
    </span>
  );
}

/* ── BRUSHES ── */
const brushes = [
  {
    id: "h8",
    name: "KDA H8",
    badge: "★ Флагман",
    badgeColor: "#052F83",
    desc: "Максимум автономности и контроля. Для тех, кто не хочет компромиссов.",
    pills: ["200 дней заряда", "5 режимов", "Блокировка", "Память режима"],
    accentPill: 0,
    price: "от 4 277 ₽",
    image: "/images/h8-v2.png",
    featured: true,
    featuredBg: "linear-gradient(145deg, #EAF2FF 0%, #DCEBFF 100%)",
  },
  {
    id: "h6",
    name: "KDA H6",
    badge: "Технологичный",
    badgeColor: "#0A4DCC",
    desc: "6 режимов и LED-дисплей. Самая функциональная щётка в линейке.",
    pills: ["6 режимов", "LED-дисплей", "Свой режим", "60 дней"],
    accentPill: 0,
    price: "4 544 ₽",
    image: "/images/h6-v2.png",
    featured: false,
  },
  {
    id: "t9",
    name: "KDA T9",
    badge: "Усиленный",
    badgeColor: "#B8650A",
    desc: "Мощнее базового без переплаты за флагман. Уверенный шаг вверх.",
    pills: ["100 дней заряда", "5 режимов", "Память режима"],
    accentPill: 0,
    price: "от 3 363 ₽",
    image: "/images/t9-v2.png",
    featured: false,
  },
  {
    id: "t5",
    name: "KDA T5",
    badge: "Надёжный старт",
    badgeColor: "#6F7D92",
    desc: "Надёжный первый выбор. Всё необходимое — без лишнего.",
    pills: ["5 режимов", "3 уровня силы", "60 дней", "Память режима"],
    accentPill: -1,
    price: "от 3 417 ₽",
    image: "/images/t5-v2.png",
    featured: false,
  },
];

/* ── IRRIGATORS ── */
const irrigators = [
  {
    id: "hf9",
    name: "KDA HF-9",
    badge: "★ Универсальный",
    badgeColor: "#5B21B6",
    desc: "Один ирригатор на каждый день. Дом, поездки, брекеты — везде.",
    pills: ["5 насадок", "5 режимов", "300 мл", "20 дней"],
    accentPill: 0,
    price: "3 705 ₽",
    image: "/images/hf9-v2.png",
    featured: true,
    featuredBg: "linear-gradient(145deg, #F3F0FE 0%, #EDE9FF 100%)",
  },
  {
    id: "nc2001a",
    name: "KDA NC2001A",
    badge: "Travel",
    badgeColor: "#BE185D",
    desc: "Складной корпус — бросил в сумку и поехал. Для тех, кто в движении.",
    pills: ["Складной", "3 режима", "200 мл", "15 дней"],
    accentPill: 0,
    price: "3 705 ₽",
    image: "/images/nc2001a-v2.png",
    featured: false,
  },
];

/* ── TIPS ── */
const tips = [
  {
    id: "s1s4",
    name: "Насадки S1 / S4",
    compat: "Для KDA H8 и T9",
    desc: "S1 — классическая форма · S4 — скошенная для труднодоступных зон",
    hardness: "Мягкая · Средняя · Жёсткая",
    price: "от 490 ₽",
    image: "/images/tips-s1s4-v2.png",
  },
  {
    id: "s5",
    name: "Насадки S5",
    compat: "Для KDA T5",
    desc: "DuPont Diamond щетинки. Цветовой индикатор износа.",
    hardness: "Мягкая · Средняя · Жёсткая",
    price: "от 390 ₽",
    image: "/images/tips-s5-v2.png",
  },
  {
    id: "s6",
    name: "Насадки S6",
    compat: "Для KDA H6",
    desc: "DuPont Diamond щетинки. Гипоаллергенные материалы.",
    hardness: "Мягкая · Средняя · Жёсткая",
    price: "от 390 ₽",
    image: "/images/tips-s6-v2.png",
  },
];

function ProductCard({
  name, badge, badgeColor, desc, pills, accentPill, price, image,
  featured, featuredBg,
}: {
  name: string; badge: string; badgeColor: string; desc: string;
  pills: string[]; accentPill: number; price: string; image: string;
  featured?: boolean; featuredBg?: string;
}) {
  return (
    <div
      className="relative rounded-[24px] overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1"
      style={{
        background: "#fff",
        border: featured ? `2px solid ${badgeColor}28` : "1px solid rgba(5,47,131,0.08)",
        boxShadow: featured
          ? `0 12px 48px ${badgeColor}22`
          : "0 4px 20px rgba(5,47,131,0.06)",
        transform: featured ? "scale(1.02)" : "scale(1)",
      }}
    >
      {/* Full-width square image area */}
      <div
        className="relative w-full"
        style={{
          aspectRatio: "1 / 1",
          background: featured ? featuredBg : "var(--brand-ice)",
        }}
      >
        <Badge label={badge} color={badgeColor} />
        <Image
          src={image}
          alt={name}
          fill
          className="object-contain"
          style={{ padding: "12px" }}
          loading="lazy"
        />
      </div>

      {/* Content */}
      <div className="px-5 py-5 flex-1 flex flex-col">
        <h3 className="text-lg font-extrabold mb-2" style={{ color: "var(--neutral-900)" }}>{name}</h3>
        <p className="text-sm leading-relaxed mb-4 flex-1" style={{ color: "var(--neutral-600)" }}>{desc}</p>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {pills.map((p, i) => (
            <Pill key={p} label={p} accent={i === accentPill} />
          ))}
        </div>

        <div className="border-t pt-4" style={{ borderColor: "rgba(5,47,131,0.08)" }}>
          <p className="text-lg font-extrabold mb-3" style={{ color: "var(--neutral-900)" }}>{price}</p>
          <MPButtons />
        </div>
      </div>
    </div>
  );
}

function TipCard({ name, compat, desc, hardness, price, image }: typeof tips[0]) {
  return (
    <div
      className="rounded-[24px] overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1"
      style={{
        background: "#fff",
        border: "1px solid rgba(5,47,131,0.08)",
        boxShadow: "0 4px 20px rgba(5,47,131,0.06)",
      }}
    >
      {/* Full-width square image area */}
      <div
        className="relative w-full"
        style={{ aspectRatio: "1 / 1", background: "var(--brand-ice)" }}
      >
        <Image src={image} alt={name} fill className="object-contain" style={{ padding: "12px" }} loading="lazy" />
      </div>

      <div className="px-5 pt-5 pb-3 flex-1 flex flex-col">
        <div
          className="text-[10px] font-bold tracking-[0.12em] uppercase mb-2 px-2 py-1 rounded-lg self-start"
          style={{ background: "rgba(5,47,131,0.07)", color: "var(--brand)" }}
        >
          {compat}
        </div>
        <h3 className="text-base font-extrabold mb-1.5" style={{ color: "var(--neutral-900)" }}>{name}</h3>
        <p className="text-sm leading-relaxed mb-3" style={{ color: "var(--neutral-600)" }}>{desc}</p>
        <div className="flex flex-wrap gap-1.5 mb-3">
          <Pill label="DuPont Diamond" />
          <Pill label="Индикатор износа" />
          <Pill label="Гипоаллерген" />
        </div>
        <p className="text-xs font-medium mb-4" style={{ color: "var(--neutral-400)" }}>Жёсткость: {hardness}</p>
        <div className="border-t pt-4 mt-auto" style={{ borderColor: "rgba(5,47,131,0.08)" }}>
          <p className="text-base font-extrabold mb-3" style={{ color: "var(--neutral-900)" }}>{price} / 4 шт.</p>
          <div className="flex flex-col gap-2">
            {[
              { label: "Wildberries", color: "#CB11AB", bg: "rgba(203,17,171,0.07)", url: WB_URL },
              { label: "Ozon", color: "#005BFF", bg: "rgba(0,91,255,0.07)", url: OZ_URL },
            ].map((mp) => (
              <a
                key={mp.label}
                href={mp.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold hover:opacity-80 transition-opacity"
                style={{ background: mp.bg, color: mp.color, border: `1px solid ${mp.color}22` }}
              >
                <span className="w-2 h-2 rounded-full" style={{ background: mp.color }} />
                {mp.label}
              </a>
            ))}
          </div>
          <p className="text-[11px] font-medium mt-2" style={{ color: "rgba(5,47,131,0.40)" }}>📄 Есть в каталоге B2B · Менять каждые 3 мес.</p>
        </div>
      </div>
    </div>
  );
}

const tabs = [
  { id: "brushes",   label: "Зубные щётки" },
  { id: "irrigators", label: "Ирригаторы" },
  { id: "tips",      label: "Насадки" },
];

export default function Products() {
  const [active, setActive] = useState("brushes");

  return (
    <section id="products" className="py-24 px-4 sm:px-8" style={{ background: "#F7FAFF" }}>
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <span
            className="inline-block text-xs font-bold tracking-[0.2em] uppercase mb-5 px-4 py-1.5 rounded-full"
            style={{ background: "rgba(5,47,131,0.07)", color: "var(--brand)" }}
          >
            Ассортимент
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold leading-tight tracking-tight mb-4"
            style={{ color: "var(--neutral-900)" }}
          >
            Полный ассортимент KDA
          </h2>
          <p className="text-base sm:text-lg max-w-xl mx-auto" style={{ color: "var(--neutral-600)" }}>
            Электрические щётки, ирригаторы, сменные насадки. Полный цикл решений для профессионального ухода за полостью рта.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-10">
          <div
            className="inline-flex rounded-2xl p-1.5 gap-1"
            style={{ background: "rgba(5,47,131,0.07)" }}
          >
            {tabs.map((t) => (
              <button
                key={t.id}
                onClick={() => setActive(t.id)}
                className="px-6 py-2.5 rounded-xl text-sm font-bold transition-all duration-250"
                style={
                  active === t.id
                    ? { background: "var(--brand)", color: "#fff", boxShadow: "0 4px 16px rgba(5,47,131,0.28)" }
                    : { background: "transparent", color: "var(--neutral-600)" }
                }
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>

        {/* Brushes */}
        {active === "brushes" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {brushes.map((b) => <ProductCard key={b.id} {...b} />)}
          </div>
        )}

        {/* Irrigators */}
        {active === "irrigators" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {irrigators.map((ir) => <ProductCard key={ir.id} {...ir} />)}
          </div>
        )}

        {/* Tips */}
        {active === "tips" && (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {tips.map((t) => <TipCard key={t.id} {...t} />)}
          </div>
        )}


      </div>
    </section>
  );
}
