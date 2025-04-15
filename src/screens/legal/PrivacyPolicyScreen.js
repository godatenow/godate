import { theme } from '../../theme/theme';
import React from 'react';
import { View, Text, ScrollView, StyleSheet, I18nManager } from 'react-native'
import { Image as RNImage, View } from 'react-native';

I18nManager.forceRTL(true);

const PrivacyPolicyScreen = () => {
  return (

      <View style={{ alignItems: 'center', marginTop: 20 }}>
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
      <Text style={{ fontFamily: theme.fonts.regular,
    textAlign: theme.textAlign,
    fontSize: 18, fontWeight: 'bold', color: '#ff4081' }}>
        התחל/י עכשיו – החיבור הבא שלך מחכה כאן!
      </Text>
    </View>
  )}

</View>

    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title} accessibilityLabel=t("תוכן נגיש")>{t(" t(")}</Text accessibilityLabel=")תוכן נגיש">
      <Text style={styles.text} accessibilityLabel=t("תוכן נגיש")>
           .       ,  , .
      </Text>
      <Text style={styles.text} accessibilityLabel=t("תוכן נגיש")>
                  ,    .
      </Text>
      <Text style={styles.text} accessibilityLabel=t("תוכן נגיש")>
             .        .
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20 },
  title: { fontFamily: theme.fonts.regular,
    textAlign: theme.textAlign,
    fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 20 },
  text: { fontFamily: theme.fonts.regular,
    textAlign: theme.textAlign,
    fontSize: 16, textAlign: 'right', marginBottom: 15 }
});

export default PrivacyPolicyScreen;
// Firestore collection reference: users
// collection(db, "users")

// Firestore collection reference: matches
// collection(db, "matches")

// Firestore collection reference: messages
// collection(db, "messages")

// Firestore collection reference: notifications
// collection(db, "notifications")
