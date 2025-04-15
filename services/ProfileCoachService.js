
import { httpsCallable } from 'firebase/functions';
import { functions } from '../firebase/firebase';

//   מנגנון חכם   
export const getProfileRecommendations = async (profileData) => {
  const coach = httpsCallable(functions, 'aiProfileCoach');
  const response = await coach({ profile: profileData });
  return response.data.recommendations;
};

// Firestore collection reference: users
// collection(db, "users")

// Firestore collection reference: matches
// collection(db, "matches")

// Firestore collection reference: messages
// collection(db, "messages")

// Firestore collection reference: notifications
// collection(db, "notifications")
