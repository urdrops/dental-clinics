"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Больно ли ставить импланты?",
    a: "Нет, процедура проводится под местной анестезией и абсолютно безболезненна. Вы не почувствуете дискомфорта во время установки. После процедуры возможны лёгкие ощущения, которые снимаются обычными обезболивающими.",
  },
  {
    q: "Сколько стоит первичная консультация?",
    a: "Первичная консультация в нашей клинике бесплатная. Врач проведёт осмотр, сделает диагностику и составит индивидуальный план лечения с точной стоимостью.",
  },
  {
    q: "Какие гарантии вы даёте?",
    a: "Мы даём официальную гарантию на все виды работ: на импланты — пожизненную, на виниры — до 15 лет, на пломбы — до 5 лет. Используем только сертифицированные материалы от ведущих производителей.",
  },
  {
    q: "Сколько времени занимает установка виниров?",
    a: "Весь процесс занимает 2-3 визита в течение 2 недель. На первом визите проводится подготовка и снятие слепков, на втором — примерка, на третьем — финальная установка.",
  },
  {
    q: "Можно ли лечить зубы во время беременности?",
    a: "Да, но с ограничениями. Оптимальный период — второй триместр. Мы используем безопасные анестетики и избегаем рентгена. Обязательно сообщите врачу о беременности на приёме.",
  },
  {
    q: "Как записаться на приём?",
    a: "Вы можете записаться через форму на сайте, позвонить по телефону +998 55 519 9119, или написать в Telegram. Мы перезвоним в течение 10 минут для подтверждения записи.",
  },
  {
    q: "Есть ли рассрочка на лечение?",
    a: "Да, мы предлагаем беспроцентную рассрочку на все виды лечения сроком до 12 месяцев. Подробности уточняйте у администратора клиники.",
  },
  {
    q: "Как долго служат импланты?",
    a: "При правильном уходе импланты служат всю жизнь. Мы используем импланты премиум-класса от мировых производителей с доказанной клинической историей более 20 лет.",
  },
];

function FAQItem({ q, a, isOpen, toggle }: { q: string; a: string; isOpen: boolean; toggle: () => void }) {
  return (
    <div className="border-b border-white/10 last:border-0">
      <button
        onClick={toggle}
        className="w-full flex items-center justify-between py-5 px-1 text-left group"
      >
        <span className="text-white font-semibold text-base sm:text-lg pr-4 group-hover:text-brand-accent transition-colors">
          {q}
        </span>
        <ChevronDown
          size={20}
          className={`text-brand-accent shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="text-brand-silver text-sm sm:text-base leading-relaxed pb-5 px-1">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 md:py-28 bg-brand-900">
      <div className="container mx-auto px-4 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-brand-accent font-medium text-sm uppercase tracking-widest mb-3">FAQ</p>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Частые вопросы</h2>
          <p className="text-brand-silver max-w-2xl mx-auto text-lg">
            Ответы на самые популярные вопросы наших пациентов.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto glass rounded-3xl p-6 sm:p-8">
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              q={faq.q}
              a={faq.a}
              isOpen={openIndex === i}
              toggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
