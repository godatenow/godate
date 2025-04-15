
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { theme } from '../theme/theme';

const ProfileStatsScreen = () => {
  // נתוני דמו – להחליף בנתונים אמתיים בהמשך
  const stats = {
    views: 43,
    likes: 17,
    matches: 6,
    avgResponseTime: 'שעתיים',
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>אנליטיקה אישית – הפרופיל שלך</Text>
      <View style={styles.stat}>
        <Text style={styles.label}>צפיות בפרופיל:</Text>
        <Text style={styles.value}>{stats.views}</Text>
      </View>
      <View style={styles.stat}>
        <Text style={styles.label}>לייקים שקיבלת:</Text>
        <Text style={styles.value}>{stats.likes}</Text>
      </View>
      <View style={styles.stat}>
        <Text style={styles.label}>התאמות שבוצעו:</Text>
        <Text style={styles.value}>{stats.matches}</Text>
      </View>
      <View style={styles.stat}>
        <Text style={styles.label}>זמן תגובה ממוצע:</Text>
        <Text style={styles.value}>{stats.avgResponseTime}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: '#fff',
    flex: 1,
  },
  title: {
    fontSize: 22,
    fontFamily: theme.fonts.bold,
    marginBottom: 20,
    textAlign: theme.textAlign,
  },
  stat: {
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    marginBottom: 16,
    borderBottomWidth: 1,
    borderColor: '#eee',
    paddingBottom: 6,
  },
  label: {
    fontSize: 16,
    fontFamily: theme.fonts.regular,
    color: '#444',
  },
  value: {
    fontSize: 16,
    fontFamily: theme.fonts.bold,
    color: '#000',
  },
});

export default ProfileStatsScreen;
