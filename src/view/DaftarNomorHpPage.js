import { Text, View, Image, StatusBar } from 'react-native'
import MyButton from '../components/atoms/MyButton'
import Styles from '../styles/DaftarNomorHpStyles'
import InputGroup from '../components/atoms/InputGroup'
import COLORS from '../theme/colors'

const DaftarNomorHpPage = ({ navigation }) => {
    return(
        <View style={Styles.container}>
            <StatusBar barStyle={'dark-content'} backgroundColor={COLORS.white} />
            <View style={Styles.top}>
                <Image source={require('../assets/img/daftarNomorHpImg.png')} style={{ alignSelf: 'center'}} />
                <Text style={[Styles.text, { alignSelf: 'center' }]}>Masukan nomor HP untuk{'\n'}mendapatkan kode verifikasi</Text>
                <InputGroup label='Nomor HP' placeholder='62812456789'/>
            </View>
            <MyButton text='Kirim' action={() => navigation.navigate('VerifikasiHpPage')} />
        </View>
    )
}

export default DaftarNomorHpPage