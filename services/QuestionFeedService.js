
import { db, auth } from '../firebase/firebase';
import firebase from 'firebase/app';

//    
export const postQuestion = async (text) => {
  const userId = auth.currentUser?.uid || 'demoUser';
  await db.collection('questionsFeed').add({
    userId,
    text,
    createdAt: firebase.firestore.FieldValue.serverTimestamp(),
  });
};

//    
export const fetchQuestions = async () => {
  const snapshot = await db.collection('questionsFeed')
    .orderBy('createdAt', 'desc')
    .get();
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

//   
export const postAnswerToQuestion = async (questionId, text) => {
  const userId = auth.currentUser?.uid || 'demoUser';
  await db.collection('questionsFeed').doc(questionId)
    .collection('answers').add({
      userId,
      text,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });
};

//   
export const fetchAnswersForQuestion = async (questionId) => {
  const snapshot = await db.collection('questionsFeed')
    .doc(questionId).collection('answers')
    .orderBy('createdAt', 'asc').get();
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
