import { Alert } from 'react-native'
import axios from 'axios'
import { logoutApi } from '../routes/Api'

export default HandleLogin = async(navigation) => {
  try {
    const response = await axios.post(`${logoutApi}`)
    if (response.status === 200) {
      navigation.replace('AuthStackScreen', {screen: 'LoginPage'})
    }
  } catch (error) {
    if (error.response) {
      Alert.alert('Perhatian', error.response.data.message)
    }
  }
}