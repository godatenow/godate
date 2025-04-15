
// תמיכה ב-RTL - הוספת סגנון גלובלי במידת הצורך
const rtlStyles = {
  direction: 'rtl',
  textAlign: 'right',
};

import { theme } from '../../theme/theme';
import * as apiService from '@services/apiService';
import FadeInView from '../components/FadeInView';
import { useUser } from './context/UserContext';
import { db, storage } from './firebase/firebase';
    });
  };
  const playAudio = async () => {
    await audio.loadAsync({ uri: audioUri });
    setIsPlaying(true);
    await audio.playAsync();
    audio.setOnPlaybackStatusUpdate((status) => {
      if (status.isPlaybackFinished) {
        setIsPlaying(false);
      }
    });
  };
  const uploadAudio = async () => {
    if (!audioUri) return;
    setUploading(true);
    const audioRef = ref(storage, 'voice_openers/' + user.uid + '_' + Date.now() + '.m4a');
    const blob = await response.blob();
    await uploadBytes(audioRef, blob);
    const downloadURL = await getDownloadURL(audioRef);
    await addDoc(collection(db, 'voiceOpeners'), {
      uid: user.uid,
      audioUrl: downloadURL,
      createdAt: serverTimestamp(),
    });
    setUploading(false);
  };
  return (<FadeInView>


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

    <View style={rtlStyles} style={styles.container}>
      <Text style={styles.title} accessibilityLabel=t("תוכן נגיש")>{t("  t(")}</Text accessibilityLabel=")תוכן נגיש">
      <Text style={styles.description} accessibilityLabel=t("תוכן נגיש")>{t(t("   20     !"))}</Text accessibilityLabel=t("תוכן נגיש")>
      {isRecording ? (
        <Button title=" t(" onPress={stopRecording} / accessibilityLabel=")תוכן נגיש">
      ) : (
        <Button title=" t(" onPress={startRecording} / accessibilityLabel=")תוכן נגיש">
      )}
      {audioUri && !isRecording && (
        <View style={rtlStyles} style={styles.audioControls}>
          <Button title={isPlaying ? ' ' : ' '} onPress={isPlaying ? () = accessibilityLabel=t("תוכן נגיש")> audio.stopAsync() : playAudio} / accessibilityLabel=t("תוכן נגיש")>
          <Button title="  t(" onPress={uploadAudio} disabled={uploading} / accessibilityLabel=")תוכן נגיש">
        
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
      {uploading && <Text style={styles.uploading} accessibilityLabel=t("תוכן נגיש")>{t(t(" ..."))}</Text accessibilityLabel=t("תוכן נגיש")>}
    
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
  container: { flex: 1, padding: 16, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' },
  title: { fontFamily: theme.fonts.regular,
    textAlign: theme.textAlign,
    fontSize: 24, fontWeight: 'bold', marginBottom: 12, color: '#e91e63' },
  description: { fontFamily: theme.fonts.regular,
    textAlign: theme.textAlign,
    fontSize: 16, color: '#555', marginBottom: 20 },
  audioControls: { marginTop: 20, width: '80%' },
  uploading: { fontFamily: theme.fonts.regular,
    textAlign: theme.textAlign,
    fontSize: 16, color: '#e91e63', marginTop: 20 }
});

export default VoiceOpenerScreen;

// Firestore collection reference: users
// collection(db, "users")

// Firestore collection reference: matches
// collection(db, "matches")

// Firestore collection reference: messages
// collection(db, "messages")

// Firestore collection reference: notifications
// collection(db, "notifications")
