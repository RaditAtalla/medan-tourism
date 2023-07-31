import {useState} from 'react';
import {View, SafeAreaView, Image, Text, TouchableOpacity} from 'react-native';
import {styles} from '../../styles/AturAkunPage.Style';
import AturAkunCard from '../../components/atoms/aturAkunCard';
import ICONS from '../../assets/icons/icons';
import Modal from 'react-native-modal';
import HandleLogout from '../../api/HandleLogout';

export default function AturAkunPage({navigation}) {
  const [modal, setModal] = useState(false);

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <AturAkunCard
          action={() => navigation.navigate('HubungkanAkunPage')}
          iconWidth={31}
          iconHeight={15}
          LeftIcon={ICONS.connect}
          RightIcon={ICONS.caret}
          CardTitle={'Hubungkan Akun'}
          CardDescription={'Hubungkan akun mu supaya lebih aman'}
        />
        <View style={styles.line}></View>
        <AturAkunCard
          action={() => setModal(true)}
          iconWidth={25}
          iconHeight={25}
          LeftIcon={ICONS.logOut}
          RightIcon={ICONS.caret}
          CardTitle={'Keluar'}
          CardDescription={
            'Kamu akan keluar dari akun dan kembali ke halaman login'
          }
        />
        <View style={styles.line}></View>
        <AturAkunCard
          action={() => navigation.navigate('HapusAkunPage')}
          iconWidth={25}
          iconHeight={27}
          LeftIcon={ICONS.trashCan}
          RightIcon={ICONS.caret}
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
                <TouchableOpacity onPress={() => setModal(false)}>
                  <Text style={[styles.buttonText, styles.nantiDuluText]}>
                    Nanti dulu
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={[styles.box, styles.yaKeluarWrapper]}>
                <TouchableOpacity
                  onPress={() => HandleLogout(navigation)}>
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
