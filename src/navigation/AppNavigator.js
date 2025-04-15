
import ProfilePreviewScreen from '../screens/ProfilePreviewScreen';
import RecommendationScreen from '../screens/RecommendationScreen';
import WhoViewedMeScreen from '../screens/WhoViewedMeScreen';
import ProfileStatsScreen from '../screens/ProfileStatsScreen';
import LoveDayScreen from '../screens/LoveDayScreen';
import EditDepthAnswersScreen from '../screens/EditDepthAnswersScreen';
import LovePathSummaryScreen from '../screens/LovePathSummaryScreen';
import FilteredResultsScreen from '../screens/FilteredResultsScreen';
// AUTO-SCREENS-IMPORT
import AboutScreen from '../screens/AboutScreen';
import AdminNotificationScreen from '../screens/AdminNotificationScreen';
import AdminPanelScreen from '../screens/AdminPanelScreen';
import AdvancedSearchScreen from '../screens/AdvancedSearchScreen';
import BlockedUsersScreen from '../screens/BlockedUsersScreen';
import CameraVerificationScreen from '../screens/CameraVerificationScreen';
import ChatListScreen from '../screens/ChatListScreen';
import ChatScreen from '../screens/ChatScreen';
import ChatWithMentor from '../screens/ChatWithMentor';
import CompatibilityQuizScreen from '../screens/CompatibilityQuizScreen';
import ConnectionMapScreen from '../screens/ConnectionMapScreen';
import CoupleProfileScreen from '../screens/CoupleProfileScreen';
import DailyStatusScreen from '../screens/DailyStatusScreen';
import DashboardScreen from '../screens/DashboardScreen';
import EditProfileScreen from '../screens/EditProfileScreen';
import EmotionalReflectionScreen from '../screens/EmotionalReflectionScreen';
import FaqScreen from '../screens/FaqScreen';
import FeedQuestionsScreen from '../screens/FeedQuestionsScreen';
import GroupChatScreen from '../screens/GroupChatScreen';
import HelpScreen from '../screens/HelpScreen';
import IntroSliderScreen from '../screens/IntroSliderScreen';
import InviteFriendsScreen from '../screens/InviteFriendsScreen';
import LegalScreen from '../screens/LegalScreen';
import LoadingScreen from '../screens/LoadingScreen';
import LoginRegisterScreen from '../screens/LoginRegisterScreen';
import LoginScreen from '../screens/LoginScreen';
import LoveChallengesScreen from '../screens/LoveChallengesScreen';
import LoveCoachScreen from '../screens/LoveCoachScreen';
import LoveInspirationScreen from '../screens/LoveInspirationScreen';
import LoveJournalScreen from '../screens/LoveJournalScreen';
import LoveMentorScreen from '../screens/LoveMentorScreen';
import LoveMirrorScreen from '../screens/LoveMirrorScreen';
import LovePathAnalysis from '../screens/LovePathAnalysis';
import LovePathDashboard from '../screens/LovePathDashboard';
import LovePathDay1 from '../screens/LovePathDay1';
import LovePathDay10 from '../screens/LovePathDay10';
import LovePathDay11 from '../screens/LovePathDay11';
import LovePathDay12 from '../screens/LovePathDay12';
import LovePathDay13 from '../screens/LovePathDay13';
import LovePathDay14 from '../screens/LovePathDay14';
import LovePathDay2 from '../screens/LovePathDay2';
import LovePathDay3 from '../screens/LovePathDay3';
import LovePathDay4 from '../screens/LovePathDay4';
import LovePathDay5 from '../screens/LovePathDay5';
import LovePathDay6 from '../screens/LovePathDay6';
import LovePathDay7 from '../screens/LovePathDay7';
import LovePathDay8 from '../screens/LovePathDay8';
import LovePathDay9 from '../screens/LovePathDay9';
import LovePathJourney from '../screens/LovePathJourney';
import LovePathProgress from '../screens/LovePathProgress';
import LovePathQuestionnaire from '../screens/LovePathQuestionnaire';
import LovePathQuiz from '../screens/LovePathQuiz';
import LovePathReflectionScreen from '../screens/LovePathReflectionScreen';
import LovePathResults from '../screens/LovePathResults';
import LovePathScreen from '../screens/LovePathScreen';
import LoveQuestionsScreen from '../screens/LoveQuestionsScreen';
import LoveRadarScreen from '../screens/LoveRadarScreen';
import LoveTimelineScreen from '../screens/LoveTimelineScreen';
import MatchCelebration from '../screens/MatchCelebration';
import MatchEmotionScreen from '../screens/MatchEmotionScreen';
import MatchNowScreen from '../screens/MatchNowScreen';
import MatchProfileScreen from '../screens/MatchProfileScreen';
import MatchResultsScreen from '../screens/MatchResultsScreen';
import MatchScreen from '../screens/MatchScreen';
import MyAnalyticsScreen from '../screens/MyAnalyticsScreen';
import NotificationScreen from '../screens/NotificationScreen';
import NotificationsScreen from '../screens/NotificationsScreen';
import Onboarding1 from '../screens/Onboarding1';
import Onboarding2 from '../screens/Onboarding2';
import Onboarding3 from '../screens/Onboarding3';
import OnboardingScreen from '../screens/OnboardingScreen';
import OpportunitiesScreen from '../screens/OpportunitiesScreen';
import PersonalAnalyticsScreen from '../screens/PersonalAnalyticsScreen';
import PersonalityQuizScreen from '../screens/PersonalityQuizScreen';
import PremiumScreen from '../screens/PremiumScreen';
import PrivacyPolicyScreen from '../screens/PrivacyPolicyScreen';
import PrivacyScreen from '../screens/PrivacyScreen';
import ProfileCoachScreen from '../screens/ProfileCoachScreen';
import ProfileScreen from '../screens/ProfileScreen';
import ProfileViewsIndicator from '../screens/ProfileViewsIndicator';
import QuestionDetailScreen from '../screens/QuestionDetailScreen';
import QuestionFeedScreen from '../screens/QuestionFeedScreen';
import ReactToStoryScreen from '../screens/ReactToStoryScreen';
import RecommendationsScreen from '../screens/RecommendationsScreen';
import RegisterScreen from '../screens/RegisterScreen';
import ReportUserScreen from '../screens/ReportUserScreen';
import ResetPasswordScreen from '../screens/ResetPasswordScreen';
import SettingsScreen from '../screens/SettingsScreen';
import SmartFiltersScreen from '../screens/SmartFiltersScreen';
import SmartMatchesScreen from '../screens/SmartMatchesScreen';
import SmartSearchScreen from '../screens/SmartSearchScreen';
import SplashScreen from '../screens/SplashScreen';
import StatsScreen from '../screens/StatsScreen';
import StoriesScreen from '../screens/StoriesScreen';
import StoryListScreen from '../screens/StoryListScreen';
import StoryReactionScreen from '../screens/StoryReactionScreen';
import StoryReactionsScreen from '../screens/StoryReactionsScreen';
import StoryUploadScreen from '../screens/StoryUploadScreen';
import StoryViewerScreen from '../screens/StoryViewerScreen';
import SubmitSuccessStory from '../screens/SubmitSuccessStory';
import SuccessScreen from '../screens/SuccessScreen';
import SuccessStoriesScreen from '../screens/SuccessStoriesScreen';
import SwipeScreen from '../screens/SwipeScreen';
import TermsOfUseScreen from '../screens/TermsOfUseScreen';
import TermsScreen from '../screens/TermsScreen';
import UserDashboardScreen from '../screens/UserDashboardScreen';
import UserListScreen from '../screens/UserListScreen';
import VerifyCodeScreen from '../screens/VerifyCodeScreen';
import VerifyProfileScreen from '../screens/VerifyProfileScreen';
import VoiceOpenerScreen from '../screens/VoiceOpenerScreen';
import auth2fa from '../screens/auth2fa';

import React, { Suspense } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './AuthNavigator';
import { HomeScreen, MatchesScreen, SearchScreen } from '../../LazyScreens';

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Suspense fallback={null}>
      <AuthNavigator />
          </Suspense>
    </NavigationContainer>
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
