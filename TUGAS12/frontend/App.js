import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider as PaperProvider } from 'react-native-paper';

import DaftarBarang from './screens/DaftarBarang';
import TambahBarang from './screens/TambahBarang';
import EditBarang from './screens/EditBarang';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Daftar Barang" component={DaftarBarang} />
          <Stack.Screen name="Tambah Barang" component={TambahBarang} />
          <Stack.Screen name="Edit Barang" component={EditBarang} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
