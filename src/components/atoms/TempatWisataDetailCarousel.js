import { View, Image, Text, FlatList, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native'

import { verticalScale, horizontalScale, moderateScale } from '../../theme/responsive'
import { tempatWisataDetailData as DATA } from '../../utils/dataDummy'
import ICONS from '../../assets/icons/icons'
import COLORS from '../../theme/colors'
import StarDisplay from './StarDisplay'

const Item = ({ image, name, distance, rating, navigation, isFirst, isLast }) => {
  gap = verticalScale(24)

  console.log({ isLast })

  return (
    <View
      onPress={() => navigation.navigate(name)}
      style={[Styles.container, isFirst && { marginLeft: gap }, isLast && { marginRight: gap }]}
    >
      <ImageBackground source={image} style={Styles.thumbnail} imageStyle={Styles.imgBackground}>
        <TouchableOpacity>
          <Image source={ICONS.saveCircle} style={Styles.saveButton} />
        </TouchableOpacity>
      </ImageBackground>
      <TouchableOpacity style={Styles.metaData}>
        <Text style={Styles.distance}>{distance}</Text>
        <Text style={Styles.name}>{name}</Text>
        <StarDisplay rating={rating} />
      </TouchableOpacity>
    </View>
  )
}

const TempatWisataDetailCarousel = () => {
  return (
    <FlatList
      data={DATA}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item, index }) => (
        <Item
          image={item.image}
          name={item.name}
          distance={item.distance}
          rating={item.rating}
          isFirst={index === 0}
          isLast={index === (DATA.length || 0) - 1}
        />
      )}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ gap: verticalScale(24) }}
    />
  )
}

const Styles = StyleSheet.create({
  container: {
    width: horizontalScale(298),
    borderRadius: 8
  },
  thumbnail: {
    width: horizontalScale(298),
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
    width: horizontalScale(298),
    alignItems: 'flex-start',
    gap: verticalScale(4)
  },
  distance: {
    color: COLORS.secondary,
    fontSize: moderateScale(18),
    fontFamily: 'Poppins-Regular'
  },
  name: {
    color: COLORS.black3,
    fontFamily: 'Poppins-Medium'
  },
  imgBackground: {
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8
  }
})

export default TempatWisataDetailCarousel
