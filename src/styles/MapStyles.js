import { StyleSheet, Dimensions } from 'react-native'
import COLORS from '../theme/colors'
import { horizontalScale, moderateScale, verticalScale } from '../theme/responsive'

const { width, height } = Dimensions.get('window')

const Styles = StyleSheet.create({
  container: {
    flex: 1
  },
  mapRootContainer: {
    flex: 1
  }
})

export default Styles
