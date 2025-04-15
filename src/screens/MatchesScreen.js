
// תמיכה ב-RTL - הוספת סגנון גלובלי במידת הצורך
const rtlStyles = {
  direction: 'rtl',
  textAlign: 'right',
};

import React from 'react';

import { I18nManager } from 'react-native'
import { Image, View } from 'react-native';

//    ,    -RTL      
if (I18nManager.isRTL !== true) {
  I18nManager.forceRTL(true);
}


export default MatchesScreen;

const MatchesScreen = () => null;
export default MatchesScreen;

// Firestore collection reference: users
// collection(db, "users")

// Firestore collection reference: matches
// collection(db, "matches")

// Firestore collection reference: messages
// collection(db, "messages")

// Firestore collection reference: notifications
// collection(db, "notifications")
