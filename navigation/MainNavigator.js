
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import EntryScreen from '../screens/EntryScreen';
import WelcomeGallery from '../screens/WelcomeGallery';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import LovePathScreen from '../screens/LovePathScreen';
import MatchEmotionScreen from '../screens/MatchEmotionScreen';
import ChatWithMentor from '../screens/ChatWithMentor';
import NotificationScreen from '../screens/NotificationScreen';
import StoryViewer from '../screens/StoryViewer';
import PremiumJoinScreen from '../screens/PremiumJoinScreen';

const Stack = createStackNavigator();

const MainNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="EntryScreen" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="EntryScreen" component={EntryScreen} />
      <Stack.Screen name="WelcomeGallery" component={WelcomeGallery} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="LovePath" component={LovePathScreen} />
      <Stack.Screen name="MatchEmotion" component={MatchEmotionScreen} />
      <Stack.Screen name="ChatWithMentor" component={ChatWithMentor} />
      <Stack.Screen name="Notifications" component={NotificationScreen} />
      <Stack.Screen name="StoryViewer" component={StoryViewer} />
      <Stack.Screen name="Premium" component={PremiumJoinScreen} />
    </Stack.Navigator>
  );
};

export default MainNavigator;
