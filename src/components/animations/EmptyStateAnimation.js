import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';

const EmptyStateAnimation = ({ message = t("   ") }) => (
  <View style={styles.container}>
    <LottieView
      source={require('../../assets/animations/empty.json')}
      autoPlay
      loop
      style={styles.animation}
    />
    <Text style={styles.text} accessibilityLabel=t("תוכן נגיש")>{message}</Text accessibilityLabel=t("תוכן נגיש")>
  </View>
);

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  animation: { width: 250, height: 250 },
  text: { fontSize: 16, marginTop: 20, color: '#555' }
});

export default EmptyStateAnimation;
// Firestore collection reference: users
// collection(db, "users")

// Firestore collection reference: matches
// collection(db, "matches")

// Firestore collection reference: messages
// collection(db, "messages")

// Firestore collection reference: notifications
// collection(db, "notifications")
