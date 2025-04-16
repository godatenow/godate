import React from 'react';
import { Platform } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { TransitionPresets, CardStyleInterpolators } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';

// Import screens
import HomeScreen from '../screens/HomeScreen';
import MatchesScreen from '../screens/MatchesScreen';
import ChatScreen from '../screens/ChatScreen';
import ProfileScreen from '../screens/ProfileScreen';
import StoriesScreen from '../screens/StoriesScreen';
import LovePathDashboard from '../screens/LovePathDashboard';
import LovePathQuiz from '../screens/LovePathQuiz';
import LovePathAnalysis from '../screens/LovePathAnalysis';
import LovePathJourney from '../screens/LovePathJourney';
import NotificationsScreen from '../screens/NotificationsScreen';
import RegisterScreen from '../screens/RegisterScreen';
import HelpScreen from '../screens/HelpScreen';
import TermsScreen from '../screens/TermsScreen';
import PrivacyScreen from '../screens/PrivacyScreen';
import AboutScreen from '../screens/AboutScreen';
import ChatWithMentor from '../screens/ChatWithMentor';
import ReactToStoryScreen from '../screens/ReactToStoryScreen';
import FeedQuestionsScreen from '../screens/FeedQuestionsScreen';
import AdvancedSearchScreen from '../screens/AdvancedSearchScreen';
import ConnectionMapScreen from '../screens/ConnectionMapScreen';
import LoveJournalScreen from '../screens/LoveJournalScreen';
import LoveChallengesScreen from '../screens/LoveChallengesScreen';
import LoveInspirationScreen from '../screens/LoveInspirationScreen';
import LoveMirrorScreen from '../screens/LoveMirrorScreen';
import MatchEmotionScreen from '../screens/MatchEmotionScreen';
import LoveTimelineScreen from '../screens/LoveTimelineScreen';
import DailyStatusScreen from '../screens/DailyStatusScreen';
import LoveRadarScreen from '../screens/LoveRadarScreen';
import LoveQuestionsScreen from '../screens/LoveQuestionsScreen';
import CTAEmotion from '../screens/CTAEmotion';
import CoupleProfileScreenWithFirebase from '../screens/CoupleProfileScreenWithFirebase';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import GalleryScreen from '../screens/GalleryScreen';
import LoveMirrorScreenWithAPI from '../screens/LoveMirrorScreenWithAPI';
import ReportUserScreen from '../screens/ReportUserScreen';
import SettingsScreen from '../screens/SettingsScreen';
import StoryViewer from '../screens/StoryViewer';
import SubmitSuccessStory from '../screens/SubmitSuccessStory';
import TwoFactorScreen from '../screens/TwoFactorScreen';
import WelcomeScreen from '../screens/WelcomeScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// Platform-specific transition configuration
const getTransitionConfig = () => {
  if (Platform.OS === 'web') {
    return {};
  }
  return TransitionPresets.SlideFromRightIOS;
};

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
      <Tab.Screen name="Matches" component={MatchesScreen} />
      <Tab.Screen name="Chat" component={ChatScreen} />
      <Tab.Screen name="Stories" component={StoriesScreen} />
      <Tab.Screen name="LovePath" component={LovePathDashboard} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

export default function AppNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        ...getTransitionConfig(),
        headerShown: true,
        cardStyleInterpolator: Platform.OS === 'web' ? undefined : CardStyleInterpolators.forHorizontalIOS,
        headerStyle: {
          backgroundColor: '#ff6f61',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <Stack.Screen name="MainTabs" component={MainTabs} options={{ headerShown: false }} />
      <Stack.Screen name="LovePathQuiz" component={LovePathQuiz} />
      <Stack.Screen name="LovePathAnalysis" component={LovePathAnalysis} />
      <Stack.Screen name="LovePathJourney" component={LovePathJourney} />
      <Stack.Screen name="Notifications" component={NotificationsScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="Help" component={HelpScreen} />
      <Stack.Screen name="Terms" component={TermsScreen} />
      <Stack.Screen name="Privacy" component={PrivacyScreen} />
      <Stack.Screen name="About" component={AboutScreen} />
      <Stack.Screen name="ChatWithMentor" component={ChatWithMentor} />
      <Stack.Screen name="ReactToStory" component={ReactToStoryScreen} />
      <Stack.Screen name="FeedQuestions" component={FeedQuestionsScreen} />
      <Stack.Screen name="AdvancedSearch" component={AdvancedSearchScreen} />
      <Stack.Screen name="ConnectionMap" component={ConnectionMapScreen} />
      <Stack.Screen name="LoveJournal" component={LoveJournalScreen} />
      <Stack.Screen name="LoveChallenges" component={LoveChallengesScreen} />
      <Stack.Screen name="LoveInspiration" component={LoveInspirationScreen} />
      <Stack.Screen name="LoveMirror" component={LoveMirrorScreen} />
      <Stack.Screen name="MatchEmotion" component={MatchEmotionScreen} />
      <Stack.Screen name="LoveTimeline" component={LoveTimelineScreen} />
      <Stack.Screen name="DailyStatus" component={DailyStatusScreen} />
      <Stack.Screen name="LoveRadar" component={LoveRadarScreen} />
      <Stack.Screen name="LoveQuestions" component={LoveQuestionsScreen} />
      <Stack.Screen name="CTAEmotion" component={CTAEmotion} />
      <Stack.Screen name="CoupleProfile" component={CoupleProfileScreenWithFirebase} />
      <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
      <Stack.Screen name="Gallery" component={GalleryScreen} />
      <Stack.Screen name="LoveMirrorAPI" component={LoveMirrorScreenWithAPI} />
      <Stack.Screen name="ReportUser" component={ReportUserScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
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
