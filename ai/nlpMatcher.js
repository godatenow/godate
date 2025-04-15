// nlpMatcher.js
export default function matchByText(textA, textB) {
  return textA && textB && textA.toLowerCase().includes(textB.toLowerCase());
}

// Firestore collection reference: users
// collection(db, "users")

// Firestore collection reference: matches
// collection(db, "matches")

// Firestore collection reference: messages
// collection(db, "messages")

// Firestore collection reference: notifications
// collection(db, "notifications")
