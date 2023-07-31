import { Alert } from 'react-native'
import axios from 'axios'
import { loginApi } from '../routes/Api'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default HandleLogin = async(email, password, navigation) => {
  try {
    const response = await axios.post(`${loginApi}`, {
      email: email,
      password: password,
    })
    const data = response.data
    if (response.status === 200) {
      AsyncStorage.setItem('token', data.token)
      AsyncStorage.setItem('user', JSON.stringify(data.data))
      navigation.replace('HomeStackScreen', {screen: 'HomePage'})
    }
  } catch (error) {
    if (error.response) {
      Alert.alert('Perhatian', error.response.data.message)
    }
  }
}