import React from 'react';
import {Text, View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginPage } from './view/LoginPage';
import { DaftarPage } from './view/DaftarPage';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="LoginPage" component={LoginPage}/>
        <Stack.Screen name="DaftarPage" component={DaftarPage}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;