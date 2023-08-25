import { View, Text, Dimensions, Image, ImageBackground, Animated } from 'react-native'
import Carousel, { Pagination } from 'react-native-snap-carousel'
import React from 'react'

import { verticalScale, horizontalScale } from '../../theme/responsive'
import ICONS from '../../assets/icons/icons'
import COLORS from '../../theme/colors'

const SLIDER_WIDTH = Dimensions.get('window').width
const ITEM_WIDTH = horizontalScale(225)
const ITEM_HEIGHT = verticalScale(320)

const DataBeritaDanEvent = [
  {
    label: 'event1',
    imgSrc: require('../../assets/img/beritaDanEvent1.png')
  },
  {
    label: 'event2',
    imgSrc: require('../../assets/img/beritaDanEvent2.png')
  },
  {
    label: 'event3',
    imgSrc: require('../../assets/img/beritaDanEvent3.png')
  },
  {
    label: 'event4',
    imgSrc: require('../../assets/img/beritaDanEvent4.png')
  },
  {
    label: 'event5',
    imgSrc: require('../../assets/img/beritaDanEvent5.png')
  }
]

const BeritaDanEventCarouselCard = ({ image, label, index, currentIndex }) => {
  const scale = React.useRef(new Animated.Value(index === currentIndex ? 1 : 0.5)).current

  React.useEffect(() => {
    Animated.timing(scale, {
      toValue: index === currentIndex ? 1 : 0.5,
      duration: 200,
      useNativeDriver: false
    }).start()
  }, [index, currentIndex, scale])

  return (
    <View
      style={{
        position: 'relative',
        width: ITEM_WIDTH,
        height: ITEM_HEIGHT,
        borderRadius: 12,
        paddingRight: horizontalScale(24),
        overflow: 'hidden'
      }}
    >
      <Animated.Image
        source={image}
        style={{
          width: '100%',
          height: '100%',
          borderRadius: 12,
          transform: [{ scale }]
        }}
      />
      <ImageBackground
        source={require('../../assets/img/backgroundBlur.png')}
        style={{
          borderRadius: 4,
          paddingVertical: 6,
          paddingHorizontal: 12,
          alignItems: 'center',
          gap: 12,
          position: 'absolute',
          bottom: 20,
          left: 24,
          flexDirection: 'row'
        }}
      >
        <Image source={ICONS.locationPin} />
        <Text style={{ color: COLORS.white, fontSize: 10, fontWeight: '500' }}>{label}</Text>
      </ImageBackground>
    </View>
  )
}

const CarouselCardItem = ({ item, index, currentIndex }) => {
  return <BeritaDanEventCarouselCard image={item.imgSrc} label={item.label} index={index} currentIndex={currentIndex} />
}

const ActiveDot = () => {
  return (
    <View
      style={{
        backgroundColor: COLORS.blue,
        width: 37,
        height: 5,
        marginRight: 4
      }}
    />
  )
}

const InactiveDot = () => {
  return (
    <View
      style={{
        backgroundColor: COLORS.black3,
        width: 8,
        height: 5,
        marginRight: 4
      }}
    />
  )
}

const CarouselBeritaDanEvent = () => {
  const isCarousel = React.useRef(null)
  const [index, setIndex] = React.useState(0)

  return (
    <View>
      <Carousel
        layout="default"
        ref={isCarousel}
        data={DataBeritaDanEvent}
        renderItem={({ item, index }) => <CarouselCardItem item={item} index={index} currentIndex={index} />}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        inactiveSlideShift={0}
        useScrollView={true}
        onSnapToItem={(index) => setIndex(index)}
        activeSlideAlignment="center"
        inactiveSlideOpacity={1}
        inactiveSlideScale={0.5}
      />
      <Pagination
        dotsLength={DataBeritaDanEvent.length}
        activeDotIndex={index}
        carouselRef={isCarousel}
        dotStyle={{
          width: 8,
          height: 5,
          borderRadius: 5,
          marginHorizontal: 0,
          backgroundColor: COLORS.blue
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={1}
        dotElement={<ActiveDot />}
        inactiveDotElement={<InactiveDot />}
      />
    </View>
  )
}

export default CarouselBeritaDanEvent
