import type { Metadata } from "next";
import { Suspense } from "react";
import PriceList from "@/components/sections/PriceList";

export const metadata: Metadata = {
  title: "Прайс-лист | Restom Dental Clinic",
  description: "Полный прайс-лист стоматологических услуг клиники Restom в Ташкенте. Имплантация, виниры, брекеты, лечение кариеса, детская стоматология и другие услуги.",
  keywords: [
    "прайс стоматология Ташкент", "цены стоматология", "стоимость имплантов",
    "цены на виниры Ташкент", "цены на брекеты Ташкент", "стоимость коронок",
    "narxlar stomatologiya Toshkent", "implant narxi", "vinir narxi", "Restom Dental",
  ],
};

export default function PricesPage() {
  return (
    <Suspense>
      <PriceList />
    </Suspense>
  );
}
