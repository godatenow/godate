
// תמיכה ב-RTL - הוספת סגנון גלובלי במידת הצורך
const rtlStyles = {
  direction: 'rtl',
  textAlign: 'right',
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  card: {
    padding: 12,
    marginBottom: 10,
    backgroundColor: '#f4f4f4',
    borderRadius: 8,
  },
  meta: {
    fontSize: 12,
    color: '#666',
    marginTop: 4,
  },
});

export default StoryReactionScreen;

// Firestore collection reference: users
// collection(db, "users")

// Firestore collection reference: matches
// collection(db, "matches")

// Firestore collection reference: messages
// collection(db, "messages")

// Firestore collection reference: notifications
// collection(db, "notifications")
