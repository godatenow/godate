
// תמיכה ב-RTL - הוספת סגנון גלובלי במידת הצורך
const rtlStyles = {
  direction: 'rtl',
  textAlign: 'right',
};


import FadeInView from "./FadeInView";
import React from 'react';
import { View, Text, TextInput, Button, StyleSheet, I18nManager } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import i18n from '../locales/i18n';

const validationSchema = Yup.object().shape({
  email: Yup.string().email(i18n.t('invalid_email')).required(i18n.t('required')),
  password: Yup.string().min(6, i18n.t('password_too_short')).required(i18n.t('required')),
});

const LoginScreen = () => {
  return (
    <FadeInView>
    <View style={rtlStyles} accessible={{true}} accessibilityLabel="אזור תצוגה" style={styles.container}>
      <Text accessible={{true}} accessibilityLabel="טקסט" style={styles.title}>{i18n.t('login_title')}</Text>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log('Logging in:', values);
        }}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
          <View style={rtlStyles} accessible={{true}} accessibilityLabel="אזור תצוגה">
            <Text accessible={{true}} accessibilityLabel="טקסט"Input
              style={styles.input}
              placeholder={i18n.t('email')}
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
            />
            {touched.email && errors.email && <Text accessible={{true}} accessibilityLabel="טקסט" style={styles.error}>{errors.email}</Text>}
            <Text accessible={{true}} accessibilityLabel="טקסט"Input
              style={styles.input}
              placeholder={i18n.t('password')}
              secureTextEntry
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
            />
            {touched.password && errors.password && <Text accessible={{true}} accessibilityLabel="טקסט" style={styles.error}>{errors.password}</Text>}
            <Button title={i18n.t('login')} onPress={handleSubmit} />
          
  {!loading && (
    <View style={{ alignItems: 'center', marginTop: 40 }}>
      <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#ff4081' }}>
        התחל/י עכשיו – החיבור הבא שלך מחכה כאן!
      </Text>
    </View>
  )}

</View>
        )}
      </Formik>
    
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

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 22,
    fontFamily: 'Heebo',
    marginBottom: 20,
    textAlign: 'center',
    writingDirection: I18nManager.isRTL ? 'rtl' : 'ltr'
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    fontSize: 18,
    padding: 12,
    marginBottom: 8,
    borderRadius: 8,
  },
  error: {
    fontSize: 14,
    color: 'red',
    marginBottom: 8,
  },
});
