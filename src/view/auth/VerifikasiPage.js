import { View, Text, Image, TextInput } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useState } from 'react'

import { verticalScale, moderateScale } from '../../theme/responsive'
import { styles } from '../../styles/VerifikasiPage.style'
import CtaButton from '../../components/atoms/CtaButton'
import COLORS from '../../theme/colors'

export default function VerifikasiPage({ navigation }) {
  const [otp_code, setOtpCode] = useState('')
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.iconWrapper}>
        <Image style={styles.icon} source={require('../../assets/img/verifikasiPage.png')} />
      </View>
      <View style={styles.informationWrapper}>
        <Text style={styles.information}>Masukan 4 digit kode yang terkirim ke ibnurusyid17@gmail.com</Text>
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
          action={() => navigation.navigate('UbahPasswordPage')}
        />
      </View>
    </SafeAreaView>
  )
}
