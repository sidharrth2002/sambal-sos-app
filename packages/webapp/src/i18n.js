import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./translations/en/translations.json";
import malay from "./translations/malay/translations.json";
import cn from "./translations/cn/translations.json";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)

export const resources = {
  English: {
    translation: en,
  },
  "Bahasa Malaysia": {
    translation: malay,
  },
  中文: {
    translation: cn,
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "Bahasa Malaysia", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
