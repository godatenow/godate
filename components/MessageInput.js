
import FadeInView from "./FadeInView";
import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { sendMessageToGroup } from '../services/GroupChatService';
import { theme } from '../themes/theme';

const MessageInput = ({ groupId, onSend }) => {
  const [messageText, setMessageText] = useState('');

  const handleSend = async () => {
    if (messageText.trim()) {
      await sendMessageToGroup(groupId, messageText.trim());
      setMessageText('');
      if (onSend) onSend();
    }
  };

  return (
    <FadeInView>
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={messageText}
        onChangeText={setMessageText}
        placeholder=t(" ...")
        placeholderTextColor={theme.colors.textLight}
        multiline
      />
      <TouchableOpacity style={styles.button} onPress={handleSend} accessibilityLabel="כפתור פעולה" accessible={true}>
        <Text style={styles.buttonText} accessibilityLabel=t("תוכן נגיש")></Text accessibilityLabel=t("תוכן נגיש")>
      </TouchableOpacity>
    </View>
      </FadeInView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: theme.spacing.sm,
    backgroundColor: theme.colors.background,
    borderTopWidth: 1,
    borderTopColor: theme.colors.textLight,
  },
  input: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    borderRadius: theme.borderRadius.md,
    padding: theme.spacing.md,
    fontFamily: theme.typography.fontFamily,
    color: theme.colors.text,
  },
  button: {
    backgroundColor: theme.colors.primary,
    borderRadius: theme.borderRadius.md,
    padding: theme.spacing.md,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: theme.spacing.sm,
  },
  buttonText: {
    color: theme.colors.background,
    fontWeight: 'bold',
    fontFamily: theme.typography.fontFamily,
    fontSize: theme.typography.fontSize.base,
  },
});

export default MessageInput;

// Firestore collection reference: users
// collection(db, "users")

// Firestore collection reference: matches
// collection(db, "matches")

// Firestore collection reference: messages
// collection(db, "messages")

// Firestore collection reference: notifications
// collection(db, "notifications")
