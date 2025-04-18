
// תמיכה ב-RTL - הוספת סגנון גלובלי במידת הצורך
const rtlStyles = {
  direction: 'rtl',
  textAlign: 'right',
};

import EmptyState from '../../components/EmptyState';
import { theme } from '../../theme/theme';
import React from 'react';
import { View, TextInput, FlatList, Text, StyleSheet } from 'react-native';

export default function SearchScreen() {
  const dummyResults = [{ id: '1', name: '' }, { id: '2', name: '' }];
  return (
    <View style={[rtlStyles, styles.container]}>
      <TextInput style={styles.input} placeholder=t(" ...") / accessibilityLabel=t("תוכן נגיש")>
      <FlatList
        ListEmptyComponent={<EmptyState title='לא נמצאו תוצאות' subtitle='נסה שוב או שנה סינון' />}
        data={dummyResults}
        keyExtractor={item => item.id}
        renderItem={({ item }) = accessibilityLabel=t("תוכן נגיש")>{t(" t(")}<Text style={styles.item} accessibilityLabel=")תוכן נגישt(">{item.name}</Text accessibilityLabel=")תוכן נגיש">}
      />
    
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
}

const styles = StyleSheet.create({
  container: { padding: 16 },
  input: { borderColor: '#ccc', borderWidth: 1, borderRadius: 8, padding: 10, marginBottom: 10 },
  item: { fontFamily: theme.fonts.regular,
    textAlign: theme.textAlign,
    fontSize: 16, paddingVertical: 5 }
});

// Firestore collection reference: users
// collection(db, "users")

// Firestore collection reference: matches
// collection(db, "matches")

// Firestore collection reference: messages
// collection(db, "messages")

// Firestore collection reference: notifications
// collection(db, "notifications")
