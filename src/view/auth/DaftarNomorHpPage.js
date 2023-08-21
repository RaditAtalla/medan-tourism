import { Text, View, Image, StatusBar, TextInput } from 'react-native'
import { useState } from 'react'

import { verticalScale, moderateScale } from '../../theme/responsive'
import CtaButton from '../../components/atoms/CtaButton'
import Styles from '../../styles/DaftarNomorHpStyles'
import { HandleSendOTP } from '../../api/HandleOTP'
import COLORS from '../../theme/colors'
import { useSendOTPMutation } from '../../api/auth.api'
import { checkFormValid } from '../../services/auth.service'

const DaftarNomorHpPage = ({ navigation, route }) => {
  const { userId } = route.params
  const [phone, setPhone] = useState('')
  const [sendOTP, { isLoading }] = useSendOTPMutation()

  const handleSubmit = async () => {
    checkFormValid(!phone, 'Mohon isi nomor telepon anda')
    checkFormValid(phone.length < 10, 'Nomor telepon valid minimal 10 digit')

    try {
      const { data } = await sendOTP({ phone, user_id: userId })
      navigation.navigate('AuthStackScreen', {
        screen: 'VerifikasiHpPage',
        params: { userId, data, phone }
      })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <View style={Styles.container}>
      <StatusBar barStyle={'dark-content'} backgroundColor={COLORS.white} />
      <View style={Styles.top}>
        <Image source={require('../../assets/img/daftarNomorHpImg.png')} style={{ alignSelf: 'center' }} />
        <Text style={[Styles.text, { alignSelf: 'center' }]}>
          Masukan nomor HP untuk{'\n'}mendapatkan kode verifikasi
        </Text>
        <View style={Styles.form}>
          <View style={Styles.inputWrapper}>
            <View>
              <Text style={Styles.inputLabel}>Nomor HP</Text>
            </View>
            <View style={Styles.inputGroup}>
              <View style={Styles.regionWrapper}>
                <View>
                  <Image style={Styles.regionFlag} source={require('../../assets/img/IconIndonesia.png')} />
                </View>
                <View style={Styles.regionNationalPhoneNumWrapper}>
                  <Text style={Styles.regionNationalPhoneNum}>+62</Text>
                </View>
              </View>
              <View style={Styles.input}>
                <TextInput
                  style={{ width: 255 }}
                  placeholder="Masukkan Nomor HP"
                  keyboardType="number-pad"
                  value={phone}
                  onChangeText={setPhone}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
      <CtaButton
        backgroundColor={COLORS.blue}
        borderRadius={20}
        vPadding={verticalScale(14)}
        fFamily="Poppins-SemiBold"
        fSize={moderateScale(18)}
        fColor={COLORS.white}
        text="Kirim"
        isLoading={isLoading}
        action={handleSubmit}
      />
    </View>
  )
}

export default DaftarNomorHpPage
