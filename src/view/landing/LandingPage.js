import { View, Text, Image, StatusBar, StyleSheet } from 'react-native'
import COLORS from '../../theme/colors'

const LandingPage = ({ navigation }) => {
  setTimeout(() => {
    navigation.navigate('TransitionPage')
  }, 1000)

  return (
    <View style={styles.container}>
      <StatusBar barStyle={'dark-content'} backgroundColor={COLORS.white} />
      <Image source={require('../../assets/icons/plane.png')} />
      <View>
        <Text style={styles.text}>
          Medan{'\n'}
          <Text style={{ color: COLORS.blue }}>Tourism</Text>
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 16,
    backgroundColor: COLORS.white
  },
  text: { fontSize: 40, fontFamily: 'Poppins-Bold', color: COLORS.black3 }
})

export default LandingPage
