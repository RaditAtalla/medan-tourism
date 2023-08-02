import { Alert } from 'react-native'
import axios from 'axios'
import { registerApi } from '../routes/Api'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default HandleRegister = async(username, password, cpassword, navigation) => {
  try {
    const response = await axios.post(`${registerApi}`, {
      username: username,
      password: password,
      cpassword: cpassword,
    })
    const data = response.data
    if (response.status === 200 || response.status === 201) {
      console.log(data)
      AsyncStorage.setItem('userId', JSON.stringify(data.data.user_id))
      navigation.navigate('AuthStackScreen', {screen: 'DaftarNomorHpPage'})
    }
  } catch (error) {
    if (error.response) {
      Alert.alert('Perhatian', error.response.data.message)
    }
  }
}