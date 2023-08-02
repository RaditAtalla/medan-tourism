import AsyncStorage from '@react-native-async-storage/async-storage';

export const getUserId = async () => {
  try {
    const value = await AsyncStorage.getItem('userId');
    const user_id = JSON.parse(value);
    if (user_id !== null) {
      console.log(user_id);
      return user_id;
    }
    return null;
  } catch (error) {
    return null;
  }
};