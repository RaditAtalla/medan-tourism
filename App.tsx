import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {moderateScale} from './src/theme/responsive';
import COLORS from './src/theme/colors';

// landing
import LandingPage from './src/view/landing/LandingPage';
import OnBoardingPage from './src/view/landing/OnBoardingPage';

// auth
import DaftarPage from './src/view/auth/DaftarPage';
import DaftarNomorHpPage from './src/view/auth/DaftarNomorHpPage';
import LoginPage from './src/view/auth/LoginPage';
import LupaPasswordPage from './src/view/auth/LupaPasswordPage';
import LupaPasswordPageByPhoneNumber from './src/view/auth/LupaPasswordPageByPhoneNumber';
import VerifikasiPage from './src/view/auth/VerifikasiPage';
import VerifikasiHpPage from './src/view/auth/VerfikasiHpPage';
import UbahPasswordPage from './src/view/auth/UbahPasswordPage';

// home
import HomePage from './src/view/home/HomePage';

// profil
import ProfilePage from './src/view/profile/ProfilePage';
import NotifikasiTransaksi from './src/view/profile/NotifikasiTransaksi';

// transport
import TransportPage from './src/view/transport/TransportPage';
import TransportMetrodeliPage from './src/view/transport/TransportMetrodeliPage';

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
        <Stack.Screen
          name="LoginPage"
          component={LoginPage}
          options={{
            title: 'Login',
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
          name="LupaPasswordPageByPhoneNumber"
          component={LupaPasswordPageByPhoneNumber}
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
        <Stack.Screen
          name="DaftarPage"
          component={DaftarPage}
          options={{
            title: 'Daftar',
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
          name="DaftarNomorHpPage"
          component={DaftarNomorHpPage}
          options={{
            title: 'Daftar',
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
        <Stack.Screen
          name="TransportPage"
          component={TransportPage}
          options={{
            title: 'Transportasi',
            headerShadowVisible: false,
            headerTransparent: true,
            headerTitleStyle: {
              color: '#252525',
              fontSize: 20,
              fontWeight: '700',
            },
          }}
        />
        <Stack.Screen
          name="TransportMetrodeliPage"
          component={TransportMetrodeliPage}
          options={{
            title: 'Bus Metrodeli',
            headerShadowVisible: false,
            headerTransparent: true,
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
