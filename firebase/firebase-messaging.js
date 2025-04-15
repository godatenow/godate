
import firebase from 'firebase/app';
import 'firebase/messaging';

//  Firebase Messaging
const messaging = firebase.messaging();

//    
export const requestPermission = async () => {
  try {
    await messaging.requestPermission();
    const token = await messaging.getToken();
    // // console.log removed removed(t("Token:"), token);
    return token;
  } catch (error) {
    console.error(t("Permission denied"), error);
  }
};

//   
export const onMessageListener = () => new Promise((resolve) => {
  messaging.onMessage((payload) => {
    // // console.log removed removed(t("Message received: "), payload);
    resolve(payload);
  });
});

// Firestore collection reference: users
// collection(db, "users")

// Firestore collection reference: matches
// collection(db, "matches")

// Firestore collection reference: messages
// collection(db, "messages")

// Firestore collection reference: notifications
// collection(db, "notifications")
