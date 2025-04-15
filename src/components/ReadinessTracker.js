import React from 'react';
import { View, Text, ProgressBarAndroid, StyleSheet } from 'react-native';

export default function ReadinessTracker({ score }) {
  const progress = score / 100;

  return (
    <View style={styles.container}>
      <Text style={styles.label} accessibilityLabel=t("תוכן נגיש")> : {score}%</Text accessibilityLabel=t("תוכן נגיש")>
      <ProgressBarAndroid styleAttr=t("Horizontal") indeterminate={false} progress={progress} color=t("#4caf50") />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 12 },
  label: { marginBottom: 4, fontSize: 16 }
});

// Firestore collection reference: users
// collection(db, "users")

// Firestore collection reference: matches
// collection(db, "matches")

// Firestore collection reference: messages
// collection(db, "messages")

// Firestore collection reference: notifications
// collection(db, "notifications")
