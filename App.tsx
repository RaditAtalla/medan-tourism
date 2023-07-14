import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginPage } from './view/LoginPage';
import { DaftarPage } from './view/DaftarPage';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="LoginPage" component={LoginPage}
        options={{
          title: "Login",
          headerStyle: {
            backgroundColor: '#36C9C1',
          },
          headerTitleAlign: 'center',
          headerTitleStyle: {
            color: 'white',
            fontWeight: '700',
            fontSize: 24,
          },
          headerShadowVisible: false,
        }}
        />
        <Stack.Screen name="DaftarPage" component={DaftarPage}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;