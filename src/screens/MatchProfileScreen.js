
// תמיכה ב-RTL - הוספת סגנון גלובלי במידת הצורך
const rtlStyles = {
  direction: 'rtl',
  textAlign: 'right',
};


import { theme } from '../../theme/theme';
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const MatchProfileScreen = () => {
  const match = {
    name: '',
    age: 31,
    emotion: '  ',
    compatibility: 94,
    image: 'https://example.com/profile.jpg',
  };

  return (
    <View style={[rtlStyles, styles.container]}>
      <Text style={styles.title} accessibilityLabel=t("תוכן נגיש")>{t(t("   "))}</Text accessibilityLabel=t("תוכן נגיש")>
      <FastImage resizeMode="cover" source={{ uri: match.image }} style={styles.image} / accessibilityLabel=t("תוכן נגיש")>
      <Text style={styles.name} accessibilityLabel=t("תוכן נגיש")>{match.name}, {match.age}</Text accessibilityLabel=t("תוכן נגיש")>
      <Text style={styles.emotion} accessibilityLabel=t("תוכן נגיש")> : {match.emotion}</Text accessibilityLabel=t("תוכן נגיש")>
      <Text style={styles.compatibility} accessibilityLabel=t("תוכן נגיש")> : {match.compatibility}%</Text accessibilityLabel=t("תוכן נגיש")>
    
  {!loading && (
    <View style={{ alignItems: 'center', marginTop: 40 }}>
      <Text style={{ fontFamily: theme.fonts.regular,
    textAlign: theme.textAlign,
    fontSize: 18, fontWeight: 'bold', color: '#ff4081' }}>
        התחל/י עכשיו – החיבור הבא שלך מחכה כאן!
      </Text>
    </View>
  )}

</View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 24,
    backgroundColor: '#fff',
  },
  title: {
    fontFamily: theme.fonts.regular,
    textAlign: theme.textAlign,
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  image: {
    width: 160,
    height: 160,
    borderRadius: 80,
    marginBottom: 20,
    backgroundColor: '#eee',
  },
  name: {
    fontFamily: theme.fonts.regular,
    textAlign: theme.textAlign,
    fontSize: 20,
    fontWeight: 'bold',
  },
  emotion: {
    fontFamily: theme.fonts.regular,
    textAlign: theme.textAlign,
    fontSize: 16,
    color: '#555',
    marginTop: 8,
  },
  compatibility: {
    fontFamily: theme.fonts.regular,
    textAlign: theme.textAlign,
    fontSize: 18,
    color: '#d04b80',
    fontWeight: 'bold',
    marginTop: 12,
  },
});

export default MatchProfileScreen;

// Firestore collection reference: users
// collection(db, "users")

// Firestore collection reference: matches
// collection(db, "matches")

// Firestore collection reference: messages
// collection(db, "messages")

// Firestore collection reference: notifications
// collection(db, "notifications")
