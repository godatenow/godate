import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function MatchCard({ match, onView }) {
  return (
    <TouchableOpacity accessibilityHint="הקש לפעולה" accessible={true} style={styles.card} onPress={() = accessibilityLabel="כפתור פעולה" accessible={true}> onView?.(match)}>
      <Text style={styles.name} accessibilityLabel=t("תוכן נגיש")>{match.name}</Text accessibilityLabel=t("תוכן נגיש")>
      <Text style={styles.details} accessibilityLabel=t("תוכן נגיש")>{match.city} | {match.age} | {match.matchPercentage}% </Text accessibilityLabel=t("תוכן נגיש")>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: { backgroundColor: '#fff0f5', padding: 16, margin: 10, borderRadius: 12, elevation: 2 },
  name: { fontSize: 18, fontWeight: 'bold' },
  details: { fontSize: 14, color: '#555' }
});

// Firestore collection reference: users
// collection(db, "users")

// Firestore collection reference: matches
// collection(db, "matches")

// Firestore collection reference: messages
// collection(db, "messages")

// Firestore collection reference: notifications
// collection(db, "notifications")
