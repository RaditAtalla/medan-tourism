import { View, Text, Dimensions, Image, ImageBackground, TouchableOpacity, StyleSheet } from 'react-native'
import Carousel, { Pagination } from 'react-native-snap-carousel'

import { verticalScale, horizontalScale } from '../../theme/responsive'
import { dataTempatWisata as DATA } from '../../utils/dataDummy'
import { getImagePlace } from '../../utils/tranformData'
import ICONS from '../../assets/icons/icons'
import COLORS from '../../theme/colors'
import { useRef, useState } from 'react'

const SLIDER_WIDTH = Dimensions.get('window').width
const ITEM_WIDTH = horizontalScale(298)
const ITEM_HEIGHT = verticalScale(173)

const TempatWisataCarouselCard = ({ image, name }) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image source={{ uri: image }} style={{ width: '100%', height: '100%', borderRadius: 12 }} />
      <ImageBackground source={require('../../assets/img/backgroundBlur.png')} style={styles.imageBackground}>
        <Image source={ICONS.locationPin} />
        <Text style={{ color: COLORS.white, fontSize: 10, fontWeight: 500 }}>{name}</Text>
      </ImageBackground>
    </TouchableOpacity>
  )
}

const CarouselCardItem = ({ item, index }) => {
  return (
    // <TempatWisataCarouselCard image={item.image} name={item.name} />
    <TempatWisataCarouselCard image={getImagePlace(item.photos[0].photo_reference)} name={item.name} />
  )
}

const ActiveDot = () => {
  return <View style={[styles.dot, { backgroundColor: COLORS.blue, width: 37 }]} />
}

const InactiveDot = () => {
  return <View style={[styles.dot, { backgroundColor: COLORS.black3, width: 8 }]} />
}

const CarouselTempatWisata = ({ wisata }) => {
  const isCarousel = useRef(null)
  const [index, setIndex] = useState(0)

  return (
    <View>
      <Carousel
        layout="default"
        ref={isCarousel}
        data={wisata}
        renderItem={CarouselCardItem}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        inactiveSlideShift={0}
        useScrollView={true}
        onSnapToItem={(index) => setIndex(index)}
        activeSlideAlignment="start"
        inactiveSlideOpacity={1}
        inactiveSlideScale={1}
      />
      <Pagination
        dotsLength={wisata.length}
        activeDotIndex={index}
        carouselRef={isCarousel}
        dotStyle={styles.paginationDot}
        inactiveDotOpacity={0.4}
        inactiveDotScale={1}
        dotElement={<ActiveDot />}
        inactiveDotElement={<InactiveDot />}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    width: ITEM_WIDTH,
    height: ITEM_HEIGHT,
    borderRadius: 12,
    paddingLeft: horizontalScale(25)
  },
  imageBackground: {
    borderRadius: 4,
    paddingVertical: 6,
    paddingHorizontal: 12,
    alignItems: 'center',
    gap: 12,
    position: 'absolute',
    bottom: 20,
    left: 24,
    flexDirection: 'row'
  },
  dot: {
    height: 5,
    marginRight: 4
  },
  paginationDot: {
    width: 8,
    height: 5,
    borderRadius: 5,
    marginHorizontal: 0,
    backgroundColor: COLORS.blue
  }
})

export default CarouselTempatWisata
