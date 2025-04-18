import React from 'react';
import { Platform, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';

// Import main tab screens
import HomeScreen from '../screens/HomeScreen';
// import MatchesScreen from '../screens/MatchesScreen';
import ChatScreen from '../screens/ChatScreen';
import StoriesScreen from '../screens/StoriesScreen';
import LovePathDashboard from '../screens/LovePathDashboard';
import ProfileScreen from '../screens/ProfileScreen';

// Import drawer menu screens
import NotificationsScreen from '../screens/NotificationsScreen';
import SettingsScreen from '../screens/SettingsScreen';
// import AboutScreen from '../screens/AboutScreen';
// import PrivacyScreen from '../screens/PrivacyScreen';
// import TermsScreen from '../screens/TermsScreen';
import LovePathQuiz from '../screens/LovePathQuiz';
// import LovePathAnalysis from '../screens/LovePathAnalysis';
import LovePathJourney from '../screens/LovePathJourney';
import RegisterScreen from '../screens/RegisterScreen';
import ChatWithMentor from '../screens/ChatWithMentor';
import ReactToStoryScreen from '../screens/ReactToStoryScreen';
// import FeedQuestionsScreen from '../screens/FeedQuestionsScreen';
import AdvancedSearchScreen from '../screens/AdvancedSearchScreen';
// import ConnectionMapScreen from '../screens/ConnectionMapScreen';
import LoveJournalScreen from '../screens/LoveJournalScreen';
// import LoveChallengesScreen from '../screens/LoveChallengesScreen';
// import LoveInspirationScreen from '../screens/LoveInspirationScreen';
// import LoveMirrorScreen from '../screens/LoveMirrorScreen';
import MatchEmotionScreen from '../screens/MatchEmotionScreen';
// import LoveTimelineScreen from '../screens/LoveTimelineScreen';
//import DailyStatusScreen from '../screens/DailyStatusScreen';
// import LoveRadarScreen from '../screens/LoveRadarScreen';
// import LoveQuestionsScreen from '../screens/LoveQuestionsScreen';
import CTAEmotion from '../screens/CTAEmotion';
import CoupleProfileScreenWithFirebase from '../screens/CoupleProfileScreenWithFirebase';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import GalleryScreen from '../screens/GalleryScreen';
import LoveMirrorScreenWithAPI from '../screens/LoveMirrorScreenWithAPI';
import ReportUserScreen from '../screens/ReportUserScreen';
import StoryViewer from '../screens/StoryViewer';
import SubmitSuccessStory from '../screens/SubmitSuccessStory';
import TwoFactorScreen from '../screens/TwoFactorScreen';
import WelcomeScreen from '../screens/WelcomeScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: '#ff6f61',
        tabBarInactiveTintColor: '#aaa',
        tabBarStyle: {
          backgroundColor: '#fff',
          paddingVertical: Platform.OS === 'web' ? 8 : 6,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          height: Platform.OS === 'web' ? 64 : 60,
        },
        tabBarIcon: ({ color, size }) => {
          let iconName;
          switch (route.name) {
            case 'Home':
              iconName = 'home-outline';
              break;
            case 'Matches':
              iconName = 'heart-outline';
              break;
            case 'Chat':
              iconName = 'chatbubble-outline';
              break;
            case 'Stories':
              iconName = 'albums-outline';
              break;
            case 'LovePath':
              iconName = 'walk-outline';
              break;
            case 'Profile':
              iconName = 'person-outline';
              break;
            default:
              iconName = 'ellipse-outline';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      {/* <Tab.Screen name="Matches" component={MatchesScreen} /> */}
      <Tab.Screen name="Chat" component={ChatScreen} />
      <Tab.Screen name="Stories" component={StoriesScreen} />
      <Tab.Screen name="LovePath" component={LovePathDashboard} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

function DrawerContent({ navigation }) {
  const menuItems = [
    { name: 'Notifications', icon: 'notifications-outline', component: NotificationsScreen },
    { name: 'Settings', icon: 'settings-outline', component: SettingsScreen },
    { name: 'Love Journal', icon: 'book-outline', component: LoveJournalScreen },
    // { name: 'Love Challenges', icon: 'trophy-outline', component: LoveChallengesScreen },
    // { name: 'Love Radar', icon: 'compass-outline', component: LoveRadarScreen },
    { name: 'Chat with Mentor', icon: 'chatbox-outline', component: ChatWithMentor },
    // { name: 'About', icon: 'information-circle-outline', component: AboutScreen },
    // { name: 'Privacy', icon: 'lock-closed-outline', component: PrivacyScreen },
    // { name: 'Terms', icon: 'document-text-outline', component: TermsScreen },
  ];

  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: true,
        headerStyle: {
          backgroundColor: '#ff6f61',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        drawerStyle: {
          backgroundColor: '#fff',
          width: 280,
        },
        drawerActiveTintColor: '#ff6f61',
        drawerInactiveTintColor: '#666',
      }}
    >
      <Drawer.Screen 
        name="MainTabs" 
        component={MainTabs} 
        options={{
          title: 'Home',
          drawerIcon: ({ color, size }) => (
            <Ionicons name="home-outline" size={size} color={color} />
          ),
        }}
      />
      {menuItems.map((item) => (
        <Drawer.Screen
          key={item.name}
          name={item.name}
          component={item.component}
          options={{
            drawerIcon: ({ color, size }) => (
              <Ionicons name={item.icon} size={size} color={color} />
            ),
          }}
        />
      ))}
    </Drawer.Navigator>
  );
}

export default function AppNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="DrawerHome" component={DrawerContent} />
      <Stack.Screen name="LovePathQuiz" component={LovePathQuiz} />
      {/* <Stack.Screen name="LovePathAnalysis" component={LovePathAnalysis} /> */}
      <Stack.Screen name="LovePathJourney" component={LovePathJourney} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="ReactToStory" component={ReactToStoryScreen} />
      {/* <Stack.Screen name="FeedQuestions" component={FeedQuestionsScreen} /> */}
      <Stack.Screen name="AdvancedSearch" component={AdvancedSearchScreen} />
      {/* <Stack.Screen name="ConnectionMap" component={ConnectionMapScreen} /> */}
      {/* <Stack.Screen name="LoveInspiration" component={LoveInspirationScreen} /> */}
      {/* <Stack.Screen name="LoveMirror" component={LoveMirrorScreen} /> */}
      <Stack.Screen name="MatchEmotion" component={MatchEmotionScreen} />
      {/* <Stack.Screen name="LoveTimeline" component={LoveTimelineScreen} /> */}
      {/* <Stack.Screen name="DailyStatus" component={DailyStatusScreen} /> */}
      {/* <Stack.Screen name="LoveQuestions" component={LoveQuestionsScreen} /> */}
      <Stack.Screen name="CTAEmotion" component={CTAEmotion} />
      <Stack.Screen name="CoupleProfile" component={CoupleProfileScreenWithFirebase} />
      <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
      <Stack.Screen name="Gallery" component={GalleryScreen} />
      <Stack.Screen name="LoveMirrorAPI" component={LoveMirrorScreenWithAPI} />
      <Stack.Screen name="ReportUser" component={ReportUserScreen} />
      <Stack.Screen name="StoryViewer" component={StoryViewer} />
      <Stack.Screen name="SubmitStory" component={SubmitSuccessStory} />
      <Stack.Screen name="TwoFactor" component={TwoFactorScreen} />
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
    </Stack.Navigator>
  );
}

// Firestore collection reference: users
// collection(db, "users")

// Firestore collection reference: matches
// collection(db, "matches")

// Firestore collection reference: messages
// collection(db, "messages")

// Firestore collection reference: notifications
// collection(db, "notifications")
