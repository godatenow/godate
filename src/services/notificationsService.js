
import messaging from '@react-native-firebase/messaging';
import { getFirestore, doc, setDoc } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { app } from './firebase';

const db = getFirestore(app);
const auth = getAuth(app);

export const registerForPushNotifications = async () => {
  const authUser = auth.currentUser;
  if (!authUser) return;

  const permission = await messaging().requestPermission();
  if (permission === messaging.AuthorizationStatus.AUTHORIZED || permission === messaging.AuthorizationStatus.PROVISIONAL) {
    const token = await messaging().getToken();

    const userRef = doc(db, 'users', authUser.uid);
    await setDoc(userRef, { fcmToken: token }, { merge: true });
    console.log('FCM Token saved to Firestore:', token);
  } else {
    console.log('Notification permission denied');
  }
};
