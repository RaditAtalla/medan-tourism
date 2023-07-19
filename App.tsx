import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { COLORS } from './src/constant/theme';
import { moderateScale } from './src/constant/responsive';

import LandingPage from './src/view/LandingPage';
import OnBoardingPage from './src/view/OnBoardingPage';
import LoginPage from './src/view/LoginPage';
import DaftarPage from './src/view/DaftarPage';
import ProfilePage from './src/view/ProfilePage';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="LandingPage" component={LandingPage} 
        options={{
          headerShown: false,
        }}
        />
        <Stack.Screen name="OnBoardingPage" component={OnBoardingPage} 
        options={{
          headerShown: false,
          headerShadowVisible: false,
        }}
        />
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
            fontSize: moderateScale(24),
          },
          headerShadowVisible: false,
          headerTintColor: 'white',
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
            fontSize: moderateScale(24),
          },
          headerShadowVisible: false,
          headerTintColor: 'white',
        }}
        />
        <Stack.Screen name="Profil Saya" component={ProfilePage} 
        options={{
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: COLORS.gray5,
          },
          headerTitleStyle: {
            color: '#252525',
            fontSize: 20,
            fontWeight: '700',
          }
        }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;