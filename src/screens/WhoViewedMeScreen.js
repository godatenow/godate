
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useUserData } from '../hooks/useUserData';
import { theme } from '../theme/theme';

const WhoViewedMeScreen = () => {
  const { isPremium } = useUserData();

  if (!isPremium) {
    return (
      <View style={styles.center}>
        <Text style={styles.locked}>פיצ'ר זה זמין למנויי פרימיום בלבד.</Text>
      </View>
    );
  }

  return (
    <View style={styles.center}>
      <Text style={styles.title}>מי צפה בי</Text>
      <Text style={styles.subtitle}>(דמו) משתמשים שצפו בפרופיל שלך יוצגו כאן</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  title: {
    fontSize: 24,
    fontFamily: theme.fonts.bold,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    fontFamily: theme.fonts.regular,
    color: '#666',
  },
  locked: {
    fontSize: 18,
    fontFamily: theme.fonts.regular,
    color: '#ff4444',
  },
});

export default WhoViewedMeScreen;
