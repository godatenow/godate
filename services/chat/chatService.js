
import firebase from 'firebase/app';

//   ' 
export const sendMessage = async (chatId, senderId, messageText) => {
  const message = {
    text: messageText,
    senderId,
    createdAt: firebase.firestore.FieldValue.serverTimestamp(),
  };
  await db.collection('chats').doc(chatId).collection('messages').add(message);
};

//    ' (real-time listener)
export const listenToMessages = (chatId, callback) => {
  return db
    .collection('chats')
    .doc(chatId)
    .collection('messages')
    .orderBy('createdAt', 'asc')
    .onSnapshot(snapshot => {
      const messages = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
      callback(messages);
    });
};

// Firestore collection reference: users
// collection(db, "users")

// Firestore collection reference: matches
// collection(db, "matches")

// Firestore collection reference: notifications
// collection(db, "notifications")
