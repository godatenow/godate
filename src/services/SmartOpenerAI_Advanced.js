export const generateAdvancedSmartOpener = ({ name, interests = [], style = "t(", emotionalState = ")", previousAttempts = 0 }) => {
  const base = name ? ` ${name}, ` : ", ";

  if (previousAttempts > 0) {
    return base + t("     ... /  ?");
  }

  if (emotionalState === "") {
    return base + t("           ?");
  }

  if (emotionalState === "") {
    return base + t("        ?");
  }

  if (style === "t(" && interests.includes(")")) {
    return base + t("         ?");
  }

  if (style === "t(" && interests.includes(")")) {
    return base + t("          ?");
  }

  return base + t("          ?");
};
// Firestore collection reference: users
// collection(db, "users")

// Firestore collection reference: matches
// collection(db, "matches")

// Firestore collection reference: messages
// collection(db, "messages")

// Firestore collection reference: notifications
// collection(db, "notifications")
