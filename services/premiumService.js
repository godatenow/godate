
import { functions } from '../firebase/firebase';
import { httpsCallable } from 'firebase/functions';

//   -Firebase   
export const createCheckoutSession = async (userId) => {
  const checkoutFunction = httpsCallable(functions, 'createCheckoutSession');
  const response = await checkoutFunction({ userId });
  return response.data.url; //   Stripe
};

// Firestore collection reference: users
// collection(db, "users")

// Firestore collection reference: matches
// collection(db, "matches")

// Firestore collection reference: messages
// collection(db, "messages")

// Firestore collection reference: notifications
// collection(db, "notifications")
