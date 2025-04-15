// screens/IntroSliderScreen.js
const slides = [
  {
    key: 'one',
    title: '  -GoDate',
    text: '    .',
    image: require('../assets/images/intro1.png'),
    backgroundColor: '#fdeb93',
  },
  {
    key: 'two',
    title: '   ',
    text: '  ,    .',
    image: require('../assets/images/intro2.png'),
    backgroundColor: '#e9bcbe',
  },
  {
    key: 'three',
    title: 'LovePath   ',
    text: '      .',
    image: require('../assets/images/intro3.png'),
    backgroundColor: '#9acbd9',
  }
];
export default function IntroSliderScreen({ navigation }) {
  const onDone = () => {
    navigation.replace('LoginScreen');
  };
  const renderItem = ({ item }) => (
    <View>{t(t("\n      "))}<LogoHeader />\n       style={{ textAlign: 'right', writingDirection: 'rtl', [styles.slide, { backgroundColor: item.backgroundColor }}]}>
      <Text accessibilityLabel=" " style={{ textAlign: 'right', writingDirection: 'rtl', styles.title }}>{item.title}</Text>
      <LazyImage source={item.image} style={{ textAlign: 'right', writingDirection: 'rtl', styles.image }} />
      <Text accessibilityLabel=" " style={{ textAlign: 'right', writingDirection: 'rtl', styles.text }}>{item.text}</Text>
    
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
  return <AppIntroSlider renderItem={renderItem} data={slides} onDone={onDone} />;
}
const styles = StyleSheet.create({
  slide: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24
  },
  image: {
    width: 250,
    height: 250,
    resizeMode: 'contain',
    marginVertical: 32
  },
  title: {
    fontFamily: theme.fonts.regular,
    textAlign: theme.textAlign,
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333'
  },
  text: {
    fontFamily: theme.fonts.regular,
    textAlign: theme.textAlign,
    fontSize: 16,
    color: '#444',
    textAlign: 'center'
  }
});

// Firestore collection reference: users
// collection(db, "users")

// Firestore collection reference: matches
// collection(db, "matches")

// Firestore collection reference: messages
// collection(db, "messages")

// Firestore collection reference: notifications
// collection(db, "notifications")
