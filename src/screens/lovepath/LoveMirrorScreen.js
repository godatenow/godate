
// תמיכה ב-RTL - הוספת סגנון גלובלי במידת הצורך
const rtlStyles = {
  direction: 'rtl',
  textAlign: 'right',
};

import { theme } from '../../theme/theme';
import * as apiService from '@services/apiService';
import FadeInView from '../components/FadeInView';

import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native'
import { Image as RNImage, View } from 'react-native';
import { emotionReflection } from '../../../ai/emotionReflection';
import GlobalLoader from '../../../components/GlobalLoader';
import ErrorBoundary from '../../../components/ErrorBoundary';

const LoveMirrorContent = () => {
  const [reflection, setReflection] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchReflection = async () => {
      try {
        const result = await emotionReflection(t("      "));
        setReflection(result);
      } catch (error) {
        setReflection(t("    ."));
      } finally {
        setLoading(false);
      }
    };
    fetchReflection();
  }, []);

  if (loading) return <GlobalLoader />;

  return (<FadeInView>


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

    <View style={rtlStyles} style={{ padding: 16 }}>
      <Text style={{ fontSize: 18, fontWeight: 'bold' }} accessibilityLabel=t("תוכן נגיש")>{t(" :t(")}</Text accessibilityLabel=")תוכן נגיש">
      <Text style={{ marginTop: 8 }} accessibilityLabel=t("תוכן נגיש")>{reflection}</Text accessibilityLabel=t("תוכן נגיש")>
    
  {!loading && (
    <View style={{ alignItems: 'center', marginTop: 40 }}>
      <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#ff4081' }}>
        התחל/י עכשיו – החיבור הבא שלך מחכה כאן!
      </Text>
    </View>
  )}

</View>
  );
};

const LoveMirrorScreen = () => (
  <ErrorBoundary>
    <LoveMirrorContent />
  </ErrorBoundary>
);

export default LoveMirrorScreen;

// Firestore collection reference: users
// collection(db, "users")

// Firestore collection reference: matches
// collection(db, "matches")

// Firestore collection reference: messages
// collection(db, "messages")

// Firestore collection reference: notifications
// collection(db, "notifications")
