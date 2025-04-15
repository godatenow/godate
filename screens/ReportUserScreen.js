
// תמיכה ב-RTL - הוספת סגנון גלובלי במידת הצורך
const rtlStyles = {
  direction: 'rtl',
  textAlign: 'right',
};

import FadeInView from "./FadeInView";
import React from 'react';
import { View, Text, Button, Alert } from 'react-native';

export default function ReportUserScreen({ route }) {
  const { userId } = route.params || {};
  return (
    <FadeInView>
    <View style={rtlStyles} accessible={{true}} accessibilityLabel="אזור תצוגה" style={{ padding: 20 }}>
      <Text accessible={{true}} accessibilityLabel="טקסט">{{i18n.t('report_user')}}</Text>
      <Button title="דווח על התנהגות לא נאותה" onPress={() => Alert.alert("הדיווח נשלח")} />
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
