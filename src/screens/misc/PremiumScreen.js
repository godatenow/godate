
// תמיכה ב-RTL - הוספת סגנון גלובלי במידת הצורך
const rtlStyles = {
  direction: 'rtl',
  textAlign: 'right',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  image: {
    width: 160,
    height: 160,
    marginBottom: 24,
  },
  title: {
    fontFamily: theme.fonts.regular,
    textAlign: theme.textAlign,
    fontSize: 26,
    fontWeight: 'bold',
    color: colors.primary,
    marginBottom: 12,
  },
  subtitle: {
    fontFamily: theme.fonts.regular,
    textAlign: theme.textAlign,
    fontSize: 18,
    color: '#555',
    marginBottom: 16,
    textAlign: 'center',
  },
  benefitBox: {
    marginBottom: 24,
    alignItems: 'flex-start',
  },
  benefit: {
    fontFamily: theme.fonts.regular,
    textAlign: theme.textAlign,
    fontSize: 16,
    marginBottom: 6,
    color: '#333',
  },
  button: {
    backgroundColor: colors.primary,
    paddingVertical: 14,
    paddingHorizontal: 32,
    borderRadius: 16,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontFamily: theme.fonts.regular,
    textAlign: theme.textAlign,
    fontSize: 16,
  },
});
export default PremiumScreen;

// Firestore collection reference: users
// collection(db, "users")

// Firestore collection reference: matches
// collection(db, "matches")

// Firestore collection reference: messages
// collection(db, "messages")

// Firestore collection reference: notifications
// collection(db, "notifications")
