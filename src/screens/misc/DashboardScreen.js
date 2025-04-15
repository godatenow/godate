
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
    justifyContent: 'center',
  },
  welcome: {
    fontFamily: theme.fonts.regular,
    textAlign: theme.textAlign,
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    color: colors.primary,
    marginBottom: 16,
  },
  subtitle: {
    fontFamily: theme.fonts.regular,
    textAlign: theme.textAlign,
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 32,
    color: '#555',
  },
  card: {
    backgroundColor: '#f9f9f9',
    padding: 20,
    marginBottom: 16,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#ddd',
    alignItems: 'center',
  },
  cardText: {
    fontFamily: theme.fonts.regular,
    textAlign: theme.textAlign,
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
});
export default DashboardScreen;

// Firestore collection reference: users
// collection(db, "users")

// Firestore collection reference: matches
// collection(db, "matches")

// Firestore collection reference: messages
// collection(db, "messages")

// Firestore collection reference: notifications
// collection(db, "notifications")
