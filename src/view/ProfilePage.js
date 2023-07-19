import { Text, View, StyleSheet, StatusBar, Image, ImageBackground } from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import { COLORS } from '../constant/theme';
import ProfileMenuBtn from '../components/ProfileMenuBtn';

const ProfilePage = () => (
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
                <ProfileMenuBtn iconSrc="../assets/icons/notifikasi.png" text='Notifikasi' />
                <ProfileMenuBtn iconSrc="../assets/icons/notifikasi.png" text='perjalanan' />
            </View>
        </View>
    </SafeAreaView>
)

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.gray5,
    },
    wrapper: {
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'flex-start',
        gap: 24,
    },
    profilePic: {
        width: 150,
        height: 150,
        objectFit: 'cover',
    },
    editBtn: {
        position: 'absolute',
        right: 10,
        bottom: 0,
    },
    username: {
        color: '#252525',
        fontSize: 32,
        fontWeight: '700',
        textAlign: 'center'
    },
    email: {
        color: COLORS.black3,
        fontSize: 16,
        textAlign: 'center',
    },
    info: {
        display: 'flex',
        alignItems: 'center',
        marginTop: 48,
        gap: 24,
    },
    menuWrapper: {
        display: 'flex',
        width: '100%',
        height: '100%',
        backgroundColor: '#fff',
        borderTopEndRadius: 50,
        borderTopStartRadius: 50,
    },
})

export default ProfilePage;