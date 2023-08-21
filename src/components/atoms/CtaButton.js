// Button (bgColor, width, bRadius, vPadding, hPadding, fWeight, fSize, icon, text, action, bColor)

import { TouchableOpacity, Text, Image, View, ActivityIndicator } from 'react-native'
import COLORS from '../../theme/colors'

const CtaButton = ({
  backgroundColor,
  width,
  borderRadius,
  vPadding,
  hPadding,
  fFamily,
  fSize,
  icon,
  action,
  borderColor,
  borderWidth,
  fColor,
  text,
  isLoading,
  style
}) => {
  return (
    <TouchableOpacity
      onPress={action}
      disabled={isLoading}
      style={[
        {
          backgroundColor: backgroundColor,
          width: width,
          borderRadius: borderRadius,
          paddingVertical: vPadding,
          paddingHorizontal: hPadding,
          borderColor: borderColor,
          borderWidth: borderWidth,
          alignItems: 'center',
          overflow: 'hidden'
        },
        style
      ]}
    >
      {isLoading && (
        <View
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: backgroundColor
          }}
        >
          <ActivityIndicator size="small" color={COLORS.white} />
        </View>
      )}
      <Image source={icon} />
      <Text style={{ fontSize: fSize, fontFamily: fFamily, color: fColor }}>{text}</Text>
    </TouchableOpacity>
  )
}

export default CtaButton
