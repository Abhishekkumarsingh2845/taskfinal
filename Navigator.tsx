// AppNavigator.tsx
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from './Screen/Splash';
import RegistrationScreen from './Screen/Registration';
import DataEntryScreen from './Screen/Login';

const Stack = createStackNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Registration" component={RegistrationScreen} />
        <Stack.Screen name="Login" component={DataEntryScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
