
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import * as Localization from 'expo-localization';

i18n
  .use(initReactI18next)
  .init({
    compatibilityJSON: 'v3',
    lng: Localization.locale.includes('he') ? 'he' : 'en',
    fallbackLng: 'he',
    resources: {
      he: { translation: he }
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;

// Firestore collection reference: users
// collection(db, "users")

// Firestore collection reference: matches
// collection(db, "matches")

// Firestore collection reference: messages
// collection(db, "messages")

// Firestore collection reference: notifications
// collection(db, "notifications")
