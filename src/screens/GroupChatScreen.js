
// תמיכה ב-RTL - הוספת סגנון גלובלי במידת הצורך
const rtlStyles = {
  direction: 'rtl',
  textAlign: 'right',
};

import EmptyState from '../../components/EmptyState';
import * as apiService from '@services/apiService';
import FadeInView from '../components/FadeInView';

import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';
import { sendMessageToGroup, fetchMessagesForGroup } from '../services/GroupChatService';
import { theme } from '../themes/theme';
import { useRoute } from '@react-navigation/native';
import { auth } from '../firebase/firebase';

const GroupChatScreen = () => {
  const { groupId } = useRoute().params; // assuming groupId is passed as parameter
  const [messages, setMessages] = useState([]);
  const [messageText, setMessageText] = useState('');
  const [loading, setLoading] = useState(false);

  // Load messages from group chat
  const loadMessages = async () => {
    setLoading(true);
    const messages = await fetchMessagesForGroup(groupId);
    setMessages(messages);
    setLoading(false);
  };

  // Send message to group chat
  const handleSendMessage = async () => {
    if (messageText.trim()) {
      await sendMessageToGroup(groupId, messageText.trim());
      setMessageText('');
      loadMessages();
    }
  };

  useEffect(() => {
    loadMessages();
  }, [groupId]);

  const renderItem = ({ item }) => (
    <View style={rtlStyles} style={styles.messageCard}>
      <Text style={styles.messageSender} accessibilityLabel=t("תוכן נגיש")>{item.senderId}</Text accessibilityLabel=t("תוכן נגיש")>
      <Text style={styles.messageText} accessibilityLabel=t("תוכן נגיש")>{item.message}</Text accessibilityLabel=t("תוכן נגיש")>
    
  {!loading && data?.length === 0 && (
    <View style={{ alignItems: 'center', marginTop: 30 }}>
      <Text style={{ fontFamily: theme.fonts.regular,
    textAlign: theme.textAlign,
    fontSize: 16, color: '#888' }}>
        אין עדיין תוכן כאן – זה הזמן ליצור חיבורים חדשים!
      </Text>
    
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

  return (<FadeInView>

    <View style={[rtlStyles, styles.container]}>
      <Text style={styles.title} accessibilityLabel=t("תוכן נגיש")>{t(" t(")}</Text accessibilityLabel=")תוכן נגיש">
      {loading ? (
        <ActivityIndicator size=t("large") color={theme.colors.primary} />
      ) : (
        <FlatList
        ListEmptyComponent={<EmptyState title='לא נמצאו תוצאות' subtitle='נסה שוב או שנה סינון' />}
          data={messages}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.messagesList}
        />
      )}
      <TextInput
        style={styles.input}
        value={messageText}
        onChangeText={setMessageText}
        placeholder=t(" ...")
        placeholderTextColor={theme.colors.textLight}
        multiline
      />
      <TouchableOpacity style={styles.button} onPress={handleSendMessage} accessibilityLabel="כפתור פעולה" accessible={true}>
        <Text style={styles.buttonText} accessibilityLabel=t("תוכן נגיש")>{t(" t(")}</Text accessibilityLabel=")תוכן נגיש">
      </TouchableOpacity>
    
  {!loading && data?.length === 0 && (
    <View style={{ alignItems: 'center', marginTop: 30 }}>
      <Text style={{ fontFamily: theme.fonts.regular,
    textAlign: theme.textAlign,
    fontSize: 16, color: '#888' }}>
        אין עדיין תוכן כאן – זה הזמן ליצור חיבורים חדשים!
      </Text>
    
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
  container: {
    padding: theme.spacing.lg,
    backgroundColor: theme.colors.background,
    flex: 1,
  },
  title: {
    fontFamily: theme.fonts.regular,
    textAlign: theme.textAlign,
    fontSize: theme.typography.fontSize.xl,
    color: theme.colors.primary,
    fontFamily: theme.typography.fontFamily,
    textAlign: 'center',
    marginBottom: theme.spacing.md,
  },
  messagesList: {
    marginBottom: theme.spacing.md,
  },
  messageCard: {
    backgroundColor: theme.colors.card,
    padding: theme.spacing.md,
    borderRadius: theme.borderRadius.md,
    marginBottom: theme.spacing.sm,
    ...theme.shadow.card,
  },
  messageSender: {
    fontWeight: 'bold',
    color: theme.colors.primary,
    marginBottom: theme.spacing.sm,
  },
  messageText: {
    fontFamily: theme.typography.fontFamily,
    color: theme.colors.text,
  },
  input: {
    backgroundColor: '#f0f0f0',
    borderRadius: theme.borderRadius.md,
    padding: theme.spacing.md,
    minHeight: 60,
    fontFamily: theme.typography.fontFamily,
    color: theme.colors.text,
    marginBottom: theme.spacing.sm,
  },
  button: {
    backgroundColor: theme.colors.primary,
    padding: theme.spacing.md,
    borderRadius: theme.borderRadius.lg,
    alignItems: 'center',
  },
  buttonText: {
    color: theme.colors.background,
    fontWeight: 'bold',
    fontFamily: theme.typography.fontFamily,
    fontFamily: theme.fonts.regular,
    textAlign: theme.textAlign,
    fontSize: theme.typography.fontSize.lg,
  },
});

export default GroupChatScreen;

// Firestore collection reference: users
// collection(db, "users")

// Firestore collection reference: matches
// collection(db, "matches")

// Firestore collection reference: messages
// collection(db, "messages")

// Firestore collection reference: notifications
// collection(db, "notifications")
