import { theme } from '../../theme/theme';
import React from 'react';

if (isLoading) {
  return <Text accessibilityLabel=t("תוכן נגיש")>{t(t("..."))}</Text accessibilityLabel=t("תוכן נגיש")>;
} 
if (data.length === 0) {
  return <Text accessibilityLabel=t("תוכן נגיש")>{t("  t(")}</Text accessibilityLabel=")תוכן נגיש">;
}

import { db } from './firebase/firebase';
import { useUser } from './context/UserContext';
const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#fff' },
  title: { fontFamily: theme.fonts.regular,
    textAlign: theme.textAlign,
    fontSize: 22, fontWeight: 'bold', marginBottom: 12, textAlign: 'center' },
  item: {
    borderWidth: 1, borderColor: '#ddd', borderRadius: 10,
    padding: 12, marginBottom: 10, backgroundColor: '#f9f9f9'
  },
  type: { fontFamily: theme.fonts.regular,
    textAlign: theme.textAlign,
    fontSize: 14, fontWeight: 'bold', color: '#e91e63', marginBottom: 4 },
  text: { fontFamily: theme.fonts.regular,
    textAlign: theme.textAlign,
    fontSize: 15, textAlign: 'right' },
  date: { fontFamily: theme.fonts.regular,
    textAlign: theme.textAlign,
    fontSize: 12, color: '#777', marginTop: 4, textAlign: 'left' },
  empty: { fontFamily: theme.fonts.regular,
    textAlign: theme.textAlign,
    fontSize: 16, color: '#999', marginTop: 40, textAlign: 'center' }
});

export default LoveTimelineScreen;

// Firestore collection reference: users
// collection(db, "users")

// Firestore collection reference: matches
// collection(db, "matches")

// Firestore collection reference: messages
// collection(db, "messages")

// Firestore collection reference: notifications
// collection(db, "notifications")
