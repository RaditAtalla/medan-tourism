import {Text, View, StyleSheet, TouchableOpacity, Image, StatusBar,} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import { horizontalScale, verticalScale, moderateScale } from '../constant/responsive';
import { InputGroup } from '../components/InputGroup';
import { COLORS } from '../constant/theme';

const LoginPage = ({ navigation }) => {
    return (
        <SafeAreaView style={Styles.container}>
            <StatusBar translucent backgroundColor={'transparent'} />
            <View style={Styles.wrapper}>
                <View style={Styles.formContainer}>
                    <View style={Styles.inputForm}>
                        <InputGroup label='email' placeholder='example123@gmail.com' placeholderTextColor='#252525' />
                        <InputGroup label='password' type='password' placeholder='password123' placeholderTextColor='#252525'/>
                    </View>
                    <TouchableOpacity style={{alignSelf: 'flex-end', fontSize: moderateScale(12)}}>
                        <Text>Lupa Password</Text>
                    </TouchableOpacity>
                </View> 
                <View style={Styles.bottomContent}>
                    <View style={Styles.logInContainer}>
                        <TouchableOpacity style={Styles.logInBtn}>
                            <Text style={{textAlign: 'center', color: 'white', fontWeight: 600, fontSize: moderateScale(18)}}>Log In</Text>
                        </TouchableOpacity>
                        <Text style={{textAlign: 'center', fontWeight: 600, fontSize: moderateScale(18), color: 'black'}}>Atau</Text>
                        <View style={Styles.loginImgBtn}>
                            <TouchableOpacity style={Styles.imgBtnWrapper}>
                                <Image source={require('../assets/img/google.png')} style={Styles.imgButton} />
                            </TouchableOpacity>
                            <TouchableOpacity style={Styles.imgBtnWrapper}>
                                <Image source={require('../assets/img/facebook.png')} style={Styles.imgButton} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <Text style={{textAlign: 'center'}}>Belum punya akun? <Text style={{color: '#36C9C1'}} onPress={() => navigation.navigate('DaftarPage')}>Daftar</Text></Text>
                </View>
            </View>
        </SafeAreaView>
    );
};

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.blue,
    },
    imgButton: {
        height: verticalScale(39),
        width: horizontalScale(40),
        objectFit: 'contain',
    },
    wrapper: {
        backgroundColor: 'white',
        width: '100%',
        height: '100%',
        borderTopEndRadius: 50,
        borderTopStartRadius: 50,
        paddingTop: verticalScale(60),
        paddingHorizontal: horizontalScale(24),
        display: 'flex',
        gap: verticalScale(64),
        marginTop: verticalScale(201),
    },
    input: {
        backgroundColor: COLORS.gray5,
        paddingVertical: verticalScale(12),
        paddingLeft: horizontalScale(24),
        borderRadius: 20,
        fontSize: moderateScale(14),
    },
    inputLabel: {
        fontSize: moderateScale(14),
        color: COLORS.black3,
        marginLeft: horizontalScale(20),
    },
    inputForm: {
        display: 'flex',
        gap: verticalScale(24),
    },
    inputGroup: {
        display: 'flex',
        gap: verticalScale(11),
    },
    formContainer: {
        display: 'flex',
        gap: verticalScale(8),
    },
    logInBtn: {
        width: '100%',
        backgroundColor: COLORS.blue,
        borderRadius: 12,
        paddingVertical: verticalScale(14),
    },
    logInContainer: {
        display: 'flex',
        gap: verticalScale(24),
    },
    loginImgBtn: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        gap: horizontalScale(40),
        marginBottom: verticalScale(101),
    },
    imgBtnWrapper: {
        padding: moderateScale(10),
        borderRadius: 16,
        backgroundColor: COLORS.gray4,
    },
})

export default LoginPage;