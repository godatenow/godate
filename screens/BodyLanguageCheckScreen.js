
// תמיכה ב-RTL - הוספת סגנון גלובלי במידת הצורך
const rtlStyles = {
  direction: 'rtl',
  textAlign: 'right',
};


import React, { useState, useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { Camera } from 'expo-camera';
import { uploadBytes, ref } from 'firebase/storage';
import { storage, db, auth } from '../firebase';
import { doc, setDoc } from 'firebase/firestore';

export default function BodyLanguageCheckScreen() {
  const [hasPermission, setHasPermission] = useState(null);
  const [recording, setRecording] = useState(false);
  const cameraRef = useRef(null);

  React.
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500); // סימולציית טעינה
    return () => clearTimeout(timer);
  }, []);

useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const startRecording = async () => {
    if (cameraRef.current) {
      setRecording(true);
      const video = await cameraRef.current.recordAsync({ maxDuration: 10 });
      uploadVideo(video.uri);
      setRecording(false);
    }
  };

  const stopRecording = () => {
    if (cameraRef.current) {
      cameraRef.current.stopRecording();
    }
  };

  const uploadVideo = async (uri) => {
    try {
      const response = await fetch(uri);
      const blob = await response.blob();
      const userId = auth.currentUser.uid;
      const videoRef = ref(storage, `bodyLanguage/${userId}.mp4`);
      await uploadBytes(videoRef, blob);
      await setDoc(doc(db, 'users', userId), { bodyLanguageVerified: true }, { merge: true });
      Alert.alert('מעולה!', 'וידאו נשמר ואומת בהצלחה');
    } catch (error) {
      console.error('Upload error:', error);
      Alert.alert('שגיאה', 'לא הצלחנו לשמור את הווידאו');
    }
  };

  if (hasPermission === null) {
    return <View style={rtlStyles}>

  {loading && (
    <View style={{ alignItems: 'center', marginTop: 20 }}>
      <ActivityIndicator size="large" color="#ff4081" />
    
  {!loading && (
    <View style={{ alignItems: 'center', marginTop: 40 }}>
      <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#ff4081' }}>
        התחל/י עכשיו – החיבור הבא שלך מחכה כאן!
      </Text>
    </View>
  )}

</View>
  )}
><Text>טוען הרשאות...</Text>
  {!loading && (
    <View style={{ alignItems: 'center', marginTop: 40 }}>
      <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#ff4081' }}>
        התחל/י עכשיו – החיבור הבא שלך מחכה כאן!
      </Text>
    </View>
  )}

</View>;
  }
  if (hasPermission === false) {
    return <View style={rtlStyles}>

  {loading && (
    <View style={{ alignItems: 'center', marginTop: 20 }}>
      <ActivityIndicator size="large" color="#ff4081" />
    
  {!loading && (
    <View style={{ alignItems: 'center', marginTop: 40 }}>
      <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#ff4081' }}>
        התחל/י עכשיו – החיבור הבא שלך מחכה כאן!
      </Text>
    </View>
  )}

</View>
  )}
><Text>אין הרשאה למצלמה</Text>
  {!loading && (
    <View style={{ alignItems: 'center', marginTop: 40 }}>
      <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#ff4081' }}>
        התחל/י עכשיו – החיבור הבא שלך מחכה כאן!
      </Text>
    </View>
  )}

</View>;
  }

  return (
    <View style={rtlStyles}>

  {loading && (
    <View style={{ alignItems: 'center', marginTop: 20 }}>
      <ActivityIndicator size="large" color="#ff4081" />
    
  {!loading && (
    <View style={{ alignItems: 'center', marginTop: 40 }}>
      <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#ff4081' }}>
        התחל/י עכשיו – החיבור הבא שלך מחכה כאן!
      </Text>
    </View>
  )}

</View>
  )}
 style={styles.container}>
      <Text style={styles.title}>צלם סרטון קצר</Text>
      <Text style={styles.instructions}>חייך, הטה את הראש, הרם יד</Text>
      <Camera ref={cameraRef} style={styles.camera} />
      <TouchableOpacity
        style={styles.button}
        onPress={recording ? stopRecording : startRecording} accessibilityLabel="כפתור פעולה" accessible={true}>
        <Text style={styles.buttonText}>{recording ? 'עצור' : 'צלם'}</Text>
      </TouchableOpacity>
    
  {!loading && (
    <View style={{ alignItems: 'center', marginTop: 40 }}>
      <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#ff4081' }}>
        התחל/י עכשיו – החיבור הבא שלך מחכה כאן!
      </Text>
    </View>
  )}

</View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20, backgroundColor: '#fff' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10, textAlign: 'center' },
  instructions: { fontSize: 16, marginBottom: 20, textAlign: 'center' },
  camera: { width: 300, height: 400, borderRadius: 10, marginBottom: 20 },
  button: { backgroundColor: '#FF4F7D', padding: 15, borderRadius: 50 },
  buttonText: { color: '#fff', fontSize: 18 }
});
