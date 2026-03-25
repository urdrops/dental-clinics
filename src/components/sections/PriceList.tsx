"use client";

import { useState, useRef, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useTranslation } from "@/i18n";
import { priceCategories, type PriceSubGroup } from "@/data/prices";
import type { Language } from "@/i18n";

function SubGroup({ group, lang, currency, defaultOpen }: { group: PriceSubGroup; lang: Language; currency: string; defaultOpen: boolean }) {
  const [open, setOpen] = useState(defaultOpen);
  const hasLabel = group.label.ru !== "";

  const rows = group.items.map((item, i) => (
    <div
      key={i}
      className={`flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-4 px-4 py-3 ${i % 2 === 0 ? "bg-white/[0.02]" : ""}`}
    >
      <span className="text-brand-silver text-sm">{item.name[lang]}</span>
      <span className="text-brand-accent font-semibold text-sm whitespace-nowrap">
        {item.price.startsWith("$") ? item.price : `${item.price} ${currency}`}
      </span>
    </div>
  ));

  if (!hasLabel) return <>{rows}</>;

  return (
    <div className="border-t border-white/5 first:border-t-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-4 py-3 hover:bg-white/[0.03] transition-colors"
      >
        <span className="text-white font-medium text-sm flex items-center gap-2">
          <span className="w-1 h-4 bg-brand-accent rounded-full" />
          {group.label[lang]}
        </span>
        <motion.span animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.2 }}>
          <ChevronDown size={16} className="text-brand-silver" />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            {rows}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function PriceList() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { t, lang } = useTranslation();
  const currency = t("prices.currency");

  const initialTab = searchParams.get("tab") || priceCategories[0].id;
  const [activeTab, setActiveTab] = useState(initialTab);
  const tabBarRef = useRef<HTMLDivElement>(null);
  const tabRefs = useRef<Map<string, HTMLButtonElement>>(new Map());

  const activeCategory = priceCategories.find((c) => c.id === activeTab) || priceCategories[0];

  const handleTabChange = (id: string) => {
    setActiveTab(id);
    router.replace(`/prices?tab=${id}`, { scroll: false });
  };

  // Scroll active tab into view on mount and change
  useEffect(() => {
    const btn = tabRefs.current.get(activeTab);
    if (btn && tabBarRef.current) {
      const bar = tabBarRef.current;
      const left = btn.offsetLeft - bar.offsetWidth / 2 + btn.offsetWidth / 2;
      bar.scrollTo({ left, behavior: "smooth" });
    }
  }, [activeTab]);

  return (
    <main className="min-h-screen bg-brand-900 pt-28 pb-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <Link href="/" className="text-brand-accent text-sm hover:text-white transition-colors mb-8 inline-block">
          &larr; {t("prices.back")}
        </Link>

        <div className="text-center mb-10">
          <p className="text-brand-accent font-medium text-sm uppercase tracking-widest mb-3">
            {t("prices.label")}
          </p>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
            {t("prices.title")}
          </h1>
          <p className="text-brand-silver max-w-2xl mx-auto text-lg">
            {t("prices.subtitle")}
          </p>
        </div>

        {/* Category Tabs */}
        <div
          ref={tabBarRef}
          className="flex gap-2 overflow-x-auto scrollbar-hide pb-4 mb-6 sticky top-20 z-20 bg-brand-900/90 backdrop-blur-sm pt-2 -mx-4 px-4"
        >
          {priceCategories.map((cat) => (
            <button
              key={cat.id}
              ref={(el) => { if (el) tabRefs.current.set(cat.id, el); }}
              onClick={() => handleTabChange(cat.id)}
              className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 shrink-0 ${
                activeTab === cat.id
                  ? "bg-brand-accent text-brand-900"
                  : "glass text-brand-silver hover:text-white"
              }`}
            >
              {cat.name[lang]}
            </button>
          ))}
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="glass rounded-3xl overflow-hidden"
          >
            {activeCategory.groups.map((group, i) => (
              <SubGroup
                key={`${activeTab}-${i}`}
                group={group}
                lang={lang}
                currency={currency}
                defaultOpen={activeCategory.groups.length <= 3}
              />
            ))}
          </motion.div>
        </AnimatePresence>

        <p className="text-brand-silver/50 text-xs text-center mt-4">
          {t("prices.note")}
        </p>

        {/* CTA */}
        <div className="text-center mt-10">
          <Link
            href="/#booking"
            className="btn-shimmer inline-flex items-center gap-2 bg-brand-accent hover:bg-white hover:scale-[1.03] active:scale-[0.97] text-brand-900 font-bold px-8 py-4 rounded-full transition-all duration-300 shadow-lg shadow-brand-accent/25"
          >
            {t("prices.cta")}
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </main>
  );
}
