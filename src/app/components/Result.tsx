"use client";

const outcomes = [
  {
    title: "Снижаете риск",
    text: "Кариеса, воспалений, проблем с брекетами, внезапных визитов к стоматологу.",
  },
  {
    title: "Получаете уверенность",
    text: "В улыбке, в ежедневном уходе, в выборе для всей семьи.",
  },
  {
    title: "Экономите время",
    text: "Щётка всё помнит. Таймер считает. Индикатор подскажет. Просто пользуйтесь.",
  },
];

export default function Result() {
  return (
    <section className="py-24 px-4 sm:px-8 relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #052F83 0%, #0A4DCC 60%, #1D6BFF 100%)" }}>

      {/* Decorative water glow */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 70% 60% at 80% 40%, rgba(127,174,255,0.18) 0%, transparent 60%)" }} />
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 50% 40% at 20% 80%, rgba(207,224,255,0.12) 0%, transparent 55%)" }} />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

          {/* LEFT — Story */}
          <div>
            <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase mb-6 px-4 py-1.5 rounded-full"
              style={{ background: "rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.90)" }}>
              Ваша новая реальность
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-white leading-tight tracking-tight mb-8">
              Как изменится ваш уход — и ваша уверенность
            </h2>
            <div className="space-y-4 text-white/80 text-base leading-relaxed font-medium">
              <p>Вы просыпаетесь. Берёте щётку — она уже настроена на ваш режим.</p>
              <p>Таймер отсчитывает 2 минуты. Дёсны не болят.</p>
              <p>Индикатор говорит: насадка ещё свежая.</p>
              <p>Вечером — 60 секунд с ирригатором.</p>
              <p className="text-white font-bold text-lg mt-6">Это не рутина. Это система.</p>
            </div>
          </div>

          {/* RIGHT — Outcomes */}
          <div className="flex flex-col gap-5">
            {outcomes.map((o, i) => (
              <div key={i}
                className="flex gap-4 items-start p-6 rounded-[24px]"
                style={{ background: "rgba(255,255,255,0.10)", border: "1px solid rgba(255,255,255,0.16)", backdropFilter: "blur(12px)" }}>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(255,255,255,0.20)" }}>
                  <svg width="18" height="18" fill="none" viewBox="0 0 18 18">
                    <path d="M3 9l4 4 8-8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <div className="text-base font-bold text-white mb-1">{o.title}</div>
                  <div className="text-sm text-white/70 leading-relaxed">{o.text}</div>
                </div>
              </div>
            ))}

            {/* Final phrase */}
            <div className="mt-4 text-center py-6 px-6 rounded-[24px]"
              style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)" }}>
              <p className="text-lg sm:text-xl font-extrabold text-white leading-snug">
                Это не щётка.<br />Это привычка, которая работает.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
