
import React from 'react';
import { I18nManager } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/rtlApp/HomeScreen';
import AboutScreen from './screens/rtlApp/AboutScreen';
import ContactScreen from './screens/rtlApp/ContactScreen';

I18nManager.forceRTL(true);

const Stack = createNativeStackNavigator();
import { TransitionPresets } from '@react-navigation/stack';

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false, ...TransitionPresets.SlideFromRightIOS }} screenOptions={{ headerTitleAlign: 'center' }}>
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'דף הבית' }} />
        <Stack.Screen name="About" component={AboutScreen} options={{ title: 'אודות' }} />
        <Stack.Screen name="Contact" component={ContactScreen} options={{ title: 'צור קשר' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
