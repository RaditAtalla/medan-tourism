import { Text, SafeAreaView, StatusBar } from 'react-native'
import Styles from '../../styles/NotifikasiTransaksiStyles'

const NotifikasiTransaksi = () => {
    return(
        <SafeAreaView style={Styles.container}>
            <StatusBar barStyle={'dark-content'} translucent backgroundColor='transparent' />
            
        </SafeAreaView>
    )
}

export default NotifikasiTransaksi