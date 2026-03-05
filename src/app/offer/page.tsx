"use client";

import Link from "next/link";
import { useTranslation } from "@/i18n";

export default function OfferPage() {
  const { t } = useTranslation();

  return (
    <main className="min-h-screen bg-brand-900 py-28 px-4">
      <div className="container mx-auto max-w-3xl">
        <Link href="/" className="text-brand-accent text-sm hover:text-white transition-colors mb-8 inline-block">
          &larr; {t("offer.back")}
        </Link>
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-8">{t("offer.title")}</h1>
        <div className="prose prose-invert prose-sm max-w-none space-y-6 text-brand-silver leading-relaxed">
          <p>{t("offer.intro")}</p>

          <h2 className="text-white text-xl font-semibold">{t("offer.section1.title")}</h2>
          <p>{t("offer.section1.text")}</p>

          <h2 className="text-white text-xl font-semibold">{t("offer.section2.title")}</h2>
          <p>{t("offer.section2.text")}</p>

          <h2 className="text-white text-xl font-semibold">{t("offer.section3.title")}</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>{t("offer.section3.item1")}</li>
            <li>{t("offer.section3.item2")}</li>
            <li>{t("offer.section3.item3")}</li>
          </ul>

          <h2 className="text-white text-xl font-semibold">{t("offer.section4.title")}</h2>
          <p>{t("offer.section4.name")}</p>
          <p>{t("offer.section4.address")}</p>
          <p>{t("offer.section4.phone")} <a href="tel:+998555199119" className="text-brand-accent hover:text-white transition-colors">+998 55 519 9119</a></p>
        </div>
      </div>
    </main>
  );
}
