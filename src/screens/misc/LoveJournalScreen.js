import { theme } from '../../theme/theme';
import { useUser } from './context/UserContext';
const dailyQuestions = [
  t("    ?"),
  t("    ?"),
  t("    / ?"),
  t("     ?"),
  t("     ?"),
  t("     ?"),
  t("      ?")
];
function getDailyQuestion() {
  const day = new Date().getDate();
  return dailyQuestions[day % dailyQuestions.length];
}
const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#fff' },
  title: { fontFamily: theme.fonts.regular,
    textAlign: theme.textAlign,
    fontSize: 20, fontWeight: 'bold', marginBottom: 12, textAlign: 'center' },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    minHeight: 80,
    padding: 10,
    marginBottom: 10,
    textAlign: 'right'
  },
  entry: {
    marginVertical: 8,
    padding: 12,
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#eee'
  },
  entryText: { fontFamily: theme.fonts.regular,
    textAlign: theme.textAlign,
    fontSize: 16, textAlign: 'right' },
  prompt: { fontFamily: theme.fonts.regular,
    textAlign: theme.textAlign,
    fontSize: 16, marginBottom: 6, color: '#333', fontWeight: '600', textAlign: 'right' },
  entryDate: { fontFamily: theme.fonts.regular,
    textAlign: theme.textAlign,
    fontSize: 12, color: '#999', textAlign: 'left', marginTop: 4 }
});

export default LoveJournalScreen;

// Firestore collection reference: users
// collection(db, "users")

// Firestore collection reference: matches
// collection(db, "matches")

// Firestore collection reference: messages
// collection(db, "messages")

// Firestore collection reference: notifications
// collection(db, "notifications")
