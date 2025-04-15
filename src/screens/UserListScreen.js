
import EmptyState from '../../components/EmptyState';
import { theme } from '../../theme/theme';
import { Image as RNImageResizer } from 'react-native-image-resizer';

//    
const compressImage = async (uri) => {
  const resizedImage = await ImageResizer.createResizedImage(uri, 800, 600, 'JPEG', 80);
  return resizedImage.uri;
};


import React, { Suspense, lazy } from 'react';

//    
const LazyComponent = lazy(() => import('./LazyComponent'));

export default function App() {
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
      
  {!loading && data?.length === 0 && (
    <View style={{ alignItems: 'center', marginTop: 30 }}>
      <Text style={{ fontSize: 16, color: '#888' }}>
        אין עדיין תוכן כאן – זה הזמן ליצור חיבורים חדשים!
      </Text>
    
  {!loading && (
    <View style={{ alignItems: 'center', marginTop: 40 }}>
      <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#ff4081' }}>
        התחל/י עכשיו – החיבור הבא שלך מחכה כאן!
      </Text>
    </View>
  )}

</View>
  )}


  {!loading && (
    <View style={{ alignItems: 'center', marginTop: 40 }}>
      <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#ff4081' }}>
        התחל/י עכשיו – החיבור הבא שלך מחכה כאן!
      </Text>
    </View>
  )}

</View>

    <Suspense fallback={<Text>...</Text>}>
      <LazyComponent />
    </Suspense>
  );
}

// screens/UserListScreen.js
const UserCard = React.lazy(() => import('../components/UserCard'));
const mockUsers = [
  { id: '1', name: '', age: 30, location: ' ', image: 'https://via.placeholder.com/80' },
  { id: '2', name: '', age: 32, location: '', image: 'https://via.placeholder.com/80' },
];
const UserListScreen = () => {
  return (
    <View>\n      <LogoHeader />\n       style={{ textAlign: 'right', writingDirection: 'rtl', { direction: 'rtl',  padding: 16 }}}>
      <Text accessibilityLabel=" " style={{ textAlign: 'right', writingDirection: 'rtl', { textAlign: 'right',  fontSize: 20, fontWeight: 'bold', marginBottom: 12 }}}> </Text>
      <FlatList
        ListEmptyComponent={<EmptyState title='לא נמצאו תוצאות' subtitle='נסה שוב או שנה סינון' />}
        data={mockUsers}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Suspense fallback={<ActivityIndicator size="small" />}>
            <UserCard user={item} />
          </Suspense>
        )}
      />
    
  {!loading && data?.length === 0 && (
    <View style={{ alignItems: 'center', marginTop: 30 }}>
      <Text style={{ fontSize: 16, color: '#888' }}>
        אין עדיין תוכן כאן – זה הזמן ליצור חיבורים חדשים!
      </Text>
    
  {!loading && (
    <View style={{ alignItems: 'center', marginTop: 40 }}>
      <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#ff4081' }}>
        התחל/י עכשיו – החיבור הבא שלך מחכה כאן!
      </Text>
    </View>
  )}

</View>
  )}


  {!loading && (
    <View style={{ alignItems: 'center', marginTop: 40 }}>
      <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#ff4081' }}>
        התחל/י עכשיו – החיבור הבא שלך מחכה כאן!
      </Text>
    </View>
  )}

</View>
  );
};

// Firestore collection reference: users
// collection(db, "users")

// Firestore collection reference: matches
// collection(db, "matches")

// Firestore collection reference: messages
// collection(db, "messages")

// Firestore collection reference: notifications
// collection(db, "notifications")
