import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LandingPage from '../view/landing/LandingPage';
import OnBoardingPage from '../view/landing/OnBoardingPage';
import TransitionPage from '../view/landing/TransitionPage';

const LandingStack = createNativeStackNavigator()

const LandingStackScreen = () => {
    return(
        <LandingStack.Navigator>
            <LandingStack.Screen
            name="LandingPage"
            component={LandingPage}
            options={{
                headerShown: false,
            }}
            />
            <LandingStack.Screen
            name="TransitionPage"
            component={TransitionPage}
            options={{
                headerShown: false,
            }}
            />
            <LandingStack.Screen
            name="OnBoardingPage"
            component={OnBoardingPage}
            options={{
                headerShown: false,
            }}
            />
        </LandingStack.Navigator>
    )
}

export default LandingStackScreen