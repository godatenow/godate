  if (finalStatus !== 'granted') return;
  const tokenData = await Notifications.getExpoPushTokenAsync();
  const token = tokenData.data;
  const auth = getAuth();
  const db = getFirestore();
  const user = auth.currentUser;
  if (!user) return;
  const ref = doc(db, 'users', user.uid);
  await updateDoc(ref, { pushToken: token });
  return token;
}

// Firestore collection reference: matches
// collection(db, "matches")

// Firestore collection reference: messages
// collection(db, "messages")

// Firestore collection reference: notifications
// collection(db, "notifications")
