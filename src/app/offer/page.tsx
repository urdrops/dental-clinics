import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Договор оферты | Restom Dental Clinic",
};

export default function OfferPage() {
  return (
    <main className="min-h-screen bg-brand-900 py-28 px-4">
      <div className="container mx-auto max-w-3xl">
        <Link href="/" className="text-brand-accent text-sm hover:text-white transition-colors mb-8 inline-block">
          &larr; На главную
        </Link>
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-8">Договор оферты</h1>
        <div className="prose prose-invert prose-sm max-w-none space-y-6 text-brand-silver leading-relaxed">
          <p>Настоящий документ является официальным предложением (публичной офертой) клиники Restom Dental Clinic на оказание стоматологических услуг.</p>

          <h2 className="text-white text-xl font-semibold">1. Общие положения</h2>
          <p>Клиника Restom Dental Clinic (далее — Исполнитель) предлагает любому физическому лицу (далее — Пациент) воспользоваться стоматологическими услугами на условиях, изложенных в настоящем договоре.</p>

          <h2 className="text-white text-xl font-semibold">2. Предмет договора</h2>
          <p>Исполнитель оказывает Пациенту стоматологические услуги в соответствии с действующими стандартами и лицензиями. Перечень и стоимость услуг указаны на сайте и в прайс-листе клиники.</p>

          <h2 className="text-white text-xl font-semibold">3. Порядок оказания услуг</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>Запись на приём осуществляется через сайт, по телефону или в Telegram</li>
            <li>Перед началом лечения проводится осмотр и консультация врача</li>
            <li>План лечения и стоимость согласовываются с пациентом до начала процедур</li>
          </ul>

          <h2 className="text-white text-xl font-semibold">4. Контакты</h2>
          <p>Restom Dental Clinic</p>
          <p>Адрес: г. Ташкент, ул. Бобура, 61</p>
          <p>Телефон: <a href="tel:+998555199119" className="text-brand-accent hover:text-white transition-colors">+998 55 519 9119</a></p>
        </div>
      </div>
    </main>
  );
}
