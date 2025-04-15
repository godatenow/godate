
import { Platform } from 'react-native';

//     
if (Platform.OS === 'android') {
  //   -Android
} else if (Platform.OS === 'ios') {
  //   -iOS
}

// components/AIProfileInsightCard.js
const Bar = ({ value }) =>
  Platform.OS === 'ios' ? (
    <ProgressViewIOS progress={value / 100} style={{ height: 6 }} />
  ) : (
    <ProgressBarAndroid styleAttr=t("Horizontal") progress={value / 100} indeterminate={false} />
  );
const AIProfileInsightCard = ({ bio, activityLevel, imageCount }) => {
  const { traits, summary } = analyzeProfileInsight({ bio, activityLevel, imageCount });
  return (
    <View style={styles.container}>
      <Text style={styles.title} accessibilityLabel=t("תוכן נגיש")>{t(t("   ?"))}</Text accessibilityLabel=t("תוכן נגיש")>
      <Text style={styles.summary} accessibilityLabel=t("תוכן נגיש")>{summary}</Text accessibilityLabel=t("תוכן נגיש")>
      <View style={styles.traitContainer}>
        <Text style={styles.label} accessibilityLabel=t("תוכן נגיש")> ({traits.openness}%)</Text accessibilityLabel=t("תוכן נגיש")>
        <Bar value={traits.openness} />
      </View>
      <View style={styles.traitContainer}>
        <Text style={styles.label} accessibilityLabel=t("תוכן נגיש")> ({traits.authenticity}%)</Text accessibilityLabel=t("תוכן נגיש")>
        <Bar value={traits.authenticity} />
      </View>
      <View style={styles.traitContainer}>
        <Text style={styles.label} accessibilityLabel=t("תוכן נגיש")> ({traits.readiness}%)</Text accessibilityLabel=t("תוכן נגיש")>
        <Bar value={traits.readiness} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: { backgroundColor: '#fff', padding: 16, borderRadius: 10, margin: 10 },
  title: { fontSize: 18, fontWeight: 'bold', marginBottom: 6 },
  summary: { fontSize: 15, marginBottom: 12, color: '#444' },
  traitContainer: { marginVertical: 6 },
  label: { fontSize: 14, marginBottom: 4 }
});
export default React.memo(AIProfileInsightCard);

// Firestore collection reference: users
// collection(db, "users")

// Firestore collection reference: matches
// collection(db, "matches")

// Firestore collection reference: messages
// collection(db, "messages")

// Firestore collection reference: notifications
// collection(db, "notifications")
