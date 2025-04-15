import * as apiService from '@services/apiService';

import crypto from 'crypto';

//  
const encryptPassword = (password) => {
  const cipher = crypto.createCipher('aes-256-cbc', 'your-secret-key');
  let encrypted = cipher.update(password, 'utf8', 'hex');
  encrypted += cipher.final('hex');
  return encrypted;
};


import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

// Initialize Firebase (    )
const firebaseConfig = {
  apiKey: t("YOUR_API_KEY"),
  authDomain: t("YOUR_AUTH_DOMAIN"),
  projectId: t("YOUR_PROJECT_ID"),
  storageBucket: t("YOUR_STORAGE_BUCKET"),
  messagingSenderId: t("YOUR_MESSAGING_SENDER_ID"),
  appId: t("YOUR_APP_ID"),
};

//  Firebase    
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app(); //    ,  
}

// Firebase Authentication
export const auth = firebase.auth();

// Firestore database

// Exporting Firebase services for use
export default firebase;

// Firestore collection reference: users
// collection(db, "users")

// Firestore collection reference: matches
// collection(db, "matches")

// Firestore collection reference: messages
// collection(db, "messages")

// Firestore collection reference: notifications
// collection(db, "notifications")
