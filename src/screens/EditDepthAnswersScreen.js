
import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { app } from '../services/firebase';
import { theme } from '../theme/theme';

const questions = [
  'מה אתה מחפש בזוגיות?',
  'מה למדת על עצמך בקשרים קודמים?',
  'מה גורם לך להרגיש חיבור אמיתי?',
  'מה חשוב לך שבן/בת הזוג יביא איתו/ה לקשר?',
];

const EditDepthAnswersScreen = ({ navigation }) => {
  const [answers, setAnswers] = useState({});
  const db = getFirestore(app);
  const auth = getAuth();

  useEffect(() => {
    const loadAnswers = async () => {
      const user = auth.currentUser;
      if (!user) return;
      const docRef = doc(db, 'users', user.uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const data = docSnap.data();
        if (data.depthAnswers) {
          setAnswers(data.depthAnswers);
        }
      }
    };
    loadAnswers();
  }, []);

  const handleSave = async () => {
    const user = auth.currentUser;
    if (!user) return;
    const userRef = doc(db, 'users', user.uid);
    await setDoc(userRef, { depthAnswers: answers }, { merge: true });
    Alert.alert('הצלחה', 'התשובות נשמרו בפרופיל שלך');
    navigation.goBack();
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>עריכת שאלות עומק בפרופיל</Text>
      {questions.map((q, i) => (
        <View key={i} style={styles.block}>
          <Text style={styles.question}>{q}</Text>
          <TextInput
            style={styles.input}
            value={answers[q] || ''}
            onChangeText={(text) => setAnswers({ ...answers, [q]: text })}
            multiline
            placeholder="כתבו כאן את התשובה האישית שלכם..."
          />
        </View>
      ))}
      <TouchableOpacity style={styles.button} onPress={handleSave}>
        <Text style={styles.buttonText}>שמור תשובות</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 22,
    fontFamily: theme.fonts.bold,
    marginBottom: 20,
    textAlign: theme.textAlign,
  },
  block: {
    marginBottom: 24,
  },
  question: {
    fontSize: 16,
    fontFamily: theme.fonts.bold,
    marginBottom: 6,
    color: '#333',
    textAlign: theme.textAlign,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 12,
    padding: 12,
    minHeight: 80,
    textAlignVertical: 'top',
    fontFamily: theme.fonts.regular,
    textAlign: theme.textAlign,
  },
  button: {
    backgroundColor: '#4a90e2',
    padding: 14,
    borderRadius: 30,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontFamily: theme.fonts.bold,
  },
});

export default EditDepthAnswersScreen;
