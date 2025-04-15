
import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
import { getFirestore, doc, updateDoc } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { app } from '../services/firebase';
import { theme } from '../theme/theme';
import { reflectFromWriting } from '../ai/emotionReflection';
import { getDatingStyleInsight } from '../ai/getDatingStyleInsight';

const questions = [
  'מהו הערך הכי חשוב לך בקשר זוגי ולמה?',
  'מהי חווית האהבה הראשונה שזכורה לך?',
  'מה גורם לך להרגיש ביטחון מול אדם חדש?',
  'מה למדת על עצמך בקשרים קודמים?',
];

const tips = [
  'זוגיות חזקה נבנית על הקשבה – גם לדברים הקטנים.',
  'תן/י מקום לפגיעות – זה מפתח לאמון.',
  'הכנות מול עצמך היא התחלה של כנות מול אחרים.',
  'אל תחפש/י מושלם – חפש/י אמיתי.',
];

const LoveDayScreen = ({ navigation }) => {
  const [day, setDay] = useState(4);
  const [reflection, setReflection] = useState('');
  const [emotionalReflection, setEmotionalReflection] = useState('');
  const [datingStyle, setDatingStyle] = useState('');

  const handleComplete = async () => {
    const db = getFirestore(app);
    const auth = getAuth();
    const user = auth.currentUser;
    if (user) {
      const userRef = doc(db, 'users', user.uid);
      await updateDoc(userRef, {
        'lovePath.day': day + 1
      });
    }
    Alert.alert('כל הכבוד!', `סיימת את יום ${day}.`, [
      { text: 'המשך', onPress: () => setDay(prev => prev + 1) },
    ]);
    setReflection('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>LovePath – יום {day}</Text>
      <Text style={styles.sectionTitle}>שאלת עומק להיום:</Text>
      <Text style={styles.question}>{questions[(day - 1) % questions.length]}</Text>
      <TextInput
        style={styles.input}
        value={reflection}
        onChangeText={(text) => {
          setReflection(text);
          setEmotionalReflection(reflectFromWriting(text));
          setDatingStyle(getDatingStyleInsight(text));
        }}
        placeholder="כתבו כאן את המחשבות שלכם..."
        multiline
      />
      <Text style={styles.sectionTitle}>טיפ מהמנטור:</Text>
      </Text>
      {emotionalReflection !== '' && (
        <Text style={styles.reflection}>{emotionalReflection}</Text>
      )
      }
      <Text style={styles.tip}>{tips[(day - 1) % tips.length]}</Text>

      <TouchableOpacity style={styles.button} onPress={handleComplete}>
        <Text style={styles.buttonText}>סיימתי להיום</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: '#fff',
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontFamily: theme.fonts.bold,
    marginBottom: 16,
    textAlign: theme.textAlign,
  },
  sectionTitle: {
    fontSize: 18,
    fontFamily: theme.fonts.bold,
    marginBottom: 6,
    textAlign: theme.textAlign,
  },
  question: {
    fontSize: 16,
    fontFamily: theme.fonts.regular,
    marginBottom: 12,
    color: '#333',
    textAlign: theme.textAlign,
  },
  tip: {
    fontSize: 15,
    fontFamily: theme.fonts.regular,
    color: '#555',
    marginBottom: 24,
    textAlign: theme.textAlign,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 12,
    padding: 12,
    marginBottom: 24,
    height: 100,
    fontFamily: theme.fonts.regular,
    textAlignVertical: 'top',
    textAlign: theme.textAlign,
  },
  button: {
    backgroundColor: '#4a90e2',
    padding: 14,
    borderRadius: 30,
    alignItems: 'center',
  },
  reflection: {
    fontSize: 14,
    color: '#0077cc',
    marginBottom: 20,
    fontFamily: theme.fonts.regular,
    textAlign: theme.textAlign,
  },
  style: {
    fontSize: 14,
    color: '#ff5a5f',
    marginBottom: 20,
    fontFamily: theme.fonts.regular,
    textAlign: theme.textAlign,
  },
  buttonText: {
    fontSize: 16,
    color: '#fff',
    fontFamily: theme.fonts.bold,
  },
});

export default LoveDayScreen;
