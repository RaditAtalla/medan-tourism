import { View, StyleSheet } from 'react-native'
import { horizontalScale, verticalScale } from '../../theme/responsive'
import ImgBtn from '../atoms/ImgBtn'

const AltLogin = () => {
    return(
        <View style={Styles.loginImgBtn}>
            <ImgBtn icon={"google"} />
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