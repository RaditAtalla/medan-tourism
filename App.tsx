import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginPage } from './src/view/LoginPage';
import { DaftarPage } from './src/view/DaftarPage';
import { COLORS } from './src/constant/theme';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="LoginPage" component={LoginPage}
        options={{
          title: "Login",
          headerStyle: {
            backgroundColor: COLORS.blue,
          },
          headerTitleAlign: 'center',
          headerTitleStyle: {
            color: 'white',
            fontWeight: '700',
            fontSize: 24,
          },
          headerShadowVisible: false,
        }}
        />
        <Stack.Screen name="DaftarPage" component={DaftarPage}
        options={{
          title: "Daftar",
          headerStyle: {
            backgroundColor: COLORS.blue,
          },
          headerTitleAlign: 'center',
          headerTitleStyle: {
            color: 'white',
            fontWeight: '700',
            fontSize: 24,
          },
          headerShadowVisible: false,
        }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;