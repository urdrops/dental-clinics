"use client";

import { useState, useEffect, useCallback } from "react";
import { Menu, X, Phone, Instagram, Youtube } from "lucide-react";
import { cn } from "@/utils/cn";
import Image from "next/image";

const links = [
  { name: "Главная", href: "#home" },
  { name: "Услуги", href: "#services" },
  { name: "Врачи", href: "#doctors" },
  { name: "Галерея", href: "#gallery" },
  { name: "Отзывы", href: "#testimonials" },
  { name: "Контакты", href: "#booking" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");

  const updateActive = useCallback(() => {
    const sections = links.map(l => l.href.slice(1));
    let current = "#home";
    for (const id of sections) {
      const el = document.getElementById(id);
      if (el) {
        const rect = el.getBoundingClientRect();
        if (rect.top <= 150) {
          current = `#${id}`;
        }
      }
    }
    setActiveSection(current);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      updateActive();
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [updateActive]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 border border-transparent transition-[background-color,backdrop-filter,padding,box-shadow] duration-300",
          scrolled
            ? "bg-brand-800/80 backdrop-blur-xl py-2 shadow-lg shadow-brand-900/50 border-white/[0.05]"
            : "bg-transparent py-3"
        )}
      >
        <div className="container mx-auto px-4 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="shrink-0">
            <Image
              src="/logo.svg"
              alt="Restom Dental Clinic"
              width={120}
              height={48}
              className="h-10 md:h-12 w-auto"
              priority
            />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors",
                  activeSection === link.href
                    ? "text-brand-accent"
                    : "text-brand-silver hover:text-brand-accent"
                )}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Right */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+998555199119"
              className="flex items-center gap-2 text-sm text-brand-silver hover:text-brand-accent transition-colors"
            >
              <Phone size={16} />
              +998 55 519 9119
            </a>
            <a
              href="#booking"
              className="btn-shimmer px-5 py-2.5 rounded-full bg-brand-accent text-brand-900 font-semibold text-sm hover:bg-white hover:scale-[1.05] active:scale-[0.95] transition-all duration-300"
            >
              Записаться
            </a>
          </div>

          {/* Mobile Right */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href="tel:+998555199119"
              className="w-10 h-10 rounded-full bg-brand-accent/10 flex items-center justify-center text-brand-accent"
            >
              <Phone size={18} />
            </a>
            <button
              className="text-white p-2 relative z-[70]"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Full-Screen Menu — rendered outside header to avoid clipping */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-brand-900/90 backdrop-blur-2xl z-[60] lg:hidden flex flex-col"
        >
          {/* Mobile menu header */}
          <div className="flex items-center justify-between px-4 py-3">
            <a href="#home" onClick={() => setIsOpen(false)} className="shrink-0">
              <Image
                src="/logo.svg"
                alt="Restom Dental Clinic"
                width={120}
                height={48}
                className="h-10 w-auto"
              />
            </a>
            <button
              className="text-white p-2"
              onClick={() => setIsOpen(false)}
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>

          {/* Mobile menu links */}
          <nav className="flex flex-col items-center justify-center flex-1 gap-6">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "text-2xl font-semibold transition-colors",
                  activeSection === link.href
                    ? "text-brand-accent"
                    : "text-white hover:text-brand-accent"
                )}
              >
                {link.name}
              </a>
            ))}

            {/* Phone number in menu */}
            <a
              href="tel:+998555199119"
              className="flex items-center gap-2 text-brand-silver text-lg"
            >
              <Phone size={18} />
              +998 55 519 9119
            </a>

            <a
              href="#booking"
              onClick={() => setIsOpen(false)}
              className="mt-2 px-8 py-4 rounded-full bg-brand-accent text-brand-900 font-bold text-lg hover:bg-white transition-colors"
            >
              Записаться на прием
            </a>
          </nav>

          {/* Social links at bottom */}
          <div className="flex items-center justify-center gap-6 pb-8">
            <a href="https://www.instagram.com/restom.dental.clinic" target="_blank" rel="noopener noreferrer" className="text-brand-silver hover:text-brand-accent transition-colors">
              <Instagram size={24} />
            </a>
            <a href="https://www.youtube.com/@dr.farkhod_usmanov" target="_blank" rel="noopener noreferrer" className="text-brand-silver hover:text-brand-accent transition-colors">
              <Youtube size={24} />
            </a>
            <a href="tel:+998555199119" className="text-brand-silver hover:text-brand-accent transition-colors">
              <Phone size={24} />
            </a>
          </div>
        </div>
      )}
    </>
  );
}
