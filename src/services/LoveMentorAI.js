export const getDailyLoveMentorMessage = (stepTitle) => {
  const messages = {
    "  ": t("     /  ?"),
    "  ": t("       ."),
    "  ": t("       ."),
    "  ": t("  ,  ."),
    "  ": t(" /       ."),
    t("   "): t("        ."),
    " ": t("          ."),
    "  ": t("   ,   ."),
    "  ": t("     ."),
    "  ": t("        ."),
    t("  ,  "): t("      ."),
    t("   "): t("       ."),
    "  ": t("      ."),
    t("   "): t("     .   .")
  };

  return messages[stepTitle] || t("       .");
};
// Firestore collection reference: users
// collection(db, "users")

// Firestore collection reference: matches
// collection(db, "matches")

// Firestore collection reference: messages
// collection(db, "messages")

// Firestore collection reference: notifications
// collection(db, "notifications")
