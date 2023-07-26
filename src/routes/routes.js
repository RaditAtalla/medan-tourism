import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import LandingStackScreen from './LandingStack';
import AuthStackScreen from './AuthStack';
import HomeStackScreen, {HomeNavStackScreen} from './HomeStack';
import TransportStackScreen from './HomeStack';

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
        <Stack.Screen
          name="TransportStackScreen"
          component={TransportStackScreen}
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
};

export default Routes;
