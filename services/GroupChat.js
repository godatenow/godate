import React from 'react';
// GroupChat.js
export function createGroupChat(users) {
  return {
    id: 'group_' + new Date().getTime(),
    members: users,
    messages: [],
    createdAt: new Date().toISOString()
  };
}

export default {};

// Firestore collection reference: users
// collection(db, "users")

// Firestore collection reference: matches
// collection(db, "matches")

// Firestore collection reference: messages
// collection(db, "messages")

// Firestore collection reference: notifications
// collection(db, "notifications")
