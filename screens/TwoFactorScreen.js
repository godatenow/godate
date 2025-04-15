
// תמיכה ב-RTL - הוספת סגנון גלובלי במידת הצורך
const rtlStyles = {
  direction: 'rtl',
  textAlign: 'right',
};


import FadeInView from "./FadeInView";
import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet, I18nManager } from 'react-native';
import i18n from '../locales/i18n';
import { generateVerificationCode, sendCodeToUser, verifyCode } from '../services/twoFactorAuth';

const TwoFactorScreen = ({ route, navigation }) => {
  const { email } = route.params || {};
  const [code, setCode] = useState('');
  const [realCode, setRealCode] = useState('');

  
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500); // סימולציית טעינה
    return () => clearTimeout(timer);
  }, []);

useEffect(() => {
    const generated = generateVerificationCode();
    setRealCode(generated);
    sendCodeToUser(email, generated);
  }, [email]);

  const handleVerify = () => {
    if (verifyCode(code, realCode)) {
      Alert.alert(i18n.t('success'), i18n.t('2fa_verified'));
      navigation.replace('HomeScreen');
    } else {
      Alert.alert(i18n.t('error'), i18n.t('2fa_failed'));
    }
  };

  return (
    <FadeInView>
    <View style={rtlStyles}>

  {loading && (
    <View style={{ alignItems: 'center', marginTop: 20 }}>
      <ActivityIndicator size="large" color="#ff4081" />
    
  {!loading && data?.length === 0 && (
    <View style={{ alignItems: 'center', marginTop: 30 }}>
      <Text style={{ fontSize: 16, color: '#888' }}>
        אין עדיין תוכן כאן – זה הזמן ליצור חיבורים חדשים!
      </Text>
    
  {!loading && (
    <View style={{ alignItems: 'center', marginTop: 40 }}>
      <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#ff4081' }}>
        התחל/י עכשיו – החיבור הבא שלך מחכה כאן!
      </Text>
    </View>
  )}

</View>
  )}


  {!loading && (
    <View style={{ alignItems: 'center', marginTop: 40 }}>
      <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#ff4081' }}>
        התחל/י עכשיו – החיבור הבא שלך מחכה כאן!
      </Text>
    </View>
  )}

</View>
  )}
 accessible={{true}} accessibilityLabel="אזור תצוגה" style={styles.container}>
      <Text accessible={{true}} accessibilityLabel="טקסט" style={styles.title}>{i18n.t('enter_2fa_code')}</Text>
      <Text accessible={{true}} accessibilityLabel="טקסט"Input
        style={styles.input}
        value={code}
        onChangeText={setCode}
        keyboardType="numeric"
        placeholder="123456"
      />
      <Button title={i18n.t('verify')} onPress={handleVerify} />
    
  {!loading && data?.length === 0 && (
    <View style={{ alignItems: 'center', marginTop: 30 }}>
      <Text style={{ fontSize: 16, color: '#888' }}>
        אין עדיין תוכן כאן – זה הזמן ליצור חיבורים חדשים!
      </Text>
    
  {!loading && (
    <View style={{ alignItems: 'center', marginTop: 40 }}>
      <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#ff4081' }}>
        התחל/י עכשיו – החיבור הבא שלך מחכה כאן!
      </Text>
    </View>
  )}

</View>
  )}


  {!loading && (
    <View style={{ alignItems: 'center', marginTop: 40 }}>
      <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#ff4081' }}>
        התחל/י עכשיו – החיבור הבא שלך מחכה כאן!
      </Text>
    </View>
  )}

</View>
      </FadeInView>
  );
};

export default TwoFactorScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 24,
    backgroundColor: '#fff'
  },
  title: {
    fontSize: 20,
    fontFamily: 'Heebo',
    marginBottom: 16,
    textAlign: 'center',
    writingDirection: I18nManager.isRTL ? 'rtl' : 'ltr'
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    fontSize: 18,
    padding: 12,
    marginBottom: 16,
    borderRadius: 8
  }
});
