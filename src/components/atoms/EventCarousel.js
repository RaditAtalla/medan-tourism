import { FlatList, Image, TouchableOpacity } from 'react-native'
import { horizontalScale, verticalScale } from '../../theme/responsive'
import { useNavigation } from '@react-navigation/native'

const DATA = [
  {
    image: require('../../assets/img/event1.png')
  },
  {
    image: require('../../assets/img/event2.png')
  },
  {
    image: require('../../assets/img/event3.png')
  },
  {
    image: require('../../assets/img/event4.png')
  }
]

const Item = ({ image, isFirst, isLast }) => {
  const navigation = useNavigation()

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('HomeNavStackScreen', { screen: 'eventDetail1' })}
      style={[isFirst && { marginLeft: horizontalScale(24) }, isLast && { marginRight: horizontalScale(24) }]}
    >
      <Image
        source={image}
        style={{
          borderRadius: 12,
          width: horizontalScale(282),
          height: verticalScale(192),
          objectFit: 'cover'
        }}
      />
    </TouchableOpacity>
  )
}

const EventCarousel = () => {
  return (
    <FlatList
      data={DATA}
      keyExtractor={(item) => item.image}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ gap: horizontalScale(24) }}
      renderItem={({ item, index }) => (
        <Item isFirst={index === 0} isLast={index === (DATA.length || 0) - 1} image={item.image} />
      )}
    />
  )
}

export default EventCarousel
