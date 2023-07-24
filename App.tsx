import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {moderateScale} from './src/theme/responsive';
import COLORS from './src/theme/colors';

// landing
import LandingPage from './src/view/landing/LandingPage';
import OnBoardingPage from './src/view/landing/OnBoardingPage';

// auth
import LoginPage from './src/view/auth/LoginPage';
import LupaPasswordPage from './src/view/auth/LupaPasswordPage';
import LupaPasswordPageByPhoneNumber from './src/view/auth/LupaPasswordPageByPhoneNumber';
import VerifikasiPage from './src/view/auth/VerifikasiPage';
import UbahPasswordPage from './src/view/auth/UbahPasswordPage';
import DaftarPage from './src/view/auth/DaftarPage';
import ProfilePage from './src/view/profile/ProfilePage';
import DaftarNomorHpPage from './src/view/auth/DaftarNomorHpPage';
import VerifikasiHpPage from './src/view/auth/VerfikasiHpPage';

// home
import HomePage from './src/view/home/HomePage';
import NotifikasiPage from './src/view/notifikasi/NotifikasiPage';
import Routes from './src/routes/Routes';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Routes />
  );
};

export default App;
