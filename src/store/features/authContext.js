import AsyncStorage from '@react-native-async-storage/async-storage'
import { createContext, useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { setLogout, setToken } from './authSlice'

export const AuthContext = createContext()

export const AuthContextProvider = ({ children }) => {
  const dispatch = useDispatch()

  useEffect(() => {
    const bootstrapAsync = async () => {
      let userToken

      try {
        const value = await AsyncStorage.getItem('userId')
        userToken = JSON.parse(value)
        console.log({ userToken })
      } catch (e) {
        // Restoring token failed
      }

      dispatch(setToken(userToken))
    }

    bootstrapAsync()
  }, [])

  const storeToken = async (token) => {
    await AsyncStorage.setItem('token', JSON.stringify(token))
    dispatch(setToken(token))
  }

  const removeToken = async () => {
    await AsyncStorage.removeItem('token')
    dispatch(setLogout())
  }

  return <AuthContext.Provider value={{ storeToken, removeToken }}>{children}</AuthContext.Provider>
}
