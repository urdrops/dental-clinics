"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Clock, CheckCircle, ChevronDown, AlertCircle, X } from "lucide-react";
import Link from "next/link";
import { useTranslation } from "@/i18n";

type TFunc = ReturnType<typeof useTranslation>["t"];

function ImplantIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2v1" />
      <path d="M9 5h6" />
      <path d="M9 5c0-1 .5-2 3-2s3 1 3 2" />
      <path d="M9 5v3a3 3 0 0 0 6 0V5" />
      <path d="M10 10l-1 2h6l-1-2" />
      <path d="M10.5 12l-.5 2h4l-.5-2" />
      <path d="M11 14l-.5 2h3l-.5-2" />
      <path d="M11.5 16l-.5 3h2l-.5-3" />
      <path d="M11 19l1 3 1-3" />
    </svg>
  );
}

function VeneerIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 2c-1 2-2 4-2 6 0 3 2 5 5 5s5-2 5-5c0-2-1-4-2-6" />
      <path d="M9 2h6" />
      <path d="M7 13c-.5 1.5-.5 3 0 4.5C8 20 10 22 12 22s4-2 5-4.5c.5-1.5.5-3 0-4.5" />
      <path d="M10 8a4 4 0 0 0 4 0" />
      <path d="M8.5 6h7" opacity="0.4" />
    </svg>
  );
}

function ToothFixIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2C9 2 7 4 7 7c0 2 .5 3.5 1 5 .8 2.5 1 4 1 6 0 2 1 4 3 4s3-2 3-4c0-2 .2-3.5 1-6 .5-1.5 1-3 1-5 0-3-2-5-5-5Z" />
      <path d="M10 9l2 2 4-4" />
    </svg>
  );
}

function WhiteningIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2C9 2 7 4 7 7c0 2 .5 3.5 1 5 .8 2.5 1 4 1 6 0 2 1 4 3 4s3-2 3-4c0-2 .2-3.5 1-6 .5-1.5 1-3 1-5 0-3-2-5-5-5Z" />
      <path d="M14.5 4.5l1.5-2" />
      <path d="M17 5l1-1" />
      <path d="M16 8h2" />
      <path d="M10 7a2 2 0 0 1 4 0" opacity="0.4" />
    </svg>
  );
}

function BracesIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="9" width="4" height="6" rx="1" />
      <rect x="10" y="9" width="4" height="6" rx="1" />
      <rect x="16" y="9" width="4" height="6" rx="1" />
      <line x1="8" y1="12" x2="10" y2="12" />
      <line x1="14" y1="12" x2="16" y2="12" />
      <path d="M6 9V6a6 6 0 0 1 12 0v3" opacity="0.4" />
      <path d="M6 15v3a6 6 0 0 0 12 0v-3" opacity="0.4" />
    </svg>
  );
}

function HygieneIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2C9 2 7 4 7 7c0 2 .5 3.5 1 5 .8 2.5 1 4 1 6 0 2 1 4 3 4s3-2 3-4c0-2 .2-3.5 1-6 .5-1.5 1-3 1-5 0-3-2-5-5-5Z" />
      <path d="M9.5 7a5 5 0 0 0 5 0" opacity="0.4" />
      <path d="M10 3l-2-1" />
      <path d="M14 3l2-1" />
      <path d="M12 2v-1" />
    </svg>
  );
}

function CrownIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 10l3-6 3 4 3-4 3 4 3-4 3 6" />
      <path d="M3 10v8a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-8" />
      <circle cx="12" cy="15" r="2" opacity="0.4" />
    </svg>
  );
}

function ChildIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="6" r="4" />
      <path d="M12 10c-4 0-7 2-7 5v1a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-1c0-3-3-5-7-5Z" />
      <path d="M10 5h1" opacity="0.4" />
      <path d="M13 5h1" opacity="0.4" />
      <path d="M10.5 7.5a2 2 0 0 0 3 0" opacity="0.4" />
    </svg>
  );
}

interface Service {
  icon: React.ReactNode;
  title: string;
  tagline: string;
  price: string;
  duration: string;
  description: string;
  howItWorks: string[];
  benefits: string[];
  whoNeeds: string;
  faq: { q: string; a: string }[];
  priceTab: string;
}

function ServiceModal({ service, onClose, t }: { service: Service; onClose: () => void; t: TFunc }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-brand-900/80 backdrop-blur-sm" />
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-3xl glass-strong glow scrollbar-hide"
      >
        <button
          onClick={onClose}
          className="sticky top-4 float-right mr-4 mt-4 z-10 w-10 h-10 rounded-full bg-brand-900/60 backdrop-blur-sm border border-white/10 flex items-center justify-center text-brand-silver hover:text-white transition-colors"
        >
          <X size={20} />
        </button>

        <div className="p-6 sm:p-8 space-y-6">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 flex items-center justify-center text-brand-accent shrink-0">
                {service.icon}
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                <p className="text-brand-silver text-sm">{service.tagline}</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-3 mt-3">
              <span className="flex items-center gap-1.5 text-brand-accent font-semibold text-sm px-3 py-1 rounded-full bg-brand-accent/10">
                {service.price}
              </span>
              <span className="flex items-center gap-1.5 text-brand-silver/70 text-sm px-3 py-1 rounded-full bg-white/5">
                <Clock size={14} />
                {service.duration}
              </span>
            </div>
          </div>

          <p className="text-brand-silver leading-relaxed">{service.description}</p>

          <div>
            <h4 className="text-white font-semibold mb-3 text-sm uppercase tracking-wider">{t("services.modal.procedure")}</h4>
            <ol className="space-y-3">
              {service.howItWorks.map((step, j) => (
                <li key={j} className="flex items-start gap-3 text-sm text-brand-silver">
                  <span className="w-6 h-6 rounded-full bg-brand-accent/10 flex items-center justify-center text-brand-accent font-bold text-xs shrink-0 mt-0.5">
                    {j + 1}
                  </span>
                  {step}
                </li>
              ))}
            </ol>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3 text-sm uppercase tracking-wider">{t("services.modal.benefits")}</h4>
            <ul className="space-y-2">
              {service.benefits.map((b, j) => (
                <li key={j} className="flex items-start gap-2 text-sm text-brand-silver">
                  <CheckCircle size={15} className="text-brand-accent shrink-0 mt-0.5" />
                  {b}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3 text-sm uppercase tracking-wider">{t("services.modal.whoNeeds")}</h4>
            <div className="flex items-start gap-2 text-sm text-brand-silver">
              <AlertCircle size={15} className="text-brand-accent shrink-0 mt-0.5" />
              <p className="leading-relaxed">{service.whoNeeds}</p>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3 text-sm uppercase tracking-wider">{t("services.modal.faq")}</h4>
            <div className="space-y-3">
              {service.faq.map((item, j) => (
                <div key={j} className="bg-brand-900/40 rounded-xl p-4">
                  <p className="text-white font-medium text-sm mb-1">{item.q}</p>
                  <p className="text-brand-silver text-sm leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </div>

          <a
            href="#booking"
            onClick={onClose}
            className="btn-shimmer inline-flex items-center gap-2 bg-brand-accent hover:bg-white hover:scale-[1.03] active:scale-[0.97] text-brand-900 font-semibold px-6 py-3 rounded-full transition-all duration-300 shadow-lg shadow-brand-accent/20"
          >
            {t("services.bookFull")}
            <ArrowRight size={18} />
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
}

function ServiceCard({ service, index, onOpen, t }: { service: Service; index: number; onOpen: () => void; t: TFunc }) {
  return (
    <motion.div
      initial={false}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass rounded-3xl p-6 sm:p-8"
    >
      <div className="flex items-start gap-4 mb-4">
        <div className="w-10 h-10 flex items-center justify-center text-brand-accent shrink-0">
          {service.icon}
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-bold text-white mb-1">{service.title}</h3>
          <p className="text-brand-silver text-sm">{service.tagline}</p>
        </div>
      </div>

      <div className="flex flex-wrap gap-3 mb-4">
        <span className="flex items-center gap-1.5 text-brand-accent font-semibold text-sm">
          {service.price}
        </span>
        <span className="flex items-center gap-1.5 text-brand-silver/70 text-sm">
          <Clock size={14} />
          {service.duration}
        </span>
      </div>

      <p className="text-brand-silver leading-relaxed mb-5 line-clamp-3">{service.description}</p>

      <ul className="space-y-2 mb-6">
        {service.benefits.slice(0, 3).map((b, j) => (
          <li key={j} className="flex items-start gap-2 text-sm text-brand-silver">
            <CheckCircle size={15} className="text-brand-accent shrink-0 mt-0.5" />
            {b}
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-4">
        <a
          href="#booking"
          className="btn-shimmer inline-flex items-center gap-2 bg-brand-accent hover:bg-white hover:scale-[1.05] active:scale-[0.95] text-brand-900 font-semibold text-sm px-5 py-2.5 rounded-full transition-all duration-300"
        >
          {t("services.book")}
          <ArrowRight size={16} />
        </a>
        <button
          onClick={onOpen}
          className="inline-flex items-center gap-1.5 text-brand-silver hover:text-brand-accent text-sm font-medium transition-colors"
        >
          {t("services.more")}
          <ChevronDown size={16} />
        </button>
        <Link
          href={`/prices?tab=${service.priceTab}`}
          className="inline-flex items-center gap-1 text-brand-accent/60 hover:text-brand-accent text-sm font-medium transition-colors ml-auto"
        >
          {t("services.fullPrices")} &rarr;
        </Link>
      </div>
    </motion.div>
  );
}

export default function Services() {
  const [openService, setOpenService] = useState<number | null>(null);
  const { t } = useTranslation();

  const services: Service[] = [
    {
      icon: <ImplantIcon />,
      title: t("services.implant.title"),
      tagline: t("services.implant.tagline"),
      price: t("services.implant.price"),
      duration: t("services.implant.duration"),
      description: t("services.implant.description"),
      howItWorks: [t("services.implant.step1"), t("services.implant.step2"), t("services.implant.step3"), t("services.implant.step4")],
      benefits: [t("services.implant.benefit1"), t("services.implant.benefit2"), t("services.implant.benefit3"), t("services.implant.benefit4"), t("services.implant.benefit5")],
      whoNeeds: t("services.implant.whoNeeds"),
      faq: [
        { q: t("services.implant.faq1q"), a: t("services.implant.faq1a") },
        { q: t("services.implant.faq2q"), a: t("services.implant.faq2a") },
      ],
      priceTab: "surgery",
    },
    {
      icon: <VeneerIcon />,
      title: t("services.veneer.title"),
      tagline: t("services.veneer.tagline"),
      price: t("services.veneer.price"),
      duration: t("services.veneer.duration"),
      description: t("services.veneer.description"),
      howItWorks: [t("services.veneer.step1"), t("services.veneer.step2"), t("services.veneer.step3"), t("services.veneer.step4")],
      benefits: [t("services.veneer.benefit1"), t("services.veneer.benefit2"), t("services.veneer.benefit3"), t("services.veneer.benefit4"), t("services.veneer.benefit5")],
      whoNeeds: t("services.veneer.whoNeeds"),
      faq: [
        { q: t("services.veneer.faq1q"), a: t("services.veneer.faq1a") },
        { q: t("services.veneer.faq2q"), a: t("services.veneer.faq2a") },
      ],
      priceTab: "prosthetics",
    },
    {
      icon: <ToothFixIcon />,
      title: t("services.caries.title"),
      tagline: t("services.caries.tagline"),
      price: t("services.caries.price"),
      duration: t("services.caries.duration"),
      description: t("services.caries.description"),
      howItWorks: [t("services.caries.step1"), t("services.caries.step2"), t("services.caries.step3"), t("services.caries.step4")],
      benefits: [t("services.caries.benefit1"), t("services.caries.benefit2"), t("services.caries.benefit3"), t("services.caries.benefit4"), t("services.caries.benefit5")],
      whoNeeds: t("services.caries.whoNeeds"),
      faq: [
        { q: t("services.caries.faq1q"), a: t("services.caries.faq1a") },
        { q: t("services.caries.faq2q"), a: t("services.caries.faq2a") },
      ],
      priceTab: "caries",
    },
    {
      icon: <WhiteningIcon />,
      title: t("services.whitening.title"),
      tagline: t("services.whitening.tagline"),
      price: t("services.whitening.price"),
      duration: t("services.whitening.duration"),
      description: t("services.whitening.description"),
      howItWorks: [t("services.whitening.step1"), t("services.whitening.step2"), t("services.whitening.step3"), t("services.whitening.step4")],
      benefits: [t("services.whitening.benefit1"), t("services.whitening.benefit2"), t("services.whitening.benefit3"), t("services.whitening.benefit4"), t("services.whitening.benefit5")],
      whoNeeds: t("services.whitening.whoNeeds"),
      faq: [
        { q: t("services.whitening.faq1q"), a: t("services.whitening.faq1a") },
        { q: t("services.whitening.faq2q"), a: t("services.whitening.faq2a") },
      ],
      priceTab: "prevention",
    },
    {
      icon: <BracesIcon />,
      title: t("services.ortho.title"),
      tagline: t("services.ortho.tagline"),
      price: t("services.ortho.price"),
      duration: t("services.ortho.duration"),
      description: t("services.ortho.description"),
      howItWorks: [t("services.ortho.step1"), t("services.ortho.step2"), t("services.ortho.step3"), t("services.ortho.step4")],
      benefits: [t("services.ortho.benefit1"), t("services.ortho.benefit2"), t("services.ortho.benefit3"), t("services.ortho.benefit4"), t("services.ortho.benefit5")],
      whoNeeds: t("services.ortho.whoNeeds"),
      faq: [
        { q: t("services.ortho.faq1q"), a: t("services.ortho.faq1a") },
        { q: t("services.ortho.faq2q"), a: t("services.ortho.faq2a") },
      ],
      priceTab: "orthodontics",
    },
    {
      icon: <HygieneIcon />,
      title: t("services.hygiene.title"),
      tagline: t("services.hygiene.tagline"),
      price: t("services.hygiene.price"),
      duration: t("services.hygiene.duration"),
      description: t("services.hygiene.description"),
      howItWorks: [t("services.hygiene.step1"), t("services.hygiene.step2"), t("services.hygiene.step3"), t("services.hygiene.step4")],
      benefits: [t("services.hygiene.benefit1"), t("services.hygiene.benefit2"), t("services.hygiene.benefit3"), t("services.hygiene.benefit4"), t("services.hygiene.benefit5")],
      whoNeeds: t("services.hygiene.whoNeeds"),
      faq: [
        { q: t("services.hygiene.faq1q"), a: t("services.hygiene.faq1a") },
        { q: t("services.hygiene.faq2q"), a: t("services.hygiene.faq2a") },
      ],
      priceTab: "prevention",
    },
    {
      icon: <CrownIcon />,
      title: t("services.crowns.title"),
      tagline: t("services.crowns.tagline"),
      price: t("services.crowns.price"),
      duration: t("services.crowns.duration"),
      description: t("services.crowns.description"),
      howItWorks: [t("services.crowns.step1"), t("services.crowns.step2"), t("services.crowns.step3"), t("services.crowns.step4")],
      benefits: [t("services.crowns.benefit1"), t("services.crowns.benefit2"), t("services.crowns.benefit3"), t("services.crowns.benefit4"), t("services.crowns.benefit5")],
      whoNeeds: t("services.crowns.whoNeeds"),
      faq: [
        { q: t("services.crowns.faq1q"), a: t("services.crowns.faq1a") },
        { q: t("services.crowns.faq2q"), a: t("services.crowns.faq2a") },
      ],
      priceTab: "prosthetics",
    },
    {
      icon: <ChildIcon />,
      title: t("services.pediatric.title"),
      tagline: t("services.pediatric.tagline"),
      price: t("services.pediatric.price"),
      duration: t("services.pediatric.duration"),
      description: t("services.pediatric.description"),
      howItWorks: [t("services.pediatric.step1"), t("services.pediatric.step2"), t("services.pediatric.step3"), t("services.pediatric.step4")],
      benefits: [t("services.pediatric.benefit1"), t("services.pediatric.benefit2"), t("services.pediatric.benefit3"), t("services.pediatric.benefit4"), t("services.pediatric.benefit5")],
      whoNeeds: t("services.pediatric.whoNeeds"),
      faq: [
        { q: t("services.pediatric.faq1q"), a: t("services.pediatric.faq1a") },
        { q: t("services.pediatric.faq2q"), a: t("services.pediatric.faq2a") },
      ],
      priceTab: "pediatric",
    },
  ];

  return (
    <section id="services" className="py-20 md:py-28 bg-brand-900">
      <div className="container mx-auto px-4 md:px-12">
        <motion.div
          initial={false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-brand-accent font-medium text-sm uppercase tracking-widest mb-3">{t("services.label")}</p>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">{t("services.title")}</h2>
          <p className="text-brand-silver max-w-2xl mx-auto text-lg">
            {t("services.subtitle")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {services.map((service, i) => (
            <ServiceCard key={i} service={service} index={i} onOpen={() => setOpenService(i)} t={t} />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {openService !== null && (
          <ServiceModal
            service={services[openService]}
            onClose={() => setOpenService(null)}
            t={t}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
