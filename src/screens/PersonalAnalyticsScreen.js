
// תמיכה ב-RTL - הוספת סגנון גלובלי במידת הצורך
const rtlStyles = {
  direction: 'rtl',
  textAlign: 'right',
};

import * as apiService from '@services/apiService';
import FadeInView from '../components/FadeInView';

import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { theme } from '../themes/theme';
import { db, auth } from '../firebase/firebase';

const PersonalAnalyticsScreen = () => {
  const [data, setData] = useState(null);
  const userId = auth.currentUser?.uid || 'demoUser';

  useEffect(() => {
    const fetchData = async () => {
      const profileSnap = await db.collection('users').doc(userId).get();
      const matchesSnap = await db.collection('matches').where('users', 'array-contains', userId).get();
      const viewsSnap = await db.collection('profileViews').doc(userId).get();
      const pathSnap = await db.collection('lovePathProgress').doc(userId).get();

      setData({
        name: profileSnap.data()?.name || '',
        age: profileSnap.data()?.age || ' ',
        city: profileSnap.data()?.location || ' ',
        interests: profileSnap.data()?.interests || [],
        values: profileSnap.data()?.values || [],
        matches: matchesSnap.size,
        views: viewsSnap.data()?.count || 0,
        pathDays: Object.keys(pathSnap.data() || {}).length,
      });
    };
    fetchData();
  }, []);

  if (!data) {
    return <Text style={styles.loading} accessibilityLabel=t("תוכן נגיש")>{t(t(" ..."))}</Text accessibilityLabel=t("תוכן נגיש")>;
  }

  return (<FadeInView>

    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title} accessibilityLabel=t("תוכן נגיש")>{t("  t(")}</Text accessibilityLabel=")תוכן נגיש">
      <Text style={styles.metric} accessibilityLabel=t("תוכן נגיש")>: {data.name}</Text accessibilityLabel=t("תוכן נגיש")>
      <Text style={styles.metric} accessibilityLabel=t("תוכן נגיש")>: {data.age}</Text accessibilityLabel=t("תוכן נגיש")>
      <Text style={styles.metric} accessibilityLabel=t("תוכן נגיש")>: {data.city}</Text accessibilityLabel=t("תוכן נגיש")>
      <Text style={styles.metric} accessibilityLabel=t("תוכן נגיש")> : {data.views}</Text accessibilityLabel=t("תוכן נגיש")>
      <Text style={styles.metric} accessibilityLabel=t("תוכן נגיש")> : {data.matches}</Text accessibilityLabel=t("תוכן נגיש")>
      <Text style={styles.metric} accessibilityLabel=t("תוכן נגיש")>  LovePath: {data.pathDays}/14</Text accessibilityLabel=t("תוכן נגיש")>
      <Text style={styles.subTitle} accessibilityLabel=t("תוכן נגיש")>{t(" :t(")}</Text accessibilityLabel=")תוכן נגיש">
      <Text style={styles.tags} accessibilityLabel=t("תוכן נגיש")>{data.interests.join(', ') || ' '}</Text accessibilityLabel=t("תוכן נגיש")>
      <Text style={styles.subTitle} accessibilityLabel=t("תוכן נגיש")>{t(" :t(")}</Text accessibilityLabel=")תוכן נגיש">
      <Text style={styles.tags} accessibilityLabel=t("תוכן נגיש")>{data.values.join(', ') || ' '}</Text accessibilityLabel=t("תוכן נגיש")>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: theme.spacing.lg,
    backgroundColor: theme.colors.background,
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
  metric: {
    fontFamily: theme.fonts.regular,
    textAlign: theme.textAlign,
    fontSize: theme.typography.fontSize.base,
    marginBottom: theme.spacing.sm,
    fontFamily: theme.typography.fontFamily,
    color: theme.colors.text,
  },
  subTitle: {
    fontFamily: theme.fonts.regular,
    textAlign: theme.textAlign,
    fontSize: theme.typography.fontSize.lg,
    fontWeight: 'bold',
    marginTop: theme.spacing.md,
    fontFamily: theme.typography.fontFamily,
    color: theme.colors.secondary,
  },
  tags: {
    fontFamily: theme.fonts.regular,
    textAlign: theme.textAlign,
    fontSize: theme.typography.fontSize.base,
    marginBottom: theme.spacing.sm,
    fontFamily: theme.typography.fontFamily,
    color: theme.colors.textLight,
  },
  loading: {
    marginTop: 60,
    textAlign: 'center',
    fontFamily: theme.typography.fontFamily,
    fontFamily: theme.fonts.regular,
    textAlign: theme.textAlign,
    fontSize: theme.typography.fontSize.base,
    color: theme.colors.text,
  },
});

export default PersonalAnalyticsScreen;

// Firestore collection reference: messages
// collection(db, "messages")

// Firestore collection reference: notifications
// collection(db, "notifications")
