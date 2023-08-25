import { SafeAreaView, StatusBar, View, FlatList } from 'react-native'

import { dataTempatWisata as DATA } from '../../utils/dataDummy'
import { Item } from '../../components/atoms/HotelCarousel'
import { verticalScale } from '../../theme/responsive'
import Styles from '../../styles/SemuaMicePageStyles'
// import { dataTempatWisata } from '../../components/atoms/CarouselTempatWisata'

const SemuaTempatWisataPage = () => {
  return (
    <SafeAreaView style={Styles.container}>
      <StatusBar barStyle="dark-content" translucent backgroundColor="transparent" />
      <FlatList
        data={DATA}
        renderItem={({ item, index }) => (
          <Item image={item.image} name={item.name} distance={item.distance} rating={item.rating} width={180} />
        )}
        numColumns={2}
        ItemSeparatorComponent={<View style={{ height: verticalScale(24) }} />}
        showsVerticalScrollIndicator={false}
        style={Styles.wrapper}
      />
    </SafeAreaView>
  )
}

export default SemuaTempatWisataPage
