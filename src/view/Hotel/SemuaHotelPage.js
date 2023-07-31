import { SafeAreaView, ScrollView, StatusBar } from 'react-native'
import Styles from '../../styles/SemuaHotelPageStyles'
import { HotelCard, HOTELDATA } from '../../components/atoms/HotelCarousel'

const SemuaHotelPage = () => {
  return(
    <SafeAreaView style={Styles.container}>
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor="transparent"
      />
      <ScrollView style={Styles.wrapper}>
        {HOTELDATA.map(data => {
          return(
            <HotelCard image={data.image} name={data.name} distance={data.distance} rating={data.rating} price={data.price} width={156} />
          )
        })}
      </ScrollView>
    </SafeAreaView>
  )
}

export default SemuaHotelPage