import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    lng: localStorage.getItem("language") || "en",
    fallbackLng: "en",
    resources: {
      en: {
        translation: {
          Home: "Home",
          switch_language: "PL",
          Contact: "Contact me",
          About: "About me",
          Projects: "Projects",
          Skills: "Skills",
        },
      },
      pl: {
        translation: {
          Home: "Strona główna",
          switch_language: "ENG",
          Contact: "Kontakt",
          About: "O mnie",
          Projects: "Projekty",
          Skills: "Umiejętności",
        },
      },
    },
  });

export default i18n;
