import { View, Image, Text, FlatList, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native'
import COLORS from '../../theme/colors'
import ICONS from '../../assets/icons/icons'
import { verticalScale, horizontalScale, moderateScale } from '../../theme/responsive'
import StarDisplay from './StarDisplay'

const DATA = [
  {
    image: require('../../assets/img/selecta.png'),
    name: 'Selecta',
    distance: '2,5 Km',
    rating: 5
  },
  {
    image: require('../../assets/img/nagaHall.png'),
    name: 'Naga Hall Medan',
    distance: '2,5 Km',
    rating: 4
  },
  {
    image: require('../../assets/img/hotelBukitPermai.png'),
    name: 'Hotel Bukit Permai',
    distance: '2,5 Km',
    rating: 3
  }
]

const Item = ({ image, name, distance, rating, navigation }) => {
  return (
    <TouchableOpacity style={Styles.container} onPress={() => navigation.navigate(name + 'Page')}>
      <ImageBackground
        source={image}
        style={Styles.thumbnail}
        imageStyle={{ borderTopLeftRadius: 8, borderTopRightRadius: 8 }}
      >
        <Image source={ICONS.saveCircle} style={Styles.saveButton} />
      </ImageBackground>
      <View style={Styles.metaData}>
        <Text style={Styles.distance}>{distance}</Text>
        <Text style={Styles.name}>{name}</Text>
        <StarDisplay rating={rating} />
      </View>
    </TouchableOpacity>
  )
}

const Styles = StyleSheet.create({
  container: {
    width: horizontalScale(199),
    borderRadius: 8,
    marginRight: horizontalScale(24)
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

const MiceDekatCarousel = () => {
  return (
    <FlatList
      data={DATA}
      renderItem={({ item }) => (
        <Item image={item.image} name={item.name} distance={item.distance} rating={item.rating} />
      )}
      keyExtractor={(item) => item.name}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      style={{
        paddingLeft: horizontalScale(24)
      }}
    />
  )
}

export default MiceDekatCarousel
