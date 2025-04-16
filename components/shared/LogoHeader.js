import FadeInView from "./FadeInView";
import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import LazyCachedImage from '../components/LazyCachedImage';

export default function LogoHeader({ onPress }) {
  return (
    <FadeInView>
      <TouchableOpacity
        accessibilityLabel="כפתור לוגו"
        accessible={true}
        onPress={onPress}
        style={styles.container}
      >
        <LazyCachedImage
          source={require('../assets/logo/GoDate_Logo_compressed.webp')}
          style={styles.logo}
        />
      </TouchableOpacity>
    </FadeInView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    alignItems: 'center',
  },
  logo: {
    width: 120,
    height: 40,
    resizeMode: 'contain',
  },
});
