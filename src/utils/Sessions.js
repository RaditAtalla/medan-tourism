import AsyncStorage from '@react-native-async-storage/async-storage'

export const getUserId = async () => {
  try {
    const value = await AsyncStorage.getItem('userId')
    const user_id = JSON.parse(value)
    if (user_id !== null) {
      return user_id
    }
    return null
  } catch (error) {
    return null
  }
}

export const isFirstOpen = async () => {
  try {
    const value = await AsyncStorage.getItem('isFirstOpen')
    const isFirstOpen = JSON.parse(value)
    if (isFirstOpen !== null) {
      return isFirstOpen
    }
    return null
  } catch (error) {
    return null
  }
}
