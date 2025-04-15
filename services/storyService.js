
import { db, storage } from '../firebase/firebase';
import firebase from 'firebase/app';

//    (  )
export const uploadStory = async ({ userId, type, content }) => {
  const story = {
    userId,
    type,
    content,
    createdAt: firebase.firestore.FieldValue.serverTimestamp(),
  };
  await db.collection('stories').add(story);
};

//    (  )
export const fetchStories = async (userId = null) => {
  let query = db.collection('stories').orderBy('createdAt', 'desc');
  if (userId) query = query.where('userId', '==', userId);
  const snapshot = await query.get();
  return snapshot.docs
    .map(doc => ({ id: doc.id, ...doc.data() }))
    .filter(story => {
      const now = new Date();
      const created = story.createdAt?.toDate?.();
      return created && (now - created) / 1000 < 86400; //  24 
    });
};

//    
export const listenToStories = (callback, userId = null) => {
  let query = db.collection('stories').orderBy('createdAt', 'desc');
  if (userId) query = query.where('userId', '==', userId);
  return query.onSnapshot(snapshot => {
    const stories = snapshot.docs
      .map(doc => ({ id: doc.id, ...doc.data() }))
      .filter(story => {
        const now = new Date();
        const created = story.createdAt?.toDate?.();
        return created && (now - created) / 1000 < 86400;
      });
    callback(stories);
  });
};

// Firestore collection reference: users
// collection(db, "users")

// Firestore collection reference: matches
// collection(db, "matches")

// Firestore collection reference: messages
// collection(db, "messages")

// Firestore collection reference: notifications
// collection(db, "notifications")
