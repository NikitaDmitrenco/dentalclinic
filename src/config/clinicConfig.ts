import { ClinicConfig } from '../types';

export const clinicConfig: ClinicConfig = {
  name: 'ДентаКлиник',
  tagline: 'Современная стоматология с заботой о каждом пациенте',
  description: 'Комплексный подход к здоровью вашей улыбки: от профессиональной гигиены до сложной имплантации и протезирования.',
  
  phoneDisplay: '+7 (495) 123-45-67',
  phoneRaw: '+74951234567',
  email: 'info@dentaclinic-demo.ru',
  
  address: 'г. Москва, ул. Лесная, д. 15',
  addressFallbackText: 'Адрес клиники будет добавлен',
  workingHours: 'Пн-Сб: 09:00 — 20:00, Вс: 10:00 — 18:00',
  
  // Yandex Maps widget embed for Moscow Lesnaya St.
  mapEmbedUrl: 'https://yandex.ru/map-widget/v1/?um=constructor%3A086b9760773d4ee71fb627cb2a9eb786a58efef0d0689b70ca1be83fb9bf9e8a&amp;source=constructor',
  mapRouteUrl: 'https://yandex.ru/maps/?rtext=~55.778891,37.590924',
  mapCoordinates: { lat: 55.778891, lng: 37.590924 },

  isDemoMode: true,

  heroImage: {
    // High-resolution modern dental clinic consultation room photo (Unsplash license)
    url: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80',
    alt: 'Современный стоматологический кабинет с оборудованием',
    width: 1200,
    height: 800,
  },

  aboutImage: {
    url: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1000&q=80',
    alt: 'Консультация врача-стоматолога в клинике',
    width: 1000,
    height: 667,
  },

  aboutText: [
    'В клинике «ДентаКлиник» мы уделяем первостепенное внимание безопасности, чистоте и психоэмоциональному комфорту каждого пациента.',
    'Мы используем проверенные диагностические стандарты и современное оборудование, позволяющее выявлять заболевания зубов на ранних стадиях.',
    'Приём проводится по предварительной записи. Это позволяет выделить достаточно времени на консультацию и подробный разбор вашей ситуации.'
  ],

  services: [
    {
      id: 'consultation',
      title: 'Консультация и диагностика',
      description: 'Первичный осмотр врача-стоматолога, составление детального плана лечения и при необходимости прицельные снимки.',
      price: 'от 1 500 ₽',
      isPriceEstimated: true,
      category: 'Диагностика',
      estimatedDuration: '30-45 минут',
    },
    {
      id: 'caries-treatment',
      title: 'Лечение кариеса',
      description: 'Бережное удаление поражённых тканей зуба с последующим восстановлением анатомической формы светоотверждаемым композитом.',
      price: 'от 3 500 ₽',
      isPriceEstimated: true,
      category: 'Терапия',
      estimatedDuration: '60 минут',
    },
    {
      id: 'hygiene',
      title: 'Профессиональная гигиена',
      description: 'Удаление зубного камня ультразвуком, полировка Air Flow и фторирование для укрепления эмали.',
      price: 'от 4 900 ₽',
      isPriceEstimated: true,
      category: 'Профилактика',
      estimatedDuration: '60 минут',
    },
    {
      id: 'implantation',
      title: 'Имплантация зубов',
      description: 'Восстановление утраченных зубов надежными титановыми имплантатами с пожизненной гарантией производителя.',
      price: 'от 25 000 ₽',
      isPriceEstimated: true,
      category: 'Хирургия',
      estimatedDuration: 'от 60 минут',
    },
    {
      id: 'prosthetics',
      title: 'Протезирование',
      description: 'Установка металлокерамических и циркониевых коронок, виниров и съёмных протезов для идеальной эстетики.',
      price: 'от 18 000 ₽',
      isPriceEstimated: true,
      category: 'Ортопедия',
      estimatedDuration: 'Индивидуально',
    },
    {
      id: 'orthodontics',
      title: 'Ортодонтия',
      description: 'Исправление прикуса и выравнивание зубного ряда с помощью элайнеров и современных брекет-систем.',
      price: 'от 35 000 ₽',
      isPriceEstimated: true,
      category: 'Ортодонтия',
      estimatedDuration: 'Курс лечения',
    },
  ],

  processSteps: [
    {
      stepNumber: 1,
      title: 'Оформление заявки',
      description: 'Вы выбираете услугу или удобное время и отправляете заявку через форму на сайте.',
    },
    {
      stepNumber: 2,
      title: 'Согласование времени',
      description: 'Администратор связывается с вами по телефону, чтобы подтвердить детали и предложить свободных специалистов.',
    },
    {
      stepNumber: 3,
      title: 'Визит в клинику',
      description: 'Вы приходите в назначенное время на приём, проходите осмотр и получаете детальные рекомендации.',
    },
  ],

  reviews: [
    {
      id: 'rev-1',
      authorName: 'Екатерина М.',
      text: 'Внимательное отношение персонала и аккуратность врача. Делала профессиональную гигиену — всё прошло очень спокойно и безболезненно.',
      date: 'Сентябрь 2026',
      source: 'Демонстрационный отзыв',
      isDemo: true,
    },
    {
      id: 'rev-2',
      authorName: 'Алексей В.',
      text: 'Обращался по поводу лечения кариеса. Понравилось, что доктор подробно объяснил все шаги и составил понятную смету перед началом.',
      date: 'Август 2026',
      source: 'Демонстрационный отзыв',
      isDemo: true,
    },
    {
      id: 'rev-3',
      authorName: 'Ольга К.',
      text: 'Чистая современная клиника, вежливый администратор. Записывалась на консультацию по ортодонтии, получила исчерпывающие ответы.',
      date: 'Август 2026',
      source: 'Демонстрационный отзыв',
      isDemo: true,
    },
  ],
};
