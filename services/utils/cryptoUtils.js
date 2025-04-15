// cryptoUtils.js
import CryptoJS from 'crypto-js';

export function encryptData(data, secret) {
  return CryptoJS.AES.encrypt(JSON.stringify(data), secret).toString();
}

export function decryptData(ciphertext, secret) {
  const bytes = CryptoJS.AES.decrypt(ciphertext, secret);
  return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
}

// Firestore collection reference: users
// collection(db, "users")

// Firestore collection reference: matches
// collection(db, "matches")

// Firestore collection reference: messages
// collection(db, "messages")

// Firestore collection reference: notifications
// collection(db, "notifications")
