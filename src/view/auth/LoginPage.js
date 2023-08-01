import { Text, View, StatusBar, ImageBackground } from 'react-native';

import Styles from '../../styles/LoginPageStyles';
import COLORS from '../../theme/colors';

import AltLogin from '../../components/molecules/AltLogin';
import LupaPasswordBtn from '../../components/atoms/LupaPasswordBtn';
import MyButton from '../../components/atoms/MyButton';
import InputGroup from '../../components/atoms/InputGroup';
import React, {useState} from 'react'
import HandleLogin from '../../api/HandleLogin';

const LoginPage = ({ navigation }) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")



    return (
        <View style={Styles.container}>
        <StatusBar barStyle='light-content' translucent backgroundColor='transparent' />
            <ImageBackground style={ Styles.background } source={require('../../assets/img/background.png')} />
            <View style={ Styles.actionContainer }>
                <View>
                    <View style={ Styles.inputContainer }>
                        <View style={ Styles.inputField }>
                            <InputGroup label='Email atau Username' value={email} setValue={setEmail} placeholder='example123@gmail.com' placeholderTextColor={COLORS.black4} />
                            <InputGroup label='Password' value={password} setValue={setPassword} placeholder='password123' placeholderTextColor={COLORS.black4} type='password' />
                        </View>
                        <LupaPasswordBtn action={() => navigation.navigate('LupaPasswordPage')} />
                    </View>
                    <View style={ Styles.altLogin }>
                        <MyButton text='Log in' action={() => HandleLogin(email, password, navigation)} />
                        {/* <MyButton text='Log in' action={() => navigation.navigate('HomeStackScreen')} /> */}
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