import React from 'react';
import { I18nManager } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TransitionPresets } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import HomeScreen from './screens/rtlApp/HomeScreen';
import AboutScreen from './screens/rtlApp/AboutScreen';
import ContactScreen from './screens/rtlApp/ContactScreen';

// Force RTL for the entire app
I18nManager.forceRTL(true);
I18nManager.allowRTL(true);

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerShown: true,
              headerTitleAlign: 'center',
              headerStyle: {
                backgroundColor: '#007AFF',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
          >
            <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'דף הבית' }} />
            <Stack.Screen name="About" component={AboutScreen} options={{ title: 'אודות' }} />
            <Stack.Screen name="Contact" component={ContactScreen} options={{ title: 'צור קשר' }} />
          </Stack.Navigator>
        </NavigationContainer>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
}
