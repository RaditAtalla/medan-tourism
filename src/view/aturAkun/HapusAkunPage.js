import {useState} from 'react';
import {View, Text, TouchableOpacity, SafeAreaView, Image} from 'react-native';
import {styles} from '../../styles/HapusAkun.Style';
import Modal from 'react-native-modal';
import ICONS from '../../assets/icons/icons';

export default function HapusAkun({navigation}) {
  const [check, setCheck] = useState(false);
  const [modal, setModal] = useState(false);

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.informationWrapper}>
          <Text style={styles.information}>
            Setelah dihapus,akunmu tidak bisa dikembalikan dan diakses kembali.
          </Text>
          <Text style={[styles.information, styles.information2]}>
            Kalau kamu yakin , mohon konfirmasi bahwa kamu bersedia kehilangan
            akun secara permanen
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
                  borderWidth: 0.6,
                }
              : {backgroundColor: '#efefef'},
          ]}>
          <View style={styles.confirmTextWrapper}>
            <Text style={styles.confirm}>
              Saya setuju dan bersedia menghapus akun ini secara permanen
            </Text>
          </View>
          <View>
            {check ? (
              <TouchableOpacity
                onPress={() => setCheck(prevCheck => !prevCheck)}>
                <Image source={require('../../assets/icons/check.png')} />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                onPress={() => setCheck(prevCheck => !prevCheck)}
                style={styles.confirmCheckBox}></TouchableOpacity>
            )}
          </View>
        </View>
        <View style={styles.unresponsibilityWrapper}>
          <Text>
            Medan Tourism tidak bertanggung jawab atas hilangnya informasi ,
            data, atau uang setelah akun resmi dihapus
          </Text>
        </View>
        <View style={styles.buttonWrapper}>
          <TouchableOpacity
            style={[
              styles.hapusAkunWrapper,
              styles.box,
              check
                ? {backgroundColor: 'rgba(235, 87, 87, 1)'}
                : {backgroundColor: '#828282'},
            ]}>
            <TouchableOpacity onPress={() => setModal(true)}>
              <Text style={[styles.hapusAkunText, styles.buttonText]}>
                Hapus Akun
              </Text>
            </TouchableOpacity>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('AturAkunPage')}
            style={[styles.gakJadiWrapper, styles.box]}>
            <Text style={[styles.gakJadiText, styles.buttonText]}>
              Gak jadi
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      {check ? (
        <Modal isVisible={modal}>
          <View style={styles.popUpWrapper}>
            <View style={styles.popUp}>
              <Image source={ICONS.danger} />
              <Text style={styles.dangerText}>
                Apakah anda yakin ingin menghapus akun?
              </Text>
              <View style={styles.buttonPopUpWrapper}>
                <View style={[styles.boxPopUp, styles.nantiDuluWrapper]}>
                  <TouchableOpacity onPress={() => setModal(false)}>
                    <Text
                      style={[styles.buttonPopUpText, styles.nantiDuluText]}>
                      Tidak
                    </Text>
                  </TouchableOpacity>
                </View>
                <View style={[styles.boxPopUp, styles.yaKeluarWrapper]}>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('LoginPage')}>
                    <Text style={[styles.buttonPopUpText, styles.yaKeluarText]}>
                      Ya, hapus
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </Modal>
      ) : (
        ''
      )}
    </SafeAreaView>
  );
}
