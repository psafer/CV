/**
 * @copyright 2025 Piotr Cierpiał
 * @license Apache-2.0
 */
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
          Available: "Available for work",
          Summary: "Building Scalable Modern Websites for the Future",
          Download: "Download CV",
          Scroll: "Scroll down",
          Aboutme:
            "I’m Piotr, a promising developer with a passion for building scalable and high-performance web applications. While my main focus is web development, my skills extend beyond this field. I am an engineer and a future Master of Engineering, constantly striving to expand my knowledge and refine my programming expertise, as coding is my true passion.",
          Tools: "Essential Tools I use",
          ToolsDesc:
            "Discover the powerful tools and technologies I use to create exceptional, high-performing websites & applications.",
          PortfolioTitle: "My portfolio highlights",
          ContactTitle: "Contact me for collaboration or hiring opportunities.",
          ContactDesc:
            "Reach out today to discuss your project needs or hiring opportunities and start collaborating on something amazing!",
          LetsWork: "Let's work together today!",
          Sitemap: "Sitemap",
          Socials: "Socials",
          StartProject: "Start Project",
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
          Available: "Otwarty na pracę",
          Summary: "Tworzenie Skalowalnych Stron Internetowych",
          Download: "Pobierz CV",
          Scroll: "Zjedź niżej",
          Aboutme:
            "Nazywam się Piotr, jestem obiecującym programistą z pasją do tworzenia skalowalnych i wydajnych aplikacji internetowych. Choć najczęściej skupiam się na web developmentcie, moje umiejętności nie ograniczają się wyłącznie do tej dziedziny. Jestem inżynierem i przyszłym magistrem inżynierem, a moim celem jest nieustanne poszerzanie wiedzy i doskonalenie się w programowaniu, które jest moją prawdziwą pasją.",
          Tools: "Niezbędne narzędzia, których używam",
          ToolsDesc:
            "Poznaj zaawansowane narzędzia i technologie, które wykorzystuję do tworzenia nowoczesnych, wydajnych stron i aplikacji.",
          PortfolioTitle: "Projekty z mojego portfolio",
          ContactTitle:
            "Skontaktuj się ze mną w sprawie współpracy lub możliwości zatrudnienia.",
          ContactDesc:
            "Skontaktuj się ze mną już dziś, aby omówić potrzeby Twojego projektu lub możliwości zatrudnienia i zacząć współpracę nad czymś niesamowitym!",
          LetsWork: "Od dziś pracujmy razem!",
          Sitemap: "Mapa strony",
          Socials: "Media Społecznościowe",
          StartProject: "Zacznij Projekt",
        },
      },
    },
  });

export default i18n;
