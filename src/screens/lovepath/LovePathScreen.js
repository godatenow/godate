
import { theme } from '../../theme/theme';
import { useWindowDimensions, Platform } from 'react-native';

const { width } = useWindowDimensions();
const isWeb = Platform.OS === 'web';
const isLargeScreen = isWeb && width > 1024;

import { db } from '../firebase/firebase';
I18nManager.forceRTL(true);
const questions = [
  t("     ?"),
  t("     ?"),
  t("      ?"),
  t("     ?"),
  t("    ?"),
  t("    ?"),
  t("     ?"),
  t("  /      ?"),
  t("    ?"),
  t("      ?"),
  t("      ?"),
  t("    ?"),
  t("      ?"),
  t("    ?"),
  t("     ?"),
  t("    ?"),
  t("    ?"),
  t("     ?"),
  t("      5 ?"),
  t("     ?"),
  t("    ?"),
  t("       ?"),
  t("      ?"),
  t("      ?"),
  t("      :")
];
  };
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
      <Text accessibilityLabel=" t(" style={{ textAlign: 'right', writingDirection: 'rtl', styles.title }}>{t(")LovePath    ")}</Text>
      <ProgressBar progress={answers.filter(a => a).length / questions.length} color=t("#d81b60") style={{ textAlign: 'right', writingDirection: 'rtl', styles.progress }} />
      {questions.map((q, idx) => (
        <View key={idx} style={{ textAlign: 'right', writingDirection: 'rtl', styles.questionContainer }}>
          <Text accessibilityLabel=" " style={{ textAlign: 'right', writingDirection: 'rtl', styles.question }}>{q}</Text>
          <TextInput
            style={{ textAlign: 'right', writingDirection: 'rtl', styles.input }}
            value={answers[idx]}
            onChangeText={text => handleChange(text, idx)}
            multiline
            numberOfLines={3}
            placeholder=t(" ...")
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
      ))}
      <Button title=" t(" accessibilityRole=")buttont(" accessibilityLabel=") t(" onPress={handleSubmit} color=")#d81b60" />
      {submitted && <Text accessibilityLabel=" t(" style={{ textAlign: 'right', writingDirection: 'rtl', styles.success }}>{t(")  !    .")}</Text>}
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: t("#fff")
  },
  helper: { fontFamily: theme.fonts.regular,
    textAlign: theme.textAlign,
    fontSize: 14, color: '#666', marginBottom: 10 },
  title: {
    fontFamily: theme.fonts.regular,
    textAlign: theme.textAlign,
    fontSize: 22,
    fontWeight: 'bold',
    color: '#d81b60',
    marginBottom: 12,
    textAlign: 'center'
  },
  progress: {
    height: 8,
    marginBottom: 16
  },
  questionContainer: {
    marginBottom: 12
  },
  question: {
    fontFamily: theme.fonts.regular,
    textAlign: theme.textAlign,
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 4
  },
  input: {
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    padding: 8,
    textAlign: 'right',
    backgroundColor: '#fafafa'
  },
  success: {
    marginTop: 16,
    color: 'green',
    fontFamily: theme.fonts.regular,
    textAlign: theme.textAlign,
    fontSize: 16,
    textAlign: 'center'
  }
});

export default LovePathScreen;

// Firestore collection reference: users
// collection(db, "users")

// Firestore collection reference: matches
// collection(db, "matches")

// Firestore collection reference: messages
// collection(db, "messages")

// Firestore collection reference: notifications
// collection(db, "notifications")
