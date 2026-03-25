export interface PriceItem {
  name: { ru: string; uz: string };
  price: string;
}

export interface PriceSubGroup {
  label: { ru: string; uz: string };
  items: PriceItem[];
}

export interface PriceCategory {
  id: string;
  name: { ru: string; uz: string };
  groups: PriceSubGroup[];
}

export const priceCategories: PriceCategory[] = [
  {
    id: "examination",
    name: { ru: "Обследование", uz: "Tekshiruv" },
    groups: [
      {
        label: { ru: "", uz: "" },
        items: [
          { name: { ru: "Консультация", uz: "Konsultatsiya" }, price: "300 000" },
          { name: { ru: "Диагностика и планирование лечения", uz: "Diagnostika va davolash rejasi" }, price: "1 200 000" },
          { name: { ru: "Прицельная рентгенография", uz: "Maqsadli rentgenografiya" }, price: "40 000" },
          { name: { ru: "Компьютерная томография", uz: "Kompyuter tomografiya" }, price: "120 000" },
          { name: { ru: "Сканирование полости рта", uz: "Og'iz bo'shlig'ini skanerlash" }, price: "550 000" },
          { name: { ru: "Ирригатор", uz: "Irrigator" }, price: "1 000 000" },
          { name: { ru: "Диагностика ВНЧС (аксиография + сканирование)", uz: "VNCH diagnostikasi (aksiografiya + skanerlash)" }, price: "1 700 000" },
        ],
      },
    ],
  },
  {
    id: "prevention",
    name: { ru: "Профилактика", uz: "Profilaktika" },
    groups: [
      {
        label: { ru: "", uz: "" },
        items: [
          { name: { ru: "Профилактическая гигиена (1 степень)", uz: "Profilaktik gigiena (1-daraja)" }, price: "700 000" },
          { name: { ru: "Профилактическая гигиена (2 степень)", uz: "Profilaktik gigiena (2-daraja)" }, price: "900 000" },
          { name: { ru: "Профилактическая гигиена (3 степень)", uz: "Profilaktik gigiena (3-daraja)" }, price: "1 200 000" },
          { name: { ru: "Реминерализующая терапия зубов", uz: "Tishlarni remineralizatsiya terapiyasi" }, price: "150 000" },
        ],
      },
    ],
  },
  {
    id: "caries",
    name: { ru: "Лечение кариеса / Реставрации", uz: "Kariyes davolash / Restavratsiya" },
    groups: [
      {
        label: { ru: "", uz: "" },
        items: [
          { name: { ru: "Лечение кариеса (1 поверхность зуба)", uz: "Kariyes davolash (1 yuza)" }, price: "700 000" },
          { name: { ru: "Лечение кариеса (2 поверхность зуба)", uz: "Kariyes davolash (2 yuza)" }, price: "800 000" },
          { name: { ru: "Лечение кариеса (3 поверхность зуба)", uz: "Kariyes davolash (3 yuza)" }, price: "900 000" },
          { name: { ru: "Лечение кариеса (4 поверхность зуба и более)", uz: "Kariyes davolash (4 va undan ko'p yuza)" }, price: "1 000 000" },
          { name: { ru: "Композитный винир", uz: "Kompozit vinir" }, price: "1 500 000" },
          { name: { ru: "Герметизация фиссур композитным материалом", uz: "Fissuralarni kompozit material bilan germetizatsiya" }, price: "460 000" },
        ],
      },
    ],
  },
  {
    id: "therapy",
    name: { ru: "Терапия", uz: "Terapiya" },
    groups: [
      {
        label: { ru: "", uz: "" },
        items: [
          { name: { ru: "Восстановление зуба под ортопедическую конструкцию (1 степень)", uz: "Tishni ortopedik konstruksiya uchun tiklash (1-daraja)" }, price: "450 000" },
          { name: { ru: "Восстановление зуба под ортопедическую конструкцию (2 степень)", uz: "Tishni ortopedik konstruksiya uchun tiklash (2-daraja)" }, price: "550 000" },
          { name: { ru: "Восстановление зуба под ортопедическую конструкцию (3 степень)", uz: "Tishni ortopedik konstruksiya uchun tiklash (3-daraja)" }, price: "650 000" },
          { name: { ru: "Армирование зуба стекловолоконным штифтом (1 шт)", uz: "Tishni shisha tolali shtift bilan armaturalash (1 dona)" }, price: "105 000" },
          { name: { ru: "Постановка временной пломбы", uz: "Vaqtinchalik plomba qo'yish" }, price: "100 000" },
          { name: { ru: "Литой штифт", uz: "Quyma shtift" }, price: "600 000" },
        ],
      },
    ],
  },
  {
    id: "endodontics",
    name: { ru: "Эндодонтия", uz: "Endodontiya" },
    groups: [
      {
        label: { ru: "Первичное лечение", uz: "Birlamchi davolash" },
        items: [
          { name: { ru: "1 канал (I степень)", uz: "1 kanal (I daraja)" }, price: "560 000" },
          { name: { ru: "1 канал (II степень)", uz: "1 kanal (II daraja)" }, price: "850 000" },
          { name: { ru: "2 канала (I степень)", uz: "2 kanal (I daraja)" }, price: "730 000" },
          { name: { ru: "2 канала (II степень)", uz: "2 kanal (II daraja)" }, price: "1 020 000" },
          { name: { ru: "3 канала (I степень)", uz: "3 kanal (I daraja)" }, price: "930 000" },
          { name: { ru: "3 канала (II степень)", uz: "3 kanal (II daraja)" }, price: "1 220 000" },
          { name: { ru: "4 канала (I степень)", uz: "4 kanal (I daraja)" }, price: "1 200 000" },
          { name: { ru: "4 канала (II степень)", uz: "4 kanal (II daraja)" }, price: "1 520 000" },
        ],
      },
      {
        label: { ru: "Повторное лечение", uz: "Qayta davolash" },
        items: [
          { name: { ru: "1 канал (I степень)", uz: "1 kanal (I daraja)" }, price: "1 000 000" },
          { name: { ru: "1 канал (II степень)", uz: "1 kanal (II daraja)" }, price: "1 290 000" },
          { name: { ru: "2 канала (I степень)", uz: "2 kanal (I daraja)" }, price: "1 500 000" },
          { name: { ru: "2 канала (II степень)", uz: "2 kanal (II daraja)" }, price: "1 820 000" },
          { name: { ru: "3 канала (I степень)", uz: "3 kanal (I daraja)" }, price: "2 000 000" },
          { name: { ru: "3 канала (II степень)", uz: "3 kanal (II daraja)" }, price: "2 320 000" },
          { name: { ru: "4 канала (I степень)", uz: "4 kanal (I daraja)" }, price: "3 000 000" },
          { name: { ru: "4 канала (II степень)", uz: "4 kanal (II daraja)" }, price: "3 320 000" },
        ],
      },
      {
        label: { ru: "Дополнительно", uz: "Qo'shimcha" },
        items: [
          { name: { ru: "Ретроградное пломбирование корневого канала", uz: "Ildiz kanalini retrograd plombalash" }, price: "560 000" },
          { name: { ru: "Наложение лечебного материала в корневой канал", uz: "Ildiz kanaliga davolovchi material qo'yish" }, price: "110 000" },
          { name: { ru: "Наложение девитализирующей пасты", uz: "Devitalizatsiyalovchi pasta qo'yish" }, price: "110 000" },
          { name: { ru: "Удаление внутриканального штифта", uz: "Kanal ichidagi shtiftni olib tashlash" }, price: "110 000" },
          { name: { ru: "Извлечение инструмента (1 степень)", uz: "Instrumentni chiqarish (1-daraja)" }, price: "820 000" },
          { name: { ru: "Извлечение инструмента (2 степень)", uz: "Instrumentni chiqarish (2-daraja)" }, price: "1 120 000" },
          { name: { ru: "Извлечение инструмента (3 степень)", uz: "Instrumentni chiqarish (3-daraja)" }, price: "1 300 000" },
          { name: { ru: "Извлечение инородного материала (1 степень)", uz: "Begona materialni chiqarish (1-daraja)" }, price: "300 000" },
          { name: { ru: "Извлечение инородного материала (2 степень)", uz: "Begona materialni chiqarish (2-daraja)" }, price: "500 000" },
          { name: { ru: "Извлечение инородного материала (3 степень)", uz: "Begona materialni chiqarish (3-daraja)" }, price: "700 000" },
          { name: { ru: "Снятие литой / металлокерамической коронки", uz: "Quyma / metallokeramik tojni olib tashlash" }, price: "225 000" },
        ],
      },
    ],
  },
  {
    id: "surgery",
    name: { ru: "Хирургия", uz: "Jarrohlik" },
    groups: [
      {
        label: { ru: "Удаление зубов", uz: "Tish olib tashlash" },
        items: [
          { name: { ru: "Удаление молочного или подвижного зуба", uz: "Sut yoki qimirlaydigan tishni olib tashlash" }, price: "300 000" },
          { name: { ru: "Удаление зуба простое / фронтальная группа", uz: "Oddiy olib tashlash / oldingi guruh" }, price: "600 000" },
          { name: { ru: "Удаление сложное / боковая группа зубов", uz: "Murakkab olib tashlash / yon guruh" }, price: "1 000 000" },
          { name: { ru: "Удаление ретинированного зуба (I ст.)", uz: "Retinirlangan tishni olib tashlash (I dar.)" }, price: "1 200 000" },
          { name: { ru: "Удаление ретинированного зуба (II ст.)", uz: "Retinirlangan tishni olib tashlash (II dar.)" }, price: "1 600 000" },
          { name: { ru: "Удаление ретинированного зуба (III ст.)", uz: "Retinirlangan tishni olib tashlash (III dar.)" }, price: "2 400 000" },
          { name: { ru: "Удаление дистопированного зуба (I ст.)", uz: "Distopirlangan tishni olib tashlash (I dar.)" }, price: "1 200 000" },
          { name: { ru: "Удаление дистопированного зуба (II ст.)", uz: "Distopirlangan tishni olib tashlash (II dar.)" }, price: "1 600 000" },
          { name: { ru: "Удаление дистопированного зуба (III ст.)", uz: "Distopirlangan tishni olib tashlash (III dar.)" }, price: "2 400 000" },
        ],
      },
      {
        label: { ru: "Имплантация", uz: "Implantatsiya" },
        items: [
          { name: { ru: "Имплантат Megagen ST", uz: "Megagen ST implant" }, price: "3 200 000" },
          { name: { ru: "Имплантат Megagen AnyOne", uz: "Megagen AnyOne implant" }, price: "4 900 000" },
          { name: { ru: "Имплантат Occtem", uz: "Occtem implant" }, price: "4 700 000" },
          { name: { ru: "Имплантат Megagen AnyRidge", uz: "Megagen AnyRidge implant" }, price: "5 750 000" },
          { name: { ru: "Имплантат Megagen ARi", uz: "Megagen ARi implant" }, price: "6 200 000" },
          { name: { ru: "Имплантат (Швейцария)", uz: "Implant (Shveytsariya)" }, price: "9 000 000" },
          { name: { ru: "Установка формирователя десны", uz: "Milk shakllantirgich o'rnatish" }, price: "150 000" },
          { name: { ru: "Индивидуальный абатмент из диоксида циркония", uz: "Tsirkoniy dioksididan individual abatment" }, price: "615 000" },
          { name: { ru: "Мультиюнит абатмент", uz: "Multiyunit abatment" }, price: "1 200 000" },
        ],
      },
      {
        label: { ru: "Комплексные протоколы", uz: "Kompleks protokollar" },
        items: [
          { name: { ru: "All-on-4 (Megagen ST)", uz: "All-on-4 (Megagen ST)" }, price: "20 545 000" },
          { name: { ru: "All-on-6 (Megagen ST)", uz: "All-on-6 (Megagen ST)" }, price: "24 250 000" },
        ],
      },
      {
        label: { ru: "Костная пластика и синус-лифтинг", uz: "Suyak plastikasi va sinus-lifting" },
        items: [
          { name: { ru: "Закрытый синус-лифтинг", uz: "Yopiq sinus-lifting" }, price: "3 500 000" },
          { name: { ru: "Открытый синус-лифтинг", uz: "Ochiq sinus-lifting" }, price: "5 500 000" },
          { name: { ru: "Направленная костная регенерация (I ст.)", uz: "Yo'naltirilgan suyak regeneratsiyasi (I dar.)" }, price: "8 000 000" },
          { name: { ru: "Пластика десны в области 1 зуба/импланта", uz: "1 tish/implant sohasida milk plastikasi" }, price: "1 500 000" },
          { name: { ru: "Ксеногенный костный материал (0,5 гр)", uz: "Ksenogen suyak materiali (0,5 gr)" }, price: "650 000" },
          { name: { ru: "Резорбируемая мембрана 25×25", uz: "Rezorbiruvchan membrana 25×25" }, price: "650 000" },
        ],
      },
      {
        label: { ru: "Прочее", uz: "Boshqa" },
        items: [
          { name: { ru: "Дренирование очага воспаления", uz: "Yallig'lanish o'chog'ini drenirlash" }, price: "400 000" },
          { name: { ru: "Иссечение новообразования", uz: "Yangi o'smani kesib olib tashlash" }, price: "1 000 000" },
          { name: { ru: "Биопсия новообразования", uz: "Yangi o'sma biopsiyasi" }, price: "800 000" },
          { name: { ru: "Пластика уздечки губ", uz: "Lab yuganini plastikasi" }, price: "1 000 000" },
          { name: { ru: "Пластика уздечки языка", uz: "Til yuganini plastikasi" }, price: "2 000 000" },
          { name: { ru: "Установка минивинтов", uz: "Minivintlar o'rnatish" }, price: "1 000 000" },
          { name: { ru: "Удаление имплантата (простое)", uz: "Implantni olib tashlash (oddiy)" }, price: "1 400 000" },
          { name: { ru: "Удаление имплантата (сложное)", uz: "Implantni olib tashlash (murakkab)" }, price: "2 000 000" },
          { name: { ru: "Наложение швов", uz: "Tikuv qo'yish" }, price: "225 000" },
          { name: { ru: "Периостомия", uz: "Periostomiya" }, price: "500 000" },
        ],
      },
    ],
  },
  {
    id: "prosthetics",
    name: { ru: "Ортопедия", uz: "Ortopediya" },
    groups: [
      {
        label: { ru: "Коронки", uz: "Tojlar" },
        items: [
          { name: { ru: "Коронка металлокерамическая", uz: "Metallokeramik toj" }, price: "1 700 000" },
          { name: { ru: "Коронка металлокерамическая на импланте (винтовая)", uz: "Implantdagi metallokeramik toj (vintli)" }, price: "2 400 000" },
          { name: { ru: "Коронка циркониевая — полная анатомия (стандарт)", uz: "Tsirkoniy toj — to'liq anatomiya (standart)" }, price: "3 500 000" },
          { name: { ru: "Коронка циркониевая — полная анатомия (премиум)", uz: "Tsirkoniy toj — to'liq anatomiya (premium)" }, price: "4 500 000" },
          { name: { ru: "Коронка циркониевая с нанесением керамики (стандарт)", uz: "Keramika qo'yilgan tsirkoniy toj (standart)" }, price: "4 000 000" },
          { name: { ru: "Коронка циркониевая с нанесением керамики (премиум)", uz: "Keramika qo'yilgan tsirkoniy toj (premium)" }, price: "5 000 000" },
          { name: { ru: "Коронка циркониевая на импланте (стандарт)", uz: "Implantdagi tsirkoniy toj (standart)" }, price: "4 100 000" },
          { name: { ru: "Коронка циркониевая на импланте (премиум)", uz: "Implantdagi tsirkoniy toj (premium)" }, price: "5 100 000" },
          { name: { ru: "Цельнолитая коронка", uz: "Yaxlit quyma toj" }, price: "600 000" },
          { name: { ru: "Пластмассовая коронка (лабораторная)", uz: "Plastmassa toj (laboratoriya)" }, price: "500 000" },
          { name: { ru: "Пластмассовая коронка на импланте", uz: "Implantdagi plastmassa toj" }, price: "650 000" },
          { name: { ru: "Пластмассовая коронка (LuxaTemp)", uz: "Plastmassa toj (LuxaTemp)" }, price: "300 000" },
        ],
      },
      {
        label: { ru: "Виниры и вкладки", uz: "Vinirlar va vkladkalar" },
        items: [
          { name: { ru: "Керамический винир (стандарт)", uz: "Keramik vinir (standart)" }, price: "4 200 000" },
          { name: { ru: "Керамический винир (премиум)", uz: "Keramik vinir (premium)" }, price: "5 400 000" },
          { name: { ru: "Вкладка/Накладка композитная", uz: "Kompozit vkladka/nakladka" }, price: "2 000 000" },
          { name: { ru: "Вкладка/Накладка стеклокерамика (IPS e.max / Amber)", uz: "Shisha keramika vkladka (IPS e.max / Amber)" }, price: "4 000 000" },
        ],
      },
      {
        label: { ru: "Протезирование", uz: "Protezlash" },
        items: [
          { name: { ru: "Частично съёмный протез", uz: "Qisman olinadigan protez" }, price: "1 900 000" },
          { name: { ru: "Полный съёмный акриловый протез (1 челюсть)", uz: "To'liq olinadigan akril protez (1 jag')" }, price: "3 000 000" },
          { name: { ru: "Полный съёмный акриловый протез — стандарт (1 челюсть)", uz: "To'liq olinadigan akril protez — standart (1 jag')" }, price: "6 000 000" },
          { name: { ru: "Протез на титановой балке — стандарт (1 челюсть)", uz: "Titan balkadagi protez — standart (1 jag')" }, price: "$900" },
          { name: { ru: "Протез на титановой балке — премиум (1 челюсть)", uz: "Titan balkadagi protez — premium (1 jag')" }, price: "$1 500" },
          { name: { ru: "Балка", uz: "Balka" }, price: "10 000 000" },
          { name: { ru: "Установка готового съёмного протеза на имплант", uz: "Tayyor olinadigan protezni implantga o'rnatish" }, price: "4 200 000" },
        ],
      },
      {
        label: { ru: "Прочее", uz: "Boshqa" },
        items: [
          { name: { ru: "Каппа-депрограмматор", uz: "Kappa-deprogrammator" }, price: "2 000 000" },
          { name: { ru: "Передний депрограмматор", uz: "Oldingi deprogrammator" }, price: "700 000" },
          { name: { ru: "Диагностическая модель", uz: "Diagnostik model" }, price: "1 300 000" },
          { name: { ru: "Mock-up", uz: "Mock-up" }, price: "5 000 000" },
          { name: { ru: "Абатмент", uz: "Abatment" }, price: "615 000" },
          { name: { ru: "Винт", uz: "Vint" }, price: "130 000" },
        ],
      },
    ],
  },
  {
    id: "additional",
    name: { ru: "Дополнительные услуги", uz: "Qo'shimcha xizmatlar" },
    groups: [
      {
        label: { ru: "", uz: "" },
        items: [
          { name: { ru: "Инфильтрационная анестезия", uz: "Infiltratsion anesteziya" }, price: "70 000" },
          { name: { ru: "Снятие коронки", uz: "Tojni olib tashlash" }, price: "150 000" },
          { name: { ru: "Фиксация коронки на цемент", uz: "Tojni sementga fiksatsiya qilish" }, price: "150 000" },
          { name: { ru: "Снятие оттиска А-силиконом (1 челюсть)", uz: "A-silikon bilan qolip olish (1 jag')" }, price: "300 000" },
          { name: { ru: "Снятие оттиска С-силиконом (1 челюсть)", uz: "S-silikon bilan qolip olish (1 jag')" }, price: "150 000" },
          { name: { ru: "Снятие альгинатного слепка", uz: "Alginat qolip olish" }, price: "100 000" },
          { name: { ru: "Контрольная модель", uz: "Nazorat modeli" }, price: "120 000" },
          { name: { ru: "Починка", uz: "Ta'mirlash" }, price: "300 000" },
          { name: { ru: "Снятие штифта (1 степень)", uz: "Shtiftni olib tashlash (1-daraja)" }, price: "150 000" },
          { name: { ru: "Снятие штифта (2 степень)", uz: "Shtiftni olib tashlash (2-daraja)" }, price: "300 000" },
        ],
      },
    ],
  },
  {
    id: "pediatric",
    name: { ru: "Детская стоматология", uz: "Bolalar stomatologiyasi" },
    groups: [
      {
        label: { ru: "Консультации и гигиена", uz: "Konsultatsiya va gigiena" },
        items: [
          { name: { ru: "Консультация (15–30 минут)", uz: "Konsultatsiya (15–30 daqiqa)" }, price: "100 000" },
          { name: { ru: "Консультация (30–60 минут)", uz: "Konsultatsiya (30–60 daqiqa)" }, price: "200 000" },
          { name: { ru: "Анестезия мепивакаином", uz: "Mepivakain anesteziyasi" }, price: "80 000" },
          { name: { ru: "Анестезия артикаином", uz: "Artikain anesteziyasi" }, price: "70 000" },
          { name: { ru: "Профессиональная гигиена (1 степень)", uz: "Professional gigiena (1-daraja)" }, price: "400 000" },
          { name: { ru: "Профессиональная гигиена (2 степень)", uz: "Professional gigiena (2-daraja)" }, price: "600 000" },
          { name: { ru: "Герметизация 1 фиссуры", uz: "1 fissura germetizatsiyasi" }, price: "350 000" },
          { name: { ru: "Фторирование 1 зуб", uz: "1 tishni ftorlashtirish" }, price: "50 000" },
          { name: { ru: "Фторирование всех зубов", uz: "Barcha tishlarni ftorlashtirish" }, price: "400 000" },
        ],
      },
      {
        label: { ru: "Лечение", uz: "Davolash" },
        items: [
          { name: { ru: "Лечение кариеса ICON (1 зуб)", uz: "ICON kariyes davolash (1 tish)" }, price: "500 000" },
          { name: { ru: "Пломба химического отверждения", uz: "Kimyoviy qotish plombasi" }, price: "200 000" },
          { name: { ru: "Пломба из стеклоиономерного цемента", uz: "Shisha ionomer sement plombasi" }, price: "150 000" },
          { name: { ru: "Пломба светоотверждаемая (передние зубы)", uz: "Yorug'lik plombasi (oldingi tishlar)" }, price: "300 000" },
          { name: { ru: "Пломба светоотверждаемая (жевательные зубы)", uz: "Yorug'lik plombasi (chaynash tishlari)" }, price: "300 000" },
          { name: { ru: "Кариес молочного зуба (1 поверхность)", uz: "Sut tishi kariyesi (1 yuza)" }, price: "200 000" },
          { name: { ru: "Кариес молочного зуба (2 поверхности)", uz: "Sut tishi kariyesi (2 yuza)" }, price: "300 000" },
          { name: { ru: "Кариес молочного зуба (3 поверхности)", uz: "Sut tishi kariyesi (3 yuza)" }, price: "400 000" },
          { name: { ru: "Поверхностный кариес постоянного зуба", uz: "Doimiy tish yuzaki kariyesi" }, price: "400 000" },
          { name: { ru: "Средний кариес постоянного зуба", uz: "Doimiy tish o'rta kariyesi" }, price: "500 000" },
          { name: { ru: "Глубокий кариес постоянного зуба", uz: "Doimiy tish chuqur kariyesi" }, price: "600 000" },
          { name: { ru: "Пришеечный кариес", uz: "Bo'yin kariyesi" }, price: "400 000" },
          { name: { ru: "Лечебная прокладка при глубоком кариесе", uz: "Chuqur kariyesda davolovchi prokladka" }, price: "150 000" },
          { name: { ru: "Изолирующая прокладка", uz: "Izolyatsiyalovchi prokladka" }, price: "150 000" },
          { name: { ru: "Постэндодонтическое восстановление коронки", uz: "Endodontiyadan keyingi toj tiklash" }, price: "650 000" },
        ],
      },
      {
        label: { ru: "Эндодонтия и удаление", uz: "Endodontiya va olib tashlash" },
        items: [
          { name: { ru: "Лечение периодонтита — 1 этап (отток каналов)", uz: "Periodontit davolash — 1-bosqich" }, price: "100 000" },
          { name: { ru: "Лечение периодонтита — 2 этап (медикаментозный)", uz: "Periodontit davolash — 2-bosqich" }, price: "150 000" },
          { name: { ru: "Лечение периодонтита — 3 этап (пломбирование каналов)", uz: "Periodontit davolash — 3-bosqich" }, price: "200 000" },
          { name: { ru: "Девитализирующая паста (1 молочный зуб)", uz: "Devitalizatsiya pastasi (1 sut tish)" }, price: "100 000" },
          { name: { ru: "Ампутация пульпы (Пульпотек)", uz: "Pulpa amputatsiyasi (Pulpotek)" }, price: "250 000" },
          { name: { ru: "Простое удаление молочного зуба", uz: "Sut tishini oddiy olib tashlash" }, price: "150 000" },
          { name: { ru: "Сложное удаление молочного зуба", uz: "Sut tishini murakkab olib tashlash" }, price: "250 000" },
        ],
      },
      {
        label: { ru: "Коронки", uz: "Tojlar" },
        items: [
          { name: { ru: "Металлическая коронка для молочного зуба", uz: "Sut tishi uchun metall toj" }, price: "600 000" },
          { name: { ru: "Циркониевая коронка для молочного зуба", uz: "Sut tishi uchun tsirkoniy toj" }, price: "800 000" },
        ],
      },
    ],
  },
  {
    id: "orthodontics",
    name: { ru: "Ортодонтия", uz: "Ortodontiya" },
    groups: [
      {
        label: { ru: "Диагностика", uz: "Diagnostika" },
        items: [
          { name: { ru: "Диагностика (фотопротокол, анализ 3D и ТРГ, план лечения)", uz: "Diagnostika (fotoprotokol, 3D va TRG tahlili, davolash rejasi)" }, price: "600 000" },
          { name: { ru: "Визуальный план лечения на элайнерах", uz: "Elaynerlar bo'yicha vizual davolash rejasi" }, price: "3 000 000" },
        ],
      },
      {
        label: { ru: "Брекет-системы", uz: "Breket tizimlari" },
        items: [
          { name: { ru: "Лигатурные металлические брекеты", uz: "Ligaturali metall breketlar" }, price: "18 000 000" },
          { name: { ru: "Саморегулирующие металлические (базовый)", uz: "O'zini o'zi rostlaydigan metall (bazoviy)" }, price: "8 400 000" },
          { name: { ru: "Саморегулирующие металлические (стандарт)", uz: "O'zini o'zi rostlaydigan metall (standart)" }, price: "12 200 000" },
          { name: { ru: "Саморегулирующие металлические (премиум)", uz: "O'zini o'zi rostlaydigan metall (premium)" }, price: "22 000 000" },
          { name: { ru: "Саморегулирующие керамические брекеты", uz: "O'zini o'zi rostlaydigan keramik breketlar" }, price: "27 000 000" },
          { name: { ru: "Частичное ортодонтическое лечение (1 сегмент)", uz: "Qisman ortodontik davolash (1 segment)" }, price: "7 000 000" },
          { name: { ru: "Элайнеры (каппы)", uz: "Elaynerlar (kappalar)" }, price: "32 000 000" },
        ],
      },
      {
        label: { ru: "Обслуживание и замена", uz: "Xizmat ko'rsatish va almashtirish" },
        items: [
          { name: { ru: "Активация брекет-системы (визит)", uz: "Breket tizimini aktivatsiya qilish (tashrif)" }, price: "200 000" },
          { name: { ru: "Замена лигатурного металлического брекета", uz: "Ligaturali metall breketni almashtirish" }, price: "400 000" },
          { name: { ru: "Замена лигатурного керамического брекета", uz: "Ligaturali keramik breketni almashtirish" }, price: "500 000" },
          { name: { ru: "Замена саморегулирующего металлического брекета", uz: "O'zini o'zi rostlaydigan metall breketni almashtirish" }, price: "600 000" },
          { name: { ru: "Замена саморегулирующего керамического брекета", uz: "O'zini o'zi rostlaydigan keramik breketni almashtirish" }, price: "1 000 000" },
          { name: { ru: "Снятие брекет-системы (1 челюсть)", uz: "Breket tizimini olib tashlash (1 jag')" }, price: "800 000" },
          { name: { ru: "Переклейка брекета (1 шт)", uz: "Breketni qayta yopishtirish (1 dona)" }, price: "150 000" },
          { name: { ru: "Консультация / активация пациента с брекетом", uz: "Breketli bemor konsultatsiyasi / aktivatsiyasi" }, price: "300 000" },
          { name: { ru: "Замена каппы при поломке/потере", uz: "Kappani singanida/yo'qolganida almashtirish" }, price: "1 000 000" },
        ],
      },
      {
        label: { ru: "Ретейнеры и каппы", uz: "Reteynerlar va kappalar" },
        items: [
          { name: { ru: "Металло-композитный ретейнер (1 челюсть)", uz: "Metall-kompozit reteyner (1 jag')" }, price: "1 000 000" },
          { name: { ru: "Металло-композитный ретейнер (2 челюсти)", uz: "Metall-kompozit reteyner (2 jag')" }, price: "1 500 000" },
          { name: { ru: "Ретенционная ночная каппа (1 челюсть)", uz: "Retentsion tungi kappa (1 jag')" }, price: "800 000" },
          { name: { ru: "Ретенционная ночная каппа (2 челюсти)", uz: "Retentsion tungi kappa (2 jag')" }, price: "1 200 000" },
          { name: { ru: "Защитная каппа", uz: "Himoya kappasi" }, price: "1 000 000" },
        ],
      },
      {
        label: { ru: "Аппараты и микроимпланты", uz: "Apparatlar va mikroimplantlar" },
        items: [
          { name: { ru: "Установка микроимпланта (простой)", uz: "Mikroimplant o'rnatish (oddiy)" }, price: "1 300 000" },
          { name: { ru: "Установка микроимпланта (сложный)", uz: "Mikroimplant o'rnatish (murakkab)" }, price: "1 800 000" },
          { name: { ru: "Гнатологическое лечение / сплинт-терапия (простое)", uz: "Gnatologik davolash / splint-terapiya (oddiy)" }, price: "4 000 000" },
          { name: { ru: "Гнатологическое лечение / сплинт-терапия (сложное)", uz: "Gnatologik davolash / splint-terapiya (murakkab)" }, price: "6 500 000" },
          { name: { ru: "Функциональный аппарат Твин-Блок", uz: "Twin-Blok funksional apparat" }, price: "5 000 000" },
          { name: { ru: "Функциональный аппарат Френкел III", uz: "Frenkel III funksional apparat" }, price: "5 000 000" },
          { name: { ru: "Нёбный расширитель Хасс", uz: "Xass tanglayni kengaytiruvchi" }, price: "4 500 000" },
          { name: { ru: "Нёбный расширитель Хайрекс", uz: "Xayreks tanglayni kengaytiruvchi" }, price: "4 500 000" },
          { name: { ru: "Нёбный расширитель MSE", uz: "MSE tanglayni kengaytiruvchi" }, price: "9 000 000" },
          { name: { ru: "Лицевая маска", uz: "Yuz niqobi" }, price: "2 500 000" },
          { name: { ru: "Аппарат медленного нёбного расширения", uz: "Sekin tanglay kengaytirish apparati" }, price: "3 000 000" },
          { name: { ru: "Space maintainer (1 ед)", uz: "Joy saqlash apparati (1 dona)" }, price: "1 000 000" },
          { name: { ru: "Гингивопластика (сегмент)", uz: "Gingivoplastika (segment)" }, price: "1 500 000" },
        ],
      },
    ],
  },
  {
    id: "complex-endo",
    name: { ru: "Сложное эндо (микроскоп)", uz: "Murakkab endodontiya (mikroskop)" },
    groups: [
      {
        label: { ru: "Лечение каналов", uz: "Kanallarni davolash" },
        items: [
          { name: { ru: "Эндо лечение 1 канал", uz: "Endo davolash 1 kanal" }, price: "700 000" },
          { name: { ru: "Эндо лечение 2 канала", uz: "Endo davolash 2 kanal" }, price: "1 000 000" },
          { name: { ru: "Эндо лечение 3 канала", uz: "Endo davolash 3 kanal" }, price: "1 300 000" },
          { name: { ru: "Эндо лечение 4 канала", uz: "Endo davolash 4 kanal" }, price: "1 600 000" },
        ],
      },
      {
        label: { ru: "Перелечивание", uz: "Qayta davolash" },
        items: [
          { name: { ru: "Перелечивание 1 канал", uz: "Qayta davolash 1 kanal" }, price: "1 000 000" },
          { name: { ru: "Перелечивание 2 канала", uz: "Qayta davolash 2 kanal" }, price: "1 600 000" },
          { name: { ru: "Перелечивание 3 канала", uz: "Qayta davolash 3 kanal" }, price: "2 200 000" },
          { name: { ru: "Перелечивание 4 канала", uz: "Qayta davolash 4 kanal" }, price: "2 600 000" },
        ],
      },
      {
        label: { ru: "Извлечение и прочее", uz: "Chiqarish va boshqa" },
        items: [
          { name: { ru: "Извлечение инструмента (1 степень)", uz: "Instrumentni chiqarish (1-daraja)" }, price: "700 000" },
          { name: { ru: "Извлечение инструмента (2 степень)", uz: "Instrumentni chiqarish (2-daraja)" }, price: "1 000 000" },
          { name: { ru: "Извлечение инструмента (3 степень)", uz: "Instrumentni chiqarish (3-daraja)" }, price: "1 600 000" },
          { name: { ru: "Извлечение анкерного штифта", uz: "Anker shtiftni chiqarish" }, price: "200 000" },
          { name: { ru: "Извлечение литого штифта", uz: "Quyma shtiftni chiqarish" }, price: "300 000" },
          { name: { ru: "Извлечение стекловолоконного штифта", uz: "Shisha tolali shtiftni chiqarish" }, price: "300 000" },
          { name: { ru: "Ступенька в одном канале", uz: "Bitta kanalda zinapoya" }, price: "250 000" },
          { name: { ru: "МТА", uz: "MTA" }, price: "200 000" },
        ],
      },
    ],
  },
];
