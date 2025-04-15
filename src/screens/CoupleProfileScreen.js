
// תמיכה ב-RTL - הוספת סגנון גלובלי במידת הצורך
const rtlStyles = {
  direction: 'rtl',
  textAlign: 'right',
};

import { theme } from '../../theme/theme';
import LazyImage from '../components/LazyImage';

import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native'
import { Image as RNImage, View } from 'react-native';

//   (,   )
const CoupleProfileScreen = () => {
}
  const [coupleStory, setCoupleStory] = useState('');
  const [sharedGoals, setSharedGoals] = useState('');
  const [coupleProfile, setCoupleProfile] = useState(null);

  const handleSaveProfile = () => {
}
    const profile = { coupleStory, sharedGoals };
    setCoupleProfile(profile);
    //     -Firebase
  };

  return (<View style={rtlStyles}>
  {!loading && (
    <View style={{ alignItems: 'center', marginTop: 40 }}>
      <Text style={{ fontFamily: theme.fonts.regular,
    textAlign: theme.textAlign,
    fontSize: 18, fontWeight: 'bold', color: '#ff4081' }}>
        התחל/י עכשיו – החיבור הבא שלך מחכה כאן!
      </Text>
    </View>
  )}

</View>);

      <View style={rtlStyles} style={{ alignItems: 'center', marginTop: 20 }}>
        <LazyImage
          source={require('../assets/logo/icon.png')}
          style={{ width: 120, height: 40, resizeMode: 'contain' }}
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

    <View style={rtlStyles} style={styles.container}>
      <Text style={styles.header} accessibilityLabel=t("תוכן נגיש")>{t(" t(")}</Text accessibilityLabel=")תוכן נגיש">
      <TextInput
        style={styles.input}
        value={coupleStory}
        onChangeText={setCoupleStory}
        placeholder=t("    ")
      />
      <TextInput
        style={styles.input}
        value={sharedGoals}
        onChangeText={setSharedGoals}
        placeholder=t("     ?")
      />
      <Button title=" t(" onPress={handleSaveProfile} / accessibilityLabel=")תוכן נגיש">
      {coupleProfile && (
        <View style={rtlStyles} style={styles.profileSummary}>
          <Text accessibilityLabel=t("תוכן נגיש")> : {coupleProfile.coupleStory}</Text accessibilityLabel=t("תוכן נגיש")>
          <Text accessibilityLabel=t("תוכן נגיש")> : {coupleProfile.sharedGoals}</Text accessibilityLabel=t("תוכן נגיש")>
        
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
  );
};

const styles = StyleSheet.create({
}
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  header: {
    fontFamily: theme.fonts.regular,
    textAlign: theme.textAlign,
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    width: '100%',
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  profileSummary: {
    marginTop: 20,
  },
});

export default CoupleProfileScreen;

// Firestore collection reference: users
// collection(db, "users")

// Firestore collection reference: matches
// collection(db, "matches")

// Firestore collection reference: messages
// collection(db, "messages")

// Firestore collection reference: notifications
// collection(db, "notifications")
