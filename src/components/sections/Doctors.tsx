"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence, PanInfo } from "framer-motion";
import { Instagram, ChevronLeft, ChevronRight, Clock } from "lucide-react";
import Image from "next/image";
import { useTranslation } from "@/i18n";

function getIndex(i: number, len: number) {
  return ((i % len) + len) % len;
}

export default function Doctors() {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(0);
  const autoRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const { t } = useTranslation();

  const doctors = [
    {
      name: t("doctors.dr1.name"),
      title: t("doctors.dr1.title"),
      role: t("doctors.dr1.role"),
      services: t("doctors.dr1.services").split(", "),
      schedule: t("doctors.dr1.schedule"),
      instagram: "https://www.instagram.com/dr.farkhod_usmanov",
      photo: "/doctors/dr1.png",
    },
    {
      name: t("doctors.dr2.name"),
      title: t("doctors.dr2.title"),
      services: t("doctors.dr2.services").split(", "),
      schedule: t("doctors.dr2.schedule"),
      photo: "/doctors/dr2.png",
    },
    {
      name: t("doctors.dr3.name"),
      title: t("doctors.dr3.title"),
      services: t("doctors.dr3.services").split(", "),
      schedule: t("doctors.dr3.schedule"),
      photo: "/doctors/dr3.png",
    },
    {
      name: t("doctors.dr4.name"),
      title: t("doctors.dr4.title"),
      services: t("doctors.dr4.services").split(", "),
      schedule: t("doctors.dr4.schedule"),
      photo: "/doctors/dr4.png",
    },
    {
      name: t("doctors.dr5.name"),
      title: t("doctors.dr5.title"),
      services: t("doctors.dr5.services").split(", "),
      schedule: t("doctors.dr5.schedule"),
      photo: "/doctors/dr5.png",
    },
    {
      name: t("doctors.dr6.name"),
      title: t("doctors.dr6.title"),
      services: t("doctors.dr6.services").split(", "),
      schedule: t("doctors.dr6.schedule"),
      photo: "/doctors/dr6.png",
    },
  ];

  const len = doctors.length;

  const go = useCallback((dir: number) => {
    setDirection(dir);
    setActive(prev => getIndex(prev + dir, len));
  }, [len]);

  const startAuto = useCallback(() => {
    if (autoRef.current) clearInterval(autoRef.current);
    autoRef.current = setInterval(() => go(1), 4000);
  }, [go]);

  useEffect(() => {
    startAuto();
    return () => { if (autoRef.current) clearInterval(autoRef.current); };
  }, [startAuto]);

  const handleDragEnd = (_: unknown, info: PanInfo) => {
    const threshold = 50;
    if (info.offset.x < -threshold) {
      go(1);
    } else if (info.offset.x > threshold) {
      go(-1);
    }
    startAuto();
  };

  const prev = getIndex(active - 1, len);
  const next = getIndex(active + 1, len);

  const variants = {
    enter: (d: number) => ({ x: d > 0 ? 300 : -300, opacity: 0, scale: 0.8 }),
    center: { x: 0, opacity: 1, scale: 1 },
    exit: (d: number) => ({ x: d > 0 ? -300 : 300, opacity: 0, scale: 0.8 }),
  };

  return (
    <section id="doctors" className="py-20 md:py-28 bg-brand-900 overflow-hidden">
      <div className="container mx-auto px-4 md:px-12">
        <div className="text-center mb-14">
          <p className="text-brand-accent font-medium text-sm uppercase tracking-widest mb-3">{t("doctors.label")}</p>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">{t("doctors.title")}</h2>
          <p className="text-brand-silver max-w-2xl mx-auto text-lg">
            {t("doctors.subtitle")}
          </p>
        </div>

        {/* Team photo */}
        <div className="relative rounded-3xl overflow-hidden mb-14">
          <Image
            src="/doctors/1.webp"
            alt={t("doctors.teamAlt")}
            width={1200}
            height={600}
            className="w-full h-auto object-cover rounded-3xl"
          />
          <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-brand-900 to-transparent rounded-b-3xl" />
        </div>

        {/* Carousel */}
        <div className="relative flex items-center justify-center h-[520px] sm:h-[560px] md:h-[600px]">
          {[prev, next].map((idx, j) => (
            <div
              key={`side-${idx}-${j}`}
              onClick={() => { go(j === 0 ? -1 : 1); startAuto(); }}
              className={`absolute top-1/2 -translate-y-1/2 w-[200px] sm:w-[240px] md:w-[280px] aspect-[2/3] rounded-3xl overflow-hidden cursor-pointer transition-all duration-500 ${
                j === 0 ? "left-0 sm:left-[5%] md:left-[10%] lg:left-[15%]" : "right-0 sm:right-[5%] md:right-[10%] lg:right-[15%]"
              }`}
              style={{ filter: "blur(2px)", opacity: 0.4 }}
            >
              <Image
                src={doctors[idx].photo}
                alt={doctors[idx].name}
                fill
                className="object-cover"
              />
            </div>
          ))}

          <AnimatePresence initial={false} custom={direction} mode="popLayout">
            <motion.div
              key={active}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={handleDragEnd}
              className="relative w-[280px] sm:w-[300px] md:w-[340px] aspect-[2/3] rounded-3xl overflow-hidden z-10 cursor-grab active:cursor-grabbing shadow-2xl shadow-black/40"
            >
              <Image
                src={doctors[active].photo}
                alt={doctors[active].name}
                fill
                className="object-cover pointer-events-none"
              />
            </motion.div>
          </AnimatePresence>

          <button
            onClick={() => { go(-1); startAuto(); }}
            className="hidden md:flex absolute left-2 lg:left-[10%] top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm items-center justify-center text-white/70 hover:text-white hover:bg-white/20 transition-all z-20"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={() => { go(1); startAuto(); }}
            className="hidden md:flex absolute right-2 lg:right-[10%] top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm items-center justify-center text-white/70 hover:text-white hover:bg-white/20 transition-all z-20"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Floating info panel */}
        <div className="relative z-20 -mt-20 sm:-mt-24 max-w-sm sm:max-w-md mx-auto px-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="glass rounded-2xl p-5 sm:p-6 shadow-xl shadow-black/30"
            >
              <div className="flex items-start justify-between gap-3 mb-1">
                <div className="min-w-0">
                  <h3 className="text-2xl font-bold text-white leading-tight">{doctors[active].name}</h3>
                  <p className="text-brand-accent text-sm font-semibold mt-0.5">{doctors[active].title}</p>
                </div>
                <div className="flex items-center gap-2 shrink-0 mt-1">
                  {doctors[active].role && (
                    <span className="text-[9px] font-bold uppercase tracking-wider text-brand-accent border border-brand-accent/30 rounded-full px-2.5 py-0.5">
                      {doctors[active].role}
                    </span>
                  )}
                  {doctors[active].instagram && (
                    <a
                      href={doctors[active].instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-brand-accent hover:text-white transition-colors"
                    >
                      <Instagram size={18} />
                    </a>
                  )}
                </div>
              </div>

              <div className="h-px bg-white/10 my-3" />

              <div className="flex flex-wrap gap-1.5 mb-3">
                {doctors[active].services.map((s, i) => (
                  <span key={i} className="text-xs text-white/80 bg-white/5 border border-white/10 rounded-lg px-2.5 py-1">
                    {s}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-2 text-white/50 text-xs">
                <Clock size={13} className="text-brand-accent shrink-0" />
                <span>{doctors[active].schedule}</span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
