import { StyleSheet } from 'react-native';
import colors from './colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: colors.background
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: colors.text
  },
  text: {
    fontSize: 16,
    color: colors.text
  }
});

// Firestore collection reference: users
// collection(db, "users")

// Firestore collection reference: matches
// collection(db, "matches")

// Firestore collection reference: messages
// collection(db, "messages")

// Firestore collection reference: notifications
// collection(db, "notifications")
