import AsyncStorage from "@react-native-async-storage/async-storage";

export const getUserId = async () => {
  try {
    const value = await AsyncStorage.getItem('userId')
    const userId = JSON.parse(value)
    if(userId !== null){
      return userId.userId 
    }
  } catch (error) {
    return null
  }
}