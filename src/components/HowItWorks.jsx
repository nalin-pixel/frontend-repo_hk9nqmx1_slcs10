import React from 'react';
import { CheckCircle2, FileText, Smartphone, CreditCard } from 'lucide-react';

const Step = ({ icon: Icon, title, desc }) => (
  <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 text-white backdrop-blur">
    <div className="mt-1 rounded-lg bg-gradient-to-br from-cyan-400/30 to-fuchsia-400/30 p-2 ring-1 ring-white/10">
      <Icon className="h-5 w-5 text-white" />
    </div>
    <div>
      <h3 className="text-base font-semibold">{title}</h3>
      <p className="mt-1 text-sm text-white/70">{desc}</p>
    </div>
  </div>
);

export default function HowItWorks() {
  return (
    <section className="bg-slate-950 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center text-white">
          <h2 className="text-3xl font-semibold sm:text-4xl">Как это работает</h2>
          <p className="mt-3 text-white/70">4 простых шага до денег на карте. Онлайн, прозрачно и безопасно.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
          <Step icon={FileText} title="Заявка" desc="Заполните короткую анкету онлайн — не более 2 минут." />
          <Step icon={Smartphone} title="Проверка" desc="Мгновенная проверка данных и предварительное решение." />
          <Step icon={CheckCircle2} title="Одобрение" desc="Получите финальное одобрение и подпишите оферту." />
          <Step icon={CreditCard} title="Перевод" desc="Мгновенное зачисление на вашу банковскую карту." />
        </div>
      </div>
    </section>
  );
}
