"use client";

import { Phone, MapPin, Instagram, Youtube, Clock, Send } from "lucide-react";
import Image from "next/image";

const navLinks = [
  { name: "Главная", href: "#home" },
  { name: "Услуги", href: "#services" },
  { name: "Врачи", href: "#doctors" },
  { name: "Галерея", href: "#gallery" },
  { name: "Отзывы", href: "#testimonials" },
  { name: "Запись", href: "#booking" },
];

const socials = [
  {
    label: "Клиника",
    href: "https://www.instagram.com/restom.dental.clinic",
    icon: <Instagram size={18} />,
  },
  {
    label: "Доктор",
    href: "https://www.instagram.com/dr.farkhod_usmanov",
    icon: <Instagram size={18} />,
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@dr.farkhod_usmanov",
    icon: <Youtube size={18} />,
  },
  {
    label: "Telegram",
    href: "https://t.me/restom_clinic",
    icon: <Send size={18} />,
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#050B14] border-t border-white/5">
      {/* Main grid */}
      <div className="container mx-auto px-4 md:px-12 pt-14 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <a href="#home" className="inline-block mb-4">
              <Image
                src="/logo.svg"
                alt="Restom Dental Clinic"
                width={140}
                height={56}
                className="h-11 w-auto"
              />
            </a>
            <p className="text-brand-silver/80 text-sm leading-relaxed mb-5 max-w-xs">
              Премиальная стоматология для тех, кто ценит комфорт, эстетику и безупречное качество.
            </p>
            {/* Social icons */}
            <div className="flex gap-2.5">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-full bg-white/[0.06] flex items-center justify-center text-brand-silver hover:text-brand-accent hover:bg-brand-accent/10 transition-colors"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-5">
              Навигация
            </h4>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2.5 sm:grid-cols-1">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-brand-silver/80 hover:text-brand-accent transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-5">
              Контакты
            </h4>
            <ul className="space-y-3.5">
              <li>
                <a
                  href="tel:+998555199119"
                  className="flex items-center gap-3 text-brand-silver/80 hover:text-brand-accent transition-colors text-sm"
                >
                  <Phone size={16} className="shrink-0 text-brand-accent" />
                  +998 55 519 9119
                </a>
              </li>
              <li>
                <a
                  href="https://t.me/restom_clinic"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-brand-silver/80 hover:text-brand-accent transition-colors text-sm"
                >
                  <Send size={16} className="shrink-0 text-brand-accent" />
                  @restom_clinic
                </a>
              </li>
              <li>
                <a
                  href="https://yandex.uz/maps/?pt=69.255743,41.282284&z=17&l=map"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-brand-silver/80 hover:text-brand-accent transition-colors text-sm"
                >
                  <MapPin size={16} className="shrink-0 text-brand-accent mt-0.5" />
                  <span>г. Ташкент, ул. Бобура, 61</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Working Hours */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-5">
              Режим работы
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-brand-silver/80 text-sm">
                <Clock size={16} className="shrink-0 text-brand-accent" />
                <div className="flex justify-between w-full">
                  <span>Пн — Пт</span>
                  <span className="text-white/80 font-medium">09:00 — 21:00</span>
                </div>
              </li>
              <li className="flex items-center gap-3 text-brand-silver/80 text-sm">
                <Clock size={16} className="shrink-0 text-brand-accent" />
                <div className="flex justify-between w-full">
                  <span>Сб — Вс</span>
                  <span className="text-white/80 font-medium">10:00 — 18:00</span>
                </div>
              </li>
            </ul>

            {/* CTA */}
            <a
              href="#booking"
              className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-brand-accent/10 text-brand-accent font-semibold text-sm hover:bg-brand-accent/20 transition-colors"
            >
              Записаться на приём
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/[0.06]">
        <div className="container mx-auto px-4 md:px-12 py-5 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-brand-silver/40 text-xs text-center sm:text-left">
            &copy; {year} Restom Dental Clinic. Все права защищены.
          </p>
          <div className="flex gap-4">
            <a
              href="/privacy"
              className="text-brand-silver/40 hover:text-brand-accent transition-colors text-xs"
            >
              Политика конфиденциальности
            </a>
            <a
              href="/offer"
              className="text-brand-silver/40 hover:text-brand-accent transition-colors text-xs"
            >
              Договор оферты
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
