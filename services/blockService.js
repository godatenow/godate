import React from 'react';

import { getFirestore, doc, updateDoc, arrayUnion, arrayRemove, getDoc } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const db = getFirestore();
const auth = getAuth();

export const blockUser = async (targetUserId) => {
  const currentUserId = auth.currentUser.uid;
  const userRef = doc(db, 'users', currentUserId);
  await updateDoc(userRef, {
    blocked: arrayUnion(targetUserId),
  });
};

export const unblockUser = async (targetUserId) => {
  const currentUserId = auth.currentUser.uid;
  const userRef = doc(db, 'users', currentUserId);
  await updateDoc(userRef, {
    blocked: arrayRemove(targetUserId),
  });
};

export const getBlockedUsers = async () => {
  const currentUserId = auth.currentUser.uid;
  const userRef = doc(db, 'users', currentUserId);
  const docSnap = await getDoc(userRef);
  const blockedIds = docSnap.data().blocked || [];

  const blockedUsers = [];
  for (let uid of blockedIds) {
    const uRef = doc(db, 'users', uid);
    const uSnap = await getDoc(uRef);
    if (uSnap.exists()) {
      blockedUsers.push({ id: uid, ...uSnap.data() });
    }
  }
  return blockedUsers;
};

export default {};

// Firestore collection reference: matches
// collection(db, "matches")

// Firestore collection reference: messages
// collection(db, "messages")

// Firestore collection reference: notifications
// collection(db, "notifications")
