
// תמיכה ב-RTL - הוספת סגנון גלובלי במידת הצורך
const rtlStyles = {
  direction: 'rtl',
  textAlign: 'right',
};

import { theme } from '../../theme/theme';
import React from 'react';
const matchedProfile = {
  name: '',
  age: 31,
  hobbies: ['', '', ''],
  description: '  ,      .',
  photo: 'https://randomuser.me/api/portraits/women/31.jpg',
};
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 24,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderColor: '#FF5A5F',
    borderWidth: 2,
    marginBottom: 16,
  },
  name: {
    fontFamily: theme.fonts.regular,
    textAlign: theme.textAlign,
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  description: {
    textAlign: 'center',
    fontFamily: theme.fonts.regular,
    textAlign: theme.textAlign,
    fontSize: 14,
    color: '#444',
    marginBottom: 20,
  },
  section: {
    alignSelf: 'stretch',
    marginTop: 12,
  },
  label: {
    fontFamily: theme.fonts.regular,
    textAlign: theme.textAlign,
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
  },
  hobbies: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  hobbyBadge: {
    backgroundColor: '#FF5A5F',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
    marginRight: 8,
    marginBottom: 8,
  },
  hobbyText: {
    color: 'white',
    fontFamily: theme.fonts.regular,
    textAlign: theme.textAlign,
    fontSize: 14,
  },
  button: {
    flexDirection: 'row',
    backgroundColor: '#FF5A5F',
    padding: 12,
    borderRadius: 30,
    marginTop: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    marginLeft: 8,
    fontFamily: theme.fonts.regular,
    textAlign: theme.textAlign,
    fontSize: 16,
    fontWeight: '500',
  },
});

export default MatchProfileScreen;

// Firestore collection reference: users
// collection(db, "users")

// Firestore collection reference: matches
// collection(db, "matches")

// Firestore collection reference: messages
// collection(db, "messages")

// Firestore collection reference: notifications
// collection(db, "notifications")
