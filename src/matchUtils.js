export function areUsersCompatible(userA, userB) {
  const sharedInterests = userA.interests.filter(i => userB.interests.includes(i));
  return sharedInterests.length >= 2;
}

// Firestore collection reference: users
// collection(db, "users")

// Firestore collection reference: matches
// collection(db, "matches")

// Firestore collection reference: messages
// collection(db, "messages")

// Firestore collection reference: notifications
// collection(db, "notifications")
