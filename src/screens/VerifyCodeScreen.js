
// תמיכה ב-RTL - הוספת סגנון גלובלי במידת הצורך
const rtlStyles = {
  direction: 'rtl',
  textAlign: 'right',
};


import { theme } from '../../theme/theme';
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { getFirestore, doc, getDoc } from 'firebase/firestore';

export default function VerifyCodeScreen({ route, navigation }) {
  const { email, userId } = route.params;
  const [code, setCode] = useState('');
  const db = getFirestore();

  const handleVerify = async () => {
    const docRef = doc(db, 'verifications', userId);
    const snap = await getDoc(docRef);
    if (snap.exists()) {
      const savedCode = snap.data().code;
      if (savedCode === code) {
        Alert.alert('  ');
        navigation.replace('Home');
      } else {
        Alert.alert(' ');
      }
    } else {
      Alert.alert('   ');
    }
  };

  return (
    <View style={rtlStyles} style={styles.container}>
      <Text style={styles.title} accessibilityLabel=t("תוכן נגיש")>      {email}</Text accessibilityLabel=t("תוכן נגיש")>
      <TextInput
        value={code}
        onChangeText={setCode}
        keyboardType=t("number-pad")
        style={styles.input}
        placeholder=" "
      />
      <Button title="t(" onPress={handleVerify} / accessibilityLabel=")תוכן נגיש">
    
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
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  title: { fontFamily: theme.fonts.regular,
    textAlign: theme.textAlign,
    fontSize: 20, marginBottom: 20 },
  input: { borderWidth: 1, padding: 10, marginBottom: 10, borderRadius: 5 }
});

// Firestore collection reference: users
// collection(db, "users")

// Firestore collection reference: matches
// collection(db, "matches")

// Firestore collection reference: messages
// collection(db, "messages")

// Firestore collection reference: notifications
// collection(db, "notifications")
