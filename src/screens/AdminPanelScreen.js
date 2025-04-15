import EmptyState from '../../components/EmptyState';
import { theme } from '../../theme/theme';
import theme from '../themes/theme';
const users = [
  { id: '1', name: '', status: '', reports: 0 },
  { id: '2', name: '', status: '', reports: 3 },
  { id: '3', name: '', status: '', reports: 1 },
];
const AdminPanelScreen = () => {
  const renderItem = ({ item }) => (
    <View style={{ textAlign: 'right', writingDirection: 'rtl', styles.userCard }}>
      <Text accessibilityLabel=" " style={{ textAlign: 'right', writingDirection: 'rtl', styles.name }}>{item.name}</Text>
      <Text accessibilityLabel=" " style={{ textAlign: 'right', writingDirection: 'rtl', styles.detail }}>: {item.status}</Text>
      <Text accessibilityLabel=" " style={{ textAlign: 'right', writingDirection: 'rtl', styles.detail }}>: {item.reports}</Text>
    
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
      <Text accessibilityLabel=" t(" style={{ textAlign: 'right', writingDirection: 'rtl', styles.header }}>{t(")  ")}</Text>
      <FlatList
        ListEmptyComponent={<EmptyState title='לא נמצאו תוצאות' subtitle='נסה שוב או שנה סינון' />}
        data={users}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
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
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    padding: theme.spacing.md,
  },
  header: {
    ...theme.typography.heading,
    color: theme.colors.primary,
    textAlign: 'center',
    marginBottom: theme.spacing.md,
  },
  list: {
    paddingBottom: theme.spacing.lg,
  },
  userCard: {
    backgroundColor: theme.colors.surface,
    padding: theme.spacing.md,
    borderRadius: theme.radius.md,
    marginBottom: theme.spacing.sm,
    ...theme.shadow.sm,
  },
  name: {
    ...theme.typography.subheading,
    color: theme.colors.text,
    textAlign: 'right',
  },
  detail: {
    ...theme.typography.caption,
    color: theme.colors.muted,
    textAlign: 'right',
  },
});
export default AdminPanelScreen;

// Firestore collection reference: users
// collection(db, "users")

// Firestore collection reference: matches
// collection(db, "matches")

// Firestore collection reference: messages
// collection(db, "messages")

// Firestore collection reference: notifications
// collection(db, "notifications")
