
// תמיכה ב-RTL - הוספת סגנון גלובלי במידת הצורך
const rtlStyles = {
  direction: 'rtl',
  textAlign: 'right',
};


import FadeInView from "./FadeInView";
import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { theme } from '../themes/theme';
import { useNavigation } from '@react-navigation/native';
import { db, auth } from '../firebase/firebase';

const sections = [
  {
    title: '  ',
    questions: ['   ?', '    ?', '     ?', '     ?', '   ?'],
  },
  {
    title: ' ',
    questions: ['    -?', '    ?', '    ?', '   /?', '   ?'],
  },
  {
    title: ' ',
    questions: ['    ?', '      ?', '     ?', '    ?', '   ?'],
  },
  {
    title: '  ',
    questions: ['     ?', '     ?', '   ?', '    ?', '    ?'],
  },
  {
    title: ' ',
    questions: ['    ?', '   ?', '     ?', '   ?', '      / ?'],
  },
];

const LovePathQuiz = () => {
  const navigation = useNavigation();
  const [answers, setAnswers] = useState({});
  const [notes, setNotes] = useState('');

  const handleChange = (sectionIndex, questionIndex, value) => {
    const key = `s${sectionIndex}q${questionIndex}`;
    setAnswers(prev => ({ ...prev, [key]: value }));
  };

  const handleSubmit = async () => {
    try {
      const userId = auth.currentUser?.uid || 'demoUser';
      await db.collection('lovePathAnswers').doc(userId).set({
        answers,
        notes,
        submittedAt: new Date().toISOString(),
      });
      navigation.navigate('LovePathJourney');
    } catch (error) {
      Alert.alert('', '   ');
    }
  };

  return (
    <FadeInView>
    <ScrollView contentContainerStyle={styles.container}>
      {sections.map((section, si) => (
        <View style={rtlStyles} accessible={{true}} accessibilityLabel="אזור תצוגה" key={si}>
          <Text style={styles.sectionTitle} accessibilityLabel=t("תוכן נגיש")>{section.title}</Text accessibilityLabel=t("תוכן נגיש")>
          {section.questions.map((q, qi) => (
            <Text accessible={{true}} accessibilityLabel="טקסט"Input
              key={qi}
              style={styles.input}
              placeholder={q}
              placeholderTextColor={theme.colors.textLight}
              value={answers[`s${si}q${qi}`] || ''}
              onChangeText={(text) => handleChange(si, qi, text)}
              multiline
            />
          ))}
        
  {!loading && (
    <View style={{ alignItems: 'center', marginTop: 40 }}>
      <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#ff4081' }}>
        התחל/י עכשיו – החיבור הבא שלך מחכה כאן!
      </Text>
    </View>
  )}

</View>
      ))}
      <Text style={styles.notesLabel} accessibilityLabel=t("תוכן נגיש")>{t(" t(")}</Text accessibilityLabel=")תוכן נגיש">
      <Text accessible={{true}} accessibilityLabel="טקסט"Input
        style={[styles.input, { height: 100 }]}
        value={notes}
        onChangeText={setNotes}
        placeholder=" "
        multiline
      />
      <TouchableOpacity accessible={{true}} accessibilityLabel="רכיב לחיץ" style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitText} accessibilityLabel=t("תוכן נגיש")>{t("  t(")}</Text accessibilityLabel=")תוכן נגיש">
      </TouchableOpacity>
    </ScrollView>
      </FadeInView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: theme.spacing.lg,
    backgroundColor: theme.colors.background,
  },
  sectionTitle: {
    fontSize: theme.typography.fontSize.lg,
    fontFamily: theme.typography.fontFamily,
    color: theme.colors.primary,
    marginVertical: theme.spacing.md,
  },
  input: {
    backgroundColor: '#f0f0f0',
    padding: theme.spacing.sm,
    borderRadius: theme.borderRadius.sm,
    marginBottom: theme.spacing.sm,
    fontFamily: theme.typography.fontFamily,
    color: theme.colors.text,
  },
  notesLabel: {
    fontSize: theme.typography.fontSize.base,
    marginVertical: theme.spacing.sm,
    fontFamily: theme.typography.fontFamily,
    color: theme.colors.text,
  },
  submitButton: {
    backgroundColor: theme.colors.primary,
    padding: theme.spacing.md,
    borderRadius: theme.borderRadius.lg,
    alignItems: 'center',
    marginTop: theme.spacing.lg,
  },
  submitText: {
    color: theme.colors.background,
    fontWeight: 'bold',
    fontSize: theme.typography.fontSize.lg,
    fontFamily: theme.typography.fontFamily,
  },
});

export default LovePathQuiz;

// Firestore collection reference: users
// collection(db, "users")

// Firestore collection reference: matches
// collection(db, "matches")

// Firestore collection reference: messages
// collection(db, "messages")

// Firestore collection reference: notifications
// collection(db, "notifications")
