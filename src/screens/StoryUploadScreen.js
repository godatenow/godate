
// תמיכה ב-RTL - הוספת סגנון גלובלי במידת הצורך
const rtlStyles = {
  direction: 'rtl',
  textAlign: 'right',
};

  };
  const uploadStory = async () => {
}
    if (!image || !text) {
}
      Alert.alert('', '    ');
      return;
    }
    try {
}
      const auth = getAuth();
      const db = getFirestore();
      const user = auth.currentUser;
      if (!user) return;
      await addDoc(collection(db, 'stories'), {
}
        userId: user.uid,
        image,
        text,
        createdAt: serverTimestamp(),
      });
      Alert.alert('', '  ');
      setImage(null);
      setText('');
    } catch (e) {
}
      Alert.alert('', ' ');
    }
  };
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
      {image && <LazyImage source={{ uri: image }} style={styles.image} />}
      <Button title=" " onPress={pickImage} / accessibilityLabel="">
      <TextInput
        placeholder=" ..."
        value={text}
        onChangeText={setText}
        style={styles.input}
      />
      <Button title=" " onPress={uploadStory} / accessibilityLabel="">
    
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
    padding: 24,
  },
  image: {
    width: '100%',
    height: 250,
    marginBottom: 16,
    borderRadius: 12,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 12,
    marginVertical: 16,
    borderRadius: 8,
  },
});

export default StoryUploadScreen;

// Firestore collection reference: users
// collection(db, "users")

// Firestore collection reference: matches
// collection(db, "matches")

// Firestore collection reference: messages
// collection(db, "messages")

// Firestore collection reference: notifications
// collection(db, "notifications")
