// RootLayout.tsx
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import HomeScreen from './(tabs)/index';
import FamilyListScreen from './(tabs)/house_hold';

export type RootStackParamList = {
  "(tabs)/index": undefined;
  "(tabs)/house_hold": undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export default function RootLayout() {
  return (
    <Stack.Navigator initialRouteName="(tabs)/index">
      <Stack.Screen name="(tabs)/index" component={HomeScreen} options={{ title: 'Home' }} />
      <Stack.Screen name="(tabs)/house_hold" component={FamilyListScreen} options={{ title: 'Hộ gia đình' }} />
    </Stack.Navigator>
  );
}
