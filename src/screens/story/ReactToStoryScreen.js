import { useUser } from './context/UserContext';
const emojis = ['', '', '', '', '', ''];
const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 10, textAlign: 'right' },
  input: {
    borderWidth: 1, borderColor: '#ccc', borderRadius: 10,
    padding: 10, marginVertical: 10, minHeight: 60
  },
  emojiRow: { flexDirection: 'row', justifyContent: 'space-around', marginVertical: 10 },
  emoji: { fontSize: 28 },
  selected: { fontSize: 32, textShadowColor: '#999', textShadowRadius: 4 }
});

export default ReactToStoryScreen;

// Firestore collection reference: users
// collection(db, "users")

// Firestore collection reference: matches
// collection(db, "matches")

// Firestore collection reference: messages
// collection(db, "messages")

// Firestore collection reference: notifications
// collection(db, "notifications")
