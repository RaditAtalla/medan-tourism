import {View, Text, Image, TouchableOpacity, TextInput} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {styles} from '../../styles/VerifikasiPage.style';
import {useState} from 'react'
import {HandleVerifikasiOTP} from '../../api/HandleOTP';

export default function VerifikasiHpPage({navigation}) {
  const[otp_code, setOtpCode] = useState('')
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.iconWrapper}>
        <Image
          style={styles.icon}
          source={require('../../assets/img/verifikasiPage.png')}
        />
      </View>
      <View style={styles.informationWrapper}>
        <Text style={styles.information}>
          Masukan 4 digit kode yang terkirim ke +62812456789
        </Text>
      </View>
      <View style={styles.otpWrapper}>
        <TextInput
          style={[styles.otpBox1, styles.otpBox]}
          keyboardType="numeric"
          placeholder="****"
          maxLength={4}
          value={otp_code}
          onChangeText={setOtpCode}
        />
      </View>
      <View style={styles.verifikasiAlternativeWrapper}>
        <Text style={styles.verifikasiAlternativeText}>Kirim Ulang Kode</Text>
      </View>
      <View style={styles.buttonWrapper}>
        <TouchableOpacity
          style={styles.verifikasiBtn}
          onPress={() => HandleVerifikasiOTP(otp_code, navigation)}>
          {/* onPress={() => navigation.navigate('HomeStackScreen')}> */}
          <Text style={styles.verifikasiText}>Verifikasi </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
