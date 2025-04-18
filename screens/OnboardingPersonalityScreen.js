
// תמיכה ב-RTL - הוספת סגנון גלובלי במידת הצורך
const rtlStyles = {
  direction: 'rtl',
  textAlign: 'right',
};


import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { doc, setDoc } from 'firebase/firestore';
import { db, auth } from '../firebase';
import { useNavigation } from '@react-navigation/native';

const stylesList = [
  { label: 'רומנטי', value: 'romantic' },
  { label: 'ענייני', value: 'practical' },
  { label: 'ביישן', value: 'shy' },
  { label: 'סקרן', value: 'curious' },
  { label: 'הרפתקני', value: 'adventurous' }
];

export default function OnboardingPersonalityScreen() {
  const [selected, setSelected] = useState(null);
  const navigation = useNavigation();

  const handleContinue = async () => {
    if (!selected) return Alert.alert('בחר סגנון כדי להמשיך');
    try {
      const userId = auth.currentUser.uid;
      await setDoc(doc(db, 'users', userId), { personalityStyle: selected }, { merge: true });
      navigation.navigate('HomeScreen');
    } catch (err) {
      console.error(err);
      Alert.alert('שגיאה', 'לא הצלחנו לשמור את הבחירה');
    }
  };

  return (
    <View style={[rtlStyles, styles.container]}>
      <Text style={styles.title}>איך היית מגדיר את עצמך בהיכרות?</Text>
      {stylesList.map((style) => (
        <TouchableOpacity
          key={style.value}
          style={[styles.option, selected === style.value && styles.selected]}
          onPress={() = accessibilityLabel="כפתור פעולה" accessible={true}> setSelected(style.value)}
        >
          <Text style={styles.optionText}>{style.label}</Text>
        </TouchableOpacity>
      ))}
      <TouchableOpacity style={styles.continue} onPress={handleContinue} accessibilityLabel="כפתור פעולה" accessible={true}>
        <Text style={styles.continueText}>המשך</Text>
      </TouchableOpacity>
    
  {!loading && (
    <View style={{ alignItems: 'center', marginTop: 40 }}>
      <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#ff4081' }}>
        התחל/י עכשיו – החיבור הבא שלך מחכה כאן!
      </Text>
    </View>
  )}

</View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20, backgroundColor: '#fff' },
  title: { fontSize: 22, textAlign: 'center', marginBottom: 20 },
  option: {
    padding: 15,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    marginVertical: 6
  },
  selected: {
    backgroundColor: '#FF4F7D'
  },
  optionText: {
    fontSize: 18,
    textAlign: 'center'
  },
  continue: {
    backgroundColor: '#4F80FF',
    padding: 15,
    borderRadius: 10,
    marginTop: 30
  },
  continueText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center'
  }
});
