"use client";

import { useCountUp } from "@/utils/useCountUp";
import { useTranslation } from "@/i18n";

function StatItem({ value, suffix, label, accent }: { value: number; suffix: string; label: string; accent?: boolean }) {
  const { count, ref } = useCountUp(value);
  return (
    <div ref={ref} className="text-center">
      <div className={`text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-none ${accent ? "text-brand-accent" : "text-white"}`}>
        {count}
        <span className="text-brand-accent">{suffix}</span>
      </div>
      <div className="w-8 h-0.5 bg-brand-accent/30 mx-auto mt-3 mb-2 rounded-full" />
      <p className="text-brand-silver text-sm">{label}</p>
    </div>
  );
}

export default function Stats() {
  const { t } = useTranslation();

  const stats = [
    { value: 10, suffix: "+", label: t("stats.years"), accent: true },
    { value: 12000, suffix: "+", label: t("stats.patients") },
    { value: 5000, suffix: "+", label: t("stats.procedures") },
    { value: 98, suffix: "%", label: t("stats.satisfaction") },
  ];

  return (
    <section className="py-14 md:py-20 bg-brand-900 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-brand-accent/20 rounded-full blur-[120px]" />
        <div className="absolute top-1/3 left-1/4 w-[300px] h-[200px] bg-blue-500/15 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[250px] h-[200px] bg-brand-accent/10 rounded-full blur-[80px]" />
      </div>
      <div className="container mx-auto px-4 md:px-12 relative z-10">
        <div className="glass rounded-3xl px-6 py-10 md:py-14">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
            {stats.map((stat, i) => (
              <StatItem key={i} {...stat} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
