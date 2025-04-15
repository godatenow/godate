
// תמיכה ב-RTL - הוספת סגנון גלובלי במידת הצורך
const rtlStyles = {
  direction: 'rtl',
  textAlign: 'right',
};


import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function HomeScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>ברוכים הבאים לאפליקציית GoDate בעברית</Text>
      <Text style={styles.sectionTitle}>מה תמצאו כאן?</Text>
      <Text style={styles.text}>
        אפליקציה זו נועדה לעזור לכם להכיר אנשים חדשים, לבנות קשרים אמיתיים, ולשמור על חוויית משתמש נעימה ורגשית.
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, backgroundColor: '#fff' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 16, textAlign: 'center' },
  sectionTitle: { fontSize: 20, marginBottom: 8 },
  text: { fontSize: 16, lineHeight: 24 }
});
