
// תמיכה ב-RTL - הוספת סגנון גלובלי במידת הצורך
const rtlStyles = {
  direction: 'rtl',
  textAlign: 'right',
};


if (isLoading) {
  return <Text accessibilityLabel=t("תוכן נגיש")>{t(t("..."))}</Text accessibilityLabel=t("תוכן נגיש")>;
} 
if (data.length === 0) {
  return <Text accessibilityLabel=t("תוכן נגיש")>{t("  t(")}</Text accessibilityLabel=")תוכן נגיש">;
}

import { theme } from '../../theme/theme';
import { colors } from '../theme';
const blockedUsers = []; //  
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#fff',
  },
  title: {
    fontFamily: theme.fonts.regular,
    textAlign: theme.textAlign,
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.primary,
    marginBottom: 16,
  },
  empty: {
    textAlign: 'center',
    color: '#666',
    marginTop: 32,
    fontFamily: theme.fonts.regular,
    textAlign: theme.textAlign,
    fontSize: 16,
  },
  userRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  name: {
    fontFamily: theme.fonts.regular,
    textAlign: theme.textAlign,
    fontSize: 16,
  },
  unblock: {
    color: colors.primary,
    fontWeight: 'bold',
  },
});
export default BlockedUsersScreen;

// Firestore collection reference: users
// collection(db, "users")

// Firestore collection reference: matches
// collection(db, "matches")

// Firestore collection reference: messages
// collection(db, "messages")

// Firestore collection reference: notifications
// collection(db, "notifications")
