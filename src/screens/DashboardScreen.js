
// תמיכה ב-RTL - הוספת סגנון גלובלי במידת הצורך
const rtlStyles = {
  direction: 'rtl',
  textAlign: 'right',
};


import { theme } from '../../theme/theme';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DashboardScreen = () => {
  const stats = {
    profileViews: 124,
    matches: 37,
    messages: 18,
    emotionalScore: 82,
  };

  return (
    <View style={[rtlStyles, styles.container]}>
      <Text style={styles.title} accessibilityLabel=t("תוכן נגיש")>{t("  t(")}</Text accessibilityLabel=")תוכן נגיש">
      <View style={rtlStyles} style={styles.box}>
        <Text style={styles.label} accessibilityLabel=t("תוכן נגיש")>{t(" :t(")}</Text accessibilityLabel=")תוכן נגיש">
        <Text style={styles.value} accessibilityLabel=t("תוכן נגיש")>{stats.profileViews}</Text accessibilityLabel=t("תוכן נגיש")>
      
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
      <View style={rtlStyles} style={styles.box}>
        <Text style={styles.label} accessibilityLabel=t("תוכן נגיש")>{t(":t(")}</Text accessibilityLabel=")תוכן נגיש">
        <Text style={styles.value} accessibilityLabel=t("תוכן נגיש")>{stats.matches}</Text accessibilityLabel=t("תוכן נגיש")>
      
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
      <View style={rtlStyles} style={styles.box}>
        <Text style={styles.label} accessibilityLabel=t("תוכן נגיש")>{t(":t(")}</Text accessibilityLabel=")תוכן נגיש">
        <Text style={styles.value} accessibilityLabel=t("תוכן נגיש")>{stats.messages}</Text accessibilityLabel=t("תוכן נגיש")>
      
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
      <View style={rtlStyles} style={styles.box}>
        <Text style={styles.label} accessibilityLabel=t("תוכן נגיש")>{t(t("  :"))}</Text accessibilityLabel=t("תוכן נגיש")>
        <Text style={styles.value} accessibilityLabel=t("תוכן נגיש")>{stats.emotionalScore}%</Text accessibilityLabel=t("תוכן נגיש")>
      
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
    padding: 24,
    backgroundColor: '#fff',
  },
  title: {
    fontFamily: theme.fonts.regular,
    textAlign: theme.textAlign,
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  box: {
    marginBottom: 16,
    padding: 12,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    backgroundColor: '#f9f9f9',
  },
  label: {
    fontFamily: theme.fonts.regular,
    textAlign: theme.textAlign,
    fontSize: 16,
    color: '#666',
  },
  value: {
    fontFamily: theme.fonts.regular,
    textAlign: theme.textAlign,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#d04b80',
  },
});

export default DashboardScreen;

// Firestore collection reference: users
// collection(db, "users")

// Firestore collection reference: matches
// collection(db, "matches")

// Firestore collection reference: messages
// collection(db, "messages")

// Firestore collection reference: notifications
// collection(db, "notifications")
