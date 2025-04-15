// compatibilityUtils.js
export function checkCompatibility(userA, userB) {
  if (!userA || !userB) return false;
  const ageDiff = Math.abs(userA.age - userB.age);
  return ageDiff <= 10;
}

// Firestore collection reference: users
// collection(db, "users")

// Firestore collection reference: matches
// collection(db, "matches")

// Firestore collection reference: messages
// collection(db, "messages")

// Firestore collection reference: notifications
// collection(db, "notifications")
