import LazyImage from '../components/LazyImage';

import React from 'react';
import { Image as RNImage } from 'react-native-expo-image-cache';

export default function LazyCachedImage({ uri, style }) {
  return <LazyImage uri={uri} style={style} />;
}

// Firestore collection reference: users
// collection(db, "users")

// Firestore collection reference: matches
// collection(db, "matches")

// Firestore collection reference: messages
// collection(db, "messages")

// Firestore collection reference: notifications
// collection(db, "notifications")
