import { View, Text, StyleSheet } from 'react-native'
import COLORS from '../../theme/colors'
import { moderateScale } from '../../theme/responsive'

const TransitionPage = ({ navigation }) => {
  setTimeout(() => {
    navigation.navigate('OnBoardingPage')
  }, 500)
  return (
    <View style={{ flex: 1, backgroundColor: COLORS.white, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ color: COLORS.black3, fontSize: moderateScale(40), fontFamily: 'Poppins-Bold' }}>
        Medan{'\n'}
        <Text style={{ color: COLORS.blue }}>Tourism</Text>
      </Text>
    </View>
  )
}

export default TransitionPage
