  const auth = getAuth();
  const currentUser = auth.currentUser;
  if (!currentUser) return;
const db = getFirestore();
  if (filters.ageMin && filters.ageMax) {
    q = query(q, where('age', '>{t(t("=', filters.ageMin), where('age', '"))}<=', filters.ageMax));
  }
  const snapshot = await getDocs(q);
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
