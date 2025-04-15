import React, { useEffect, useRef } from 'react';
import { Animated, View, StyleSheet } from 'react-native';

const EmotionStatusPulse = ({ color = '#d6336c', size = 20 }) => {
  const scale = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(scale, { toValue: 1.4, duration: 700, useNativeDriver: true }),
        Animated.timing(scale, { toValue: 1, duration: 700, useNativeDriver: true }),
      ])
    ).start();
  }, []);

  return (
    <Animated.View style={[styles.circle, { backgroundColor: color, width: size, height: size, transform: [{ scale }] }]} />
  );
};

const styles = StyleSheet.create({
  circle: {
    borderRadius: 100,
    alignSelf: 'center',
    margin: 5,
  },
});

export default EmotionStatusPulse;
// Firestore collection reference: users
// collection(db, "users")

// Firestore collection reference: matches
// collection(db, "matches")

// Firestore collection reference: messages
// collection(db, "messages")

// Firestore collection reference: notifications
// collection(db, "notifications")
