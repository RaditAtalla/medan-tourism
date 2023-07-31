import { SafeAreaView, ScrollView, StatusBar, View, FlatList } from 'react-native'
import Styles from '../../styles/SemuaHotelPageStyles'
import { Item, DATA } from '../../components/atoms/HotelCarousel'
import { verticalScale } from '../../theme/responsive'

const SemuaHotelPage = () => {
  return(
    <SafeAreaView style={Styles.container}>
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor="transparent"
      />
      {/* <ScrollView>
        {HOTELDATA.map(data => {
          return(
            <HotelCard image={data.image} name={data.name} distance={data.distance} rating={data.rating} price={data.price} width={156} />
          )
        })}
      </ScrollView> */}
      <FlatList
        data={DATA}
        renderItem={ ({item}) => <Item image={item.image} name={item.name} distance={item.distance} rating={item.rating} price={item.price} width={180} />}
        numColumns={2}
        ItemSeparatorComponent={<View style={{height: verticalScale(24)}} />}
        style={Styles.wrapper}
      />
    </SafeAreaView>
  )
}

export default SemuaHotelPage