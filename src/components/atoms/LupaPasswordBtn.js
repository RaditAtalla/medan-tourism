import { TouchableOpacity, Text, StyleSheet } from 'react-native'
import { moderateScale } from '../../theme/responsive'

const LupaPasswordBtn = ({ action }) => {
    return(
        <TouchableOpacity style={Styles.container} onPress={action}>
            <Text>Lupa Password?</Text>
        </TouchableOpacity>
    )
}

const Styles = StyleSheet.create({
    container: {
        alignSelf: 'flex-end', 
        fontSize: moderateScale(12),
    }
})

export default LupaPasswordBtn;