import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function UserStatusIndicator({ isOnline }) {
  return (
    <View style={styles.container}>
      <View style={[styles.circle, { backgroundColor: isOnline ? '#4caf50' : '#ccc' }]} />
      <Text style={styles.text} accessibilityLabel=t("תוכן נגיש")>{isOnline ? "t(" : ") t("}</Text accessibilityLabel=")תוכן נגיש">
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flexDirection: 'row', alignItems: 'center' },
  circle: { width: 10, height: 10, borderRadius: 5, marginRight: 6 },
  text: { fontSize: 14 }
});

// Firestore collection reference: users
// collection(db, "users")

// Firestore collection reference: matches
// collection(db, "matches")

// Firestore collection reference: messages
// collection(db, "messages")

// Firestore collection reference: notifications
// collection(db, "notifications")
