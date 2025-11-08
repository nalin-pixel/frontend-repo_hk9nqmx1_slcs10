import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative bg-gradient-to-t from-slate-950 via-slate-900 to-slate-950 py-20 text-white">
      <div className="absolute inset-0 opacity-30 pointer-events-none" aria-hidden>
        <div className="absolute bottom-10 right-10 h-80 w-80 rounded-full bg-cyan-500 blur-3xl" />
        <div className="absolute top-10 left-10 h-80 w-80 rounded-full bg-fuchsia-500 blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold sm:text-4xl">Связаться с нами</h2>
            <p className="mt-3 max-w-prose text-white/70">Мы всегда на связи и готовы ответить на ваши вопросы о ставках, сроках и условиях. Напишите или позвоните — поможем подобрать подходящий вариант.</p>

            <div className="mt-8 space-y-4 text-white/90">
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-cyan-300" />
                <a href="tel:+78001234567" className="hover:underline">8 (800) 123-45-67</a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-fuchsia-300" />
                <a href="mailto:info@microcredit.example" className="hover:underline">info@microcredit.example</a>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-emerald-300" />
                <span>г. Москва, ул. Финтех, 10</span>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
              <div>
                <label className="mb-1 block text-sm text-white/80">Ваше имя</label>
                <input type="text" required className="w-full rounded-xl border border-white/10 bg-slate-900/60 px-4 py-3 text-white placeholder-white/40 outline-none ring-cyan-300/0 transition focus:ring-2" placeholder="Иван Иванов" />
              </div>
              <div>
                <label className="mb-1 block text-sm text-white/80">Телефон</label>
                <input type="tel" required className="w-full rounded-xl border border-white/10 bg-slate-900/60 px-4 py-3 text-white placeholder-white/40 outline-none ring-cyan-300/0 transition focus:ring-2" placeholder="+7 (___) ___-__-__" />
              </div>
              <div>
                <label className="mb-1 block text-sm text-white/80">Сообщение</label>
                <textarea rows="4" className="w-full resize-none rounded-xl border border-white/10 bg-slate-900/60 px-4 py-3 text-white placeholder-white/40 outline-none ring-cyan-300/0 transition focus:ring-2" placeholder="Кратко опишите вопрос"></textarea>
              </div>
              <button type="submit" className="w-full rounded-xl bg-cyan-400 px-5 py-3 font-medium text-slate-950 transition hover:bg-cyan-300">Отправить</button>
              <p className="text-xs text-white/60">Нажимая «Отправить», вы соглашаетесь с обработкой персональных данных и условиями оферты.</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
