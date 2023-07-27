import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import LandingStackScreen from './LandingStack';
import AuthStackScreen from './AuthStack';

import HomeStackScreen, { SearchStackScreen, HomeNavStackScreen } from './HomeStack';

const Stack = createNativeStackNavigator();

const Routes = () => {
<<<<<<< HEAD
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
        <Stack.Screen
          name="HomeNavStackScreen"
          component={HomeNavStackScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
=======
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
			<Stack.Screen
			name="SearchStackScreen"
			component={SearchStackScreen}
			options={{headerShown: false}}
			/>
			<Stack.Screen
			name="HomeNavStackScreen"
			component={HomeNavStackScreen}
			options={{headerShown: false}}
			/>
		</Stack.Navigator>
		</NavigationContainer>
	);
>>>>>>> 628f5dce8e75989d6683e90435545f02bc56ac71
};

export default Routes;
