import { View, Text, Image, StatusBar, TextInput } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import styles from '../../styles/LupaPasswordPageByPhoneNumber.style'
import { verticalScale, moderateScale } from '../../theme/responsive'
import CtaButton from '../../components/atoms/CtaButton'
import COLORS from '../../theme/colors'

export default function LupaPasswordPage({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'dark-content'} backgroundColor={COLORS.white} />
      <View style={styles.iconWrapper}>
        <Image style={styles.icon} source={require('../../assets/img/lupaPassword.png')} />
      </View>
      <View style={styles.informationWrapper}>
        <Text style={styles.information}>Masukan nomor HP untuk mendapatkan kode verifikasi</Text>
      </View>
      <View style={styles.formWrapper}>
        <View style={styles.form}>
          <View style={styles.inputWrapper}>
            <View>
              <Text style={styles.inputLabel}>Nomor HP</Text>
            </View>
            <View style={styles.inputGroup}>
              <View style={styles.regionWrapper}>
                <View>
                  <Image style={styles.regionFlag} source={require('../../assets/img/IconIndonesia.png')} />
                </View>
                <View style={styles.regionNationalPhoneNumWrapper}>
                  <Text style={styles.regionNationalPhoneNum}>+62</Text>
                </View>
              </View>
              <View style={styles.input}>
                <TextInput style={{ width: 255 }} placeholder="Masukkan Nomor HP" value="812456789" />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.lupaPasswordAlternativeWrapper}>
          <CtaButton
            backgroundColor={COLORS.white}
            fFamily="Poppins-Medium"
            fColor={COLORS.blue}
            text="Coba cara lain"
            action={() => navigation.navigate('LupaPasswordPage')}
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
            text="Kirim"
            action={() => navigation.navigate('VerifikasiPage')}
          />
        </View>
      </View>
    </SafeAreaView>
  )
}
