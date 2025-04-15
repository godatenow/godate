import WelcomeScreen from '../screens/WelcomeScreen';
import TwoFactorScreen from '../screens/TwoFactorScreen';
import SubmitSuccessStory from '../screens/SubmitSuccessStory';
import StoryViewer from '../screens/StoryViewer';
import SettingsScreen from '../screens/SettingsScreen';
import ReportUserScreen from '../screens/ReportUserScreen';
import LoveMirrorScreenWithAPI from '../screens/LoveMirrorScreenWithAPI';
import GalleryScreen from '../screens/GalleryScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import CoupleProfileScreenWithFirebase from '../screens/CoupleProfileScreenWithFirebase';
import CTAEmotion from '../screens/CTAEmotion';
import React
import LoveQuestionsScreen from '../LoveQuestionsScreen';
import LoveRadarScreen from '../LoveRadarScreen';
import DailyStatusScreen from '../DailyStatusScreen';
import LoveTimelineScreen from '../LoveTimelineScreen';
import MatchEmotionScreen from '../MatchEmotionScreen';
import LoveMirrorScreen from '../LoveMirrorScreen';
import LoveInspirationScreen from '../LoveInspirationScreen';
import LoveChallengesScreen from '../LoveChallengesScreen';
import LoveJournalScreen from '../LoveJournalScreen';
import ConnectionMapScreen from '../ConnectionMapScreen';
import AdvancedSearchScreen from '../AdvancedSearchScreen';
import FeedQuestionsScreen from '../FeedQuestionsScreen';
import FeedQuestionsScreen from '../FeedQuestionsScreen';ToStoryScreen from '../ReactToStoryScreen';
import ChatWithMentor from '../ChatWithMentor';
import AboutScreen from '../AboutScreen';
import HomeScreen from './screens/HomeScreen';
import MatchesScreen from './screens/MatchesScreen';
import ChatScreen from './screens/ChatScreen';
import ProfileScreen from './screens/ProfileScreen';
import LovePathDashboard from './screens/LovePathDashboard';
import LovePathQuiz from './screens/LovePathQuiz';
import LovePathAnalysis from './screens/LovePathAnalysis';
import LovePathJourney from './screens/LovePathJourney';
import StoriesScreen from './screens/StoriesScreen';
import NotificationsScreen from './screens/NotificationsScreen';
import RegisterScreen from './screens/RegisterScreen';
import HelpScreen from './screens/HelpScreen';
import TermsScreen from './screens/TermsScreen';
import PrivacyScreen from './screens/PrivacyScreen';
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator, TransitionPresets();
function MainTabs() {
}
  return (
)
    <Tab.Navigator
      screenOptions={({ route }) => ({
}
        headerShown: false,
        tabBarActiveTintColor: '#ff6f61',
        tabBarInactiveTintColor: '#aaa',
        tabBarStyle: {
}
          backgroundColor: '#fff',
          paddingVertical: 6,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          height: 60,
        },
        tabBarIcon: ({ color, size }) => {
}
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
      <Tab.Screen name=t("Home") component={HomeScreen} />
      <Tab.Screen name=t("Matches") component={MatchesScreen} />
      <Tab.Screen name=t("Chat") component={ChatScreen} />
      <Tab.Screen name=t("Stories") component={StoriesScreen} />
      <Tab.Screen name=t("LovePath") component={LovePathDashboard} />
      <Tab.Screen name=t("Profile") component={ProfileScreen} />
    </Tab.Navigator>
  );
}
export default function AppNavigator() {
  return (
)
    <Stack.Navigator
      screenOptions={{
        ...TransitionPresets.SlideFromRightIOS, headerShown: false }}
      screenOptions={{
        ...TransitionPresets.SlideFromRightIOS,
        headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    >
      <Stack.Screen name=t("MainTabs") component={MainTabs} />
      <Stack.Screen name=t("LovePathQuiz") component={LovePathQuiz} />
      <Stack.Screen name=t("LovePathAnalysis") component={LovePathAnalysis} />
      <Stack.Screen name=t("LovePathJourney") component={LovePathJourney} />
      <Stack.Screen name=t("Notifications") component={NotificationsScreen} />
      <Stack.Screen name=t("Register") component={RegisterScreen} />
      <Stack.Screen name=t("Help") component={HelpScreen} />
      <Stack.Screen name=t("Terms") component={TermsScreen} />
      <Stack.Screen name=t("Privacy") component={PrivacyScreen} />
      <Stack.Screen name=t("About") component={AboutScreen} options={{ title: '' }} />
  <Stack.Screen name=t("ChatWithMentor") component={ChatWithMentor} options={{ title: '  ' }} />
  <Stack.Screen name=t("ReactToStory") component={ReactToStoryScreen} options={{ title: ' ' }} />
  <Stack.Screen name=t("FeedQuestions") component={FeedQuestionsScreen} options={{ title: ' ' }} />
  <Stack.Screen name=t("AdvancedSearch") component={AdvancedSearchScreen} options={{ title: ' ' }} />
  <Stack.Screen name=t("ConnectionMap") component={ConnectionMapScreen} options={{ title: ' ' }} />
  <Stack.Screen name=t("LoveJournal") component={LoveJournalScreen} options={{ title: ' ' }} />
  <Stack.Screen name=t("LoveChallenges") component={LoveChallengesScreen} options={{ title: 'Love Challenges' }} />
  <Stack.Screen name=t("LoveInspiration") component={LoveInspirationScreen} options={{ title: ' ' }} />
  <Stack.Screen name=t("LoveMirror") component={LoveMirrorScreen} options={{ title: 'Love Mirror' }} />
  <Stack.Screen name=t("MatchEmotion") component={MatchEmotionScreen} options={{ title: 'Match ' }} />
  <Stack.Screen name=t("LoveTimeline") component={LoveTimelineScreen} options={{ title: '  ' }} />
  <Stack.Screen name=t("DailyStatus") component={DailyStatusScreen} options={{ title: '  ' }} />
  <Stack.Screen name=t("LoveRadar") component={LoveRadarScreen} options={{ title: 'Love Radar' }} />
  <Stack.Screen name=t("LoveQuestions") component={LoveQuestionsScreen} options={{ title: ' ' }} />
  <Stack.Screen name=t("VoiceOpener") component={VoiceOpenerScreen} options={{ title: ' ' }} />
  <Stack.Screen name=t("LoveCoach") component={LoveCoachScreen} />
    
      <Stack.Screen name=t("LovePathScreen") component=LovePathScreen />
    
      <Stack.Screen name=t("LovePathReflectionScreen") component=LovePathReflectionScreen />
    
      <Stack.Screen name=t("PersonalAnalyticsScreen") component=PersonalAnalyticsScreen />
    
      <Stack.Screen name=t("VerifyProfileScreen") component=VerifyProfileScreen />
    
      <Stack.Screen name=t("ProfileCoachScreen") component=ProfileCoachScreen />
    
      <Stack.Screen name=t("LoveMentorScreen") component=LoveMentorScreen />
    
      <Stack.Screen name=t("QuestionFeedScreen") component=QuestionFeedScreen />
    
      <Stack.Screen name=t("QuestionDetailScreen") component=QuestionDetailScreen />
    
      <Stack.Screen name=t("GroupChatScreen") component=GroupChatScreen />
    
      <Stack.Screen name=t("MessageInput") component=MessageInput />
    </Stack.Navigator>
  );
}
import MatchResultsScreen from './screens/MatchResultsScreen';
const Stack = createStackNavigator, TransitionPresets();
  return (
)
    <Stack.Navigator
      screenOptions={{
        ...TransitionPresets.SlideFromRightIOS, headerShown: false }} screenOptions={{
        ...TransitionPresets.SlideFromRightIOS, headerShown: true }}>
      <Stack.Screen name=t("Home") component={HomeScreen} />
      <Stack.Screen name=t("MatchResults") component={MatchResultsScreen} />
      {/*   */}
      <Stack.Screen name=t("About") component={AboutScreen} options={{ title: '' }} />
  <Stack.Screen name=t("ChatWithMentor") component={ChatWithMentor} options={{ title: '  ' }} />
  <Stack.Screen name=t("ReactToStory") component={ReactToStoryScreen} options={{ title: ' ' }} />
  <Stack.Screen name=t("FeedQuestions") component={FeedQuestionsScreen} options={{ title: ' ' }} />
  <Stack.Screen name=t("AdvancedSearch") component={AdvancedSearchScreen} options={{ title: ' ' }} />
  <Stack.Screen name=t("ConnectionMap") component={ConnectionMapScreen} options={{ title: ' ' }} />
  <Stack.Screen name=t("LoveJournal") component={LoveJournalScreen} options={{ title: ' ' }} />
  <Stack.Screen name=t("LoveChallenges") component={LoveChallengesScreen} options={{ title: 'Love Challenges' }} />
  <Stack.Screen name=t("LoveInspiration") component={LoveInspirationScreen} options={{ title: ' ' }} />
  <Stack.Screen name=t("LoveMirror") component={LoveMirrorScreen} options={{ title: 'Love Mirror' }} />
  <Stack.Screen name=t("MatchEmotion") component={MatchEmotionScreen} options={{ title: 'Match ' }} />
  <Stack.Screen name=t("LoveTimeline") component={LoveTimelineScreen} options={{ title: '  ' }} />
  <Stack.Screen name=t("DailyStatus") component={DailyStatusScreen} options={{ title: '  ' }} />
  <Stack.Screen name=t("LoveRadar") component={LoveRadarScreen} options={{ title: 'Love Radar' }} />
  <Stack.Screen name=t("LoveQuestions") component={LoveQuestionsScreen} options={{ title: ' ' }} />
  <Stack.Screen name=t("VoiceOpener") component={VoiceOpenerScreen} options={{ title: ' ' }} />
  <Stack.Screen name=t("LoveCoach") component={LoveCoachScreen} />
      <Stack.Screen name="CTAEmotion" component=CTAEmotion />
  <Stack.Screen name="CoupleProfileScreenWithFirebase" component=CoupleProfileScreenWithFirebase />
  <Stack.Screen name="ForgotPasswordScreen" component=ForgotPasswordScreen />
  <Stack.Screen name="GalleryScreen" component=GalleryScreen />
  <Stack.Screen name="LoveMirrorScreenWithAPI" component=LoveMirrorScreenWithAPI />
  <Stack.Screen name="ReportUserScreen" component=ReportUserScreen />
  <Stack.Screen name="SettingsScreen" component=SettingsScreen />
  <Stack.Screen name="StoryViewer" component=StoryViewer />
  <Stack.Screen name="SubmitSuccessStory" component=SubmitSuccessStory />
  <Stack.Screen name="TwoFactorScreen" component=TwoFactorScreen />
  <Stack.Screen name="WelcomeScreen" component=WelcomeScreen />
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
