
// תמיכה ב-RTL - הוספת סגנון גלובלי במידת הצורך
const rtlStyles = {
  direction: 'rtl',
  textAlign: 'right',
};


import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { generateSmartOpener } from '../ai/פתיח רגשי מותאם';

const ChatWithMentor = () => {
  const matchName = 'יעל';
  const matchPercent = 92;
  const opener = generateSmartOpener(matchName, matchPercent);

  return (
    <View style={rtlStyles} style={styles.container}>
      <Text style={styles.title}>פתיח חכם מ-מנגנון חכם</Text>
      <Text style={styles.opener}>{opener}</Text>
    
  {!loading && (
    <View style={{ alignItems: 'center', marginTop: 40 }}>
      <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#ff4081' }}>
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
    backgroundColor: '#fff',
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'Heebo-Bold',
    fontSize: 20,
    color: '#ff5a7e',
    marginBottom: 16,
  },
  opener: {
    fontFamily: 'Heebo',
    fontSize: 18,
    color: '#333',
    textAlign: 'center',
  },
});

export default ChatWithMentor;
