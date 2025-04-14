import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    uz: {
      translation: {
        'nav': {
          "destinations": "Yo'nalishlar",
          "hotels": "Mehmonxonalar",
          "flights": "Reyslar",
          "bookings": "Buyurtmalar",
        },
      },
    },
    en: {
      translation: {
        'nav': {
          "destinations": "Destinations",
          "hotels": "Hotels",
          "flights": "Flights",
          "bookings": "Bookings",
        },
      },
    },
    ru: {
      translation: {
        'nav': {
          "destinations": "Направления",
          "hotels": "Отели",
          "flights": "Рейсы",
          "bookings": "Бронирования",
        },
      },
    },
  },
  lng: "ru", // boshlang'ich til
  fallbackLng: "en", // agar tarjima topilmasa, qaysi tilga o'tilsin
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
