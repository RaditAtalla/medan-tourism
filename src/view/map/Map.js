import { SafeAreaView, View, StatusBar } from 'react-native'
import Styles from '../../styles/MapStyles'
import MapSplashInfo from '../../components/atoms/MapSplashInfo'

const Map = () => {
  return(
    <SafeAreaView style={Styles.container}>
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor="transparent"
      />
      <MapSplashInfo />
    </SafeAreaView>
  )
}

export default Map