
// תמיכה ב-RTL - הוספת סגנון גלובלי במידת הצורך
const rtlStyles = {
  direction: 'rtl',
  textAlign: 'right',
};

import FadeInView from "../src/FadeInView";
import React from 'react';
import { View, FlatList, LazyCachedImage } from 'react-native';

const photos = [
  { id: '1', uri: 'https://example.com/photo1.jpg' },
  { id: '2', uri: 'https://example.com/photo2.jpg' },
];

export default function GalleryScreen() {
  return (
    <FadeInView>
    <FlatList
      data={photos}
      keyExtractor={item => item.id}
      numColumns={2}
      renderItem={({ item }) => (
        <LazyCachedImage accessible={true} accessibilityLabel="תמונה" source={{ uri: item.uri }} style={{ width: 150, height: 150, margin: 5 }} />
      )}
    />
      </FadeInView>
  );
}
// Firestore collection reference: users
// collection(db, "users")

// Firestore collection reference: matches
// collection(db, "matches")

// Firestore collection reference: messages
// collection(db, "messages")

// Firestore collection reference: notifications
// collection(db, "notifications")
