import { SafeAreaView, StatusBar, View, FlatList } from 'react-native'
import Styles from '../../styles/SemuaHotelPageStyles'
import { Item } from '../../components/atoms/HotelCarousel'
import { DATA } from '../../components/atoms/MicePopulerCarousel'
import { verticalScale } from '../../theme/responsive'

const SemuaPopulerMicePage = () => {
  return(
    <SafeAreaView style={Styles.container}>
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor="transparent"
      />
      <FlatList
        data={DATA}
        renderItem={ ({item}) => <Item image={item.image} name={item.name} distance={item.distance} rating={item.rating} price={item.price} width={180} />}
        numColumns={2}
        ItemSeparatorComponent={<View style={{height: verticalScale(24)}} />}
        showsVerticalScrollIndicator={false}
        style={Styles.wrapper}
      />
    </SafeAreaView>
  )
}

export default SemuaPopulerMicePage