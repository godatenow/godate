import FadeInView from "./FadeInView";
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import LazyCachedImage from '../components/LazyCachedImage';

export default React.memo(function UserCard({ user, onPress }) {
  return (
    <FadeInView>
      <TouchableOpacity
        style={styles.card}
        onPress={() => onPress(user)}
        accessibilityLabel="כפתור פרטי משתמש"
        accessible={true}
      >
        <LazyCachedImage source={{ uri: user.avatar }} style={styles.avatar} />
        <View>
          <Text style={styles.name} accessibilityLabel="שם">{user.name}</Text>
          <Text style={styles.age} accessibilityLabel="גיל ועיר">{user.age} | {user.city}</Text>
        </View>
      </TouchableOpacity>
    </FadeInView>
  );
});

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    margin: 8,
    padding: 12,
    borderRadius: 10,
    elevation: 3,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  age: {
    fontSize: 14,
    color: '#555',
  },
});
