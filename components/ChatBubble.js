import FadeInView from "./FadeInView";
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ChatBubble({ message }) {
  return (
    <FadeInView>
    <View accessibilityLabel="View component" style={styles.bubble}>
      <Text accessibilityLabel=t("תוכן נגיש")>{message}</Text accessibilityLabel=t("תוכן נגיש")>
    </View>
      </FadeInView>
  );
}

const styles = StyleSheet.create({
  bubble: { padding: 10, backgroundColor: '#f0f0f0', margin: 5, borderRadius: 10 }
});

// Firestore collection reference: users
// collection(db, "users")

// Firestore collection reference: matches
// collection(db, "matches")

// Firestore collection reference: messages
// collection(db, "messages")

// Firestore collection reference: notifications
// collection(db, "notifications")
