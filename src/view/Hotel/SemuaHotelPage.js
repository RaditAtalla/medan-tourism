import { SafeAreaView, ScrollView, StatusBar } from 'react-native'
import Styles from '../../styles/SemuaHotelPageStyles'
import { HotelCard, HOTELDATA } from '../../components/atoms/HotelCarousel'

const SemuaHotelPage = () => {
  return(
    <SafeAreaView style={Styles.container}>
      <Text>Semua Hotel Page</Text>
    </SafeAreaView>
  )
}

export default SemuaHotelPage