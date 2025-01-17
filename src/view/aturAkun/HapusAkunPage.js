import { View, Text, TouchableOpacity, SafeAreaView, Image } from 'react-native'
import Modal from 'react-native-modal'
import { useState } from 'react'

import { moderateScale, verticalScale, horizontalScale } from '../../theme/responsive'
import CtaButton from '../../components/atoms/CtaButton'
import MyButton from '../../components/atoms/MyButton'
import { styles } from '../../styles/HapusAkun.Style'
import ICONS from '../../assets/icons/icons'
import COLORS from '../../theme/colors'

export default function HapusAkun({ navigation }) {
  const [check, setCheck] = useState(false)
  const [modal, setModal] = useState(false)

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.informationWrapper}>
          <Text style={styles.information}>Setelah dihapus,akunmu tidak bisa dikembalikan dan diakses kembali.</Text>
          <Text style={[styles.information, styles.information2]}>
            Kalau kamu yakin , mohon konfirmasi bahwa kamu bersedia kehilangan akun secara permanen
          </Text>
        </View>
        <View
          style={[
            styles.confirmWrapper,
            check == true
              ? {
                  backgroundColor: 'rgba(54, 201, 193, 0.2)',
                  borderStyle: 'solid',
                  borderColor: '#36c9c1',
                  borderWidth: 0.6
                }
              : { backgroundColor: '#efefef' }
          ]}
        >
          <View style={styles.confirmTextWrapper}>
            <Text style={styles.confirm}>Saya setuju dan bersedia menghapus akun ini secara permanen</Text>
          </View>
          <View>
            {check ? (
              <TouchableOpacity onPress={() => setCheck((prevCheck) => !prevCheck)}>
                <Image source={require('../../assets/icons/check.png')} />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                onPress={() => setCheck((prevCheck) => !prevCheck)}
                style={styles.confirmCheckBox}
              ></TouchableOpacity>
            )}
          </View>
        </View>
        <View style={styles.unresponsibilityWrapper}>
          <Text>
            Medan Tourism tidak bertanggung jawab atas hilangnya informasi , data, atau uang setelah akun resmi dihapus
          </Text>
        </View>
        <View style={styles.buttonWrapper}>
          <CtaButton
            style={check ? { backgroundColor: 'rgba(235, 87, 87, 1)' } : { backgroundColor: COLORS.secondary }}
            vPadding={verticalScale(16)}
            borderRadius={50}
            fFamily="Poppins-Bold"
            fSize={moderateScale(15)}
            fColor={COLORS.white}
            text="Hapus Akun"
            action={() => setModal(true)}
          />
          <CtaButton
            backgroundColor={COLORS.white}
            vPadding={verticalScale(16)}
            borderRadius={50}
            borderWidth={1}
            borderColor={COLORS.warning}
            fFamily="Poppins-Bold"
            fSize={moderateScale(15)}
            fColor={COLORS.warning}
            text="Gak jadi"
            action={() => navigation.navigate('AturAkunPage')}
          />
        </View>
      </View>
      {check ? (
        <Modal isVisible={modal}>
          <View style={styles.popUpWrapper}>
            <View style={styles.popUp}>
              <Image source={ICONS.danger} />
              <Text style={styles.dangerText}>Apakah anda yakin ingin menghapus akun?</Text>
              <View style={styles.buttonPopUpWrapper}>
                <CtaButton
                  backgroundColor={COLORS.white}
                  borderRadius={12}
                  vPadding={verticalScale(10)}
                  hPadding={horizontalScale(17)}
                  borderWidth={1}
                  borderColor={COLORS.warning}
                  fColor={COLORS.warning}
                  fSize={moderateScale(15)}
                  fFamily="Poppins-Bold"
                  text="Tidak"
                  action={() => setModal(false)}
                />
                <CtaButton
                  backgroundColor={COLORS.warning}
                  borderRadius={12}
                  vPadding={verticalScale(10)}
                  hPadding={horizontalScale(17)}
                  fColor={COLORS.white}
                  fSize={moderateScale(15)}
                  fFamily="Poppins-Bold"
                  text="Ya, hapus"
                  action={() => navigation.navigate('LoginPage')}
                />
              </View>
            </View>
          </View>
        </Modal>
      ) : (
        ''
      )}
    </SafeAreaView>
  )
}
