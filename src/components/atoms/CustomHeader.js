import { TouchableOpacity, View, Text, Image, StyleSheet } from 'react-native'
import COLORS from '../../theme/colors'
import ICONS from '../../assets/icons/icons'
import IMAGES from '../../assets/img/images'
import { horizontalScale, verticalScale, moderateScale } from '../../theme/responsive'

const CustomHeader = ({ title, action }) => {
    return(
        <View style={Styles.wrapper}>
            <Text style={Styles.title}>{title}</Text>
            <TouchableOpacity onPress={action}>
                <Image source={ICONS.information} />
            </TouchableOpacity>
        </View>
    )
}

const Styles = StyleSheet.create({
    wrapper: {
        flexDirection: 'row',
        gap: horizontalScale(8),
        alignItems: 'center',
    },
    title: {
        fontSize: moderateScale(20),
        fontFamily: 'Poppins-Bold',
        color: COLORS.black4,
    }
})

export default CustomHeader