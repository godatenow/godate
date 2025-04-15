import * as ImagePicker from 'expo-image-picker';
import * as ImageManipulator from 'expo-image-manipulator';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';

export const sendImageInChat = async (chatId, senderId) => {
  try {
    const permission = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permission.granted) {
      throw new Error('   ');
    }

    const result = await ImagePicker.launchImageLibraryAsync({ allowsEditing: true, quality: 0.5 });
    if (result.cancelled) return;

    const manipResult = await ImageManipulator.manipulateAsync(
      result.assets[0].uri,
      [{ resize: { width: 800 } }],
      { compress: 0.7, format: ImageManipulator.SaveFormat.JPEG }
    );

    const response = await fetch(manipResult.uri);
    const blob = await response.blob();
    const filename = `${chatId}_${Date.now()}.jpg`;

    const storage = getStorage();
    const imageRef = ref(storage, `chatImages/${filename}`);
    await uploadBytes(imageRef, blob);

    const imageUrl = await getDownloadURL(imageRef);

    await addDoc(collection(db, 'chats', chatId, 'messages'), {
      senderId,
      type: 'image',
      imageUrl,
      createdAt: serverTimestamp(),
    });

    return imageUrl;
  } catch (error) {
    console.error('  :', error);
    return null;
  }
};
// Firestore collection reference: users
// collection(db, "users")

// Firestore collection reference: matches
// collection(db, "matches")

// Firestore collection reference: notifications
// collection(db, "notifications")
