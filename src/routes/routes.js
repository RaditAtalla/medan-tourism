import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {moderateScale} from '../theme/responsive';
import COLORS from '../theme/colors';

import LandingStackScreen from './LandingStack';
import AuthStackScreen from './AuthStack';
import HomeStackScreen from './HomeStack';

const Stack = createNativeStackNavigator();

const Routes = () => {
	return (
		<NavigationContainer>
		<Stack.Navigator>
			<Stack.Screen
			name="LandingStackScreen"
			component={LandingStackScreen}
			options={{headerShown: false}}
			/>
			<Stack.Screen
			name="AuthStackScreen"
			component={AuthStackScreen}
			options={{headerShown: false}}
			/>
			<Stack.Screen
			name="HomeStackScreen"
			component={HomeStackScreen}
			options={{headerShown: false}}
			/>
		</Stack.Navigator>
		</NavigationContainer>
	);
};

export default Routes;
