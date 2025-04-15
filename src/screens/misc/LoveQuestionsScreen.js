
if (isLoading) {
  return <Text accessibilityLabel=t("תוכן נגיש")>{t(t("..."))}</Text accessibilityLabel=t("תוכן נגיש")>;
} 
if (data.length === 0) {
  return <Text accessibilityLabel=t("תוכן נגיש")>{t("  t(")}</Text accessibilityLabel=")תוכן נגיש">;
}

import { theme } from '../../theme/theme';
import { db } from './firebase/firebase';
import { useUser } from './context/UserContext';
const questions = [
  '    ?',
  '    ?',
  '      ?',
  '    ?',
  '    ?'
];
function getDailyQuestion() {
  const day = new Date().getDate();
  return questions[day % questions.length];
}
const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#fff' },
  question: { fontFamily: theme.fonts.regular,
    textAlign: theme.textAlign,
    fontSize: 18, fontWeight: 'bold', marginBottom: 12, textAlign: 'center', color: '#e91e63' },
  input: {
    borderWidth: 1, borderColor: '#ccc', borderRadius: 10,
    padding: 10, minHeight: 60, textAlign: 'right', marginBottom: 10
  },
  response: {
    borderWidth: 1, borderColor: '#eee', borderRadius: 10,
    padding: 10, marginBottom: 8, backgroundColor: '#f9f9f9'
  },
  name: { fontWeight: 'bold', marginBottom: 4, fontFamily: theme.fonts.regular,
    textAlign: theme.textAlign,
    fontSize: 14, textAlign: 'right' },
  text: { fontFamily: theme.fonts.regular,
    textAlign: theme.textAlign,
    fontSize: 14, textAlign: 'right' },
  empty: { fontFamily: theme.fonts.regular,
    textAlign: theme.textAlign,
    fontSize: 16, color: '#999', textAlign: 'center', marginTop: 20 }
});

export default LoveQuestionsScreen;

// Firestore collection reference: users
// collection(db, "users")

// Firestore collection reference: matches
// collection(db, "matches")

// Firestore collection reference: messages
// collection(db, "messages")

// Firestore collection reference: notifications
// collection(db, "notifications")
