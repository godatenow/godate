import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import LottieView from 'lottie-react-native';

const { width } = Dimensions.get('window');

const LoadingAnimation = () => (
  <View style={styles.container}>
    <LottieView
      source={require('../../assets/animations/loading.json')}
      autoPlay
      loop
      style={styles.animation}
    />
  </View>
);

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  animation: { width: width * 0.6, height: width * 0.6 }
});

export default LoadingAnimation;
// Firestore collection reference: users
// collection(db, "users")

// Firestore collection reference: matches
// collection(db, "matches")

// Firestore collection reference: messages
// collection(db, "messages")

// Firestore collection reference: notifications
// collection(db, "notifications")
