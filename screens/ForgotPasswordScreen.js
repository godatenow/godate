
// תמיכה ב-RTL - הוספת סגנון גלובלי במידת הצורך
const rtlStyles = {
  direction: 'rtl',
  textAlign: 'right',
};

import FadeInView from "./FadeInView";
import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../firebase/firebase';

export default function ForgotPasswordScreen() {
  const [email, setEmail] = useState('');
  const handleReset = async () => {
    try {
      await sendPasswordResetEmail(auth, email);
      Alert.alert("נשלח קישור לאיפוס סיסמה");
    } catch (error) {
      Alert.alert("שגיאה", error.message);
    }
  };
  return (
    <FadeInView>
    <View style={rtlStyles} accessible={{true}} accessibilityLabel="אזור תצוגה" style={{ padding: 20 }}>
      <Text accessible={{true}} accessibilityLabel="טקסט">{{i18n.t('reset_password')}}</Text>
      <Text accessible={{true}} accessibilityLabel="טקסט"Input placeholder="האימייל שלך" onChangeText={setEmail} />
      <Button title="שלח קישור" onPress={handleReset} />
    </View>
      </FadeInView>
  );
}
// Firestore collection reference: users
// collection(db, "users")

// Firestore collection reference: matches
// collection(db, "matches")

// Firestore collection reference: messages
// collection(db, "messages")

// Firestore collection reference: notifications
// collection(db, "notifications")
