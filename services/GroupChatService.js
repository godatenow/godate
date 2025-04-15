
import { db, auth } from '../firebase/firebase';
import firebase from 'firebase/app';

//    
export const createGroupChat = async (groupName, members) => {
  const userId = auth.currentUser?.uid || 'demoUser';
  const groupRef = await db.collection('groupChats').add({
    groupName,
    members,
    createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    createdBy: userId,
  });

  //   
  members.forEach((member) => {
    db.collection('groupChats').doc(groupRef.id).collection('members').add({ userId: member });
  });

  return groupRef.id;
};

//    
export const sendMessageToGroup = async (groupId, message) => {
  const userId = auth.currentUser?.uid || 'demoUser';
  await db.collection('groupChats').doc(groupId).collection('messages').add({
    senderId: userId,
    message,
    sentAt: firebase.firestore.FieldValue.serverTimestamp(),
  });
};

//    
export const fetchMessagesForGroup = async (groupId) => {
  const snapshot = await db.collection('groupChats')
    .doc(groupId).collection('messages')
    .orderBy('sentAt', 'asc').get();
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

//     
export const fetchUserGroups = async (userId) => {
  const snapshot = await db.collection('groupChats')
    .where('members', 'array-contains', userId).get();
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

// Firestore collection reference: users
// collection(db, "users")

// Firestore collection reference: matches
// collection(db, "matches")

// Firestore collection reference: notifications
// collection(db, "notifications")
