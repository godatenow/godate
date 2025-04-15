// connectionScoreAI.js
export default function calculateConnectionScore(profileA, profileB) {
  let score = 0;
  if (profileA.values && profileB.values) {
    const shared = profileA.values.filter(v => profileB.values.includes(v));
    score += shared.length * 15;
  }
  return Math.min(score, 100);
}

// Firestore collection reference: users
// collection(db, "users")

// Firestore collection reference: matches
// collection(db, "matches")

// Firestore collection reference: messages
// collection(db, "messages")

// Firestore collection reference: notifications
// collection(db, "notifications")
