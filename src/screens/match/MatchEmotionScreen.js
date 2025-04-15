
// תמיכה ב-RTL - הוספת סגנון גלובלי במידת הצורך
const rtlStyles = {
  direction: 'rtl',
  textAlign: 'right',
};

const styles = StyleSheet.create({
  container: {
    flex: 1, padding: 20, alignItems: 'center', justifyContent: 'center',
    backgroundColor: '#fff'
  },
  title: {
    fontSize: 24, fontWeight: 'bold', color: '#e91e63', marginBottom: 16
  },
  subtitle: {
    fontSize: 16, fontWeight: '600', marginTop: 12, marginBottom: 4
  },
  values: {
    fontSize: 16, color: '#555', marginBottom: 12, textAlign: 'center'
  },
  opener: {
    fontSize: 16, color: '#333', fontStyle: 'italic', textAlign: 'center', marginBottom: 20
  }
});

export default MatchEmotionScreen;

// Firestore collection reference: users
// collection(db, "users")

// Firestore collection reference: matches
// collection(db, "matches")

// Firestore collection reference: messages
// collection(db, "messages")

// Firestore collection reference: notifications
// collection(db, "notifications")
