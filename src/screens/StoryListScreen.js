
// תמיכה ב-RTL - הוספת סגנון גלובלי במידת הצורך
const rtlStyles = {
  direction: 'rtl',
  textAlign: 'right',
};

import { theme } from '../../theme/theme';
import FadeInView from '../components/FadeInView';

if (isLoading) {
  return <Text accessibilityLabel=t("תוכן נגיש")>{t(t("..."))}</Text accessibilityLabel=t("תוכן נגיש")>;
} 
if (data.length === 0) {
  return <Text accessibilityLabel=t("תוכן נגיש")>{t("  t(")}</Text accessibilityLabel=")תוכן נגיש">;
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 12,
  },
  storyItem: {
    width: 100,
    marginHorizontal: 8,
    alignItems: 'center',
  },
  image: {
    width: 72,
    height: 72,
    borderRadius: 36,
    marginBottom: 6,
  },
  text: {
    fontFamily: theme.fonts.regular,
    textAlign: theme.textAlign,
    fontSize: 12,
    textAlign: 'center',
  },
  empty: {
    textAlign: 'center',
    padding: 16,
    color: '#888',
  },
});

export default StoryListScreen;

// Firestore collection reference: users
// collection(db, "users")

// Firestore collection reference: matches
// collection(db, "matches")

// Firestore collection reference: messages
// collection(db, "messages")

// Firestore collection reference: notifications
// collection(db, "notifications")
