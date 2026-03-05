"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Users, Award, Clock, ChevronDown } from "lucide-react";
import BackgroundPaths from "../BackgroundPaths";
import { useTranslation } from "@/i18n";

function HeroReveal({ children, delay = 0, className = "", blur = false }: { children: React.ReactNode; delay?: number; className?: string; blur?: boolean }) {
  return (
    <motion.div
      initial={false}
      whileInView={blur
        ? { filter: "blur(0px)", opacity: 1, scale: 1 }
        : { opacity: 1, y: 0 }
      }
      viewport={{ once: true }}
      transition={{ duration: blur ? 0.8 : 0.6, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function Hero() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<{ name?: string; phone?: string }>({});
  const { t } = useTranslation();

  const trustBadges = [
    { icon: <Users size={20} />, text: t("hero.trust.patients") },
    { icon: <Award size={20} />, text: t("hero.trust.experience") },
    { icon: <Clock size={20} />, text: t("hero.trust.noQueues") },
  ];

  const validate = () => {
    const e: { name?: string; phone?: string } = {};
    if (!name.trim()) e.name = t("hero.form.errorName");
    if (!phone.trim()) e.phone = t("hero.form.errorPhone");
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    console.log("Lead capture:", { name, phone });
    setSubmitted(true);
    setErrors({});
    setTimeout(() => {
      setSubmitted(false);
      setName("");
      setPhone("");
    }, 3000);
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-brand-900">
      {/* Animated Background Paths */}
      <div className="absolute inset-x-0 top-0 h-[60vh] lg:h-full z-0 overflow-hidden">
        <BackgroundPaths />
      </div>

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-900/40 via-transparent to-brand-900 z-[1]" />

      <div className="container relative z-10 mx-auto px-4 md:px-12 pt-20 pb-20 lg:pt-24 lg:pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left: Text */}
          <div>
            <HeroReveal delay={0.1} className="text-brand-accent font-medium text-sm uppercase tracking-widest mb-4">
              {t("hero.badge")}
            </HeroReveal>

            <HeroReveal blur delay={0.2}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.1] mb-6">
                {t("hero.headline1")}{" "}
                <span className="gradient-text">
                  {t("hero.headline2")}
                </span>
              </h1>
            </HeroReveal>

            <HeroReveal delay={0.3} className="text-lg text-brand-silver mb-8 max-w-lg leading-relaxed text-balance">
              {t("hero.subtitle")}
            </HeroReveal>

            {/* Trust Badges */}
            <HeroReveal delay={0.4} className="flex flex-wrap gap-4 mb-8">
              {trustBadges.map((badge, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-brand-silver"
                >
                  <span className="text-brand-accent">{badge.icon}</span>
                  {badge.text}
                </div>
              ))}
            </HeroReveal>

            {/* CTA buttons */}
            <HeroReveal delay={0.5} className="flex flex-col sm:flex-row gap-3 lg:gap-4 mb-8 lg:mb-0">
              <a
                href="#booking"
                className="btn-shimmer group flex items-center justify-center gap-3 bg-brand-accent hover:bg-white hover:scale-[1.03] active:scale-[0.97] text-brand-900 font-bold px-8 py-4 rounded-full transition-all duration-300 shadow-lg shadow-brand-accent/25 hover:shadow-brand-accent/40"
              >
                {t("hero.cta.booking")}
                <ArrowRight size={20} className="group-hover:translate-x-1.5 transition-transform duration-300" />
              </a>
              <a
                href="#services"
                className="btn-border-glow flex items-center justify-center px-8 py-4 rounded-full border border-white/20 text-white font-semibold hover:bg-white/5 hover:scale-[1.03] active:scale-[0.97] transition-all duration-300"
              >
                {t("hero.cta.services")}
              </a>
            </HeroReveal>
          </div>

          {/* Right: Mini Lead Form */}
          <HeroReveal delay={0.4}>
            <div className="glass-strong rounded-3xl p-6 sm:p-8 glow max-w-md mx-auto lg:ml-auto">
              <h3 className="text-xl font-bold text-white mb-2">{t("hero.form.title")}</h3>
              <p className="text-brand-silver text-sm mb-6">
                {t("hero.form.subtitle")}
              </p>

              {submitted ? (
                <div className="text-center py-8">
                  <div className="text-4xl mb-3">&#10003;</div>
                  <p className="text-white font-semibold">{t("hero.form.success")}</p>
                  <p className="text-brand-silver text-sm">{t("hero.form.successSub")}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
                  <div>
                    <input
                      type="text"
                      placeholder={t("hero.form.namePlaceholder")}
                      value={name}
                      onChange={(e) => { setName(e.target.value); if (errors.name) setErrors(prev => ({ ...prev, name: undefined })); }}
                      className={`w-full bg-brand-900/50 border rounded-xl px-5 py-3.5 text-white placeholder-brand-silver/50 focus:outline-none transition-all ${errors.name ? "border-red-500/70 focus:border-red-500" : "border-white/10 focus:border-brand-accent"}`}
                    />
                    {errors.name && <p className="text-red-400 text-xs mt-1.5 ml-1">{errors.name}</p>}
                  </div>
                  <div>
                    <input
                      type="tel"
                      placeholder={t("hero.form.phonePlaceholder")}
                      value={phone}
                      onChange={(e) => { setPhone(e.target.value); if (errors.phone) setErrors(prev => ({ ...prev, phone: undefined })); }}
                      className={`w-full bg-brand-900/50 border rounded-xl px-5 py-3.5 text-white placeholder-brand-silver/50 focus:outline-none transition-all ${errors.phone ? "border-red-500/70 focus:border-red-500" : "border-white/10 focus:border-brand-accent"}`}
                    />
                    {errors.phone && <p className="text-red-400 text-xs mt-1.5 ml-1">{errors.phone}</p>}
                  </div>
                  <button
                    type="submit"
                    className="btn-shimmer bg-brand-accent hover:bg-white hover:scale-[1.02] active:scale-[0.97] text-brand-900 font-bold py-3.5 rounded-xl transition-all duration-300 shadow-lg shadow-brand-accent/20"
                  >
                    {t("hero.form.submit")}
                  </button>
                  <p className="text-xs text-brand-silver/50 text-center">
                    {t("hero.form.consent")}
                  </p>
                </form>
              )}
            </div>
          </HeroReveal>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="hidden lg:block absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown size={28} className="text-brand-accent/60" />
        </motion.div>
      </div>
    </section>
  );
}
