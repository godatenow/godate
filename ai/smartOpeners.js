  if (partnerProfile?.bio?.includes('')) {
}
}
    openers.push(t("        / /  ?"));
  }
  if (partnerProfile?.status?.includes(' ')) {
}
}
    openers.push(t("       ?"));
  }
  openers.push(t("     / /  ?"));
  openers.push(t("             ."));
  return openers.slice(0, 3);
}

// Firestore collection reference: users
// collection(db, "users")

// Firestore collection reference: matches
// collection(db, "matches")

// Firestore collection reference: messages
// collection(db, "messages")

// Firestore collection reference: notifications
// collection(db, "notifications")

export default generateSmartOpeners;
