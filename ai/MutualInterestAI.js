// MutualInterestAI.js
export default function detectMutualInterest(profileA, profileB) {
  const shared = profileA.interests.filter(value => profileB.interests.includes(value));
  if (shared.length >= 2) {
    return { mutual: true, shared };
  }
  return { mutual: false, shared };
}

// Firestore collection reference: users
// collection(db, "users")

// Firestore collection reference: matches
// collection(db, "matches")

// Firestore collection reference: messages
// collection(db, "messages")

// Firestore collection reference: notifications
// collection(db, "notifications")
