import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import * as Localization from 'expo-localization';

// Import translations using require
// Import translations
import en from './translations/en.json';
import he from './translations/he.json';


const resources = {
  en: {
    translation: en,
  },
  he: {
    translation: he,
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: Localization.locale.split('-')[0], // Use device language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
    },
  });

export default i18n; 