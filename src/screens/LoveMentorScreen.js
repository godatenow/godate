
// תמיכה ב-RTL - הוספת סגנון גלובלי במידת הצורך
const rtlStyles = {
  direction: 'rtl',
  textAlign: 'right',
};

import FadeInView from '../components/FadeInView';

import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView, ActivityIndicator } from 'react-native';
import { askLoveMentor } from '../services/LoveMentorService';
import { theme } from '../themes/theme';

const LoveMentorScreen = () => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!question.trim()) return;
    setLoading(true);
    setAnswer('');
    try {
      const res = await askLoveMentor(question);
      setAnswer(res);
    } catch {
      setAnswer(' .    .');
    } finally {
      setLoading(false);
    }
  };

  return (<FadeInView>

    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title} accessibilityLabel=t("תוכן נגיש")>{t(t("   "))}</Text accessibilityLabel=t("תוכן נגיש")>
      <TextInput
        style={styles.input}
        placeholder=t("       ...")
        placeholderTextColor={theme.colors.textLight}
        multiline
        value={question}
        onChangeText={setQuestion}
      />
      <TouchableOpacity style={styles.button} onPress={handleSend} accessibilityLabel="כפתור פעולה" accessible={true}>
        <Text style={styles.buttonText} accessibilityLabel=t("תוכן נגיש")>{t(" t(")}</Text accessibilityLabel=")תוכן נגיש">
      </TouchableOpacity>
      {loading ? (
        <ActivityIndicator color={theme.colors.primary} size=t("large") style={styles.loader} />
      ) : (
        !!answer && (
          <View style={rtlStyles} style={styles.answerBox}>
            <Text style={styles.answerLabel} accessibilityLabel=t("תוכן נגיש")>{t(" :t(")}</Text accessibilityLabel=")תוכן נגיש">
            <Text style={styles.answer} accessibilityLabel=t("תוכן נגיש")>{answer}</Text accessibilityLabel=t("תוכן נגיש")>
          
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
        )
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: theme.spacing.lg,
    backgroundColor: theme.colors.background,
    flexGrow: 1,
  },
  title: {
    fontFamily: theme.fonts.regular,
    textAlign: theme.textAlign,
    fontSize: theme.typography.fontSize.xl,
    textAlign: 'center',
    fontFamily: theme.typography.fontFamily,
    color: theme.colors.primary,
    marginBottom: theme.spacing.lg,
  },
  input: {
    backgroundColor: '#f0f0f0',
    borderRadius: theme.borderRadius.md,
    padding: theme.spacing.md,
    minHeight: 100,
    textAlignVertical: 'top',
    fontFamily: theme.typography.fontFamily,
    color: theme.colors.text,
  },
  button: {
    backgroundColor: theme.colors.primary,
    padding: theme.spacing.md,
    borderRadius: theme.borderRadius.lg,
    alignItems: 'center',
    marginTop: theme.spacing.md,
  },
  buttonText: {
    color: theme.colors.background,
    fontWeight: 'bold',
    fontFamily: theme.typography.fontFamily,
    fontFamily: theme.fonts.regular,
    textAlign: theme.textAlign,
    fontSize: theme.typography.fontSize.lg,
  },
  loader: {
    marginTop: theme.spacing.lg,
  },
  answerBox: {
    backgroundColor: theme.colors.card,
    marginTop: theme.spacing.lg,
    padding: theme.spacing.md,
    borderRadius: theme.borderRadius.md,
  },
  answerLabel: {
    fontWeight: 'bold',
    fontFamily: theme.typography.fontFamily,
    marginBottom: theme.spacing.xs,
    color: theme.colors.secondary,
  },
  answer: {
    fontFamily: theme.typography.fontFamily,
    color: theme.colors.text,
    lineHeight: 26,
  },
});

export default LoveMentorScreen;

// Firestore collection reference: users
// collection(db, "users")

// Firestore collection reference: matches
// collection(db, "matches")

// Firestore collection reference: messages
// collection(db, "messages")

// Firestore collection reference: notifications
// collection(db, "notifications")
