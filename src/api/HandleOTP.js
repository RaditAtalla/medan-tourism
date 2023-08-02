import { Alert } from 'react-native'
import axios from 'axios'
import { sendOTPApi, verifikasiOTPApi } from '../routes/Api'
import { getPhone, getUserId } from '../utils/Sessions'
import AsyncStorage from '@react-native-async-storage/async-storage'

export const HandleSendOTP = async (phone, navigation) => {
  try {
    const response = await axios.post(`${sendOTPApi}`, {
      phone: phone,
      user_id: getUserId()
    });
    const data = response.data;
    if (response.status === 200) {
      AsyncStorage.setItem('userId', JSON.stringify(data.data));
      navigation.replace('AuthStackScreen', { screen: 'VerifikasiHpPage' });
    }
  } catch (error) {
    if (error.response) {
      Alert.alert('Perhatian', error.response.data.message);
    }
  }
};


export const HandleVerifikasiOTP = async(otp_code, navigation) => {
  try {
    const response = await axios.post(`${verifikasiOTPApi}`, {
      otp_code: otp_code,
      user_id: getUserId()
    })
    const data = response.data
    if (response.status === 200) {
      AsyncStorage.setItem('token', data.token)
      AsyncStorage.setItem('user', JSON.stringify(data.data))
      navigation.replace('HomeStackScreen')
    }
  } catch (error) {
      if (error.response) {
        Alert.alert('Perhatian', error.response.data.message)
      }
  }
}