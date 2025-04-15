
import { db } from '../firebase/firebase';
import firebase from 'firebase/app';

//   
export const sendStoryReaction = async ({ storyId, userId, text }) => {
  await db.collection('storyReactions').add({
    storyId,
    userId,
    text,
    createdAt: firebase.firestore.FieldValue.serverTimestamp(),
  });
};

//   
export const fetchStoryReactions = async (storyId) => {
  const snapshot = await db
    .collection('storyReactions')
    .where('storyId', '==', storyId)
    .orderBy('createdAt', 'desc')
    .get();
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

// Firestore collection reference: users
// collection(db, "users")

// Firestore collection reference: matches
// collection(db, "matches")

// Firestore collection reference: messages
// collection(db, "messages")

// Firestore collection reference: notifications
// collection(db, "notifications")
