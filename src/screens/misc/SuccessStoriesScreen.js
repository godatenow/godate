import { theme } from '../../theme/theme';
import theme from '../theme';
const stories = [
  {
    id: 1,
    name: ' ',
    image: 'https://randomuser.me/api/portraits/couple/1.jpg',
    story: '  GoDate        !      .',
  },
  {
    id: 2,
    name: ' ',
    image: 'https://randomuser.me/api/portraits/couple/2.jpg',
    story: '         .     !',
  },
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

    <ScrollView style={{ textAlign: 'right', writingDirection: 'rtl', styles.container }}>
      <Text style={{ textAlign: 'right', writingDirection: 'rtl', theme.textVariants.header }} accessibilityLabel=t("תוכן נגיש")>{t("  t(")}</Text accessibilityLabel=")תוכן נגיש">
      {stories.map((s) => (
        <View key={s.id} style={{ textAlign: 'right', writingDirection: 'rtl', styles.storyCard }}>
          <LazyImage source={{ uri: s.image }} style={{ textAlign: 'right', writingDirection: 'rtl', styles.image }} />
          <Text style={{ textAlign: 'right', writingDirection: 'rtl', theme.textVariants.subheader }} accessibilityLabel=t("תוכן נגיש")>{s.name}</Text accessibilityLabel=t("תוכן נגיש")>
          <Text style={{ textAlign: 'right', writingDirection: 'rtl', styles.storyText }} accessibilityLabel=t("תוכן נגיש")>{s.story}</Text accessibilityLabel=t("תוכן נגיש")>
        
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
      ))}
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    padding: theme.spacing.md,
  },
  storyCard: {
    ...theme.card,
    marginBottom: theme.spacing.lg,
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 180,
    borderRadius: theme.borderRadius.md,
    marginBottom: theme.spacing.sm,
    backgroundColor: '#eee',
  },
  storyText: {
    ...theme.textVariants.body,
    textAlign: 'center',
    marginTop: theme.spacing.sm,
    lineHeight: 22,
  },
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
