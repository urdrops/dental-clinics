"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Clock, CheckCircle, ChevronDown, AlertCircle, X } from "lucide-react";

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

const services = [
  {
    icon: <ImplantIcon />,
    title: "Имплантация зубов",
    tagline: "Восстановление утраченных зубов навсегда",
    price: "от 3 500 000 сўм",
    duration: "1–3 визита",
    description: "Имплантация — это современный метод восстановления утраченных зубов путём вживления титанового импланта в костную ткань челюсти. Имплант служит искусственным корнем, на который устанавливается коронка, неотличимая от настоящего зуба.",
    howItWorks: [
      "Диагностика: 3D-снимок челюсти (КТ) и составление плана лечения",
      "Установка импланта под местной анестезией (30–60 минут)",
      "Период приживления: 2–4 месяца (с временной коронкой)",
      "Установка постоянной керамической коронки",
    ],
    benefits: [
      "Пожизненная гарантия на имплант",
      "Полное восстановление жевательной функции",
      "Естественный внешний вид — не отличить от своих зубов",
      "Не повреждает соседние зубы (в отличие от мостов)",
      "Предотвращает атрофию костной ткани",
    ],
    whoNeeds: "Пациентам с отсутствием одного или нескольких зубов, а также при полной адентии. Подходит для большинства взрослых пациентов с достаточным объёмом костной ткани.",
    faq: [
      { q: "Больно ли ставить имплант?", a: "Нет, процедура проходит под местной анестезией. Вы не почувствуете боли. После операции возможен лёгкий дискомфорт 2–3 дня." },
      { q: "Сколько служит имплант?", a: "При правильном уходе — всю жизнь. Мы даём пожизненную гарантию на имплант и до 15 лет на коронку." },
    ],
  },
  {
    icon: <VeneerIcon />,
    title: "Виниры и эстетика",
    tagline: "Голливудская улыбка за несколько визитов",
    price: "от 2 500 000 сўм",
    duration: "2–3 визита",
    description: "Виниры — это тонкие керамические накладки (0.3–0.5 мм), которые фиксируются на передней поверхности зубов. Они позволяют изменить форму, цвет и положение зубов, создавая идеально ровную и белоснежную улыбку.",
    howItWorks: [
      "Консультация и цифровое моделирование будущей улыбки (Digital Smile Design)",
      "Минимальная подготовка зубов (обточка 0.3–0.5 мм)",
      "Снятие слепков и изготовление виниров в лаборатории (7–10 дней)",
      "Примерка и фиксация виниров на специальный цемент",
    ],
    benefits: [
      "Естественный вид — керамика имитирует натуральную эмаль",
      "Срок службы 15–20 лет при правильном уходе",
      "Минимальная обточка — сохраняется до 95% тканей зуба",
      "Устойчивость к окрашиванию (кофе, чай, вино)",
      "Коррекция формы, цвета и мелких неровностей",
    ],
    whoNeeds: "Пациентам с потемневшей эмалью, сколами, щелями между зубами (диастемой), неровными или слишком мелкими зубами. Идеально для тех, кто хочет красивую улыбку без брекетов.",
    faq: [
      { q: "Портят ли виниры зубы?", a: "Нет, современные виниры требуют минимальной обточки. Зуб остаётся живым и здоровым под накладкой." },
      { q: "Можно ли снять виниры?", a: "Технически да, но после обточки зуб потребует новую реставрацию. Поэтому решение об установке стоит принимать взвешенно." },
    ],
  },
  {
    icon: <ToothFixIcon />,
    title: "Лечение кариеса",
    tagline: "Безболезненное лечение под микроскопом",
    price: "от 500 000 сўм",
    duration: "1 визит",
    description: "Кариес — это разрушение твёрдых тканей зуба бактериями. Без лечения он прогрессирует от небольшого пятна до глубокого поражения, которое может привести к пульпиту и потере зуба. Мы лечим кариес на любой стадии с использованием микроскопа и фотокомпозитных материалов.",
    howItWorks: [
      "Диагностика: осмотр, рентген, определение глубины поражения",
      "Местная анестезия (при необходимости — седация)",
      "Удаление поражённых тканей под увеличением микроскопа",
      "Послойное восстановление зуба фотокомпозитом с точным подбором цвета",
    ],
    benefits: [
      "Абсолютно безболезненно — современные анестетики",
      "Микроскоп позволяет сохранить максимум здоровых тканей",
      "Фотокомпозиты последнего поколения — пломба неотличима от зуба",
      "Лечение за один визит (30–60 минут)",
      "Гарантия на пломбу до 5 лет",
    ],
    whoNeeds: "Всем, у кого есть кариес на любой стадии — от начального потемнения до глубокого разрушения. Рекомендуем не откладывать: чем раньше начать лечение, тем проще и дешевле оно будет.",
    faq: [
      { q: "Как понять, что у меня кариес?", a: "Тёмные пятна на зубах, чувствительность к горячему/холодному/сладкому, застревание пищи. На ранних стадиях кариес может быть незаметен — поэтому важны регулярные осмотры." },
      { q: "Сколько держится пломба?", a: "Современные фотокомпозиты служат 5–10 лет и более при правильном уходе за зубами." },
    ],
  },
  {
    icon: <WhiteningIcon />,
    title: "Отбеливание зубов",
    tagline: "До 8 тонов светлее за одну процедуру",
    price: "от 1 500 000 сўм",
    duration: "1 визит (60 мин)",
    description: "Профессиональное отбеливание — это контролируемое осветление эмали зубов с помощью специального геля и LED-лампы холодного света. В отличие от домашних средств, кабинетное отбеливание безопасно для эмали и даёт предсказуемый, стойкий результат.",
    howItWorks: [
      "Профессиональная чистка зубов (удаление налёта и камня)",
      "Изоляция дёсен защитным составом",
      "Нанесение отбеливающего геля на зубы",
      "Активация геля LED-лампой холодного света (3 цикла по 15 минут)",
    ],
    benefits: [
      "Осветление до 8 тонов за один визит",
      "Безопасно для эмали — технология холодного света",
      "Результат сохраняется до 2 лет",
      "Безболезненная процедура (60 минут)",
      "Мгновенный видимый результат",
    ],
    whoNeeds: "Пациентам с потемневшей или пожелтевшей эмалью от кофе, чая, курения или возрастных изменений. Не рекомендуется при активном кариесе или заболеваниях дёсен — сначала лечение, потом отбеливание.",
    faq: [
      { q: "Вредно ли отбеливание для зубов?", a: "Нет, при профессиональном подходе. Мы используем сертифицированные составы, которые не повреждают эмаль. Важно не злоупотреблять — делать не чаще 1 раза в год." },
      { q: "Будут ли зубы чувствительны после?", a: "Возможна лёгкая чувствительность в первые 24–48 часов. Мы наносим реминерализующий гель после процедуры для снижения дискомфорта." },
    ],
  },
];

type Service = typeof services[0];

function ServiceModal({ service, onClose }: { service: Service; onClose: () => void }) {
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
      {/* Backdrop */}
      <div className="absolute inset-0 bg-brand-900/80 backdrop-blur-sm" />

      {/* Modal Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-3xl glass-strong glow scrollbar-hide"
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="sticky top-4 float-right mr-4 mt-4 z-10 w-10 h-10 rounded-full bg-brand-900/60 backdrop-blur-sm border border-white/10 flex items-center justify-center text-brand-silver hover:text-white transition-colors"
        >
          <X size={20} />
        </button>

        <div className="p-6 sm:p-8 space-y-6">
          {/* Header */}
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

          {/* Description */}
          <p className="text-brand-silver leading-relaxed">{service.description}</p>

          {/* How it works */}
          <div>
            <h4 className="text-white font-semibold mb-3 text-sm uppercase tracking-wider">Как проходит процедура</h4>
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

          {/* Benefits */}
          <div>
            <h4 className="text-white font-semibold mb-3 text-sm uppercase tracking-wider">Преимущества</h4>
            <ul className="space-y-2">
              {service.benefits.map((b, j) => (
                <li key={j} className="flex items-start gap-2 text-sm text-brand-silver">
                  <CheckCircle size={15} className="text-brand-accent shrink-0 mt-0.5" />
                  {b}
                </li>
              ))}
            </ul>
          </div>

          {/* Who needs it */}
          <div>
            <h4 className="text-white font-semibold mb-3 text-sm uppercase tracking-wider">Кому подходит</h4>
            <div className="flex items-start gap-2 text-sm text-brand-silver">
              <AlertCircle size={15} className="text-brand-accent shrink-0 mt-0.5" />
              <p className="leading-relaxed">{service.whoNeeds}</p>
            </div>
          </div>

          {/* FAQ */}
          <div>
            <h4 className="text-white font-semibold mb-3 text-sm uppercase tracking-wider">Частые вопросы</h4>
            <div className="space-y-3">
              {service.faq.map((item, j) => (
                <div key={j} className="bg-brand-900/40 rounded-xl p-4">
                  <p className="text-white font-medium text-sm mb-1">{item.q}</p>
                  <p className="text-brand-silver text-sm leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <a
            href="#booking"
            onClick={onClose}
            className="btn-shimmer inline-flex items-center gap-2 bg-brand-accent hover:bg-white hover:scale-[1.03] active:scale-[0.97] text-brand-900 font-semibold px-6 py-3 rounded-full transition-all duration-300 shadow-lg shadow-brand-accent/20"
          >
            Записаться на приём
            <ArrowRight size={18} />
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
}

function ServiceCard({ service, index, onOpen }: { service: Service; index: number; onOpen: () => void }) {
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
          Записаться
          <ArrowRight size={16} />
        </a>
        <button
          onClick={onOpen}
          className="inline-flex items-center gap-1.5 text-brand-silver hover:text-brand-accent text-sm font-medium transition-colors"
        >
          Подробнее
          <ChevronDown size={16} />
        </button>
      </div>
    </motion.div>
  );
}

export default function Services() {
  const [openService, setOpenService] = useState<number | null>(null);

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
          <p className="text-brand-accent font-medium text-sm uppercase tracking-widest mb-3">Что мы делаем</p>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Наши услуги</h2>
          <p className="text-brand-silver max-w-2xl mx-auto text-lg">
            Комплексный подход и передовые технологии для здоровья и красоты вашей улыбки. Нажмите «Подробнее» чтобы узнать всё о процедуре.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {services.map((service, i) => (
            <ServiceCard key={i} service={service} index={i} onOpen={() => setOpenService(i)} />
          ))}
        </div>
      </div>

      {/* Detail Modal — appears on top */}
      <AnimatePresence>
        {openService !== null && (
          <ServiceModal
            service={services[openService]}
            onClose={() => setOpenService(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
