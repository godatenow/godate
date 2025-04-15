export const mirrorEmotion = (text) => {
  const lowered = text.toLowerCase();

  if (lowered.includes("") || lowered.includes("") || lowered.includes(" "))
    return "       .";

  if (lowered.includes("") || lowered.includes("  ") || lowered.includes(""))
    return "     .";

  if (lowered.includes(" ") || lowered.includes("") || lowered.includes(""))
    return "   ,   .";

  if (lowered.includes("") || lowered.includes("") || lowered.includes(""))
    return "     .";

  return "       .";
};
// Firestore collection reference: users
// collection(db, "users")

// Firestore collection reference: matches
// collection(db, "matches")

// Firestore collection reference: messages
// collection(db, "messages")

// Firestore collection reference: notifications
// collection(db, "notifications")
