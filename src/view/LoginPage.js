import { Text, View, StatusBar, ImageBackground } from 'react-native';

import Styles from '../styles/LoginPageStyles';
import COLORS from '../theme/colors';

import AltLogin from '../components/molecules/AltLogin';
import LupaPasswordBtn from '../components/atoms/LupaPasswordBtn';
import MyButton from '../components/atoms/MyButton';
import InputGroup from '../components/atoms/InputGroup';

const LoginPage = ({ navigation }) => {
    return (
        <View style={Styles.container}>
        <StatusBar barStyle='light-content' translucent backgroundColor='transparent' />
            <ImageBackground style={ Styles.background } source={require('../assets/img/background.png')} />
            <View style={ Styles.actionContainer }>
                <View>
                    <View style={ Styles.inputContainer }>
                        <View style={ Styles.inputField }>
                            <InputGroup label='Email' placeholder='example123@gmail.com' placeholderTextColor={COLORS.black4} />
                            <InputGroup label='Password' placeholder='password123' placeholderTextColor={COLORS.black4} type='password' />
                        </View>
                        <LupaPasswordBtn action={() => navigation.navigate('LupaPasswordPage')} />
                    </View>
                    <View style={ Styles.altLogin }>
                        <MyButton text='Log in' action={() => navigation.navigate('HomePage')} />
                        <Text style={ Styles.atau }>Atau</Text>
                        <AltLogin />
                    </View>
                </View>
                <View>
                    <Text style={{ textAlign: 'center' }}>Belum punya akun? <Text style={{ color: COLORS.blue }} onPress={() => navigation.navigate('DaftarPage') }>Daftar</Text></Text>
                </View>
            </View>
        </View>
    );
};

export default LoginPage;