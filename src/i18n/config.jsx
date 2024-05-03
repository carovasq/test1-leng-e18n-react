import i18n from "i18next";

import { initReactI18next } from "react-i18next";
import esTranslation from "./lang/es.json";
import enTranslation from "./lang/en.json";



i18n.use(initReactI18next).init({
  lng: "es",
  fallbackLng: "en",
  debug: true,

  interpolation: {
    escapeValue: false,
  },

  resources: {
    en: enTranslation,
    es: esTranslation,
  },
});



export default i18n;
