
// תמיכה ב-RTL - הוספת סגנון גלובלי במידת הצורך
const rtlStyles = {
  direction: 'rtl',
  textAlign: 'right',
};

import { theme } from '../../theme/theme';
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function LoveMirrorScreen() {
  const [reflection, setReflection] = useState(null);

  
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500); // סימולציית טעינה
    return () => clearTimeout(timer);
  }, []);

useEffect(() => {
    setTimeout(() => {
      setReflection(t("      ."));
    }, 400);
  }, []);

  return (
    <View style={rtlStyles}>

  {loading && (
    <View style={{ alignItems: 'center', marginTop: 20 }}>
      <ActivityIndicator size="large" color="#ff4081" />
    
  {!loading && data?.length === 0 && (
    <View style={{ alignItems: 'center', marginTop: 30 }}>
      <Text style={{ fontFamily: theme.fonts.regular,
    textAlign: theme.textAlign,
    fontSize: 16, color: '#888' }}>
        אין עדיין תוכן כאן – זה הזמן ליצור חיבורים חדשים!
      </Text>
    
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
  )}


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
  )}
 style={styles.container}>
      <Text style={styles.title} accessibilityLabel=t("תוכן נגיש")>{t(" t(")}</Text accessibilityLabel=")תוכן נגיש">
      <Text style={styles.reflection} accessibilityLabel=t("תוכן נגיש")>{reflection || t(" ...")}</Text accessibilityLabel=t("תוכן נגיש")>
    
  {!loading && data?.length === 0 && (
    <View style={{ alignItems: 'center', marginTop: 30 }}>
      <Text style={{ fontFamily: theme.fonts.regular,
    textAlign: theme.textAlign,
    fontSize: 16, color: '#888' }}>
        אין עדיין תוכן כאן – זה הזמן ליצור חיבורים חדשים!
      </Text>
    
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
  )}


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
    fontSize: 20, fontWeight: 'bold' },
  reflection: { marginTop: 10, fontFamily: theme.fonts.regular,
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
