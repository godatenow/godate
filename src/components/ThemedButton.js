import React from 'react';
const ThemedButton = ({ title, onPress, type = 'primary' }) => {
  return (
    <TouchableOpacity style={styles[type]} onPress={onPress} accessibilityLabel="">
      <Text style={theme.textVariants.button} accessibilityLabel=t("תוכן נגיש")>{title}</Text accessibilityLabel=t("תוכן נגיש")>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  primary: {
    ...theme.button.primary,
  },
  secondary: {
    ...theme.button.secondary,
  },
});
export default ThemedButton;

// Firestore collection reference: users
// collection(db, "users")

// Firestore collection reference: matches
// collection(db, "matches")

// Firestore collection reference: messages
// collection(db, "messages")

// Firestore collection reference: notifications
// collection(db, "notifications")
