"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence, PanInfo } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { useTranslation } from "@/i18n";

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isHovered, setIsHovered] = useState(false);
  const { t } = useTranslation();

  const reviews = [
    { name: t("testimonials.r1.name"), rating: 5, text: t("testimonials.r1.text") },
    { name: t("testimonials.r2.name"), rating: 5, text: t("testimonials.r2.text") },
    { name: t("testimonials.r3.name"), rating: 5, text: t("testimonials.r3.text") },
    { name: t("testimonials.r4.name"), rating: 5, text: t("testimonials.r4.text") },
    { name: t("testimonials.r5.name"), rating: 5, text: t("testimonials.r5.text") },
    { name: t("testimonials.r6.name"), rating: 5, text: t("testimonials.r6.text") },
  ];

  const len = reviews.length;

  const go = useCallback(
    (dir: number) => {
      setDirection(dir);
      setActive((prev) => ((prev + dir) % len + len) % len);
    },
    [len]
  );

  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => go(1), 5000);
    return () => clearInterval(timer);
  }, [isHovered, go]);

  const handleDragEnd = (_: unknown, info: PanInfo) => {
    if (info.offset.x < -40) go(1);
    else if (info.offset.x > 40) go(-1);
  };

  const review = reviews[active];

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? 200 : -200, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -200 : 200, opacity: 0 }),
  };

  return (
    <section id="testimonials" className="py-20 md:py-28 bg-brand-800 overflow-hidden">
      <div className="container mx-auto px-4 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-brand-accent font-medium text-sm uppercase tracking-widest mb-3">{t("testimonials.label")}</p>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">{t("testimonials.title")}</h2>
          <p className="text-brand-silver max-w-2xl mx-auto text-lg">
            {t("testimonials.subtitle")}
          </p>
        </motion.div>

        <div
          className="relative max-w-[600px] mx-auto"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="relative min-h-[300px] md:min-h-[280px] flex items-center justify-center">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={active}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.25, ease: "easeOut" }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.1}
                onDragEnd={handleDragEnd}
                className="absolute w-full glass rounded-2xl p-8 md:p-10 cursor-grab active:cursor-grabbing glow"
              >
                <Quote size={40} className="text-brand-accent/20 mb-4" />

                <div className="flex text-brand-gold mb-5 gap-0.5">
                  {[...Array(5)].map((_, j) => (
                    <Star
                      key={j}
                      size={18}
                      fill={j < review.rating ? "currentColor" : "none"}
                      className={j < review.rating ? "" : "text-white/20"}
                    />
                  ))}
                </div>

                <p className="text-brand-silver text-base md:text-lg leading-relaxed mb-6">
                  &ldquo;{review.text}&rdquo;
                </p>

                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-brand-accent/20 border border-brand-accent/30 flex items-center justify-center text-brand-accent font-bold text-sm shadow-[0_0_15px_rgba(56,189,248,0.2)]">
                    {review.name.charAt(0)}
                  </div>
                  <p className="text-white font-semibold">{review.name}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation arrows */}
          <div className="flex items-center justify-center gap-4 mt-12">
            <button
              onClick={() => go(-1)}
              className="w-10 h-10 rounded-full glass flex items-center justify-center text-brand-silver hover:text-brand-accent transition-colors"
            >
              <ChevronLeft size={20} />
            </button>
            <div className="flex gap-2">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setDirection(i > active ? 1 : -1); setActive(i); }}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    i === active ? "bg-brand-accent w-6" : "bg-white/20 hover:bg-white/40"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={() => go(1)}
              className="w-10 h-10 rounded-full glass flex items-center justify-center text-brand-silver hover:text-brand-accent transition-colors"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
