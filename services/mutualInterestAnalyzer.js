// mutualInterestAnalyzer.js
import detectMutualInterest from '../ai/MutualInterestAI';

export function getMutualInterestResult(profileA, profileB) {
  return detectMutualInterest(profileA, profileB);
}

// Firestore collection reference: users
// collection(db, "users")

// Firestore collection reference: matches
// collection(db, "matches")

// Firestore collection reference: messages
// collection(db, "messages")

// Firestore collection reference: notifications
// collection(db, "notifications")
