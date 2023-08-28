import { SafeAreaView, StatusBar, View, FlatList } from 'react-native'

import { Item } from '../../components/atoms/HotelCarousel'
import { verticalScale } from '../../theme/responsive'
import Styles from '../../styles/SemuaMicePageStyles'
import { useGetPlacesQuery } from '../../api/place.api'
import { getImagePlace } from '../../utils/tranformData'
import { ActivityIndicator } from 'react-native-paper'
import COLORS from '../../theme/colors'

const SemuaPopulerMicePage = ({ navigation }) => {
  const { data, isSuccess } = useGetPlacesQuery('meeting room')

  if (!isSuccess) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', paddingVertical: verticalScale(16) }}>
        <ActivityIndicator size="small" color={COLORS.blue} />
      </View>
    )
  }

  const transformData = (data) => {
    return data.filter((item) => item.photos && item.rating && item.user_ratings_total && item.opening_hours)
  }

  const popular = transformData(data.results)

  return (
    <SafeAreaView style={Styles.container}>
      <StatusBar barStyle="dark-content" translucent backgroundColor="transparent" />
      <FlatList
        data={popular}
        renderItem={({ item, index }) => (
          <Item
            image={getImagePlace(item.photos[0].photo_reference)}
            name={item.name}
            distance={item.geometry.location}
            rating={Math.round(item.rating)}
            price={'540,550'}
            width={180}
            containerStyle={
              index + (1 % 2) === 0 ? { marginLeft: verticalScale(24) } : { marginRight: verticalScale(24) }
            }
            action={() => navigation.navigate('DetailAdiMulia', { placeId: item.place_id })}
          />
        )}
        numColumns={2}
        contentContainerStyle={{ gap: verticalScale(24) }}
        showsVerticalScrollIndicator={false}
        style={Styles.wrapper}
      />
    </SafeAreaView>
  )
}

export default SemuaPopulerMicePage
