const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'right',
  },
  text: {
    fontSize: 16,
    marginBottom: 12,
    textAlign: 'right',
    lineHeight: 24,
  },
  disclaimer: {
    fontSize: 14,
    marginTop: 24,
    color: '#888',
    textAlign: 'center',
  },
});

export default AboutScreen;

// Firestore collection reference: users
// collection(db, "users")

// Firestore collection reference: matches
// collection(db, "matches")

// Firestore collection reference: messages
// collection(db, "messages")

// Firestore collection reference: notifications
// collection(db, "notifications")
