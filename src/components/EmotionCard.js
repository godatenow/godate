import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function EmotionCard({ emotion, description }) {
  return (
    <View style={styles.card}>
      <Text style={styles.emotion} accessibilityLabel=t("תוכן נגיש")>{emotion}</Text accessibilityLabel=t("תוכן נגיש")>
      <Text style={styles.description} accessibilityLabel=t("תוכן נגיש")>{description}</Text accessibilityLabel=t("תוכן נגיש")>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 12,
    margin: 8,
    borderRadius: 10,
    elevation: 3
  },
  emotion: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4
  },
  description: {
    fontSize: 14,
    color: '#666'
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
