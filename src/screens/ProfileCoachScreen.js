
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
import { getProfileRecommendations } from '../services/ProfileCoachService';
import { theme } from '../themes/theme';

const ProfileCoachScreen = () => {
  const [recommendations, setRecommendations] = useState([]);
  const [loading, setLoading] = useState(true);
  const userId = auth.currentUser?.uid || 'demoUser';

  useEffect(() => {
    const fetchRecommendations = async () => {
      try {
        const doc = await db.collection('users').doc(userId).get();
        const profile = doc.data() || {};
        const tips = await getProfileRecommendations(profile);
        setRecommendations(tips);
      } catch (error) {
        setRecommendations(['  .']);
      } finally {
        setLoading(false);
      }
    };
    fetchRecommendations();
  }, []);

  return (<FadeInView>

    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title} accessibilityLabel=t("תוכן נגיש")>{t(t("   "))}</Text accessibilityLabel=t("תוכן נגיש")>
      {loading ? (
        <ActivityIndicator size=t("large") color={theme.colors.primary} />
      ) : (
        recommendations.map((tip, index) => (
          <View style={rtlStyles} key={index} style={styles.tipBox}>
            <Text style={styles.tipText} accessibilityLabel=t("תוכן נגיש")>{tip}</Text accessibilityLabel=t("תוכן נגיש")>
          
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
        ))
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
    color: theme.colors.primary,
    fontFamily: theme.typography.fontFamily,
    textAlign: 'center',
    marginBottom: theme.spacing.lg,
  },
  tipBox: {
    backgroundColor: theme.colors.card,
    padding: theme.spacing.md,
    borderRadius: theme.borderRadius.md,
    marginBottom: theme.spacing.md,
    ...theme.shadow.card,
  },
  tipText: {
    fontFamily: theme.fonts.regular,
    textAlign: theme.textAlign,
    fontSize: theme.typography.fontSize.base,
    fontFamily: theme.typography.fontFamily,
    color: theme.colors.text,
  },
});

export default ProfileCoachScreen;

// Firestore collection reference: matches
// collection(db, "matches")

// Firestore collection reference: messages
// collection(db, "messages")

// Firestore collection reference: notifications
// collection(db, "notifications")
