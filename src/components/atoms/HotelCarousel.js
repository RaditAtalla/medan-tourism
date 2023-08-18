import { Image, View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { verticalScale, horizontalScale, moderateScale } from '../../theme/responsive'
import COLORS from '../../theme/colors'
import StarDisplay from './StarDisplay'

export const Item = ({ image, name, distance, rating, price, action, width }) => {
  width = horizontalScale(width)

  return (
    <TouchableOpacity style={[styles.container, { width }]} onPress={action}>
      <Image source={image} style={[styles.image, { width }]} />
      <View style={[styles.details, { width }]}>
        <View style={{ gap: verticalScale(4) }}>
          <Text style={styles.distance}>{distance}</Text>
          <Text style={styles.subText} numberOfLines={1}>
            {name}
          </Text>
          <StarDisplay rating={rating} />
        </View>
        <Text style={styles.subText}>
          IDR {price}
          <Text style={styles.date}>/malam</Text>
        </Text>
      </View>
    </TouchableOpacity>
  )
}

const HotelCarousel = () => {
  const Item = ({ isFirst, isLast, action, width, data }) => {
    width = horizontalScale(width)

    return (
      <TouchableOpacity
        style={[
          styles.container,
          { width },
          isFirst && { marginLeft: horizontalScale(24) },
          isLast && { marginRight: horizontalScale(24) }
        ]}
        onPress={action}
      >
        <Image source={data.image} style={[styles.image, { width }]} />
        <View style={[styles.details, { width }]}>
          <View style={{ gap: verticalScale(4) }}>
            <Text style={styles.distance}>{data.distance}</Text>
            <Text style={styles.subText} numberOfLines={1}>
              {data.name}
            </Text>
            <StarDisplay rating={data.rating} />
          </View>
          <Text style={styles.subText}>
            IDR {data.price}
            <Text style={styles.date}>/malam</Text>
          </Text>
        </View>
      </TouchableOpacity>
    )
  }

  const navigation = useNavigation()

  const DATA = [
    {
      name: 'Arya Duta Medan',
      image: require('../../assets/img/aryaDuta.png'),
      distance: '2,5 Km',
      rating: 4,
      price: '540,550',
      action: () => navigation.navigate('HomeNavStackScreen', { screen: 'HotelPreviewPage' })
    },
    {
      name: 'Adi Mulia Medan',
      image: require('../../assets/img/adimulia.png'),
      distance: '3,5 Km',
      rating: 5,
      price: '918,000'
    },
    {
      name: 'Emerald Hotel',
      image: require('../../assets/img/emeraldHotel.png'),
      distance: '5 Km',
      rating: 4,
      price: '918,000'
    },
    {
      name: 'Arya Duta Medan 2',
      image: require('../../assets/img/aryaDuta.png'),
      distance: '2,5 Km',
      rating: 4,
      price: '540,550'
    },
    {
      name: 'Adi Mulia Medan 2',
      image: require('../../assets/img/adimulia.png'),
      distance: '3,5 Km',
      rating: 5,
      price: '918,000'
    },
    {
      name: 'Emerald Hotel 2',
      image: require('../../assets/img/emeraldHotel.png'),
      distance: '5 Km',
      rating: 4,
      price: '918,000'
    }
  ]
  return (
    <FlatList
      data={DATA}
      horizontal={true}
      keyExtractor={(item) => item.name}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ gap: horizontalScale(24) }}
      renderItem={({ item, index }) => (
        <Item
          isFirst={index === 0}
          isLast={index === (DATA.length || 0) - 1}
          action={item.action}
          width={199}
          data={item}
        />
      )}
    />
  )
}

const styles = StyleSheet.create({
  container: {
    height: verticalScale(274),
    borderRadius: 16
  },
  image: {
    height: verticalScale(156),
    objectFit: 'cover',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16
  },
  details: {
    paddingHorizontal: horizontalScale(12),
    paddingVertical: verticalScale(12),
    backgroundColor: COLORS.white,
    gap: 10,
    borderBottomRightRadius: 16,
    borderBottomLeftRadius: 16
  },
  distance: {
    color: COLORS.secondary,
    fontSize: moderateScale(10)
  },
  subText: { color: COLORS.black3, fontWeight: '500' },
  date: { fontSize: moderateScale(12), fontWeight: '400' }
})

export default HotelCarousel
