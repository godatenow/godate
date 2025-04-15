
// תמיכה ב-RTL - הוספת סגנון גלובלי במידת הצורך
const rtlStyles = {
  direction: 'rtl',
  textAlign: 'right',
};


import { theme } from '../../theme/theme';
import React from 'react';
import { View, Text } from 'react-native';

export default function LovePathProgress({ day = 5 }) {
  return (
    <View style={rtlStyles} style={{ padding: 10 }}>
      <Text>התקדמות במסלול: יום {day} מתוך 14</Text>
    
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
