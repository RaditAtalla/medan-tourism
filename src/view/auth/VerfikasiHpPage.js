import {View, Text, Image, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {styles} from '../../styles/VerifikasiPage.style';

export default function VerifikasiHpPage({navigation}) {
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
            <TouchableOpacity style={styles.verifikasiBtn} onPress={() => navigation.navigate('HomeStackScreen')}>
            <Text style={styles.verifikasiText}>Verifikasi </Text>
            </TouchableOpacity>
        </View>
        </SafeAreaView>
    );
}
