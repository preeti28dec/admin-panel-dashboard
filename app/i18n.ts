import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import i18nBackend from "i18next-http-backend";
import Italian from "../app/language/it";
import Hindi from "../app/language/hi";
import English from "../app/language/en";

i18n
  .use(i18nBackend)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    lng: "en",
    interpolation: {
      escapeValue: false,
    },
    backend: {
      loadPath: `${window.location.origin}/i18n/{{lng}}.json`,
    },
    resources: {
      en: {
        translation:English
      },
      hi: {
        translation: Hindi
      },
      it: {
        translation: Italian
      },
    },
  });

export default i18n;