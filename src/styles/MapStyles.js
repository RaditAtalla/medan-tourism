import { StyleSheet, Dimensions } from 'react-native'
import COLORS from '../theme/colors'
import { horizontalScale, moderateScale, verticalScale } from '../theme/responsive'

const {width, height} = Dimensions.get('window')

const Styles = StyleSheet.create({
  container: {
    flex: 1,
  },
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
    fontFamily: 'Poppins-Light'
  },
  mapRootContainer: {
    flex: 1,
  }
})

export default Styles