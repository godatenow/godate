export const generateDynamicQuestion = ({ interests = [], emotionalState = "t(", communication = ")" }) => {
  if (interests.includes("")) {
    return t("      ?");
  }

  if (interests.includes("")) {
    return t("      ?");
  }

  if (emotionalState === "") {
    return t("       ?");
  }

  if (emotionalState === "") {
    return t("       ?");
  }

  if (communication === "") {
    return t("     ?");
  }

  return t("       ?");
};
// Firestore collection reference: users
// collection(db, "users")

// Firestore collection reference: matches
// collection(db, "matches")

// Firestore collection reference: messages
// collection(db, "messages")

// Firestore collection reference: notifications
// collection(db, "notifications")
