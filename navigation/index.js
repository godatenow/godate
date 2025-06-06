import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import RegisterScreen from '../screens/RegisterScreen';
import MatchScreen from '../screens/MatchScreen';
import ChatScreen from '../screens/ChatScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={"Home"}>
        <Stack.Screen name={"Home"} component={HomeScreen} />
        <Stack.Screen name={"Profile"} component={ProfileScreen} />
        <Stack.Screen name={"Register"} component={RegisterScreen} />
        <Stack.Screen name={"Match"} component={MatchScreen} />
        <Stack.Screen name={"Chat"} component={ChatScreen} />
      </Stack.Navigator>
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
