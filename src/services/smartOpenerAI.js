//       / 
export const generateSmartOpener = ({ name, interests = [], style = "" }) => {
  const base = name ? ` ${name}, ` : ", ";

  if (style === "") {
    return base + t("   ,     ?");
  }

  if (style === "") {
    return base + t("         :   ?");
  }

  if (interests.includes("")) {
    return base + t("      ?");
  }

  if (interests.includes("")) {
    return base + t("         ?");
  }

  if (interests.includes("")) {
    return base + t("        ?");
  }

  return base + t("     ?");
};
// Firestore collection reference: users
// collection(db, "users")

// Firestore collection reference: matches
// collection(db, "matches")

// Firestore collection reference: messages
// collection(db, "messages")

// Firestore collection reference: notifications
// collection(db, "notifications")
