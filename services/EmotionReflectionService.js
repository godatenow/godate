
import { httpsCallable } from 'firebase/functions';
import { functions } from '../firebase/firebase';

//     (Emotion Reflection)
export const getEmotionReflection = async (answers) => {
  const reflect = httpsCallable(functions, 'emotionReflection');
  const response = await reflect({ answers });
  return response.data.summary;
};

// Firestore collection reference: users
// collection(db, "users")

// Firestore collection reference: matches
// collection(db, "matches")

// Firestore collection reference: messages
// collection(db, "messages")

// Firestore collection reference: notifications
// collection(db, "notifications")
