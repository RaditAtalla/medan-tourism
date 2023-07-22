import {View, Text, Image, TouchableOpacity, StatusBar} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import styles from '../styles/LupaPasswordPage.style';
import InputGroup from '../components/atoms/InputGroup';
import COLORS from '../theme/colors';

export default function LupaPasswordPage({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
    <StatusBar barStyle={'dark-content'} backgroundColor={COLORS.white} />
      <View style={styles.iconWrapper}>
        <Image
          style={styles.icon}
          source={require('../assets/img/lupaPassword.png')}
        />
      </View>
      <View style={styles.informationWrapper}>
        <Text style={styles.information}>
          Masukan email untuk mendapatkan kode verifikasi
        </Text>
      </View>
      <View style={styles.formWrapper}>
        <View style={styles.form}>
          <InputGroup
            label="email"
            placeholder="Masukkan email"
            placeholderTextColor="#252525"
            type={'text'}
            value={'ibnurusid17@gmail.com'}
          />
        </View>
        <View style={styles.lupaPasswordAlternativeWrapper}>
          <Text style={styles.lupaPasswordAlternativeText}>Coba cara lain</Text>
        </View>
        <View style={styles.buttonWrapper}>
          <TouchableOpacity style={styles.loginBtn} onPress={() => navigation.navigate('VerifikasiPage')}>
            <Text style={styles.loginText}>Kirim</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
