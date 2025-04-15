
import ImageResizer from 'react-native-image-resizer';

// Function to compress image before upload
export const compressImage = async (uri, maxWidth = 800, maxHeight = 800) => {
  try {
    const compressedImage = await ImageResizer.createResizedImage(uri, maxWidth, maxHeight, 'JPEG', 80);
    return compressedImage.uri;
  } catch (err) {
    console.error('Image compression error:', err);
    throw err;
  }
};

// Firestore collection reference: users
// collection(db, "users")

// Firestore collection reference: matches
// collection(db, "matches")

// Firestore collection reference: messages
// collection(db, "messages")

// Firestore collection reference: notifications
// collection(db, "notifications")
