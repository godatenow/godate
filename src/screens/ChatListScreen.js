
// תמיכה ב-RTL - הוספת סגנון גלובלי במידת הצורך
const rtlStyles = {
  direction: 'rtl',
  textAlign: 'right',
};


<TouchableOpacity 
  accessibilityLabel=" " 
  onPress={handlePress}>
  <Text accessibilityLabel=t("תוכן נגיש")></Text accessibilityLabel=t("תוכן נגיש")>
</TouchableOpacity>


import EmptyState from '../../components/EmptyState';
import { theme } from '../../theme/theme';
import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function ChatListScreen() {
  const navigation = useNavigation();

  const chats = [
    {
      id: '1',
      name: ' ',
      lastMessage: ' ?',
      time: '18:45',
      avatar: 'https://i.pravatar.cc/301',
    },
    {
      id: '2',
      name: ' ',
      lastMessage: '  ',
      time: '16:20',
      avatar: 'https://i.pravatar.cc/302',
    },
  ];

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.chatItem} onPress={() = accessibilityLabel="כפתור פעולה" accessible={true}> navigation.navigate('Chat', { userName: item.name })}>
      <LazyImage source={{ uri: item.avatar }} style={styles.avatar} />
      <View style={rtlStyles} style={styles.chatInfo}>
        <Text style={styles.name} accessibilityLabel=t("תוכן נגיש")>{item.name}</Text accessibilityLabel=t("תוכן נגיש")>
        <Text style={styles.lastMessage} accessibilityLabel=t("תוכן נגיש")>{item.lastMessage}</Text accessibilityLabel=t("תוכן נגיש")>
      
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
      <Text style={styles.time} accessibilityLabel=t("תוכן נגיש")>{item.time}</Text accessibilityLabel=t("תוכן נגיש")>
    </TouchableOpacity>
  );

  return (

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
      <Text style={{ fontFamily: theme.fonts.regular,
    textAlign: theme.textAlign,
    fontSize: 18, fontWeight: 'bold', color: '#ff4081' }}>
        התחל/י עכשיו – החיבור הבא שלך מחכה כאן!
      </Text>
    </View>
  )}

</View>

    <View style={[rtlStyles, styles.container]}>
      <FlatList
        ListEmptyComponent={<EmptyState title='לא נמצאו תוצאות' subtitle='נסה שוב או שנה סינון' />}
        data={chats}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={{ paddingBottom: 20 }}
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
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
  chatItem: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
    padding: 12,
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginLeft: 10,
  },
  chatInfo: {
    flex: 1,
    justifyContent: 'center',
  },
  name: {
    fontFamily: 'Heebo',
    fontFamily: theme.fonts.regular,
    textAlign: theme.textAlign,
    fontSize: 16,
    fontWeight: 'bold',
  },
  lastMessage: {
    fontFamily: 'Heebo',
    color: 'gray',
  },
  time: {
    fontFamily: 'Heebo',
    fontFamily: theme.fonts.regular,
    textAlign: theme.textAlign,
    fontSize: 12,
    color: 'gray',
  },
});

// Firestore collection reference: users
// collection(db, "users")

// Firestore collection reference: matches
// collection(db, "matches")

// Firestore collection reference: messages
// collection(db, "messages")

// Firestore collection reference: notifications
// collection(db, "notifications")
