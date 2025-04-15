import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/onboarding/LoginScreen';
import RegisterScreen from '../screens/onboarding/RegisterScreen';
import OnboardingScreen from '../screens/onboarding/OnboardingScreen';
import HomeScreen from '../screens/HomeScreen';

const Stack = createNativeStackNavigator();

export default function AuthNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name=t("Onboarding") component={OnboardingScreen} />
      <Stack.Screen name=t("Login") component={LoginScreen} />
      <Stack.Screen name=t("Register") component={RegisterScreen} />
      <Stack.Screen name=t("Home") component={HomeScreen} />
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
