import LazyImage from '../components/LazyImage';

import React, { useState, useEffect } from 'react';
import { Image as RNImage } from 'react-native';

// A helper component to load images lazily with caching support
const LazyLoadImage = ({ source, style, resizeMode = 'contain' }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(false);
  }, [source]);

  return (
    <LazyImage
      source={source}
      style={[style, { opacity: loaded ? 1 : 0 }]}
      resizeMode={resizeMode}
      onLoadEnd={() => setLoaded(true)}
    />
  );
};

export default LazyLoadImage;

// Firestore collection reference: users
// collection(db, "users")

// Firestore collection reference: matches
// collection(db, "matches")

// Firestore collection reference: messages
// collection(db, "messages")

// Firestore collection reference: notifications
// collection(db, "notifications")
