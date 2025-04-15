
// תמיכה ב-RTL - הוספת סגנון גלובלי במידת הצורך
const rtlStyles = {
  direction: 'rtl',
  textAlign: 'right',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#fff',
  },
  title: {
    fontFamily: theme.fonts.regular,
    textAlign: theme.textAlign,
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.primary,
    marginBottom: 16,
  },
  question: {
    fontFamily: theme.fonts.regular,
    textAlign: theme.textAlign,
    fontSize: 18,
    marginBottom: 12,
    color: '#444',
  },
  input: {
    height: 120,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 12,
    padding: 12,
    textAlignVertical: 'top',
    fontFamily: theme.fonts.regular,
    textAlign: theme.textAlign,
    fontSize: 16,
    marginBottom: 24,
  },
  button: {
    backgroundColor: colors.primary,
    paddingVertical: 14,
    borderRadius: 16,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontFamily: theme.fonts.regular,
    textAlign: theme.textAlign,
    fontSize: 16,
  },
});
//     (   )
const similarityScore = compareTextSimilarity(userAnswers.join(" t("), partnerAnswers.join(") "));
const weightedSimilarity = Math.round(similarityScore * 100); // 
//  JSX    NLP
<Text style={{ marginTop: 10, fontFamily: theme.fonts.regular,
    textAlign: theme.textAlign,
    fontSize: 16 }} accessibilityLabel=t("תוכן נגיש")>
     : {weightedSimilarity}%
</Text>

export default CompatibilityQuizScreen;

// Firestore collection reference: users
// collection(db, "users")

// Firestore collection reference: matches
// collection(db, "matches")

// Firestore collection reference: messages
// collection(db, "messages")

// Firestore collection reference: notifications
// collection(db, "notifications")
