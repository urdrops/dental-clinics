import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Политика конфиденциальности | Restom Dental Clinic",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-brand-900 py-28 px-4">
      <div className="container mx-auto max-w-3xl">
        <Link href="/" className="text-brand-accent text-sm hover:text-white transition-colors mb-8 inline-block">
          &larr; На главную
        </Link>
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-8">Политика конфиденциальности</h1>
        <div className="prose prose-invert prose-sm max-w-none space-y-6 text-brand-silver leading-relaxed">
          <p>Настоящая политика конфиденциальности определяет порядок обработки и защиты персональных данных пользователей сайта Restom Dental Clinic.</p>

          <h2 className="text-white text-xl font-semibold">1. Сбор информации</h2>
          <p>Мы собираем информацию, которую вы добровольно предоставляете при заполнении форм на сайте: имя, номер телефона, комментарий к записи. Данные используются исключительно для связи с вами и подтверждения записи на приём.</p>

          <h2 className="text-white text-xl font-semibold">2. Использование данных</h2>
          <p>Собранные данные используются для:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Подтверждения и управления записью на приём</li>
            <li>Связи с вами по вопросам лечения</li>
            <li>Улучшения качества обслуживания</li>
          </ul>

          <h2 className="text-white text-xl font-semibold">3. Защита данных</h2>
          <p>Мы не передаём ваши персональные данные третьим лицам, за исключением случаев, предусмотренных законодательством Республики Узбекистан.</p>

          <h2 className="text-white text-xl font-semibold">4. Контакты</h2>
          <p>По вопросам обработки персональных данных вы можете связаться с нами:</p>
          <p>Телефон: <a href="tel:+998555199119" className="text-brand-accent hover:text-white transition-colors">+998 55 519 9119</a></p>
          <p>Адрес: г. Ташкент, ул. Бобура, 61</p>
        </div>
      </div>
    </main>
  );
}
