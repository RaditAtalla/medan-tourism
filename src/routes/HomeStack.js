import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ICONS from '../assets/icons/icons';
import COLORS from '../theme/colors';
import {Image} from 'react-native';

import HomePage from '../view/home/HomePage';
import SearchPage from '../view/search/SearchPage';
import PerjalananPage from '../view/perjalanan/PerjalananPage';
import PromoPage from '../view/promo/PromoPage';
import ProfilePage from '../view/profile/ProfilePage';
import TransportPage from '../view/transport/TransportPage';
import TransportMetrodeliPage from '../view/transport/TransportMetrodeliPage';
import TransportKoridorPage from '../view/transport/TransportKoridorPage';
import NotifikasiPage from '../view/notifikasi/NotifikasiPage';
import NotifikasiPesanPage from '../view/notifikasi/NotifikasiPesanPage';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const HomeTabStack = createBottomTabNavigator();
const HomeNavStack = createNativeStackNavigator();

export const HomeNavStackScreen = () => {
  return (
    <HomeNavStack.Navigator>
      <HomeNavStack.Screen
        name="TransportPage"
        component={TransportPage}
        options={{title: 'Transportasi', headerShadowVisible: false}}
      />
      <HomeNavStack.Screen
        name="TransportMetrodeliPage"
        component={TransportMetrodeliPage}
        options={{title: 'Bus Metrodeli', headerShadowVisible: false}}
      />
      <HomeNavStack.Screen
        name="TransportKoridorPage"
        component={TransportKoridorPage}
        options={{title: 'Koridor 1', headerShadowVisible: false}}
      />
      <HomeNavStack.Screen
        name="NotifikasiPage"
        component={NotifikasiPage}
        options={{title: 'Notifikasi', headerShadowVisible: false}}
      />
      <HomeNavStack.Screen
        name="NotifikasiPesanPage"
        component={NotifikasiPesanPage}
        options={{title: 'Notifikasi', headerShadowVisible: false}}
      />
    </HomeNavStack.Navigator>
  );
};

const HomeStackScreen = () => {
  return (
    <HomeTabStack.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused}) => {
          let iconName;

          if (route.name === 'HomePage') {
            iconName = focused ? ICONS.homeActive : ICONS.home;
          } else if (route.name === 'SearchPage') {
            iconName = focused ? ICONS.searchActive : ICONS.search;
          } else if (route.name === 'PerjalananPage') {
            iconName = focused ? ICONS.perjalananActive : ICONS.perjalanan;
          } else if (route.name === 'PromoPage') {
            iconName = focused ? ICONS.promoActive : ICONS.promo;
          } else if (route.name === 'ProfilePage') {
            iconName = focused ? ICONS.profileActive : ICONS.profile;
          }

          // You can return any component that you like here!
          return <Image source={iconName} />;
        },
        tabBarActiveTintColor: COLORS.blue,
        tabBarInactiveTintColor: 'gray',
        tabBarShowLabel: false,
        tabBarStyle: {
          paddingVertical: 13,
          paddingHorizontal: 26,
          height: 77,
        },
      })}>
      <HomeTabStack.Screen
        name="HomePage"
        component={HomePage}
        options={{
          headerShown: false,
        }}
      />
      <HomeTabStack.Screen
        name="SearchPage"
        component={SearchPage}
        options={{
          headerShown: false,
        }}
      />
      <HomeTabStack.Screen
        name="PerjalananPage"
        component={PerjalananPage}
        options={{
          headerShown: false,
        }}
      />
      <HomeTabStack.Screen
        name="PromoPage"
        component={PromoPage}
        options={{
          headerShown: false,
        }}
      />
      <HomeTabStack.Screen
        name="ProfilePage"
        component={ProfilePage}
        options={{
          headerShown: false,
        }}
      />
    </HomeTabStack.Navigator>
  );
};

export default HomeStackScreen;