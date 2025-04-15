// smartOpenerGenerator.js
import generateSmartOpener from '../ai/פתיח רגשי מותאם';

export function getSmartOpener(userProfile) {
  return generateSmartOpener(userProfile);
}

// Firestore collection reference: users
// collection(db, "users")

// Firestore collection reference: matches
// collection(db, "matches")

// Firestore collection reference: messages
// collection(db, "messages")

// Firestore collection reference: notifications
// collection(db, "notifications")
