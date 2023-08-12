import { View, StyleSheet } from 'react-native'
import { horizontalScale, verticalScale } from '../../theme/responsive'
import ImgBtn from '../atoms/ImgBtn'
import { googleLogin } from '../../utils/GoogleLogin';

const AltLogin = () => {
    return(
        <View style={Styles.loginImgBtn}>
            <ImgBtn action={() => googleLogin()} icon={"google"} />
            <ImgBtn icon={"facebook"} />
        </View>
    );
}

const Styles = StyleSheet.create({
    loginImgBtn: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        gap: horizontalScale(40),
    },
})

export default AltLogin;