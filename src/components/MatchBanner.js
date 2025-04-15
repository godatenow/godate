import { colors, typography } from '../../theme';
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#fff0f2',
    padding: 24,
    borderRadius: 16,
    marginVertical: 16,
  },
  title: {
    ...typography.heading,
    marginVertical: 8,
    color: colors.primary,
  },
  subtitle: {
    ...typography.body,
    textAlign: 'center',
    marginBottom: 12,
  },
  image: {
    width: 180,
    height: 180,
    marginTop: 10,
    resizeMode: 'contain',
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
