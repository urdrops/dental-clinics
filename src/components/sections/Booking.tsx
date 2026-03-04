"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  Shield,
  Sparkles,
  Smile,
  Sun,
  CalendarDays,
  User,
  Phone,
  MessageSquare,
} from "lucide-react";

const serviceOptions = [
  { id: "implantation", label: "Имплантация", desc: "Восстановление зубного ряда", icon: <Shield size={32} /> },
  { id: "veneers", label: "Виниры", desc: "Идеальная улыбка за визит", icon: <Sparkles size={32} /> },
  { id: "caries", label: "Лечение кариеса", desc: "Безболезненно и быстро", icon: <Smile size={32} /> },
  { id: "whitening", label: "Отбеливание", desc: "Сияющая белизна зубов", icon: <Sun size={32} /> },
];

const timeSlots = [
  "09:00", "10:00", "11:00", "12:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00",
];

const stepIcons = [Sparkles, CalendarDays, User];

const particleColors = ["#38BDF8", "#FFD700", "#C0C0C0", "#38BDF8", "#FFD700"];

export default function Booking() {
  const [step, setStep] = useState(1);
  const [direction, setDirection] = useState(1); // 1 = forward, -1 = backward
  const [formData, setFormData] = useState({
    service: "",
    date: "",
    time: "",
    name: "",
    phone: "",
    message: "",
  });

  const goTo = (target: number) => {
    setDirection(target > step ? 1 : -1);
    setStep(target);
  };

  const handleSubmit = () => {
    console.log("Booking submitted:", formData);
    setDirection(1);
    setStep(4);
  };

  const canProceed = () => {
    if (step === 1) return formData.service !== "";
    if (step === 2) return formData.date !== "" && formData.time !== "";
    if (step === 3) return formData.name !== "" && formData.phone !== "";
    return true;
  };

  const dates = useMemo(
    () =>
      Array.from({ length: 14 }, (_, i) => {
        const d = new Date();
        d.setDate(d.getDate() + i + 1);
        return d;
      }),
    [],
  );

  const formatDate = (d: Date) => {
    const days = ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"];
    const months = ["янв", "фев", "мар", "апр", "мая", "июн", "июл", "авг", "сен", "окт", "ноя", "дек"];
    return { day: days[d.getDay()], date: d.getDate(), month: months[d.getMonth()], full: d.toISOString().split("T")[0] };
  };

  const selectedServiceLabel = serviceOptions.find((s) => s.id === formData.service)?.label ?? "";

  const slideVariants = {
    enter: (dir: number) => ({ opacity: 0, x: dir * 40 }),
    center: { opacity: 1, x: 0 },
    exit: (dir: number) => ({ opacity: 0, x: dir * -40 }),
  };

  return (
    <section id="booking" className="py-20 md:py-28 bg-brand-900 relative overflow-hidden">
      {/* Background orbs */}
      <motion.div
        animate={{ y: [0, -30, 0], x: [0, 15, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-accent/5 rounded-full blur-[120px] pointer-events-none"
      />
      <motion.div
        animate={{ y: [0, 20, 0], x: [0, -20, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[20%] right-[10%] w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none"
      />
      <motion.div
        animate={{ y: [0, -15, 0], x: [0, 10, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[15%] left-[5%] w-[300px] h-[300px] bg-brand-accent/4 rounded-full blur-[90px] pointer-events-none"
      />

      <div className="container mx-auto px-4 md:px-12 relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <p className="text-brand-accent font-medium text-sm uppercase tracking-widest mb-3">Запись</p>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Записаться на приём</h2>
        </motion.div>

        {/* Card with scroll entrance */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          {/* Progress bar */}
          {step < 4 && (
            <div className="flex items-center justify-center gap-0 mb-8">
              {[1, 2, 3].map((s, i) => {
                const Icon = stepIcons[i];
                const completed = s < step;
                const active = s === step;
                return (
                  <div key={s} className="flex items-center">
                    <motion.div
                      animate={active ? { scale: [1, 1.1, 1] } : { scale: 1 }}
                      transition={active ? { duration: 1.5, repeat: Infinity, ease: "easeInOut" } : {}}
                      className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                        completed
                          ? "bg-brand-accent text-brand-900"
                          : active
                            ? "bg-brand-accent text-brand-900 shadow-[0_0_20px_rgba(56,189,248,0.4)]"
                            : "bg-brand-800 text-brand-silver"
                      }`}
                    >
                      {completed ? <CheckCircle2 size={20} /> : <Icon size={18} />}
                    </motion.div>
                    {s < 3 && (
                      <div className="w-16 h-1 mx-1 bg-brand-800 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-brand-accent rounded-full"
                          initial={false}
                          animate={{ width: s < step ? "100%" : "0%" }}
                          transition={{ duration: 0.5, ease: "easeInOut" }}
                        />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}

          <div className="glass-strong rounded-3xl p-6 sm:p-8">
            <AnimatePresence mode="wait" custom={direction}>
              {/* Step 1: Service */}
              {step === 1 && (
                <motion.div
                  key="step1"
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-xl font-bold text-white mb-6">Выберите услугу</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {serviceOptions.map((opt, i) => (
                      <motion.button
                        key={opt.id}
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: i * 0.06 }}
                        whileHover={{ scale: 1.03, y: -2 }}
                        whileTap={{ scale: 0.97 }}
                        onClick={() => setFormData({ ...formData, service: opt.id })}
                        className={`p-6 rounded-2xl border text-left transition-all ${
                          formData.service === opt.id
                            ? "border-brand-accent bg-brand-accent/10 text-white glow"
                            : "border-white/10 bg-brand-900/30 text-brand-silver hover:border-white/20"
                        }`}
                      >
                        <div className={`mb-3 ${formData.service === opt.id ? "text-brand-accent" : ""}`}>
                          {opt.icon}
                        </div>
                        <span className="font-semibold text-sm block">{opt.label}</span>
                        <span className="text-xs text-brand-silver/70 mt-1 block">{opt.desc}</span>
                      </motion.button>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Step 2: Date & Time */}
              {step === 2 && (
                <motion.div
                  key="step2"
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-xl font-bold text-white mb-6">Выберите дату и время</h3>

                  <div className="flex gap-2 overflow-x-auto pb-3 mb-6 snap-x scrollbar-hide">
                    {dates.map((d, i) => {
                      const f = formatDate(d);
                      const selected = formData.date === f.full;
                      return (
                        <motion.button
                          key={f.full}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.25, delay: i * 0.03 }}
                          onClick={() => setFormData({ ...formData, date: f.full })}
                          className={`shrink-0 w-16 py-3 rounded-xl text-center border transition-all snap-center ${
                            selected
                              ? "border-brand-accent bg-brand-accent/15 text-white glow"
                              : "border-white/10 text-brand-silver hover:border-white/20"
                          }`}
                        >
                          <div className="text-xs opacity-60">{f.day}</div>
                          <div className="text-lg font-bold">{f.date}</div>
                          <div className="text-xs opacity-60">{f.month}</div>
                        </motion.button>
                      );
                    })}
                  </div>

                  <p className="text-sm text-brand-silver mb-3">Время</p>
                  <div className="grid grid-cols-5 gap-2">
                    {timeSlots.map((t, i) => {
                      const selected = formData.time === t;
                      return (
                        <motion.button
                          key={t}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.2, delay: i * 0.03 }}
                          onClick={() => setFormData({ ...formData, time: t })}
                          className={`relative py-2.5 rounded-xl text-sm font-medium border transition-all ${
                            selected
                              ? "border-brand-accent bg-brand-accent/15 text-white glow"
                              : "border-white/10 text-brand-silver hover:border-white/20"
                          }`}
                        >
                          {selected && (
                            <motion.div
                              layoutId="timeIndicator"
                              className="absolute -top-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-brand-accent"
                              transition={{ type: "spring", stiffness: 300, damping: 25 }}
                            />
                          )}
                          {t}
                        </motion.button>
                      );
                    })}
                  </div>
                </motion.div>
              )}

              {/* Step 3: Contact */}
              {step === 3 && (
                <motion.div
                  key="step3"
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-xl font-bold text-white mb-6">Контактные данные</h3>
                  <div className="flex flex-col gap-4">
                    {([
                      { icon: <User size={18} />, type: "text" as const, placeholder: "Ваше имя", field: "name" as const },
                      { icon: <Phone size={18} />, type: "tel" as const, placeholder: "+998 55 519 9119", field: "phone" as const },
                    ] as const).map((input, i) => (
                      <motion.div
                        key={input.field}
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: i * 0.08 }}
                        className="relative"
                      >
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-silver/50">{input.icon}</span>
                        <input
                          type={input.type}
                          placeholder={input.placeholder}
                          value={formData[input.field]}
                          onChange={(e) => setFormData({ ...formData, [input.field]: e.target.value })}
                          className="w-full bg-brand-900/50 border border-white/10 rounded-xl pl-11 pr-5 py-3.5 text-white placeholder-brand-silver/50 focus:outline-none focus:border-brand-accent focus:shadow-[0_0_15px_rgba(56,189,248,0.15)] transition-all"
                        />
                      </motion.div>
                    ))}
                    <motion.div
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.16 }}
                      className="relative"
                    >
                      <span className="absolute left-4 top-4 text-brand-silver/50"><MessageSquare size={18} /></span>
                      <textarea
                        placeholder="Комментарий (необязательно)"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        rows={3}
                        className="w-full bg-brand-900/50 border border-white/10 rounded-xl pl-11 pr-5 py-3.5 text-white placeholder-brand-silver/50 focus:outline-none focus:border-brand-accent focus:shadow-[0_0_15px_rgba(56,189,248,0.15)] transition-all resize-none"
                      />
                    </motion.div>
                  </div>
                </motion.div>
              )}

              {/* Step 4: Confirmation */}
              {step === 4 && (
                <motion.div
                  key="step4"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-10"
                >
                  {/* Particle burst */}
                  <div className="relative inline-block">
                    {Array.from({ length: 14 }).map((_, i) => {
                      const angle = (360 / 14) * i;
                      const rad = (angle * Math.PI) / 180;
                      const dist = 50 + Math.random() * 30;
                      return (
                        <motion.span
                          key={i}
                          initial={{ opacity: 1, x: 0, y: 0, scale: 1 }}
                          animate={{
                            opacity: 0,
                            x: Math.cos(rad) * dist,
                            y: Math.sin(rad) * dist,
                            scale: 0,
                          }}
                          transition={{ duration: 0.8, delay: 0.2 + i * 0.03, ease: "easeOut" }}
                          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full pointer-events-none"
                          style={{ backgroundColor: particleColors[i % particleColors.length] }}
                        />
                      );
                    })}
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 200, damping: 20 }}
                    >
                      <CheckCircle2 size={72} className="text-brand-accent mx-auto mb-6" />
                    </motion.div>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-2">Заявка отправлена!</h3>
                  <p className="text-brand-silver mb-6">
                    Спасибо, {formData.name}! Мы перезвоним вам для подтверждения записи.
                  </p>

                  {/* Booking summary card */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="glass rounded-xl p-4 max-w-xs mx-auto mb-6 text-sm"
                  >
                    <div className="flex justify-between text-brand-silver mb-1">
                      <span>Услуга</span>
                      <span className="text-white font-medium">{selectedServiceLabel}</span>
                    </div>
                    <div className="flex justify-between text-brand-silver mb-1">
                      <span>Дата</span>
                      <span className="text-white font-medium">{formData.date}</span>
                    </div>
                    <div className="flex justify-between text-brand-silver">
                      <span>Время</span>
                      <span className="text-white font-medium">{formData.time}</span>
                    </div>
                  </motion.div>

                  <button
                    onClick={() => {
                      setStep(1);
                      setDirection(1);
                      setFormData({ service: "", date: "", time: "", name: "", phone: "", message: "" });
                    }}
                    className="btn-border-glow text-brand-accent font-semibold hover:text-white transition-colors px-5 py-2 rounded-xl"
                  >
                    Записать ещё
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Navigation */}
            {step < 4 && (
              <div className="flex justify-between mt-8">
                {step > 1 ? (
                  <motion.button
                    whileHover="hover"
                    onClick={() => goTo(step - 1)}
                    className="group flex items-center gap-2 text-brand-silver hover:text-white transition-colors"
                  >
                    <motion.span variants={{ hover: { x: -3 } }} transition={{ type: "spring", stiffness: 300 }}>
                      <ArrowLeft size={18} />
                    </motion.span>
                    Назад
                  </motion.button>
                ) : (
                  <div />
                )}
                <motion.button
                  whileHover={canProceed() ? { scale: 1.03 } : {}}
                  whileTap={canProceed() ? { scale: 0.97 } : {}}
                  onClick={() => (step === 3 ? handleSubmit() : goTo(step + 1))}
                  disabled={!canProceed()}
                  className={`group flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all ${
                    canProceed()
                      ? "bg-brand-accent text-brand-900 hover:bg-white btn-shimmer shadow-[0_4px_20px_rgba(56,189,248,0.3)]"
                      : "bg-brand-800 text-brand-silver/50 cursor-not-allowed"
                  }`}
                >
                  {step === 3 ? "Отправить" : "Далее"}
                  <motion.span
                    className="inline-block transition-transform group-hover:translate-x-1"
                  >
                    <ArrowRight size={18} />
                  </motion.span>
                </motion.button>
              </div>
            )}
          </div>

          {step < 4 && (
            <p className="text-xs text-brand-silver/50 text-center mt-4">
              Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
