import React, { Fragment, useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import LandingStackScreen from './LandingStack'
import AuthStackScreen from './AuthStack'

import HomeStackScreen, { SearchStackScreen, HomeNavStackScreen } from './HomeStack'
import { useSelector } from 'react-redux'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Stack = createNativeStackNavigator()

const Routes = () => {
  const token = useSelector((state) => state.auth.token)
  const [isFirstOpen, setIsFirstOpen] = useState(true)

  useEffect(() => {
    const checkFirstOpen = async () => {
      const value = await AsyncStorage.getItem('isFirstOpen')
      const isFirstOpen = JSON.parse(value)
      if (isFirstOpen !== null) {
        setIsFirstOpen(isFirstOpen)
      }
    }
    checkFirstOpen()
  }, [])

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {!token && (
          <Fragment>
            {isFirstOpen && (
              <Stack.Screen name="LandingStackScreen" component={LandingStackScreen} options={{ headerShown: false }} />
            )}
            <Stack.Screen name="AuthStackScreen" component={AuthStackScreen} options={{ headerShown: false }} />
          </Fragment>
        )}
        {token && (
          <Fragment>
            <Stack.Screen name="HomeStackScreen" component={HomeStackScreen} options={{ headerShown: false }} />
            <Stack.Screen name="SearchStackScreen" component={SearchStackScreen} options={{ headerShown: false }} />
            <Stack.Screen name="HomeNavStackScreen" component={HomeNavStackScreen} options={{ headerShown: false }} />
          </Fragment>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Routes
