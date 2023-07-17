import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginPage } from './src/view/LoginPage';
import { DaftarPage } from './src/view/DaftarPage';
import { OnBoardingPage } from './src/view/OnBoardingPage';
import { OBPTest } from './src/view/OBPTest';
import { COLORS } from './src/constant/theme';
import { moderateScale } from './src/constant/responsive';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="OBPTest" component={OBPTest} 
        options={{
          headerShown: false,
          headerShadowVisible: false,
        }}
        />
        <Stack.Screen name="onBoardingPage" component={OnBoardingPage} 
        options={{
          headerShown: false,
          headerShadowVisible: false,
        }}
        />
        <Stack.Screen name="LoginPage" component={LoginPage}
        options={{
          title: "Login",
          headerStyle: {
            backgroundColor: COLORS.blue,
          },
          headerTitleAlign: 'center',
          headerTitleStyle: {
            color: 'white',
            fontWeight: '700',
            fontSize: moderateScale(24),
          },
          headerShadowVisible: false,
          headerTintColor: 'white',
        }}
        />
        <Stack.Screen name="DaftarPage" component={DaftarPage}
        options={{
          title: "Daftar",
          headerStyle: {
            backgroundColor: COLORS.blue,
          },
          headerTitleAlign: 'center',
          headerTitleStyle: {
            color: 'white',
            fontWeight: '700',
            fontSize: moderateScale(24),
          },
          headerShadowVisible: false,
          headerTintColor: 'white',
        }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;