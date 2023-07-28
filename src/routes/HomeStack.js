import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ICONS from '../assets/icons/icons';
import COLORS from '../theme/colors';

import {Image} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomePage from '../view/home/HomePage';
import SearchPage from '../view/search/SearchPage';
import PerjalananPage from '../view/perjalanan/PerjalananPage';
import ProfilePage from '../view/profile/ProfilePage';
import BeritaDanEventPage from '../view/beritaDanEvent/beritaDanEventPage';
import BeritaDanEventPageMedanTourismEvent from '../view/beritaDanEvent/beritaDanEventMedanTourismEvent';
import BeritaDanEventPageMedanTourismBerita from '../view/beritaDanEvent/beritaDanEventMedanTourismBerita';

import SearchHistoryPage from '../view/search/SeachHistoryPage';

import TransportPage from '../view/transport/TransportPage';
import TransportMetrodeliPage from '../view/transport/TransportMetrodeliPage';
import TransportKoridorPage from '../view/transport/TransportKoridorPage';
import NotifikasiPage from '../view/notifikasi/NotifikasiPage';
import AturAkunPage from '../view/aturAkun/AturAkunPage';
import HubungkanAkunPage from '../view/aturAkun/HubungkanAkunPage';
import HapusAkunPage from '../view/aturAkun/HapusAkunPage';
import {horizontalScale, verticalScale} from '../theme/responsive';

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
        name="AturAkunPage"
        component={AturAkunPage}
        options={{title: 'Atur Akun', headerShadowVisible: false}}
      />
      <HomeNavStack.Screen
        name="HubungkanAkunPage"
        component={HubungkanAkunPage}
        options={{title: 'Hubungkan Akun', headerShadowVisible: false}}
      />
      <HomeNavStack.Screen
        name="HapusAkunPage"
        component={HapusAkunPage}
        options={{title: 'Hapus Permanen Akun', headerShadowVisible: false}}
      />
      <HomeNavStack.Screen
        name="BeritaDanEventPage"
        component={BeritaDanEventPage}
        options={{title: 'Berita & Event', headerShadowVisible: false}}
      />
      <HomeNavStack.Screen
        name="BeritaDanEventPageMedanTourismEvent"
        component={BeritaDanEventPageMedanTourismEvent}
        options={{title: 'Lihat semua', headerShadowVisible: false}}
      />
      <HomeNavStack.Screen
        name="BeritaDanEventPageMedanTourismBerita"
        component={BeritaDanEventPageMedanTourismBerita}
        options={{title: 'Lihat semua', headerShadowVisible: false}}
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
          } else if (route.name === 'BeritaDanEventPage') {
            iconName = focused ? ICONS.newsActive : ICONS.news;
          } else if (route.name === 'ProfilePage') {
            iconName = focused ? ICONS.profileActive : ICONS.profile;
          }
          return (
            <Image
              source={iconName}
              style={{width: horizontalScale(30), height: verticalScale(30)}}
            />
          );
        },
        tabBarActiveTintColor: COLORS.blue,
        tabBarInactiveTintColor: 'gray',
        tabBarShowLabel: false,
        tabBarStyle: {
          // paddingVertical: 13,
          paddingHorizontal: 26,
          height: 69,
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
        name="BeritaDanEventPage"
        component={BeritaDanEventPage}
        options={{
          headerTitleStyle: {
            fontFamily: 'Poppins-Bold'
          },
          title: 'Berita & Event',
          headerShown: true,
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

const SearchStack = createNativeStackNavigator();

export const SearchStackScreen = () => {
  return (
    <SearchStack.Navigator>
      <SearchStack.Screen
        name="SearchHistoryPage"
        component={SearchHistoryPage}
        options={{
          title: 'Pencarian',
          headerStyle: {backgroundColor: COLORS.white},
          headerShadowVisible: false,
          headerTitleStyle: {
            color: COLORS.black4,
            fontSize: 20,
            fontWeight: '700',
          },
        }}
      />
    </SearchStack.Navigator>
  );
};

export default HomeStackScreen;
