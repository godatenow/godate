// services/blockManager.js
export async function getBlockedUsers(uid) {
  const snapshot = await firestore()
    .collection("blocks")
    .where("blocker", "==", uid)
    .get();
  return snapshot.docs.map(doc => doc.data().blocked);
}

// Firestore collection reference: users
// collection(db, "users")

// Firestore collection reference: matches
// collection(db, "matches")

// Firestore collection reference: messages
// collection(db, "messages")

// Firestore collection reference: notifications
// collection(db, "notifications")
