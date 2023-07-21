import {View, Text, Image, TouchableOpacity, TextInput} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {styles} from '../styles/UbahPasswordPage.style';
import {InputGroup} from '../components/InputGroup';
// import { TextInput } from 'react-native-gesture-handler';

export default function VerifikasiPage({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.iconWrapper}>
        <Image
          style={styles.icon}
          source={require('../assets/img/ubahPassword.png')}
        />
      </View>
      <View style={styles.informationWrapper}>
        <Text style={styles.information}>
          Password baru tidak boleh sama dengan password sebelumnya
        </Text>
      </View>
      <View style={styles.formWrapper}>
        <View style={styles.form}>
          <View>
            <View style={styles.labelWrapper}>
              <Text style={styles.label}>Password Baru</Text>
            </View>
            <View style={styles.inputWrapper}>
              <View>
                <TextInput
                  style={styles.input}
                  placeholder="Masukan Password"
                  secureTextEntry={true}
                  value="qwerty"
                />
              </View>
              <View>
                <Image style={styles.eye} source={require('../assets/img/eye.png')} />
              </View>
            </View>
          </View>
          <View style={styles.input2Wrapper}>
            <View style={styles.labelWrapper}>
              <Text style={styles.label}>Konfirmasi Password Baru</Text>
            </View>
            <View style={styles.inputWrapper}>
              <View>
                <TextInput
                  style={styles.input}
                  placeholder="Masukan Password"
                  secureTextEntry={true}
                  value="qwerty"
                />
              </View>
              <View>
                <Image style={styles.eye} source={require('../assets/img/eye.png')} />
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.buttonWrapper}>
        <TouchableOpacity style={styles.ubahPasswordBtn}>
          <Text
            style={styles.ubahPasswordText}
            onPress={() => navigation.navigate('UbahPasswordPage')}>
            Ubah Password
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
