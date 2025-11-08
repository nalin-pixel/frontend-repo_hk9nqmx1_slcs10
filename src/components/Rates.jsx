import React from 'react';
import { Percent, CalendarDays, Wallet } from 'lucide-react';

const RateCard = ({ title, rate, term, limit, highlight }) => (
  <div className={`rounded-2xl border p-6 backdrop-blur transition ${
    highlight ? 'border-cyan-400/40 bg-cyan-400/10 shadow-[0_0_0_1px_rgba(34,211,238,0.3)]' : 'border-white/10 bg-white/5'
  }`}>
    <div className="flex items-center justify-between">
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/70">Фиксированно</span>
    </div>
    <div className="mt-4 flex items-end gap-2">
      <span className="text-4xl font-bold text-white">{rate}</span>
      <span className="mb-1 text-white/70">в день</span>
    </div>
    <ul className="mt-6 space-y-3 text-sm text-white/80">
      <li className="flex items-center gap-2"><CalendarDays className="h-4 w-4 text-cyan-300" />Срок до {term}</li>
      <li className="flex items-center gap-2"><Wallet className="h-4 w-4 text-fuchsia-300" />Лимит до {limit}</li>
      <li className="flex items-center gap-2"><Percent className="h-4 w-4 text-emerald-300" />Досрочное погашение без штрафов</li>
    </ul>
    <a href="#contact" className={`mt-6 inline-flex w-full items-center justify-center rounded-xl px-4 py-3 font-medium transition ${
      highlight ? 'bg-cyan-400 text-slate-950 hover:bg-cyan-300' : 'bg-white/10 text-white hover:bg-white/15'
    }`}>
      Выбрать тариф
    </a>
  </div>
);

export default function Rates() {
  return (
    <section id="rates" className="relative bg-slate-950 py-20 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(50%_60%_at_50%_0%,rgba(56,189,248,0.15),transparent)]" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold sm:text-4xl">Тарифы и условия</h2>
          <p className="mt-3 text-white/70">Выберите подходящий вариант — короткий займ до зарплаты или комфортный срок с большим лимитом.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          <RateCard title="Старт" rate="0.8%" term="15 дней" limit="30 000 ₽" />
          <RateCard title="Комфорт" rate="0.7%" term="30 дней" limit="70 000 ₽" highlight />
          <RateCard title="Максимум" rate="0.6%" term="60 дней" limit="120 000 ₽" />
        </div>
      </div>
    </section>
  );
}
