import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import AboutScreen from './screens/AboutScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: '🏠 Beranda' }}/>
        <Stack.Screen name="Profile" component={ProfileScreen} options={{ title: '👤 Profil Saya' }}/>
        <Stack.Screen name="About" component={AboutScreen} options={{ title: 'ℹ️ Tentang Aplikasi' }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}