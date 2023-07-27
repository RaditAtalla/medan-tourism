import {useState} from 'react';
import {View, SafeAreaView, Image, Text, TouchableOpacity} from 'react-native';
import {styles} from '../../styles/AturAkunPage.Style';
import AturAkunCard from '../../components/atoms/aturAkunCard';
import ICONS from '../../assets/icons/icons';
import Modal from 'react-native-modal';

export default function AturAkunPage({navigation}) {
  const [modal, setModal] = useState(false);

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <AturAkunCard
          Icon={ICONS.connect}
          CardTitle={'Hubungkan Akun'}
          CardDescription={'Hubungkan akun mu supaya lebih aman'}
        />
        <View style={styles.line}></View>
        <AturAkunCard
          action={() => setModal(true)}
          Icon={ICONS.logOut}
          CardTitle={'Keluar'}
          CardDescription={
            'Kamu akan keluar dari akun dan kembali ke halaman login'
          }
        />
        <View style={styles.line}></View>
        <AturAkunCard
          Icon={ICONS.trashCan}
          CardTitle={'Hapus Akun'}
          CardDescription={
            'Seluruh informasi akun akan dihapus secara permanen'
          }
        />
      </View>
      <Modal isVisible={modal}>
        <View style={styles.popUpWrapper}>
          <View style={styles.popUp}>
            <Image source={ICONS.danger} />
            <Text style={styles.dangerText}>
              Apakah anda yakin ingin keluar?
            </Text>
            <View style={styles.buttonWrapper}>
              <View style={[styles.box, styles.nantiDuluWrapper]}>
                <TouchableOpacity
                  onPress={() => setModal(false)}>
                  <Text style={[styles.buttonText, styles.nantiDuluText]}>
                    Nanti dulu
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={[styles.box, styles.yaKeluarWrapper]}>
                <TouchableOpacity
                  onPress={() => navigation.navigate('LoginPage')}>
                  <Text style={[styles.buttonText, styles.yaKeluarText]}>
                    Ya, Keluar
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}
