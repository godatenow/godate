
import React from 'react';
import { ActivityIndicator, View, StyleSheet } from 'react-native';

const LoadingState = () => (
  <View style={styles.container}>
    <ActivityIndicator size="large" color="#ff5a7e" />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 32
  },
});

export default LoadingState;
