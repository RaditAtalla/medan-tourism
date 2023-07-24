import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomePage from '../view/home/HomePage';
import SearchPage from '../view/search/SearchPage';
import PerjalananPage from '../view/perjalanan/PerjalananPage';
import PromoPage from '../view/promo/PromoPage';
import ProfilePage from '../view/profile/ProfilePage';

const HomeTabStack = createBottomTabNavigator()

const HomeStackScreen = () => {
    return(
        <HomeTabStack.Navigator>
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
    )
}

export default HomeStackScreen