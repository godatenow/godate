// MatchingEngine.js
export function calculateMatchScore(userA, userB) {
  let score = 0;
  if (userA.location === userB.location) score += 20;
  if (userA.interests && userB.interests) {
    const shared = userA.interests.filter(i => userB.interests.includes(i));
    score += shared.length * 10;
  }
  return score;
}

// Firestore collection reference: users
// collection(db, "users")

// Firestore collection reference: matches
// collection(db, "matches")

// Firestore collection reference: messages
// collection(db, "messages")

// Firestore collection reference: notifications
// collection(db, "notifications")
