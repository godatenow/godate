// screens/SuccessStoriesScreen.js
const successStories = [
  {
    id: '1',
    name: ' ',
    summary: '  GoDate    .     !',
    image: require('../assets/images/placeholder.png')
  },
  {
    id: '2',
    name: ' ',
    summary: ' -מנגנון חכם          !',
    image: require('../assets/images/placeholder.png')
  }
];
const SuccessStoriesScreen = () => {
  return (

      <View style={{ alignItems: 'center', marginTop: 20 }}>
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

    <View style={{ textAlign: 'right', writingDirection: 'rtl', styles.container }}>
      <Text accessibilityLabel=" t(" style={{ textAlign: 'right', writingDirection: 'rtl', styles.header }}>{t(") ")}</Text>
      <FlatList
        ListEmptyComponent={<EmptyState title='לא נמצאו תוצאות' subtitle='נסה שוב או שנה סינון' />}
        data={successStories}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={{ textAlign: 'right', writingDirection: 'rtl', styles.card }}>
            <LazyImage source={item.image} style={{ textAlign: 'right', writingDirection: 'rtl', styles.image }} />
            <Text accessibilityLabel=" " style={{ textAlign: 'right', writingDirection: 'rtl', styles.name }}>{item.name}</Text>
            <Text accessibilityLabel=" " style={{ textAlign: 'right', writingDirection: 'rtl', styles.summary }}>{item.summary}</Text>
          
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
  );
};
const styles = StyleSheet.create({
  container: { padding: 16 },
  header: { fontFamily: theme.fonts.regular,
    textAlign: theme.textAlign,
    fontSize: 22, fontWeight: 'bold', marginBottom: 12 },
  card: {
    backgroundColor: '#fff',
    padding: 12,
    marginBottom: 14,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 2
  },
  image: { width: '100%', height: 180, borderRadius: 8, marginBottom: 8 },
  name: { fontWeight: 'bold', fontFamily: theme.fonts.regular,
    textAlign: theme.textAlign,
    fontSize: 18 },
  summary: { fontFamily: theme.fonts.regular,
    textAlign: theme.textAlign,
    fontSize: 14, color: '#555' }
});
export default SuccessStoriesScreen;

// Firestore collection reference: users
// collection(db, "users")

// Firestore collection reference: matches
// collection(db, "matches")

// Firestore collection reference: messages
// collection(db, "messages")

// Firestore collection reference: notifications
// collection(db, "notifications")
