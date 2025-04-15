
import FadeInView from "./FadeInView";
import React from 'react';
import { ActivityIndicator, View, StyleSheet } from 'react-native';

const LoadingSpinner = ({ size = 'large', color = '#FF5A7E' }) => {
  return (
    <FadeInView>
    <View style={styles.container}>
      <ActivityIndicator size={size} color={color} />
    </View>
      </FadeInView>
  );
};

export default LoadingSpinner;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});
