
import { httpsCallable } from 'firebase/functions';
import { functions } from '../firebase/firebase';

//     
export const askLoveMentor = async (question) => {
  const mentor = httpsCallable(functions, 'loveMentorAI');
  const response = await mentor({ question });
  return response.data.answer;
};

// Firestore collection reference: users
// collection(db, "users")

// Firestore collection reference: matches
// collection(db, "matches")

// Firestore collection reference: messages
// collection(db, "messages")

// Firestore collection reference: notifications
// collection(db, "notifications")
