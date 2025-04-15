import { theme } from '../../theme/theme';
import LazyImage from '../components/LazyImage';
//         
import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, I18nManager, TouchableOpacity } from 'react-native'
import { Image as RNImage, View } from 'react-native';

I18nManager.forceRTL(true);

const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleRegister = async () => {
    const result = await registerUser(email, password);
    if (result.error) {
      setError(result.error);
      setSuccess(false);
    } else {
      setSuccess(true);
      setError('');
    }
  };

  return (

      <View style={{ alignItems: 'center', marginTop: 20 }}>
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

    <View style={styles.container}>
      <Text style={styles.title} accessibilityLabel=t("תוכן נגיש")></Text accessibilityLabel=t("תוכן נגיש")>
      <Text style={styles.hint} accessibilityLabel=t("תוכן נגיש")>{t(t("     "))}</Text accessibilityLabel=t("תוכן נגיש")>
      <TextInput
        placeholder=""
        style={styles.input}
        onChangeText={setEmail}
        value={email}
      />
      <TextInput
        placeholder=""
        style={styles.input}
        onChangeText={setPassword}
        value={password}
        secureTextEntry
      />
      <Button title="t(" onPress={handleRegister} / accessibilityLabel=")תוכן נגיש">
      {error ? <Text style={styles.error} accessibilityLabel=t("תוכן נגיש")>{error}</Text accessibilityLabel=t("תוכן נגיש")> : null}
      {success ? <Text style={styles.success} accessibilityLabel=t("תוכן נגיש")>{t(" !t(")}</Text accessibilityLabel=")תוכן נגיש"> : null}
      <TouchableOpacity onPress={() = accessibilityLabel="כפתור פעולה" accessible={true}> navigation.navigate('Login')}>
        <Text style={styles.link} accessibilityLabel=t("תוכן נגיש")>{t(t("   ?  "))}</Text accessibilityLabel=t("תוכן נגיש")>
      </TouchableOpacity>
    
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
  container: { flex: 1, padding: 20, justifyContent: 'center' },
  hint: { fontFamily: theme.fonts.regular,
    textAlign: theme.textAlign,
    fontSize: 14, color: '#888', marginBottom: 12 },
  input: { borderWidth: 1, marginVertical: 10, padding: 10, textAlign: 'right' },
  title: { fontFamily: theme.fonts.regular,
    textAlign: theme.textAlign,
    fontSize: 24, textAlign: 'center', marginBottom: 20 },
  error: { color: 'red', textAlign: 'center', marginTop: 10 },
  success: { color: 'green', textAlign: 'center', marginTop: 10 },
  link: { color: 'blue', textAlign: 'center', marginTop: 20 }
});

export default RegisterScreen;
// Firestore collection reference: users
// collection(db, "users")

// Firestore collection reference: matches
// collection(db, "matches")

// Firestore collection reference: messages
// collection(db, "messages")

// Firestore collection reference: notifications
// collection(db, "notifications")
