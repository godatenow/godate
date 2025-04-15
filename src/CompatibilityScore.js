const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: colors.background,
    alignItems: 'center',
  },
  barContainer: {
    width: '100%',
    height: 20,
    backgroundColor: '#eee',
    borderRadius: 10,
    marginVertical: 12,
  },
  bar: {
    height: '100%',
    borderRadius: 10,
  },
  scoreText: {
    ...typography.body,
  },
});

// Firestore collection reference: users
// collection(db, "users")

// Firestore collection reference: matches
// collection(db, "matches")

// Firestore collection reference: messages
// collection(db, "messages")

// Firestore collection reference: notifications
// collection(db, "notifications")
