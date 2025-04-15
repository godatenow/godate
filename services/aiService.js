  if (user1.goals && user2.goals && user1.goals === user2.goals) score += 20;
  if (user1.lifestyle && user2.lifestyle && user1.lifestyle === user2.lifestyle) score += 20;
  return Math.min(score, 100);
};

// Firestore collection reference: users
// collection(db, "users")

// Firestore collection reference: matches
// collection(db, "matches")

// Firestore collection reference: messages
// collection(db, "messages")

// Firestore collection reference: notifications
// collection(db, "notifications")
