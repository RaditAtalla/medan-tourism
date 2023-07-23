import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StatusBar,
  TextInput,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import styles from '../../styles/LupaPasswordPageByPhoneNumber.style';
import COLORS from '../../theme/colors';

export default function LupaPasswordPage({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'dark-content'} backgroundColor={COLORS.white} />
      <View style={styles.iconWrapper}>
        <Image
          style={styles.icon}
          source={require('../../assets/img/lupaPassword.png')}
        />
      </View>
      <View style={styles.informationWrapper}>
        <Text style={styles.information}>
          Masukan nomor HP untuk mendapatkan kode verifikasi
        </Text>
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
                  <Image
                    style={styles.regionFlag}
                    source={require('../../assets/img/IconIndonesia.png')}
                  />
                </View>
                <View style={styles.regionNationalPhoneNumWrapper}>
                  <Text style={styles.regionNationalPhoneNum}>+62</Text>
                </View>
              </View>
              <View style={styles.input}>
                <TextInput style={{width: 255}}
                  placeholder="Masukkan Nomor HP"
                  value="812345678"
                />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.lupaPasswordAlternativeWrapper}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('LupaPasswordPageByPhoneNumber')
            }>
            <Text style={styles.lupaPasswordAlternativeText}>
              Coba cara lain
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonWrapper}>
          <TouchableOpacity
            style={styles.loginBtn}
            onPress={() => navigation.navigate('VerifikasiPage')}>
            <Text style={styles.loginText}>Kirim</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
