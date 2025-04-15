export function getNextStep(progress) {
  if (progress < 25) return t("   .");
  if (progress < 50) return t("    .");
  if (progress < 75) return t("    .");
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
