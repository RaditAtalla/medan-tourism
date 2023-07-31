import { SafeAreaView, StatusBar, View, FlatList } from 'react-native'
import Styles from '../../styles/SemuaBeritaPageStyles'
import { Item, DATA } from '../../components/atoms/EventDanBeritaCarousel'
import { verticalScale } from '../../theme/responsive'

const SemuaBeritaPage = () => {
  return(
    <SafeAreaView style={Styles.container}>
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor="transparent"
      />
      <FlatList
        data={DATA}
        renderItem={ ({item}) => <Item image={item.image} title={item.title} content={item.content} time={item.time} price={item.price} />}
        numColumns={1}
        ItemSeparatorComponent={<View style={{height: verticalScale(24)}} />}
        showsVerticalScrollIndicator={false}
        style={Styles.wrapper}
      />
    </SafeAreaView>
  )
}

export default SemuaBeritaPage