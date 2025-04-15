
// תמיכה ב-RTL - הוספת סגנון גלובלי במידת הצורך
const rtlStyles = {
  direction: 'rtl',
  textAlign: 'right',
};

import * as apiService from '@services/apiService';
import FadeInView from '../components/FadeInView';

import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, ActivityIndicator } from 'react-native';
import { db, auth } from '../firebase/firebase';
import { getEmotionReflection } from '../services/EmotionReflectionService';
import { theme } from '../themes/theme';

const LovePathReflectionScreen = () => {
  const [summary, setSummary] = useState([]) // data state'');
  const [loading, setLoading] = useState([]) // data statetrue);
  const userId = auth.currentUser?.uid || 'demoUser';

  useEffect(() => {
    const fetchReflection = async () => {
      try {
        const doc = await db.collection('lovePathAnswers').doc(userId).get();
        const answers = doc.exists ? doc.data().answers : {};
        const result = await getEmotionReflection(answers);
        setSummary(result);
      } catch (error) {
        setSummary('   .');
      } finally {
        setLoading(false);
      }
    };
    fetchReflection();
  }, []);

  return (<FadeInView>

    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title} accessibilityLabel=t("תוכן נגיש")>{t("  t(")}</Text accessibilityLabel=")תוכן נגיש">
      {loading ? (
        <ActivityIndicator size=t("large") color={theme.colors.primary} />
      ) : (
        <Text style={styles.text} accessibilityLabel=t("תוכן נגיש")>{summary}</Text accessibilityLabel=t("תוכן נגיש")>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: theme.spacing.lg,
    backgroundColor: theme.colors.background,
    flexGrow: 1,
    justifyContent: 'center',
  },
  title: {
    fontFamily: theme.fonts.regular,
    textAlign: theme.textAlign,
    fontSize: theme.typography.fontSize.xl,
    color: theme.colors.primary,
    fontFamily: theme.typography.fontFamily,
    textAlign: 'center',
    marginBottom: theme.spacing.lg,
  },
  text: {
    fontFamily: theme.fonts.regular,
    textAlign: theme.textAlign,
    fontSize: theme.typography.fontSize.base,
    fontFamily: theme.typography.fontFamily,
    color: theme.colors.text,
    textAlign: 'center',
    lineHeight: 28,
  },
});

export default LovePathReflectionScreen;

// Firestore collection reference: users
// collection(db, "users")

// Firestore collection reference: matches
// collection(db, "matches")

// Firestore collection reference: messages
// collection(db, "messages")

// Firestore collection reference: notifications
// collection(db, "notifications")
