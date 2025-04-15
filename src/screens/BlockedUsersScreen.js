
// תמיכה ב-RTL - הוספת סגנון גלובלי במידת הצורך
const rtlStyles = {
  direction: 'rtl',
  textAlign: 'right',
};


import EmptyState from '../../components/EmptyState';
import { theme } from '../../theme/theme';
import React from 'react';
import { View, Text, FlatList, Button } from 'react-native';

const blockedUsers = [
  { id: '1', name: 'רותי' },
  { id: '2', name: 'דני' },
];

export default function BlockedUsersScreen() {
  return (
    <View style={rtlStyles} style={{ padding: 20 }}>
      <Text style={{ fontSize: 20, marginBottom: 10 }}>משתמשים חסומים</Text>
      <FlatList
        ListEmptyComponent={<EmptyState title='לא נמצאו תוצאות' subtitle='נסה שוב או שנה סינון' />}
        data={blockedUsers}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={rtlStyles} style={{ marginBottom: 10 }}>
            <Text>{item.name}</Text>
            <Button title="בטל חסימה" onPress={() => {}} />
          
  {!loading && (
    <View style={{ alignItems: 'center', marginTop: 40 }}>
      <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#ff4081' }}>
        התחל/י עכשיו – החיבור הבא שלך מחכה כאן!
      </Text>
    </View>
  )}

</View>
        )}
      />
    
  {!loading && (
    <View style={{ alignItems: 'center', marginTop: 40 }}>
      <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#ff4081' }}>
        התחל/י עכשיו – החיבור הבא שלך מחכה כאן!
      </Text>
    </View>
  )}

</View>
  );
}
