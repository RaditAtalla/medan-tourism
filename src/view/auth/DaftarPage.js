import { Text, View, StatusBar, ImageBackground, Platform, ToastAndroid, Alert } from 'react-native'
import { useState } from 'react'

import Styles from '../../styles/DaftarPageStyles'
import IMAGES from '../../assets/img/images'
import COLORS from '../../theme/colors'

import { verticalScale, moderateScale } from '../../theme/responsive'
import AltLogin from '../../components/molecules/AltLogin'
import InputGroup from '../../components/atoms/InputGroup'
import CtaButton from '../../components/atoms/CtaButton'
import { useRegisterMutation } from '../../api/auth.api'
import { checkFormValid } from '../../services/auth.service'

const DaftarPage = ({ navigation }) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [cpassword, setcpassword] = useState('')

  const [register, { isLoading }] = useRegisterMutation()

  const handleSubmit = async () => {
    checkFormValid(!username || !password || !cpassword, 'Mohon isi semua form')
    checkFormValid(password !== cpassword, 'Password tidak sama')

    try {
      const { data } = await register({ username, password, cpassword })
      navigation.navigate('AuthStackScreen', {
        screen: 'DaftarNomorHpPage',
        params: { userId: data.data.user_id }
      })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <View style={Styles.container}>
      <StatusBar barStyle="light-content" translucent backgroundColor="transparent" />
      <ImageBackground style={Styles.background} source={IMAGES.background} />
      <View style={Styles.actionContainer}>
        <View>
          <View style={Styles.inputContainer}>
            <View style={Styles.inputField}>
              <InputGroup
                label="Username"
                placeholder="example123@gmail.com"
                placeholderTextColor={COLORS.black4}
                setValue={setUsername}
                value={username}
              />
              <InputGroup
                label="Password"
                placeholder="password123"
                placeholderTextColor={COLORS.black4}
                type="password"
                setValue={setPassword}
                value={password}
              />
              <InputGroup
                label="Konfirmasi Password"
                placeholder="password123"
                placeholderTextColor={COLORS.black4}
                type="password"
                setValue={setcpassword}
                value={cpassword}
              />
            </View>
          </View>
          <View style={Styles.altLogin}>
            <CtaButton
              backgroundColor={COLORS.blue}
              borderRadius={20}
              vPadding={verticalScale(14)}
              fFamily="Poppins-SemiBold"
              fSize={moderateScale(18)}
              fColor={COLORS.white}
              text="Daftar"
              action={handleSubmit}
              isLoading={isLoading}
            />
            <Text style={Styles.atau}>Atau</Text>
            <AltLogin />
          </View>
        </View>
        <View>
          <Text style={{ textAlign: 'center' }}>
            Sudah punya akun?{' '}
            <Text style={{ color: COLORS.blue }} onPress={() => navigation.navigate('LoginPage')}>
              Login
            </Text>
          </Text>
        </View>
      </View>
    </View>
  )
}

export default DaftarPage
