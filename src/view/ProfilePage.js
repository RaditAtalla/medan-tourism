import { Text, View, StatusBar, Image, ImageBackground } from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import COLORS from '../theme/colors';
import ProfileMenuBtn from '../components/ProfileMenuBtn';
import Styles from '../styles/ProfilePageStyles';
import ICONS from '../assets/icons/icons';

const ProfilePage = ({ navigation }) => (
    <SafeAreaView style={Styles.container}>
        <StatusBar barStyle='dark-content' backgroundColor={COLORS.gray5}/>
        <View style={Styles.wrapper}>
            <View style={Styles.info}>
                <ImageBackground source={require('../assets/img/profilePic.png')} style={Styles.profilePic}>
                    <Image source={require('../assets/img/editBtn.png')} style={Styles.editBtn} />
                </ImageBackground>
                <View style={{gap: 4}}>
                    <Text style={Styles.username}>Ibnu Rusyid</Text>
                    <Text style={Styles.email}>ibnurusyid17@gmail.com</Text>
                </View>
            </View>
            <View style={Styles.menuWrapper}>
                <ProfileMenuBtn icon={ICONS.notifikasi} text='Notifikasi' action={() => navigation.navigate('NotifikasiTransaksiPage')} />
                <ProfileMenuBtn icon={ICONS.perjalanan} text='Perjalanan' />
                <ProfileMenuBtn icon={ICONS.aturAkun} text='Atur Akun' />
            </View>
        </View>
    </SafeAreaView>
)

export default ProfilePage;