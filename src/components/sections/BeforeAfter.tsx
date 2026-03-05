"use client";

import { useState, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "@/i18n";

interface SliderCase {
  title: string;
  description: string;
  beforeColor: string;
  afterColor: string;
  beforeLabel: string;
  afterLabel: string;
}

function Slider({ cas }: { cas: SliderCase }) {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setPosition((x / rect.width) * 100);
  }, []);

  const handleMouseDown = () => { dragging.current = true; };
  const handleMouseUp = () => { dragging.current = false; };
  const handleMouseMove = (e: React.MouseEvent) => {
    if (dragging.current) updatePosition(e.clientX);
  };
  const handleTouchMove = (e: React.TouchEvent) => {
    updatePosition(e.touches[0].clientX);
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden cursor-col-resize select-none"
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
      onTouchStart={(e) => updatePosition(e.touches[0].clientX)}
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${cas.afterColor} bg-brand-800`}>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-white/20 text-6xl font-bold">{cas.afterLabel}</span>
        </div>
      </div>

      <div
        className={`absolute inset-0 bg-gradient-to-br ${cas.beforeColor} bg-brand-900`}
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-white/20 text-6xl font-bold">{cas.beforeLabel}</span>
        </div>
      </div>

      <div
        className="absolute top-0 bottom-0 w-0.5 bg-white z-10"
        style={{ left: `${position}%` }}
      >
        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M5 3L2 8L5 13" stroke="#0B192C" strokeWidth="2" strokeLinecap="round" />
            <path d="M11 3L14 8L11 13" stroke="#0B192C" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default function BeforeAfter() {
  const { t } = useTranslation();

  const cases: SliderCase[] = [
    {
      title: t("beforeAfter.case1.title"),
      description: t("beforeAfter.case1.desc"),
      beforeColor: "from-amber-900/60 to-yellow-800/40",
      afterColor: "from-brand-accent/40 to-cyan-400/30",
      beforeLabel: t("beforeAfter.before"),
      afterLabel: t("beforeAfter.after"),
    },
    {
      title: t("beforeAfter.case2.title"),
      description: t("beforeAfter.case2.desc"),
      beforeColor: "from-orange-900/50 to-amber-800/40",
      afterColor: "from-sky-400/40 to-blue-300/30",
      beforeLabel: t("beforeAfter.before"),
      afterLabel: t("beforeAfter.after"),
    },
    {
      title: t("beforeAfter.case3.title"),
      description: t("beforeAfter.case3.desc"),
      beforeColor: "from-red-900/40 to-rose-800/30",
      afterColor: "from-emerald-400/30 to-teal-400/20",
      beforeLabel: t("beforeAfter.before"),
      afterLabel: t("beforeAfter.after"),
    },
  ];

  return (
    <section id="gallery" className="py-20 md:py-28 bg-brand-800">
      <div className="container mx-auto px-4 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-brand-accent font-medium text-sm uppercase tracking-widest mb-3">{t("beforeAfter.label")}</p>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">{t("beforeAfter.title")}</h2>
          <p className="text-brand-silver max-w-2xl mx-auto text-lg">
            {t("beforeAfter.subtitle")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cases.map((cas, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Slider cas={cas} />
              <div className="mt-3">
                <h4 className="text-white font-semibold">{cas.title}</h4>
                <p className="text-brand-silver text-sm">{cas.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
