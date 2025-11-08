import React from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowRight, Shield, Clock } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      <div className="absolute inset-0 opacity-30 pointer-events-none" aria-hidden>
        <div className="absolute -top-40 -left-40 h-80 w-80 rounded-full bg-fuchsia-500 blur-3xl" />
        <div className="absolute top-20 -right-20 h-96 w-96 rounded-full bg-cyan-500 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 pt-20 md:pt-28">
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
          <div>
            <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/80 backdrop-blur">
              Микрозаймы онлайн
            </span>
            <h1 className="mt-4 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl md:text-6xl">
              Быстрые и прозрачные займы на ваши цели
            </h1>
            <p className="mt-4 max-w-xl text-white/70">
              Одобрение за несколько минут, гибкие сроки и понятная ставка. Без скрытых платежей — всё честно и прозрачно.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#rates"
                className="inline-flex items-center gap-2 rounded-xl bg-cyan-500 px-5 py-3 font-medium text-slate-950 transition hover:bg-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-300"
              >
                Оформить займ
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 font-medium text-white transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/30"
              >
                Связаться с нами
              </a>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4 text-sm text-white/80 sm:max-w-md">
              <div className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 p-3 backdrop-blur">
                <Clock className="h-4 w-4 text-cyan-300" />
                <span>Одобрение за 5 минут</span>
              </div>
              <div className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 p-3 backdrop-blur">
                <Shield className="h-4 w-4 text-fuchsia-300" />
                <span>Без скрытых комиссий</span>
              </div>
            </div>
          </div>

          <div className="relative h-[420px] w-full sm:h-[520px] md:h-[560px]">
            <div className="absolute inset-0 rounded-3xl border border-white/10 bg-white/5 backdrop-blur">
              <Spline
                scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode"
                style={{ width: '100%', height: '100%' }}
              />
              <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-white/10" aria-hidden />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
