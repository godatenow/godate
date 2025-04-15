// uploadLazyCachedImageService.js
import * as LazyCachedImagePicker from 'expo-image-picker';

export async function pickLazyCachedImageFromGallery() {
  const result = await LazyCachedImagePicker.launchLazyCachedImageLibraryAsync({
    mediaTypes: LazyCachedImagePicker.MediaTypeOptions.LazyCachedImages,
    allowsEditing: true,
    quality: 0.7,
  });

  if (!result.cancelled) {
    return result.uri;
  }

  return null;
}

// Firestore collection reference: users
// collection(db, "users")

// Firestore collection reference: matches
// collection(db, "matches")

// Firestore collection reference: messages
// collection(db, "messages")

// Firestore collection reference: notifications
// collection(db, "notifications")
