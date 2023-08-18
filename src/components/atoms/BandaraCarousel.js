import { Image, View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native'

import { verticalScale, horizontalScale } from '../../theme/responsive'
import StarDisplayDetail from './StarDisplayDetail'
import COLORS from '../../theme/colors'

const DATA = [
  {
    name: 'KUALANAMU INTERNATIONAL AIRPORT',
    image: require('../../assets/img/kualanamu.png'),
    rating: 5,
    raters: '17.505'
  },
  {
    name: 'Silangit International Airport',
    image: require('../../assets/img/silangit.png'),
    rating: 4,
    raters: '17.505'
  }
]

const Item = ({ image, name, rating, raters, isFirst, isLast }) => {
  const gap = verticalScale(24)
  return (
    <View style={[styles.container, isFirst && { marginLeft: gap }, isLast && { marginRight: gap }]}>
      <Image source={image} style={styles.image} />
      <View style={{ gap: verticalScale(16) }}>
        <View style={{ gap: verticalScale(4), width: '90%' }}>
          <Text style={{ fontWeight: '700', color: COLORS.black3 }}>{name}</Text>
          <StarDisplayDetail rating={rating} raters={raters} />
        </View>
        <View style={{ flexDirection: 'row', gap: horizontalScale(16) }}>
          <TouchableOpacity style={styles.secondaryBtn}>
            <Text style={{ color: COLORS.blue, fontWeight: '700' }}>Rute</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.primaryBtn}>
            <Text style={{ color: COLORS.white, fontWeight: '700' }}>Pesan Tiket</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const BandaraCarousel = () => {
  return (
    <FlatList
      data={DATA}
      horizontal={true}
      keyExtractor={(item) => item.name}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ gap: horizontalScale(24) }}
      renderItem={({ item, index }) => (
        <Item
          image={item.image}
          name={item.name}
          rating={item.rating}
          raters={item.raters}
          isFirst={index === 0}
          isLast={index === (DATA.length || 0) - 1}
        />
      )}
    />
  )
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: verticalScale(10),
    paddingHorizontal: horizontalScale(12),
    borderRadius: 12,
    backgroundColor: COLORS.white,
    width: horizontalScale(296),
    gap: 10,
    flexDirection: 'row',
    alignItems: 'flex-start'
  },
  image: {
    width: horizontalScale(83),
    height: verticalScale(83),
    objectFit: 'cover',
    borderRadius: 12
  },
  primaryBtn: {
    paddingVertical: verticalScale(10),
    paddingHorizontal: horizontalScale(12),
    borderRadius: 8,
    backgroundColor: COLORS.blue
  },
  secondaryBtn: {
    paddingVertical: verticalScale(10),
    paddingHorizontal: horizontalScale(12)
  }
})

export default BandaraCarousel
