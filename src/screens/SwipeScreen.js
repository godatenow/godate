
// תמיכה ב-RTL - הוספת סגנון גלובלי במידת הצורך
const rtlStyles = {
  direction: 'rtl',
  textAlign: 'right',
};

import { theme } from '../../theme/theme';
import * as apiService from '@services/apiService';
import FadeInView from '../components/FadeInView';
import EmotionCard from '../components/EmotionCard';
import { db } from '../firebase';
  const auth = getAuth();
  const currentUser = auth.currentUser;
  if (!currentUser) return;
const CHUNK_SIZE = 5;
const SwipeScreen = ({ route }) => {
  const navigation = useNavigation();
  const { currentUser, users } = route.params || {};
  const [index, setIndex] = useState(0);
  const [visibleUsers, setVisibleUsers] = useState([]);
  
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500); // סימולציית טעינה
    return () => clearTimeout(timer);
  }, []);

useEffect(() => {
    if (users?.length > 0) {
      setVisibleUsers(users.slice(0, CHUNK_SIZE));
      preloadNextImage(0);
    }
  }, [users]);
  const preloadNextImage = (nextIndex) => {
    const nextUser = users[nextIndex + 1];
    if (nextUser && nextUser.photo) {
    }
  };
  const saveSwipe = async (userId, targetUserId) => {
    await setDoc(doc(db, 'swipes', userId, 'liked', targetUserId), { liked: true });
  };
  const checkForMatch = async (userId, targetUserId) => {
    const docSnap = await getDoc(doc(db, 'swipes', targetUserId, 'liked', userId));
    return docSnap.exists();
  };
  const createMatch = async (userA, userB) => {
    const matchId = `${userA.id}_${userB.id}`;
    await setDoc(doc(db, 'matches', matchId), {
      users: {
        [userA.id]: userA,
        [userB.id]: userB,
      },
      usersMatched: [userA.id, userB.id],
      timestamp: serverTimestamp(),
    });
  };
  const handleSwipeRight = async (cardIndex) => {
    const matchedUser = visibleUsers[cardIndex];
    if (!matchedUser || !currentUser) return;
    await saveSwipe(currentUser.id, matchedUser.id);
    const isMatch = await checkForMatch(currentUser.id, matchedUser.id);
    if (isMatch) {
      await createMatch(currentUser, matchedUser);
      navigation.navigate('MatchScreen', {
        matchedUser,
        currentUser,
      });
    }
  };
  const handleSwipeLeft = () => {};
  const handleSwiped = (i) => {
    const nextIndex = index + 1;
    setIndex(nextIndex);
    preloadNextImage(nextIndex);
    if (nextIndex + CHUNK_SIZE > visibleUsers.length && nextIndex < users.length) {
      const moreUsers = users.slice(nextIndex, nextIndex + CHUNK_SIZE);
      setVisibleUsers((prev) => [...prev, ...moreUsers]);
    }
  };
  return (<FadeInView>


      <View style={rtlStyles}>

  {loading && (
    <View style={{ alignItems: 'center', marginTop: 20 }}>
      <ActivityIndicator size="large" color="#ff4081" />
    
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
 style={{ alignItems: 'center', marginTop: 20 }}>
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

    <Button title="" onPress={() => navigation.goBack()} />
    <View style={rtlStyles}>

  {loading && (
    <View style={{ alignItems: 'center', marginTop: 20 }}>
      <ActivityIndicator size="large" color="#ff4081" />
    
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
 style={styles.container}>
      {visibleUsers?.length > 0 ? (
        <Swiper
          cards={visibleUsers}
          renderCard={(user) => (
            <EmotionCard
              user={user}
              onSwipeRight={() => handleSwipeRight(index)}
              onSwipeLeft={handleSwipeLeft}
            />
          )}
          onSwiped={(i) => handleSwiped(i)}
          onSwipedRight={handleSwipeRight}
          onSwipedLeft={handleSwipeLeft}
          cardIndex={index}
          backgroundColor={'transparent'}
          stackSize={2}
          stackSeparation={15}
          disableTopSwipe
          disableBottomSwipe
        />
      ) : (
        <Text accessibilityLabel=" " style={styles.empty}>   </Text>
      )}
    
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
export default SwipeScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff8f8',
    justifyContent: 'center',
  },
  empty: {
    textAlign: 'center',
    color: '#888',
    fontFamily: theme.fonts.regular,
    textAlign: theme.textAlign,
    fontSize: 18,
  },
});
// Firestore collection reference: users
// collection(db, "users")

// Firestore collection reference: messages
// collection(db, "messages")

// Firestore collection reference: notifications
// collection(db, "notifications")
