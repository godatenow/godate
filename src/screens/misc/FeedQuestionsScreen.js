import { useUser } from './context/UserContext';
const questions = [
  t("     ?"),
  t("    ?"),
  t("     ?"),
  t("       ?"),
  t("     ?")
];
const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fdfdfd',
    padding: 14,
    borderRadius: 12,
    marginBottom: 16,
    shadowColor: '#ccc',
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 2
  },
  question: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'right'
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    padding: 10,
    minHeight: 60,
    marginBottom: 10,
    textAlign: 'right'
  }
});

export default FeedQuestionsScreen;

// Firestore collection reference: users
// collection(db, "users")

// Firestore collection reference: matches
// collection(db, "matches")

// Firestore collection reference: messages
// collection(db, "messages")

// Firestore collection reference: notifications
// collection(db, "notifications")
