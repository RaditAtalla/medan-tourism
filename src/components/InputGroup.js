import { StyleSheet, TextInput, View, Text } from "react-native";
import { horizontalScale, verticalScale, moderateScale } from "../constant/responsive";

export const InputGroup = ({label, placeholder, placeholderTextColor, type}) => {
    let isPassword = (type == 'password') ? true : false;
    return(
        <View style={Styles.inputGroup}>
            <Text style={Styles.inputLabel}>{label}</Text>
            <TextInput placeholder={placeholder} style={Styles.input} placeholderTextColor={placeholderTextColor} secureTextEntry={isPassword} />
        </View>
    );
}

const Styles = StyleSheet.create({
    inputGroup: {
        display: 'flex',
        gap: verticalScale(11),
    },
    inputLabel: {
        fontSize: moderateScale(14),
        color: '#3B4949',
        marginLeft: horizontalScale(20),
    },
    input: {
        backgroundColor: '#F7F7F7',
        paddingVertical: verticalScale(12),
        paddingLeft: horizontalScale(24),
        borderRadius: 20,
        fontSize: moderateScale(14),
    },
})