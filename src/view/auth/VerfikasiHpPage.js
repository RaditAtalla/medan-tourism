<<<<<<< HEAD
import { View, Text, Image, TextInput, Alert } from 'react-native'
=======
import { View, Text, Image, TextInput } from 'react-native'
>>>>>>> origin/ferdinan
import { SafeAreaView } from 'react-native-safe-area-context'
import { useContext, useEffect, useState } from 'react'

import { verticalScale, moderateScale } from '../../theme/responsive'
import { styles } from '../../styles/VerifikasiPage.style'
import CtaButton from '../../components/atoms/CtaButton'
import COLORS from '../../theme/colors'
import { checkFormValid } from '../../services/auth.service'
<<<<<<< HEAD
import { useSendOTPMutation, useVerifyOTPMutation } from '../../api/auth.api'
=======
import { useVerifyOTPMutation } from '../../api/auth.api'
>>>>>>> origin/ferdinan
import { AuthContext } from '../../store/features/authContext'

export default function VerifikasiHpPage({ navigation, route }) {
  const { userId, phone } = route.params
  const [otp_code, setOtpCode] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const { storeToken } = useContext(AuthContext)
  const [verifyOTP, { isError, error }] = useVerifyOTPMutation()
  const [sendOTP, { isLoading: sendOTPLoading }] = useSendOTPMutation()

  useEffect(() => {
    if (isError) {
      Alert.alert('Verifikasi Failed', error.data.message)
      setIsLoading(false)
    }
  }, [isError])

  const handleSendOtp = async () => {
    checkFormValid(!phone, 'Mohon isi nomor telepon anda')
    checkFormValid(phone.length < 10, 'Nomor telepon valid minimal 10 digit')
    await sendOTP({ phone, userId })
  }

  const handleSubmit = async () => {
    checkFormValid(!otp_code, 'Mohon isi kode verifikasi anda')
    checkFormValid(otp_code.length < 4, 'Kode verifikasi minimal 4 digit')
    setIsLoading(true)
<<<<<<< HEAD
    11
    try {
      const { data } = await verifyOTP({ otp_code, user_id: userId })
      await storeToken(data.token)
      setIsLoading(true)
=======

    try {
      const { data } = await verifyOTP({ otp_code, user_id: userId })
      await storeToken(data.token)
      setIsLoading(false)
>>>>>>> origin/ferdinan
      navigation.replace('HomeStackScreen', { screen: 'HomePage' })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.iconWrapper}>
        <Image style={styles.icon} source={require('../../assets/img/verifikasiPage.png')} />
      </View>
      <View style={styles.informationWrapper}>
        <Text style={styles.information}>Masukan 4 digit kode yang terkirim ke {phone}</Text>
      </View>
      <View style={styles.otpWrapper}>
        <TextInput
          style={[styles.otpBox1, styles.otpBox]}
          keyboardType="numeric"
          placeholder="****"
          maxLength={4}
          value={otp_code}
          onChangeText={setOtpCode}
        />
      </View>
      <View style={styles.verifikasiAlternativeWrapper}>
        <CtaButton
          backgroundColor={COLORS.white}
          fFamily="Poppins-Medium"
          fColor={COLORS.blue}
          text="Kirim ulang kode"
          action={handleSendOtp}
          isLoading={sendOTPLoading}
        />
      </View>
      <View style={styles.buttonWrapper}>
        <CtaButton
          backgroundColor={COLORS.blue}
          borderRadius={20}
          vPadding={verticalScale(14)}
          fFamily="Poppins-SemiBold"
          fSize={moderateScale(18)}
          fColor={COLORS.white}
          isLoading={isLoading}
          text="Verifikasi"
          action={handleSubmit}
        />
      </View>
    </SafeAreaView>
  )
}
