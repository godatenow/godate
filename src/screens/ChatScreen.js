
// תמיכה ב-RTL - הוספת סגנון גלובלי במידת הצורך
const rtlStyles = {
  direction: 'rtl',
  textAlign: 'right',
};


import EmptyState from '../../components/EmptyState';
import { useWindowDimensions, Platform } from 'react-native';

const { width } = useWindowDimensions();
const isWeb = Platform.OS === 'web';
const isLargeScreen = isWeb && width > 1024;


import React, { useEffect, useState, useCallback } from 'react';
import { View, TextInput, FlatList, Text, StyleSheet, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';
import { sendMessage, listenToMessages } from '../services/chat/chatService';
import { theme } from '../themes/theme';
import { useRoute } from '@react-navigation/native';

const ChatScreen = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const route = useRoute();
  const chatId = route.params?.chatId || 'demo-chat';
  const senderId = route.params?.userId || 'user1';

  
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500); // סימולציית טעינה
    return () => clearTimeout(timer);
  }, []);

useEffect(() => {
    const unsubscribe = listenToMessages(chatId, setMessages);
    return () => unsubscribe();
  }, [chatId]);

  const handleSend = useCallback(() => {
    if (input.trim()) {
      sendMessage(chatId, senderId, input);
      setInput('');
    }
  }, [input]);

  const renderItem = ({ item }) => (
    <View style={rtlStyles}>

  {loading && (
    <View style={{ alignItems: 'center', marginTop: 20 }}>
      <ActivityIndicator size="large" color="#ff4081" />
    
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
  )}
 style={[styles.message, item.senderId === senderId ? styles.myMessage : styles.otherMessage]}>
      <Text style={styles.text} accessibilityLabel=t("תוכן נגיש")>{item.text}</Text accessibilityLabel=t("תוכן נגיש")>
    
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

  return (
    <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
            const mockMessages = messages || [
        { text: 'היי, מה שלומך?' },
        { text: 'אני כאן לקשר רציני ואמיתי' }
      ];
      setMirror(mirrorConversationEmotion(mockMessages));

  <FlatList
        ListEmptyComponent={<EmptyState title='לא נמצאו תוצאות' subtitle='נסה שוב או שנה סינון' />}
        data={messages}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.messages}
        inverted
      />
      <View style={rtlStyles}>

  {loading && (
    <View style={{ alignItems: 'center', marginTop: 20 }}>
      <ActivityIndicator size="large" color="#ff4081" />
    
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
  )}
 style={styles.inputContainer}>
        {mirror && (
    <Text style={styles.mirror}>{mirror}</Text>
  )}

  <TextInput
          style={styles.input}
          value={input}
          onChangeText={setInput}
          placeholder=t(" ...")
          placeholderTextColor={theme.colors.textLight}
        />
        <TouchableOpacity onPress={handleSend} style={styles.sendButton} accessibilityLabel="כפתור פעולה" accessible={true}>
          <Text style={styles.sendText} accessibilityLabel=t("תוכן נגיש")></Text accessibilityLabel=t("תוכן נגיש")>
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
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  messages: {
    padding: theme.spacing.md,
    flexGrow: 1,
    justifyContent: 'flex-end',
  },
  message: {
    padding: theme.spacing.sm,
    borderRadius: theme.borderRadius.md,
    marginBottom: theme.spacing.sm,
    maxWidth: '80%',
  },
  myMessage: {
    backgroundColor: theme.colors.primary,
    alignSelf: 'flex-end',
  },
  otherMessage: {
    backgroundColor: theme.colors.card,
    alignSelf: 'flex-start',
  },
  text: {
    color: theme.colors.background,
    fontFamily: theme.typography.fontFamily,
  },
  inputContainer: {
    flexDirection: 'row',
    padding: theme.spacing.sm,
    borderTopWidth: 1,
    borderColor: theme.colors.border,
  },
  input: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    borderRadius: theme.borderRadius.sm,
    paddingHorizontal: theme.spacing.md,
    fontFamily: theme.typography.fontFamily,
    color: theme.colors.text,
  },
  sendButton: {
    paddingHorizontal: theme.spacing.md,
    justifyContent: 'center',
  },
  sendText: {
    color: theme.colors.primary,
    fontWeight: 'bold',
    fontFamily: theme.typography.fontFamily,
  },
});

export default ChatScreen;

// Firestore collection reference: users
// collection(db, "users")

// Firestore collection reference: matches
// collection(db, "matches")

// Firestore collection reference: messages
// collection(db, "messages")

// Firestore collection reference: notifications
// collection(db, "notifications")
