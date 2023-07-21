import {View, Text, Image, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {styles} from '../styles/VerifikasiPage.style';

export default function VerifikasiPage({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.iconWrapper}>
        <Image
          style={styles.icon}
          source={require('../assets/img/verifikasiPage.png')}
        />
      </View>
      <View style={styles.informationWrapper}>
        <Text style={styles.information}>
          Masukan 4 digit kode yang terkirim ke ibnurusyid17@gmail.com
        </Text>
      </View>
      <View style={styles.otpWrapper}>
        <View style={[styles.otpBox1, styles.otpBox]}>
          <Text style={styles.otp}>1</Text>
        </View>
        <View style={[styles.otpBox2, styles.otpBox]}>
          <Text style={styles.otp}>2</Text>
        </View>
        <View style={[styles.otpBox3, styles.otpBox]}>
          <Text style={styles.otp}>3</Text>
        </View>
        <View style={[styles.otpBox4, styles.otpBox]}>
          <Text style={styles.otp}>4</Text>
        </View>
      </View>
      <View style={styles.verifikasiAlternativeWrapper}>
        <Text style={styles.verifikasiAlternativeText}>Kirim Ulang Kode</Text>
      </View>
      <View style={styles.buttonWrapper}>
        <TouchableOpacity style={styles.verifikasiBtn}>
          <Text
            style={styles.verifikasiText}
            onPress={() => navigation.navigate('UbahPasswordPage')}>
            Kirim
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
