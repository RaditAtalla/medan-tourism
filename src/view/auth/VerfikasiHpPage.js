import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useState } from 'react'

import { verticalScale, moderateScale } from '../../theme/responsive'
import { styles } from '../../styles/VerifikasiPage.style'
import { HandleVerifikasiOTP } from '../../api/HandleOTP'
import CtaButton from '../../components/atoms/CtaButton'
import COLORS from '../../theme/colors'
import { checkFormValid } from '../../services/auth.service'
import { useVerifyOTPMutation } from '../../api/auth.api'

export default function VerifikasiHpPage({ navigation, route }) {
  console.log({ params: route.params })
  const { userId } = route.params
  const [otp_code, setOtpCode] = useState('')
  const [verifyOTP, { isLoading }] = useVerifyOTPMutation()

  const handleSubmit = async () => {
    checkFormValid(!otp_code, 'Mohon isi kode verifikasi anda')
    checkFormValid(otp_code.length < 4, 'Kode verifikasi minimal 4 digit')

    try {
      const { data } = await verifyOTP({ otp_code, user_id: userId })
      console.log(data)
      // navigation.navigate('HomeStackScreen')
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
        <Text style={styles.information}>Masukan 4 digit kode yang terkirim ke +62812456789</Text>
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
          text="Verifikasi"
          action={() => navigation.navigate('HomeStackScreen')}
        />
      </View>
    </SafeAreaView>
  )
}
