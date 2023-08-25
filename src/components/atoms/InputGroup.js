import { TextInput, View, Text, StyleSheet } from 'react-native'
import { verticalScale, horizontalScale, moderateScale } from '../../theme/responsive'
import COLORS from '../../theme/colors'

const InputGroup = ({ label, placeholder, placeholderTextColor, type, value, setValue, keyboardType }) => {
  let isPassword = type == 'password' ? true : false
  return (
    <View style={Styles.inputGroup}>
      <Text style={Styles.inputLabel}>{label}</Text>
      <TextInput
        placeholder={placeholder}
        style={Styles.input}
        value={value}
        onChangeText={setValue}
        placeholderTextColor={placeholderTextColor}
        secureTextEntry={isPassword}
        keyboardType={keyboardType ? keyboardType : 'default'}
      />
    </View>
  )
}

const Styles = StyleSheet.create({
  inputGroup: {
    display: 'flex',
    gap: verticalScale(11)
  },
  inputLabel: {
    fontSize: moderateScale(14),
    color: COLORS.black3,
    marginLeft: horizontalScale(20)
  },
  input: {
    backgroundColor: COLORS.gray5,
    paddingVertical: verticalScale(12),
    paddingLeft: horizontalScale(24),
    borderRadius: 20,
    fontSize: moderateScale(14)
  }
})

export default InputGroup
