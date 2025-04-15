
// תמיכה ב-RTL - הוספת סגנון גלובלי במידת הצורך
const rtlStyles = {
  direction: 'rtl',
  textAlign: 'right',
};

import { db } from './firebase/firebase';
import { calculateConnectionScore } from './ai/connectionScoreAI';
const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#fff' },
  title: { fontSize: 20, fontWeight: 'bold', textAlign: 'center', marginBottom: 12 },
  card: {
    borderWidth: 1, borderColor: '#ccc', borderRadius: 10,
    padding: 12, marginBottom: 12
  },
  name: { fontSize: 18, fontWeight: 'bold' },
  details: { fontSize: 14, marginTop: 6 },
  score: { fontSize: 14, marginTop: 8, color: '#e91e63', fontWeight: 'bold' }
});

export default ConnectionMapScreen;

// Firestore collection reference: users
// collection(db, "users")

// Firestore collection reference: matches
// collection(db, "matches")

// Firestore collection reference: messages
// collection(db, "messages")

// Firestore collection reference: notifications
// collection(db, "notifications")
