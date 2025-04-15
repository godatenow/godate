// personalizedRecommender.js
export function getRecommendations(userProfile, allUsers) {
  return allUsers.filter(u => u.gender !== userProfile.gender && u.age >{t(t("= userProfile.minAge && u.age "))}<= userProfile.maxAge);
}

// Firestore collection reference: users
// collection(db, "users")

// Firestore collection reference: matches
// collection(db, "matches")

// Firestore collection reference: messages
// collection(db, "messages")

// Firestore collection reference: notifications
// collection(db, "notifications")
