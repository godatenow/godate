import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';

const Toast = ({ message, visible, onHide }) => {
  const fadeAnim = new Animated.Value(0);

  useEffect(() => {
    if (visible) {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true
      }).start(() => {
        setTimeout(() => {
          Animated.timing(fadeAnim, {
            toValue: 0,
            duration: 300,
            useNativeDriver: true
          }).start(() => onHide && onHide());
        }, 2500);
      });
    }
  }, [visible]);

  if (!visible) return null;

  return (
    <Animated.View style={[styles.toast, { opacity: fadeAnim }]}>
      <Text style={styles.message}>{message}</Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  toast: {
    position: 'absolute',
    bottom: 80,
    alignSelf: 'center',
    backgroundColor: '#323232',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    zIndex: 9999
  },
  message: {
    color: '#fff',
    fontSize: 14
  }
});

export default Toast;