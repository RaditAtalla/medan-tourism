import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  Text,
  TextInput,
} from 'react-native';
import { horizontalScale, verticalScale, moderateScale } from '../../theme/responsive';
import ICONS from '../../assets/icons/icons';
import COLORS from '../../theme/colors';

const MapHeader = ({ placeholder, action }) => {
  return (
    <View style={Styles.header}>
      <TouchableOpacity
        onPress={action}
        style={{justifyContent: 'center', alignItems: 'center'}}>
        <Image
          source={ICONS.backButtonBlack}
          style={{width: horizontalScale(24), objectFit: 'contain'}}
        />
        <View
          style={{
            backgroundColor: COLORS.white,
            width: horizontalScale(50),
            height: verticalScale(50),
            objectFit: 'contain',
            borderRadius: 100,
            position: 'absolute',
            zIndex: -1,
          }}
        />
      </TouchableOpacity>
      <TouchableOpacity style={Styles.inputContainer}>
        <Image
          source={ICONS.search}
          style={{
            width: horizontalScale(20),
            height: verticalScale(20),
            objectFit: 'contain',
          }}
        />
        <TextInput
          placeholder={placeholder}
          placeholderTextColor={COLORS.black3}
          selectionColor={COLORS.blue}
          style={Styles.inputField}
        />
      </TouchableOpacity>
    </View>
  );
};

const Styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    paddingLeft: horizontalScale(24),
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: horizontalScale(34),
    position: 'absolute',
    top: verticalScale(79),
    zIndex: 1,
  },
  inputContainer: {
    backgroundColor: COLORS.white,
    paddingLeft: horizontalScale(12),
    width: horizontalScale(274),
    height: verticalScale(50),
    flexDirection: 'row',
    alignItems: 'center',
    gap: horizontalScale(10),
    borderRadius: 24,
  },
  inputField: {
    width: '90%',
    color: COLORS.black3,
    fontSize: moderateScale(12),
    fontFamily: 'Poppins-Light',
  },
});

export default MapHeader