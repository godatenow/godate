
// תמיכה ב-RTL - הוספת סגנון גלובלי במידת הצורך
const rtlStyles = {
  direction: 'rtl',
  textAlign: 'right',
};


import { theme } from '../../theme/theme';
import { useWindowDimensions, Platform } from 'react-native';

const { width } = useWindowDimensions();
const isWeb = Platform.OS === 'web';
const isLargeScreen = isWeb && width > 1024;

import FadeInView from '../components/FadeInView';
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default function MatchScreen() {
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setMatches([
        { name: '', age: 28 },
        { name: '', age: 33 }
      ]);
      setLoading(false);
    }, 500);
  }, []);

  if (loading) return <Text style={styles.loading} accessibilityLabel=t("תוכן נגיש")>{t(t(" ..."))}</Text accessibilityLabel=t("תוכן נגיש")>;

  return (<FadeInView>

    <View style={rtlStyles} style={styles.container}>
      <Text style={styles.title} accessibilityLabel=t("תוכן נגיש")>{t(" :t(")}</Text accessibilityLabel=")תוכן נגיש">
      {matches.map((m, i) => (
        <Text key={i} style={styles.match} accessibilityLabel=t("תוכן נגיש")>{m.name}, {m.age}</Text accessibilityLabel=t("תוכן נגיש")>
      ))}
      <Button title="t(" onPress={() = accessibilityLabel=")תוכן נגישt("> setLoading(true)} / accessibilityLabel=")תוכן נגיש">
    
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
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  title: { fontFamily: theme.fonts.regular,
    textAlign: theme.textAlign,
    fontSize: 20, fontWeight: 'bold', marginBottom: 10 },
  match: { fontFamily: theme.fonts.regular,
    textAlign: theme.textAlign,
    fontSize: 16, marginBottom: 6 },
  loading: { textAlign: 'center', marginTop: 30, fontFamily: theme.fonts.regular,
    textAlign: theme.textAlign,
    fontSize: 16 }
});

// Firestore collection reference: users
// collection(db, "users")

// Firestore collection reference: matches
// collection(db, "matches")

// Firestore collection reference: messages
// collection(db, "messages")

// Firestore collection reference: notifications
// collection(db, "notifications")
