import { Text, SafeAreaView, StatusBar } from 'react-native'
import Styles from '../styles/NotifikasiTransaksiStyles'
import COLORS from '../theme/colors'

const NotifikasiTransaksi = () => {
    return(
        <SafeAreaView style={Styles.container}>
            <StatusBar barStyle={'dark-content'} backgroundColor={COLORS.white} />
            <Text>halo tes tes</Text>
        </SafeAreaView>
    )
}

export default NotifikasiTransaksi