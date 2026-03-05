"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, PanInfo } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { useTranslation } from "@/i18n";

function getCardStyle(index: number, active: number, total: number) {
  let diff = index - active;
  if (diff > total / 2) diff -= total;
  if (diff < -total / 2) diff += total;

  const absDiff = Math.abs(diff);

  if (absDiff === 0) {
    return { zIndex: total, x: 0, y: 0, rotate: 0, scale: 1, opacity: 1 };
  }

  const direction = diff > 0 ? 1 : -1;
  return {
    zIndex: total - absDiff,
    x: direction * absDiff * 25,
    y: absDiff * 12,
    rotate: direction * absDiff * 3,
    scale: 1 - absDiff * 0.06,
    opacity: Math.max(0, 1 - absDiff * 0.25),
  };
}

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const { t } = useTranslation();

  const reviews = [
    { name: t("testimonials.r1.name"), rating: 5, text: t("testimonials.r1.text") },
    { name: t("testimonials.r2.name"), rating: 5, text: t("testimonials.r2.text") },
    { name: t("testimonials.r3.name"), rating: 5, text: t("testimonials.r3.text") },
    { name: t("testimonials.r4.name"), rating: 5, text: t("testimonials.r4.text") },
    { name: t("testimonials.r5.name"), rating: 4, text: t("testimonials.r5.text") },
    { name: t("testimonials.r6.name"), rating: 5, text: t("testimonials.r6.text") },
  ];

  const len = reviews.length;

  const go = useCallback(
    (dir: number) => {
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
    if (info.offset.x < -50) go(1);
    else if (info.offset.x > 50) go(-1);
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
          <div className="relative min-h-[320px] md:min-h-[300px] flex items-center justify-center">
            {reviews.map((review, i) => {
              const style = getCardStyle(i, active, len);
              const isActive = i === active;

              return (
                <motion.div
                  key={i}
                  animate={{
                    x: style.x,
                    y: style.y,
                    rotate: style.rotate,
                    scale: style.scale,
                    opacity: style.opacity,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                  style={{ zIndex: style.zIndex, position: "absolute", width: "100%" }}
                  drag={isActive ? "x" : false}
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.15}
                  onDragEnd={isActive ? handleDragEnd : undefined}
                  className={`glass rounded-2xl p-8 md:p-10 ${
                    isActive
                      ? "cursor-grab active:cursor-grabbing glow"
                      : "pointer-events-none"
                  }`}
                >
                  <Quote size={40} className="text-brand-accent/20 mb-4" />

                  <div className="flex text-brand-gold mb-5 gap-0.5">
                    {[...Array(5)].map((_, j) => (
                      <motion.div
                        key={j}
                        initial={false}
                        animate={isActive ? { scale: [0.5, 1.2, 1], opacity: 1 } : { scale: 1, opacity: 1 }}
                        transition={{ delay: j * 0.05, duration: 0.3 }}
                      >
                        <Star
                          size={18}
                          fill={j < review.rating ? "currentColor" : "none"}
                          className={j < review.rating ? "" : "text-white/20"}
                        />
                      </motion.div>
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
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
