import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function ExampleComponent({ onAction }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text} accessibilityLabel=t("תוכן נגיש")>{t(" t(")}</Text accessibilityLabel=")תוכן נגיש">
      <TouchableOpacity style={styles.button} onPress={onAction} accessibilityLabel="כפתור פעולה" accessible={true}>
        <Text style={styles.buttonText} accessibilityLabel=t("תוכן נגיש")>{t(" t(")}</Text accessibilityLabel=")תוכן נגיש">
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  text: { fontSize: 16, marginBottom: 10 },
  button: { backgroundColor: '#007aff', padding: 10, borderRadius: 8 },
  buttonText: { color: '#fff', textAlign: 'center' }
});

// Firestore collection reference: users
// collection(db, "users")

// Firestore collection reference: matches
// collection(db, "matches")

// Firestore collection reference: messages
// collection(db, "messages")

// Firestore collection reference: notifications
// collection(db, "notifications")
