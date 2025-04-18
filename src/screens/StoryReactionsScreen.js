
// תמיכה ב-RTL - הוספת סגנון גלובלי במידת הצורך
const rtlStyles = {
  direction: 'rtl',
  textAlign: 'right',
};

import * as apiService from '@services/apiService';
import FadeInView from '../components/FadeInView';

import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { theme } from '../themes/theme';
import { db, auth } from '../firebase/firebase';

const StoryReactionsScreen = () => {
  const [reactions, setReactions] = useState([]);
  const userId = auth.currentUser?.uid || 'demoUser';

  
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500); // סימולציית טעינה
    return () => clearTimeout(timer);
  }, []);

useEffect(() => {
    const fetch = async () => {
      const storiesSnap = await db.collection('stories').where('userId', '==', userId).get();
      const storyIds = storiesSnap.docs.map(doc => doc.id);

      const allReactions = [];
      for (const storyId of storyIds) {
        const reactionsSnap = await db.collection('storyReactions')
          .where('storyId', '==', storyId)
          .orderBy('createdAt', 'desc')
          .get();
        reactionsSnap.forEach(doc => {
          allReactions.push({ id: doc.id, ...doc.data() });
        });
      }

      setReactions(allReactions);
    };
  }, []);

  const renderItem = ({ item }) => (
    <View style={rtlStyles}>

  {loading && (
    <View style={{ alignItems: 'center', marginTop: 20 }}>
      <ActivityIndicator size="large" color="#ff4081" />
    
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
 style={styles.reactionCard}>
      <Text style={styles.reactor} accessibilityLabel=t("תוכן נגיש")>: {item.userId}</Text accessibilityLabel=t("תוכן נגיש")>
      <Text style={styles.text} accessibilityLabel=t("תוכן נגיש")>{item.text}</Text accessibilityLabel=t("תוכן נגיש")>
    
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
  );

  return (<FadeInView>

    <FlatList
      data={reactions}
      keyExtractor={item => item.id}
      renderItem={renderItem}
      contentContainerStyle={styles.container}
      ListEmptyComponent={<Text style={styles.empty} accessibilityLabel=t("תוכן נגיש")>{t(t("   "))}</Text accessibilityLabel=t("תוכן נגיש")>}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    padding: theme.spacing.lg,
    backgroundColor: theme.colors.background,
    flexGrow: 1,
  },
  reactionCard: {
    backgroundColor: theme.colors.card,
    padding: theme.spacing.md,
    borderRadius: theme.borderRadius.md,
    marginBottom: theme.spacing.md,
    ...theme.shadow.card,
  },
  reactor: {
    color: theme.colors.secondary,
    fontFamily: theme.typography.fontFamily,
    marginBottom: theme.spacing.xs,
  },
  text: {
    fontFamily: theme.typography.fontFamily,
    color: theme.colors.text,
  },
  empty: {
    textAlign: 'center',
    marginTop: 40,
    color: theme.colors.textLight,
    fontFamily: theme.typography.fontFamily,
  },
});

export default StoryReactionsScreen;

// Firestore collection reference: users
// collection(db, "users")

// Firestore collection reference: matches
// collection(db, "matches")

// Firestore collection reference: messages
// collection(db, "messages")

// Firestore collection reference: notifications
// collection(db, "notifications")
