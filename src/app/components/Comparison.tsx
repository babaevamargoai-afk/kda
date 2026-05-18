"use client";

const rows = [
  {
    criterion: "Цена",
    kda: "Средняя",
    oral: "Высокая",
    xiaomi: "Низкая",
    manual: "Минимальная",
  },
  {
    criterion: "Автономность",
    kda: "★ До 200 дн",
    oral: "14–30 дней",
    xiaomi: "25–60 дней",
    manual: "—",
  },
  {
    criterion: "Режимы чистки",
    kda: "До 6",
    oral: "3–5",
    xiaomi: "2–3",
    manual: "1",
  },
  { criterion: "Индикатор износа", kda: true,  oral: "Частично", xiaomi: false, manual: false },
  { criterion: "Гипоаллерген",    kda: true,  oral: true,        xiaomi: "?",   manual: "?" },
  { criterion: "Стандарт GMP",    kda: true,  oral: true,        xiaomi: "Нет данных", manual: "—" },
  { criterion: "Полная экосистема", kda: true, oral: "Частично", xiaomi: false, manual: false },
  { criterion: "Функция памяти",  kda: true,  oral: false,       xiaomi: false, manual: "—" },
  { criterion: "Аптечное доверие", kda: true, oral: true,        xiaomi: false, manual: true },
];

function Cell({ val, isKda }: { val: string | boolean; isKda?: boolean }) {
  const base = "px-4 py-3.5 text-sm font-semibold text-center";
  if (val === true)  return <td className={base} style={{ color: "#0A6D3A" }}>✓</td>;
  if (val === false) return <td className={base} style={{ color: "#9CA3AF" }}>✗</td>;
  return (
    <td
      className={base}
      style={isKda ? { color: "var(--brand)", fontWeight: 800 } : { color: "var(--neutral-600)" }}
    >
      {val}
    </td>
  );
}

export default function Comparison() {
  return (
    <section className="py-24 px-4 sm:px-8" style={{ background: "#F7FAFF" }}>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase mb-5 px-4 py-1.5 rounded-full"
            style={{ background: "rgba(5,47,131,0.07)", color: "var(--brand)" }}>Сравнение</span>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold leading-tight tracking-tight mb-4"
            style={{ color: "var(--neutral-900)" }}>KDA vs. альтернативы</h2>
          <p className="text-base" style={{ color: "var(--neutral-600)" }}>Выбирайте осознанно</p>
        </div>

        {/* Scroll wrapper for mobile */}
        <div className="overflow-x-auto rounded-[24px]" style={{ boxShadow: "0 4px 32px rgba(5,47,131,0.08)" }}>
          <table className="w-full min-w-[620px] border-collapse">
            <thead>
              <tr style={{ background: "var(--brand)" }}>
                <th className="px-5 py-4 text-left text-xs font-bold text-white/70 uppercase tracking-wider">Критерий</th>
                <th className="px-4 py-4 text-center text-sm font-extrabold text-white">KDA</th>
                <th className="px-4 py-4 text-center text-xs font-semibold text-white/70">Oral-B / Philips</th>
                <th className="px-4 py-4 text-center text-xs font-semibold text-white/70">Xiaomi / no-name</th>
                <th className="px-4 py-4 text-center text-xs font-semibold text-white/70">Обычная щётка</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr
                  key={i}
                  style={{
                    background: i % 2 === 0 ? "#fff" : "#F7FAFF",
                    borderBottom: "1px solid rgba(5,47,131,0.06)",
                  }}
                >
                  <td className="px-5 py-3.5 text-sm font-semibold" style={{ color: "var(--neutral-900)" }}>
                    {row.criterion}
                  </td>
                  <Cell val={row.kda} isKda />
                  <Cell val={row.oral} />
                  <Cell val={row.xiaomi} />
                  <Cell val={row.manual} />
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pull-quote */}
        <div
          className="mt-10 rounded-[24px] px-8 py-7 relative overflow-hidden"
          style={{ background: "linear-gradient(135deg, #EAF2FF 0%, #DCEBFF 100%)", border: "1px solid rgba(5,47,131,0.10)" }}
        >
          <div className="absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl" style={{ background: "var(--brand)" }} />
          <p className="text-base font-semibold leading-relaxed italic pl-3" style={{ color: "var(--brand)" }}>
            «KDA занимает нишу, которую рынок давно ждал: аптечный стандарт доверия + технологии уровня премиум + цена, которую не нужно оправдывать.»
          </p>
        </div>
      </div>
    </section>
  );
}
