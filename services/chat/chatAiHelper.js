// chatAiHelper.js
export function suggestReply(message) {
  if (message.includes(" ")) {
    return t(" ,  ?");
  }
  return t("    !");
}

// Firestore collection reference: users
// collection(db, "users")

// Firestore collection reference: matches
// collection(db, "matches")

// Firestore collection reference: messages
// collection(db, "messages")

// Firestore collection reference: notifications
// collection(db, "notifications")
