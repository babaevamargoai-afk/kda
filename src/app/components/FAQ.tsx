"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Это дорого — есть обычные щётки за 200 рублей",
    a: "Один визит к стоматологу стоит дороже KDA. Профилактика — это экономия. Обычная щётка не контролирует время, давление и износ насадки.",
  },
  {
    q: "Я не знаю этот бренд — вдруг качество плохое?",
    a: "Рейтинг 4.9 — это не мы говорим, это покупатели на WB и Ozon. Производство GMP, присутствие в аптеках. Тысячи заказов.",
  },
  {
    q: "Уже был плохой опыт с электрощёткой",
    a: "Мы слышим это часто. Именно поэтому H8 держит 200 дней заряда, а цветовой индикатор насадки покажет, когда пора менять.",
  },
  {
    q: "Зачем вообще нужен ирригатор?",
    a: "Щётка очищает 65% поверхности. Ирригатор достаёт в межзубные промежутки — именно там скапливается основной налёт и начинаются проблемы.",
  },
  {
    q: "Нет времени разбираться в режимах",
    a: "Нажали кнопку — работает. Функция памяти всё помнит. Таймер считает сам. Ничего сложного.",
  },
  {
    q: "Хочу подумать / не сейчас",
    a: "Пока вы думаете, ваши зубы чистятся с прежней эффективностью. Попробовать — проще, чем кажется.",
  },
  {
    q: "Почему я должен доверять именно вам?",
    a: "GMP, аптечная сеть, рейтинг 4.9, отзывы реальных покупателей. Мы не просим доверять на слово — мы показываем факты.",
  },
  {
    q: "(B2B) Зачем мне новый бренд, если есть Oral-B и Philips?",
    a: "Именно потому, что Oral-B и Philips — уже у всех ваших конкурентов. KDA — это маржа, лояльность и отсутствие ценовых войн.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-24 px-4 sm:px-8" style={{ background: "#fff" }}>
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-14">
          <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase mb-5 px-4 py-1.5 rounded-full"
            style={{ background: "rgba(5,47,131,0.07)", color: "var(--brand)" }}>FAQ</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight tracking-tight"
            style={{ color: "var(--neutral-900)" }}>
            Ответы на вопросы,<br />которые обычно не задают вслух
          </h2>
        </div>

        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="rounded-[20px] overflow-hidden transition-all duration-300"
              style={{
                border: open === i ? "1.5px solid rgba(5,47,131,0.20)" : "1px solid rgba(5,47,131,0.08)",
                background: open === i ? "#EAF2FF" : "#fff",
              }}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left gap-4"
              >
                <span className="text-sm sm:text-base font-semibold" style={{ color: "var(--neutral-900)" }}>
                  {faq.q}
                </span>
                <span
                  className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300"
                  style={{
                    background: open === i ? "var(--brand)" : "rgba(5,47,131,0.08)",
                    transform: open === i ? "rotate(45deg)" : "none",
                  }}
                >
                  <svg width="14" height="14" fill="none" viewBox="0 0 14 14">
                    <path d="M7 2v10M2 7h10" stroke={open === i ? "#fff" : "#052F83"} strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </span>
              </button>

              <div
                className="overflow-hidden transition-all duration-400"
                style={{ maxHeight: open === i ? "300px" : "0px" }}
              >
                <p className="px-6 pb-6 text-sm leading-relaxed" style={{ color: "var(--neutral-600)" }}>
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
