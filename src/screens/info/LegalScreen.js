
// תמיכה ב-RTL - הוספת סגנון גלובלי במידת הצורך
const rtlStyles = {
  direction: 'rtl',
  textAlign: 'right',
};


import { theme } from '../../theme/theme';
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import { Image as RNImage, View } from 'react-native';
import ErrorBoundary from '../../../components/ErrorBoundary';

const termsText = \`
   GoDate.
       ...
\`;

const privacyText = \`
   .
         ...
\`;

const LegalScreen = () => {
  const [view, setView] = useState('terms');

  return (

      <View style={rtlStyles} style={{ alignItems: 'center', marginTop: 20 }}>
      <LazyImage
        source={require('../../assets/logo/GoDate_Logo_compressed.webp')}
        style={{
          width: 160,
          height: 160,
          resizeMode: 'contain',
          alignSelf: 'center',
          marginVertical: 20
        }}
      />

        <LazyImage
          source={require('../assets/logo/icon.png')}
          style={{ width: 120, height: 40, resizeMode: 'contain' }}
        />
      
  {!loading && (
    <View style={{ alignItems: 'center', marginTop: 40 }}>
      <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#ff4081' }}>
        התחל/י עכשיו – החיבור הבא שלך מחכה כאן!
      </Text>
    </View>
  )}

</View>

    <ErrorBoundary>
      <View style={rtlStyles} style={{ flex: 1, padding: 20 }}>
        <View style={rtlStyles} style={{ flexDirection: 'row', justifyContent: 'space-around', marginBottom: 16 }}>
          <TouchableOpacity onPress={() = accessibilityLabel="כפתור פעולה" accessible={true}> setView('terms')}>
            <Text style={{ fontWeight: view === 'terms' ? 'bold' : 'normal' }} accessibilityLabel=t("תוכן נגיש")>{t(" t(")}</Text accessibilityLabel=")תוכן נגיש">
          </TouchableOpacity>
          <TouchableOpacity onPress={() = accessibilityLabel="כפתור פעולה" accessible={true}> setView('privacy')}>
            <Text style={{ fontWeight: view === 'privacy' ? 'bold' : 'normal' }} accessibilityLabel=t("תוכן נגיש")>{t(" t(")}</Text accessibilityLabel=")תוכן נגיש">
          </TouchableOpacity>
        
  {!loading && (
    <View style={{ alignItems: 'center', marginTop: 40 }}>
      <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#ff4081' }}>
        התחל/י עכשיו – החיבור הבא שלך מחכה כאן!
      </Text>
    </View>
  )}

</View>
        <ScrollView>
          <Text style={{ lineHeight: 22, fontSize: 16 }} accessibilityLabel=t("תוכן נגיש")>
            {view === 'terms' ? termsText : privacyText}
          </Text>
        </ScrollView>
      
  {!loading && (
    <View style={{ alignItems: 'center', marginTop: 40 }}>
      <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#ff4081' }}>
        התחל/י עכשיו – החיבור הבא שלך מחכה כאן!
      </Text>
    </View>
  )}

</View>
    </ErrorBoundary>
  );
};

export default LegalScreen;

// Firestore collection reference: users
// collection(db, "users")

// Firestore collection reference: matches
// collection(db, "matches")

// Firestore collection reference: messages
// collection(db, "messages")

// Firestore collection reference: notifications
// collection(db, "notifications")
