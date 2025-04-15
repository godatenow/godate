// screens/notifications.js
import { theme } from '../../theme/theme';
import { registerForPushNotificationsAsync, sendPushNotification } from '../services/pushNotifications';
const NotificationsScreen = () => {
  let pushToken = null;
  useEffect(() => {
    registerForPushNotificationsAsync().then(token => {
      pushToken = token;
    });
  }, []);
  const testPush = () => {
    if (pushToken) {
      sendPushNotification(pushToken, ' -GoDate', '  .');
    }
  };
  return (
    <View style={{ textAlign: 'right', writingDirection: 'rtl', styles.container }}>
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

      <Text accessibilityLabel=" " style={{ textAlign: 'right', writingDirection: 'rtl', styles.title }}> </Text>
      <Button title="  " accessibilityRole="button" accessibilityLabel=" " onPress={testPush} />
    
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
  container: { padding: 20 },
  title: { fontFamily: theme.fonts.regular,
    textAlign: theme.textAlign,
    fontSize: 18, fontWeight: 'bold', marginBottom: 12 }
});
export default NotificationsScreen;

// Firestore collection reference: users
// collection(db, "users")

// Firestore collection reference: matches
// collection(db, "matches")

// Firestore collection reference: messages
// collection(db, "messages")

// Firestore collection reference: notifications
// collection(db, "notifications")
