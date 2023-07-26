import {View, Text, Image, TouchableOpacity, TextInput} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {styles} from '../../styles/UbahPasswordPage.style';
import { useState } from 'react';
import Modal from 'react-native-modal';

export default function VerifikasiPage({navigation}) {
  const [isSecureEntry, setIsSecureEntry] = useState();
  const [isSecureEntry2, setIsSecureEntry2] = useState();

  const [modal, setModal] = useState(false)

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.iconWrapper}>
        <Image
          style={styles.icon}
          source={require('../../assets/img/ubahPassword.png')}
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
                  secureTextEntry={isSecureEntry}
                  value="qwerty"
                />
              </View>
              <View>
                <TouchableOpacity
                  onPress={() => {
                    setIsSecureEntry(prev => !prev);
                  }}>
                  <Image
                    style={styles.eye}
                    source={
                      isSecureEntry
                        ? require('../../assets/img/eye.png')
                        : require('../../assets/img/eyeSlash.png')
                    }
                  />
                </TouchableOpacity>
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
                  secureTextEntry={isSecureEntry2}
                  value="qwerty"
                />
              </View>
              <View>
                <TouchableOpacity
                  onPress={() => {
                    setIsSecureEntry2(prev => !prev);
                  }}>
                  <Image
                    style={styles.eye}
                    source={
                      isSecureEntry2
                        ? require('../../assets/img/eye.png')
                        : require('../../assets/img/eyeSlash.png')
                    }
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.buttonWrapper}>
        <TouchableOpacity style={styles.button}>
          <Text
            style={styles.buttonText}
            onPress={() => setModal(true)}>
            Ubah Password
          </Text>
        </TouchableOpacity>
      </View>
      <Modal isVisible={modal} style={{marginHorizontal: -20, marginVertical: 0}}>
        <View style={styles.popUpWrapper}>
          <View style={styles.popUp}>
            <View>
              <Image
                style={styles.ubahPasswordSuccess}
                source={require('../../assets/img/ubahPasswordSuccess.png')}
              />
            </View>
            <View style={styles.heroWrapper}>
              <View style={styles.successInformationWrapper}>
                <Text style={styles.successInformation}>
                  Password Berhasil Diubah!
                </Text>
              </View>
              <View style={styles.nextStepWrapper}>
                <Text style={styles.nextStep}>
                  Silahkan login kembali untuk melanjutkan
                </Text>
              </View>
            </View>
            <View style={styles.buttonWrapper2}>
              <TouchableOpacity style={styles.button}>
                <Text
                  style={styles.buttonText}
                  onPress={() => navigation.navigate('LoginPage')}>
                  Login
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}
