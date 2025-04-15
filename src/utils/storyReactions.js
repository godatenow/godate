// storyReactions.js
export function getReactionEmoji(type) {
  switch (type) {
    case 'like': return '';
    case 'laugh': return '';
    case 'wow': return '';
    default: return '';
  }
}

// Firestore collection reference: users
// collection(db, "users")

// Firestore collection reference: matches
// collection(db, "matches")

// Firestore collection reference: messages
// collection(db, "messages")

// Firestore collection reference: notifications
// collection(db, "notifications")
