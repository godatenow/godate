import { db } from './firebase/firebase';
const challenges = [
  { id: 'c1', text: '      .' },
  { id: 'c2', text: '     .' },
  { id: 'c3', text: '       .' },
  { id: 'c4', text: '     .' },
  { id: 'c5', text: '      .' }
];
const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#fff' },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 12, textAlign: 'center' },
  card: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 14,
    marginBottom: 10,
    backgroundColor: '#fdfdfd'
  },
  text: { fontSize: 16, marginBottom: 10, textAlign: 'right' },
  button: {
    fontSize: 14,
    color: '#007aff',
    fontWeight: 'bold',
    textAlign: 'left'
  },
  done: {
    fontSize: 14,
    color: 'green',
    fontWeight: 'bold',
    textAlign: 'left'
  }
});

export default LoveChallengesScreen;

// Firestore collection reference: users
// collection(db, "users")

// Firestore collection reference: matches
// collection(db, "matches")

// Firestore collection reference: messages
// collection(db, "messages")

// Firestore collection reference: notifications
// collection(db, "notifications")
