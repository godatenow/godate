
// תמיכה ב-RTL - הוספת סגנון גלובלי במידת הצורך
const rtlStyles = {
  direction: 'rtl',
  textAlign: 'right',
};

import FadeInView from "../src/FadeInView";

import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList, Alert } from 'react-native';
import { theme } from '../src/theme/theme';
import { db, auth } from '../src/firebase/firebase';

const journeyData = [
  ' 1:     ?',
  ' 2:     ?',
  ' 3:    ?',
  ' 4:        .',
  ' 5:      ?',
  ' 6:      .',
  ' 7:         .',
  ' 8:     ?',
  ' 9:       .',
  ' 10:        ?',
  ' 11:  3       .',
  ' 12:   ?  .',
  ' 13:          .',
  ' 14:           .',
];

const LovePathJourney = () => {
  const [completed, setCompleted] = useState({});
  const userId = auth.currentUser?.uid || 'demoUser';

  useEffect(() => {
    const fetch = async () => {
      const doc = await db.collection('lovePathProgress').doc(userId).get();
      if (doc.exists) {
        setCompleted(doc.data() || {});
      }
    };
  }, []);

  const handleComplete = async (index) => {
    const day = `day${index + 1}`;
    try {
      const newData = { ...completed, [day]: true };
      setCompleted(newData);
      await db.collection('lovePathProgress').doc(userId).set(newData);
    } catch (error) {
      Alert.alert('', '    ');
    }
  };

  const renderItem = ({ item, index }) => {
    const day = `day${index + 1}`;
    const isDone = completed[day];

    return (
    <FadeInView>
      <TouchableOpacity accessible={true} accessibilityLabel="רכיב לחיץ"
        style={[styles.card, isDone && styles.completed]}
        onPress={() => handleComplete(index)}
      >
        <Text style={styles.cardText} accessibilityLabel={t("תוכן נגיש")}></Text>{item}
        {isDone && <Text style={styles.status} accessibilityLabel={t("תוכן נגיש")}></Text >}
      </TouchableOpacity>
      </FadeInView>
    );
  };

  return (
    <FadeInView>
    <FlatList
      contentContainerStyle={styles.container}
      data={journeyData}
      renderItem={renderItem}
      keyExtractor={(_, i) => `day-${i}`}
    />
      </FadeInView>
  );
};

const styles = StyleSheet.create({
  // container: {
  //   padding: theme.spacing.lg,
  //   backgroundColor: theme.colors.background,
  // },
  // card: {
  //   backgroundColor: theme.colors.card,
  //   borderRadius: theme.borderRadius.md,
  //   padding: theme.spacing.md,
  //   marginBottom: theme.spacing.md,
  //   ...theme.shadow.card,
  // },
  // completed: {
  //   backgroundColor: '#dff0d8',
  // },
  // cardText: {
  //   fontSize: theme.typography.fontSize.base,
  //   fontFamily: theme.typography.fontFamily,
  //   color: theme.colors.text,
  // },
  // status: {
  //   marginTop: theme.spacing.sm,
  //   color: theme.colors.success,
  //   fontFamily: theme.typography.fontFamily,
  // },
});

export default LovePathJourney;

// Firestore collection reference: users
// collection(db, "users")

// Firestore collection reference: matches
// collection(db, "matches")

// Firestore collection reference: messages
// collection(db, "messages")

// Firestore collection reference: notifications
// collection(db, "notifications")
