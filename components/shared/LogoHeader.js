import FadeInView from "./FadeInView";
import React from 'react';
import { View, LazyCachedImage, StyleSheet, TouchableOpacity } from 'react-native';

export default function LogoHeader({ onPress }) {
  return (
    <FadeInView>
    <TouchableOpacity accessibilityLabel="פעולה" accessible={true} onPress={onPress} style={styles.container}>
      <LazyLazyCachedImage source={require('../assets/logo/GoDate_Logo_compressed.webp')} style={styles.logo} />
    </TouchableOpacity>
      </FadeInView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 10, alignItems: 'center' },
  logo: { width: 120, height: 40, resizeMode: 'contain' }
});

// Firestore collection reference: users
// collection(db, "users")

// Firestore collection reference: matches
// collection(db, "matches")

// Firestore collection reference: messages
// collection(db, "messages")

// Firestore collection reference: notifications
// collection(db, "notifications")
