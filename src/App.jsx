import React from 'react';
import Hero from './components/Hero';
import Rates from './components/Rates';
import HowItWorks from './components/HowItWorks';
import Contact from './components/Contact';

function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 text-white">
        <a href="#" className="flex items-center gap-2">
          <div className="h-7 w-7 rounded-lg bg-gradient-to-br from-cyan-400 to-fuchsia-400" />
          <span className="text-sm font-semibold tracking-wide">FinGlass</span>
        </a>
        <nav className="hidden items-center gap-6 text-sm text-white/80 md:flex">
          <a href="#rates" className="hover:text-white">Тарифы</a>
          <a href="#hiw" className="hover:text-white">Как это работает</a>
          <a href="#contact" className="hover:text-white">Контакты</a>
          <a href="#rates" className="rounded-xl bg-white/10 px-4 py-2 font-medium text-white hover:bg-white/15">Оформить</a>
        </nav>
      </div>
    </header>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />
      <Hero />
      <div id="hiw">
        <HowItWorks />
      </div>
      <Rates />
      <Contact />
      <footer className="border-t border-white/10 bg-slate-950 py-8 text-center text-xs text-white/50">
        © {new Date().getFullYear()} FinGlass. Все права защищены. Займы предоставляются в соответствии с ФЗ и внутренними регламентами. 18+.
      </footer>
    </div>
  );
}
