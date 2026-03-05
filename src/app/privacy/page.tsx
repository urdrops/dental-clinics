"use client";

import Link from "next/link";
import { useTranslation } from "@/i18n";

export default function PrivacyPage() {
  const { t } = useTranslation();

  return (
    <main className="min-h-screen bg-brand-900 py-28 px-4">
      <div className="container mx-auto max-w-3xl">
        <Link href="/" className="text-brand-accent text-sm hover:text-white transition-colors mb-8 inline-block">
          &larr; {t("privacy.back")}
        </Link>
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-8">{t("privacy.title")}</h1>
        <div className="prose prose-invert prose-sm max-w-none space-y-6 text-brand-silver leading-relaxed">
          <p>{t("privacy.intro")}</p>

          <h2 className="text-white text-xl font-semibold">{t("privacy.section1.title")}</h2>
          <p>{t("privacy.section1.text")}</p>

          <h2 className="text-white text-xl font-semibold">{t("privacy.section2.title")}</h2>
          <p>{t("privacy.section2.text")}</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>{t("privacy.section2.item1")}</li>
            <li>{t("privacy.section2.item2")}</li>
            <li>{t("privacy.section2.item3")}</li>
          </ul>

          <h2 className="text-white text-xl font-semibold">{t("privacy.section3.title")}</h2>
          <p>{t("privacy.section3.text")}</p>

          <h2 className="text-white text-xl font-semibold">{t("privacy.section4.title")}</h2>
          <p>{t("privacy.section4.text")}</p>
          <p>{t("privacy.section4.phone")} <a href="tel:+998555199119" className="text-brand-accent hover:text-white transition-colors">+998 55 519 9119</a></p>
          <p>{t("privacy.section4.address")}</p>
        </div>
      </div>
    </main>
  );
}
