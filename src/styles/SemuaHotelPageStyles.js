import { StyleSheet } from 'react-native'
import COLORS from '../theme/colors'
import { horizontalScale, verticalScale, moderateScale } from '../theme/responsive'

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  wrapper: {
    paddingHorizontal: horizontalScale(24),
    paddingVertical: verticalScale(32),
  }
})

export default Styles