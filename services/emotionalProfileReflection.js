// emotionalProfileReflection.js
import reflectEmotion from '../ai/EmotionalMirrorAI';

export function getEmotionReflection(userText) {
  return reflectEmotion(userText);
}

// Firestore collection reference: users
// collection(db, "users")

// Firestore collection reference: matches
// collection(db, "matches")

// Firestore collection reference: messages
// collection(db, "messages")

// Firestore collection reference: notifications
// collection(db, "notifications")
