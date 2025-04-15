
import { getFunctions, httpsCallable } from 'firebase/functions';
import { app } from './firebase'; // ודא שקובץ firebase.js מגדיר את app

const functions = getFunctions(app);

export const createCheckoutSession = async () => {
  try {
    const createSession = httpsCallable(functions, 'createCheckoutSession');
    const result = await createSession();
    return result.data.url; // מחזיר את הקישור לתשלום
  } catch (error) {
    console.error('Stripe Checkout error:', error);
    throw error;
  }
};
