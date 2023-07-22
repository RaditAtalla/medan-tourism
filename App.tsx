import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {moderateScale} from './src/theme/responsive';
import COLORS from './src/theme/colors';

import LandingPage from './src/view/LandingPage';
import OnBoardingPage from './src/view/OnBoardingPage';
import LoginPage from './src/view/LoginPage';
import LupaPasswordPage from './src/view/LupaPasswordPage';
import VerifikasiPage from './src/view/VerifikasiPage';
import UbahPasswordPage from './src/view/UbahPasswordPage';
import DaftarPage from './src/view/DaftarPage';
import ProfilePage from './src/view/ProfilePage';
import DaftarNomorHpPage from './src/view/DaftarNomorHpPage';
import VerifikasiHpPage from './src/view/VerfikasiHpPage';
import HomePage from './src/view/HomePage';
import NotifikasiTransaksi from './src/view/NotifikasiTransaksi';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="LandingPage"
          component={LandingPage}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="OnBoardingPage"
          component={OnBoardingPage}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="LoginPage" component={LoginPage}
        options={{
          title: "Login",
          headerShadowVisible: false,
          headerTransparent: true,
          headerTitleAlign: 'center',
          headerTitleStyle: {
            color: 'white',
            fontWeight: '700',
            fontSize: moderateScale(24),
          },
          headerTintColor: 'white',
        }}
        />
        <Stack.Screen
          name="LupaPasswordPage"
          component={LupaPasswordPage}
          options={{
            title: 'Lupa password',
            headerShadowVisible: false,
            headerTransparent: true,
            headerTitleAlign: 'center',
            headerTitleStyle: {
              color: '#252525',
              fontWeight: '700',
              fontSize: moderateScale(24),
            },
            headerTintColor: '#252525',
          }}
        />
        <Stack.Screen
          name="VerifikasiPage"
          component={VerifikasiPage}
          options={{
            title: 'Verifikasi',
            headerShadowVisible: false,
            headerTransparent: true,
            headerTitleAlign: 'center',
            headerTitleStyle: {
              color: '#252525',
              fontWeight: '700',
              fontSize: moderateScale(24),
            },
            headerTintColor: '#252525',
          }}
        />
        <Stack.Screen
          name="VerifikasiHpPage"
          component={VerifikasiHpPage}
          options={{
            title: 'Verifikasi',
            headerShadowVisible: false,
            headerTitleAlign: 'center',
            headerTitleStyle: {
              color: '#252525',
              fontWeight: '700',
              fontSize: moderateScale(24),
            },
            headerTintColor: '#252525',
          }}
        />
        <Stack.Screen
          name="UbahPasswordPage"
          component={UbahPasswordPage}
          options={{
            title: 'Ubah Password',
            headerShadowVisible: false,
            headerTitleAlign: 'center',
            headerTitleStyle: {
              color: '#252525',
              fontWeight: '700',
              fontSize: moderateScale(24),
            },
            headerTintColor: '#252525',
          }}
        />
        <Stack.Screen name="DaftarPage" component={DaftarPage}
        options={{
          title: "Daftar",
          headerShadowVisible: false,
          headerTransparent: true,
          headerTitleAlign: 'center',
          headerTitleStyle: {
            color: 'white',
            fontWeight: '700',
            fontSize: moderateScale(24),
          },
          headerTintColor: 'white',
        }}
        />
        <Stack.Screen name="DaftarNomorHpPage" component={DaftarNomorHpPage}
        options={{
          title: "Daftar",
          headerShadowVisible: false,
          headerTransparent: true,
          headerTitleAlign: 'center',
          headerTitleStyle: {
            color: COLORS.black4,
            fontWeight: '700',
            fontSize: moderateScale(24),
          },
          headerTintColor: COLORS.black4,
        }}
        />
        <Stack.Screen
          name="HomePage"
          component={HomePage}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="ProfilePage"
          component={ProfilePage}
          options={{
            headerShadowVisible: false,
            headerStyle: {
              backgroundColor: COLORS.gray5,
            },
            headerTitleStyle: {
              color: '#252525',
              fontSize: 20,
              fontWeight: '700',
            },
          }}
        />
        <Stack.Screen
          name="NotifikasiTransaksiPage"
          component={NotifikasiTransaksi}
          options={{
            title: 'Notifikasi',
            headerShadowVisible: false,
            headerStyle: {
              backgroundColor: COLORS.white,
            },
            headerTitleStyle: {
              color: '#252525',
              fontSize: 20,
              fontWeight: '700',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
