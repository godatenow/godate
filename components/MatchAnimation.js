
import FadeInView from "./FadeInView";
import React, { useState, useEffect } from 'react';
import { AccessibilityInfo , View, StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';

const MatchAnimation = () => {
  const [reduceMotionEnabled, setReduceMotionEnabled] = useState(false);

  useEffect(() => {
    AccessibilityInfo.isReduceMotionEnabled().then(setReduceMotionEnabled);
  }, []);

  return (
    <FadeInView>
    <View style={styles.container}>
      <LottieView
        source={require('../assets/animations/match.json')}
        autoPlay
        loop={false}
        style={styles.animation}
      />
    </View>
      </FadeInView>
  );
};

export default MatchAnimation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  animation: {
    width: 300,
    height: 300,
  },
});
