import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enNavbar from "@/utils/locales/en/navbar/navbar.json";
import esNavbar from "@/utils/locales/es/navbar/navbar.json";
import enHero from "@/utils/locales/en/hero/hero.json";
import esHero from "@/utils/locales/es/hero/hero.json";
import enAbout from "@/utils/locales/en/about/about.json";
import esAbout from "@/utils/locales/es/about/about.json";
import enExperience from "@/utils/locales/en/experience/experience.json";
import esExperience from "@/utils/locales/es/experience/experience.json";
import enProject from "@/utils/locales/en/project/project.json";
import esProject from "@/utils/locales/es/project/project.json";
import enTechnologies from "@/utils/locales/en/technologies/technologies.json";
import esTechnologies from "@/utils/locales/es/technologies/technologies.json";
import enContact from "@/utils/locales/en/contact/contact.json";
import esContact from "@/utils/locales/es/contact/contact.json";

const SUPPORTED_LANGUAGES = ["en", "es"] as const;
type SupportedLanguage = (typeof SUPPORTED_LANGUAGES)[number];

const isValidLanguage = (
  lng: string | null
): lng is SupportedLanguage =>
  SUPPORTED_LANGUAGES.includes(lng as SupportedLanguage);

const pathLangMatch = window.location.pathname.match(/^\/([^/]+)/);
const langFromUrl = pathLangMatch?.[1] ?? null;

const detectedLanguage = isValidLanguage(langFromUrl)
  ? langFromUrl
  : null;

const langFromStorage = localStorage.getItem("language");

const initialLanguage: SupportedLanguage =
  (isValidLanguage(langFromStorage) && langFromStorage) ||
  detectedLanguage ||
  "en";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        navbar: enNavbar,
        hero: enHero,
        about: enAbout,
        experience: enExperience,
        project: enProject,
        technologies: enTechnologies,
        contact: enContact,
      },
      es: {
        navbar: esNavbar,
        hero: esHero,
        about: esAbout,
        experience: esExperience,
        project: esProject,
        technologies: esTechnologies,
        contact: esContact,
      },
    },
    lng: initialLanguage,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

i18n.on("languageChanged", (lng) => {
  if (isValidLanguage(lng)) {
    localStorage.setItem("language", lng);
  } else {
    localStorage.setItem("language", "en");
  }
});

export default i18n;