
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enCommon from "../locales/en/common.json";
import bnCommon from "../locales/bn/common.json";

const savedLanguage = localStorage.getItem("rmu-language");

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        common: enCommon,
      },
      bn: {
        common: bnCommon,
      },
    },
    lng: savedLanguage === "bn" ? "bn" : "en",
    fallbackLng: "en",
    supportedLngs: ["en", "bn"],
    defaultNS: "common",
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
    },
  });

i18n.on("languageChanged", (language) => {
  localStorage.setItem("rmu-language", language);

  document.documentElement.lang = language;
  document.documentElement.classList.toggle("lang-bn", language === "bn");
});

document.documentElement.lang = i18n.language;
document.documentElement.classList.toggle(
  "lang-bn",
  i18n.language === "bn"
);

export default i18n;
