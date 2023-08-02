import { Text, View, Image, StatusBar, TextInput } from 'react-native'
import MyButton from '../../components/atoms/MyButton'
import Styles from '../../styles/DaftarNomorHpStyles'
import COLORS from '../../theme/colors'
import {useState} from 'react'
import {HandleSendOTP} from '../../api/HandleOTP'

const DaftarNomorHpPage = ({ navigation }) => {
  const [phone, setPhone] = useState('')
    return(
        <View style={Styles.container}>
            <StatusBar barStyle={'dark-content'} backgroundColor={COLORS.white} />
            <View style={Styles.top}>
                <Image source={require('../../assets/img/daftarNomorHpImg.png')} style={{ alignSelf: 'center'}} />
                <Text style={[Styles.text, { alignSelf: 'center' }]}>Masukan nomor HP untuk{'\n'}mendapatkan kode verifikasi</Text>
                <View style={Styles.form}>
                    <View style={Styles.inputWrapper}>
                        <View>
                            <Text style={Styles.inputLabel}>Nomor HP</Text>
                        </View>
                        <View style={Styles.inputGroup}>
                            <View style={Styles.regionWrapper}>
                                <View>
                                    <Image
                                        style={Styles.regionFlag}
                                        source={require('../../assets/img/IconIndonesia.png')}
                                    />
                                </View>
                                <View style={Styles.regionNationalPhoneNumWrapper}>
                                    <Text style={Styles.regionNationalPhoneNum}>+62</Text>
                                </View>
                            </View>
                            <View style={Styles.input}>
                                <TextInput
                                style={{width: 255}}
                                placeholder="Masukkan Nomor HP"
                                keyboardType='number-pad'
                                value={phone}
                                onChangeText={setPhone}
                                />
                            </View>
                        </View>
                    </View>
                </View>
            </View>
            {/* <MyButton text='Kirim' action={() => HandleSendOTP(phone, navigation)} /> */}
            <MyButton text='Kirim' action={() => navigation.navigate('AuthStackScreen', {screen: 'VerifikasiHpPage'})} />
        </View>
    )
}

export default DaftarNomorHpPage