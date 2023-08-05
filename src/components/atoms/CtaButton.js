// Button (bgColor, width, bRadius, vPadding, hPadding, fWeight, fSize, icon, text, action, bColor)

import {TouchableOpacity, Text, Image} from 'react-native';

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
}) => {
  return (
    <TouchableOpacity
      onPress={action}
      style={{
        backgroundColor: backgroundColor,
        width: width,
        borderRadius: borderRadius,
        paddingVertical: vPadding,
        paddingHorizontal: hPadding,
        borderColor: borderColor,
        borderWidth: borderWidth,
      }}>
      <Image source={icon} style={Styles.icon} />
      <Text style={{ fontSize: fSize, fontFamily: fFamily, color: fColor, }}>{text}</Text>
    </TouchableOpacity>
  );
};

export default CtaButton