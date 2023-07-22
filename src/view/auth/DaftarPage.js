import { Text, View, StatusBar, ImageBackground } from 'react-native';

import Styles from '../../styles/DaftarPageStyles';
import COLORS from '../../theme/colors';
import IMAGES from '../../assets/img/images';

import AltLogin from '../../components/molecules/AltLogin';
import MyButton from '../../components/atoms/MyButton';
import InputGroup from '../../components/atoms/InputGroup';

const DaftarPage = ({ navigation }) => {
    return (
        <View style={Styles.container}>
        <StatusBar barStyle='light-content' translucent backgroundColor='transparent' />
            <ImageBackground style={ Styles.background } source={IMAGES.background} />
            <View style={ Styles.actionContainer }>
                <View>
                    <View style={ Styles.inputContainer }>
                        <View style={ Styles.inputField }>
                            <InputGroup label='Email' placeholder='example123@gmail.com' placeholderTextColor={COLORS.black4} />
                            <InputGroup label='Password' placeholder='password123' placeholderTextColor={COLORS.black4} type='password' />
                            <InputGroup label='Konfirmasi Password' placeholder='password123' placeholderTextColor={COLORS.black4} type='password' />
                        </View>
                    </View>
                    <View style={ Styles.altLogin }>
                        <MyButton text='Daftar' action={() => navigation.navigate('DaftarNomorHpPage')} />
                        <Text style={ Styles.atau }>Atau</Text>
                        <AltLogin />
                    </View>
                </View>
                <View>
                    <Text style={{ textAlign: 'center' }}>Sudah punya akun? <Text style={{ color: COLORS.blue }} onPress={() => navigation.navigate('LoginPage') }>Login</Text></Text>
                </View>
            </View>
        </View>
    );
};

export default DaftarPage;