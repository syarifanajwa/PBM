import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import TambahMenuScreen from '../screens/TambahMenuScreen';
import EditMenuScreen from '../screens/EditMenuScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="TambahMenu" component={TambahMenuScreen} />
      <Stack.Screen name="EditMenu" component={EditMenuScreen} />
    </Stack.Navigator>
  );
}
