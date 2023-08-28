import { View, Image, Text, FlatList, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native'
import { getDistance } from 'geolib'

import { verticalScale, horizontalScale, moderateScale } from '../../theme/responsive'
import { getImagePlace } from '../../utils/tranformData'
import ICONS from '../../assets/icons/icons'
import COLORS from '../../theme/colors'
import StarDisplay from './StarDisplay'
import { useGetPlaceDetailQuery } from '../../api/place.api'
import { useSelector } from 'react-redux'

const Item = ({ action, isFirst, isLast, id }) => {
  const { data } = useGetPlaceDetailQuery(id)
  const location = useSelector((state) => state.location.location)

  const distance = (destination) => {
    const distanceInMeters = getDistance(
      { latitude: location?.address?.location?.lat, longitude: location?.address?.location?.lng },
      { latitude: destination?.lat, longitude: destination?.lng }
    )
    return (distanceInMeters / 1000).toFixed(1) + ' km'
  }

  return (
    <TouchableOpacity
      style={[
        Styles.container,
        isFirst && { marginLeft: horizontalScale(24) },
        isLast && { marginRight: horizontalScale(24) }
      ]}
      onPress={action}
    >
      <ImageBackground
        source={{ uri: getImagePlace(data?.result?.photos[0]?.photo_reference) }}
        style={Styles.thumbnail}
        imageStyle={{ borderTopLeftRadius: 8, borderTopRightRadius: 8 }}
      >
        <Image source={ICONS.saveCircle} style={Styles.saveButton} />
      </ImageBackground>
      <View style={Styles.metaData}>
        {/* <Text style={Styles.distance}>{distance(data?.result?.geometry?.location)}</Text> */}
        <Text style={Styles.name}>{data?.result?.name}</Text>
        <StarDisplay rating={Math.round(data?.result?.rating)} />
      </View>
    </TouchableOpacity>
  )
}

const Styles = StyleSheet.create({
  container: {
    width: horizontalScale(199),
    borderRadius: 8
  },
  thumbnail: {
    width: horizontalScale(199),
    height: verticalScale(173),
    objectFit: 'cover'
  },
  saveButton: {
    position: 'absolute',
    top: 6,
    right: 8
  },
  metaData: {
    backgroundColor: COLORS.white,
    paddingVertical: verticalScale(12),
    paddingHorizontal: horizontalScale(12),
    width: horizontalScale(199),
    alignItems: 'flex-start',
    gap: verticalScale(4)
  },
  distance: {
    color: COLORS.secondary,
    fontSize: moderateScale(10),
    fontFamily: 'Poppins-Regular'
  },
  name: {
    color: COLORS.black3,
    fontFamily: 'Poppins-Medium'
  }
})

const RecommendationCarousel = ({ data }) => {
  return (
    <FlatList
      data={data.slice(0, 4)}
      renderItem={({ item, index }) => (
        <Item id={item.id} isFirst={index === 0} isLast={index === data.length - 1} action={() => {}} />
      )}
      keyExtractor={(item, index) => index.toString()}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ gap: horizontalScale(24) }}
    />
  )
}

export default RecommendationCarousel
