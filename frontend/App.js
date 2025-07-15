import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from './screens/LoginScreen';
import MenuList from './screens/MenuList';
import TambahMenu from './screens/TambahMenu';
import EditMenu from './screens/EditMenu';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="MenuList" component={MenuList} options={{ title: 'Daftar Menu' }} />
        <Stack.Screen name="TambahMenu" component={TambahMenu} options={{ title: 'Tambah Menu' }} />
        <Stack.Screen name="EditMenu" component={EditMenu} options={{ title: 'Edit Menu' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
