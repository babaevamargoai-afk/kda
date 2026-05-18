"use client";

const b2cSteps = [
  {
    n: "01",
    title: "Выберите модель",
    text: "Сравните щётки по режимам и автономности. Подсказки прямо на карточках продуктов.",
    result: "Вы знаете, что именно подходит вам.",
  },
  {
    n: "02",
    title: "Перейдите на маркетплейс",
    text: "Wildberries, Ozon или Яндекс Маркет — привычный интерфейс, защита покупателя, быстрая доставка.",
    result: "Покупка в 2–3 клика.",
  },
  {
    n: "03",
    title: "Меняйте насадки каждые 3 месяца",
    text: "Цветовой индикатор износа напомнит сам. Насадки всегда в наличии на тех же платформах.",
    result: "Профессиональный уход не прерывается.",
  },
];

const b2bSteps = [
  {
    n: "01",
    title: "Скачайте прайс",
    text: "Укажите email — получите полный каталог с оптовыми условиями, MOQ и сроками поставки.",
    result: "Понимание условий без лишних звонков.",
  },
  {
    n: "02",
    title: "Оставьте заявку",
    text: "Заполните короткую форму — менеджер свяжется в течение 1 рабочего дня.",
    result: "Персональное коммерческое предложение.",
  },
  {
    n: "03",
    title: "Начните поставки",
    text: "Договор, логистика, маркетинговые материалы — всё с поддержкой бренда.",
    result: "Старт продаж с поддержкой KDA.",
  },
];

function Step({ n, title, text, result, isLast }: typeof b2cSteps[0] & { isLast: boolean }) {
  return (
    <div className="relative flex flex-col gap-3">
      <div className="flex items-start gap-4">
        <div className="flex flex-col items-center flex-shrink-0">
          <div
            className="w-12 h-12 rounded-2xl flex items-center justify-center text-xl font-extrabold"
            style={{ background: "var(--brand)", color: "#fff" }}
          >
            {n}
          </div>
          {!isLast && (
            <div className="w-px flex-1 min-h-[40px] mt-2" style={{ background: "rgba(5,47,131,0.15)" }} />
          )}
        </div>
        <div className="pt-1 pb-6">
          <h3 className="text-base font-bold mb-1.5" style={{ color: "var(--neutral-900)" }}>{title}</h3>
          <p className="text-sm leading-relaxed mb-3" style={{ color: "var(--neutral-600)" }}>{text}</p>
          <div className="flex items-center gap-2">
            <svg width="14" height="14" fill="none" viewBox="0 0 14 14" className="flex-shrink-0">
              <path d="M2 7l3.5 3.5L12 3.5" stroke="#052F83" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="text-xs font-semibold" style={{ color: "var(--brand)" }}>{result}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function HowToStart() {
  return (
    <section className="py-24 px-4 sm:px-8" style={{ background: "#fff" }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase mb-5 px-4 py-1.5 rounded-full"
            style={{ background: "rgba(5,47,131,0.07)", color: "var(--brand)" }}>Просто</span>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold leading-tight tracking-tight"
            style={{ color: "var(--neutral-900)" }}>Как начать</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* B2C */}
          <div className="rounded-[28px] p-8"
            style={{ background: "#F7FAFF", border: "1px solid rgba(5,47,131,0.08)" }}>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-8 rounded-xl flex items-center justify-center" style={{ background: "var(--brand-ice)" }}>
                <svg width="18" height="18" fill="none" viewBox="0 0 18 18">
                  <path d="M9 2a7 7 0 100 14A7 7 0 009 2zm0 3v4l2.5 2.5" stroke="#052F83" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </div>
              <span className="text-base font-extrabold" style={{ color: "var(--neutral-900)" }}>Для покупателей</span>
            </div>
            {b2cSteps.map((s, i) => (
              <Step key={i} {...s} isLast={i === b2cSteps.length - 1} />
            ))}
            <a href="#products" className="btn-primary inline-flex items-center gap-2 px-7 py-3.5 text-sm mt-2">
              Выбрать продукт
              <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>

          {/* B2B */}
          <div className="rounded-[28px] p-8"
            style={{ background: "linear-gradient(145deg, #EAF2FF 0%, #DCEBFF 100%)", border: "1px solid rgba(5,47,131,0.12)" }}>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-8 rounded-xl flex items-center justify-center" style={{ background: "rgba(5,47,131,0.12)" }}>
                <svg width="18" height="18" fill="none" viewBox="0 0 18 18">
                  <rect x="2" y="4" width="14" height="11" rx="2" stroke="#052F83" strokeWidth="1.5"/>
                  <path d="M6 4V3a3 3 0 016 0v1M6 10h6" stroke="#052F83" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </div>
              <span className="text-base font-extrabold" style={{ color: "var(--neutral-900)" }}>Для партнёров</span>
            </div>
            {b2bSteps.map((s, i) => (
              <Step key={i} {...s} isLast={i === b2bSteps.length - 1} />
            ))}
            <a href="#partners" className="btn-primary inline-flex items-center gap-2 px-7 py-3.5 text-sm mt-2">
              Скачать прайс
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
