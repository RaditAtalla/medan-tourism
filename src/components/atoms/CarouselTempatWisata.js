// import React from 'react';
// import {
//   View,
//   Text,
//   Dimensions,
//   Image,
//   ImageBackground,
//   TouchableOpacity,
// } from 'react-native';
// import Carousel, {Pagination} from 'react-native-snap-carousel';
// import {verticalScale, horizontalScale} from '../../theme/responsive';
// import COLORS from '../../theme/colors';
// import ICONS from '../../assets/icons/icons';

// const SLIDER_WIDTH = Dimensions.get('window').width;
// const ITEM_WIDTH = horizontalScale(298);
// const ITEM_HEIGHT = verticalScale(173);

// export const dataTempatWisata = [
//   {
//     name: 'Danau Toba',
//     image: require('../../assets/img/danauToba.png'),
//     distance: '2,5 Km',
//     rating: 4,
//   },
//   {
//     name: 'Si Piso-Piso',
//     image: require('../../assets/img/sipisoPiso.png'),
//     distance: '2,5 Km',
//     rating: 4,
//   },
//   {
//     name: 'Bukit Holbung',
//     image: require('../../assets/img/bukitHolbung.png'),
//     distance: '2,5 Km',
//     rating: 4,
//   },
// ];

// const TempatWisataCarouselCard = ({image, name}) => {
//   return (
//     <TouchableOpacity
//       style={{
//         position: 'relative',
//         width: ITEM_WIDTH,
//         height: ITEM_HEIGHT,
//         borderRadius: 12,
//         paddingLeft: horizontalScale(25),
//       }}>
//       <Image
//         source={image}
//         style={{width: '100%', height: '100%', borderRadius: 12}}
//       />
//       <ImageBackground
//         source={require('../../assets/img/backgroundBlur.png')}
//         style={{
//           borderRadius: 4,
//           paddingVertical: 6,
//           paddingHorizontal: 12,
//           alignItems: 'center',
//           gap: 12,
//           position: 'absolute',
//           bottom: 20,
//           left: 24,
//           flexDirection: 'row',
//         }}>
//         <Image source={ICONS.locationPin} />
//         <Text style={{color: COLORS.white, fontSize: 10, fontWeight: 500}}>
//           {name}
//         </Text>
//       </ImageBackground>
//     </TouchableOpacity>
//   );
// };

// const CarouselCardItem = ({item, index}) => {
//   return <TempatWisataCarouselCard image={item.image} name={item.name} />;
// };

// const ActiveDot = () => {
//   return (
//     <View
//       style={{
//         backgroundColor: COLORS.blue,
//         width: 37,
//         height: 5,
//         marginRight: 4,
//       }}></View>
//   );
// };

// const InactiveDot = () => {
//   return (
//     <View
//       style={{
//         backgroundColor: COLORS.black3,
//         width: 8,
//         height: 5,
//         marginRight: 4,
//       }}></View>
//   );
// };

// const CarouselTempatWisata = () => {
//   const isCarousel = React.useRef(null);
//   const [index, setIndex] = React.useState(0);

//   return (
//     <View>
//       <Carousel
//         layout="default"
//         ref={isCarousel}
//         data={dataTempatWisata}
//         renderItem={CarouselCardItem}
//         sliderWidth={SLIDER_WIDTH}
//         itemWidth={ITEM_WIDTH}
//         inactiveSlideShift={0}
//         useScrollView={true}
//         onSnapToItem={index => setIndex(index)}
//         activeSlideAlignment="start"
//         inactiveSlideOpacity={1}
//         inactiveSlideScale={1}
//       />
//       <Pagination
//         dotsLength={dataTempatWisata.length}
//         activeDotIndex={index}
//         carouselRef={isCarousel}
//         dotStyle={{
//           width: 8,
//           height: 5,
//           borderRadius: 5,
//           marginHorizontal: 0,
//           backgroundColor: COLORS.blue,
//         }}
//         inactiveDotOpacity={0.4}
//         inactiveDotScale={1}
//         dotElement={<ActiveDot />}
//         inactiveDotElement={<InactiveDot />}
//       />
//     </View>
//   );
// };

// export default CarouselTempatWisata;

import { View, Text, Dimensions, Image, ImageBackground, TouchableOpacity, StyleSheet } from 'react-native'
import Carousel, { Pagination } from 'react-native-snap-carousel'
import React from 'react'

import { verticalScale, horizontalScale } from '../../theme/responsive'
import { dataTempatWisata as DATA } from '../../utils/dataDummy'
import ICONS from '../../assets/icons/icons'
import COLORS from '../../theme/colors'

const SLIDER_WIDTH = Dimensions.get('window').width
const ITEM_WIDTH = horizontalScale(298)
const ITEM_HEIGHT = verticalScale(173)

const TempatWisataCarouselCard = ({ image, name }) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image source={image} style={{ width: '100%', height: '100%', borderRadius: 12 }} />
      <ImageBackground source={require('../../assets/img/backgroundBlur.png')} style={styles.imageBackground}>
        <Image source={ICONS.locationPin} />
        <Text style={{ color: COLORS.white, fontSize: 10, fontWeight: 500 }}>{name}</Text>
      </ImageBackground>
    </TouchableOpacity>
  )
}

const CarouselCardItem = ({ item, index }) => {
  return <TempatWisataCarouselCard image={item.image} name={item.name} />
}

const ActiveDot = () => {
  return <View style={[styles.dot, { backgroundColor: COLORS.blue, width: 37 }]} />
}

const InactiveDot = () => {
  return <View style={[styles.dot, { backgroundColor: COLORS.black3, width: 8 }]} />
}

const CarouselTempatWisata = () => {
  const isCarousel = React.useRef(null)
  const [index, setIndex] = React.useState(0)

  return (
    <View>
      <Carousel
        layout="default"
        ref={isCarousel}
        data={DATA}
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
        dotsLength={DATA.length}
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
