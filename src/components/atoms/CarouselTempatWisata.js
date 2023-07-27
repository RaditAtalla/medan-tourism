import React from 'react'
import { View, Text, Dimensions, Image, ImageBackground } from "react-native"
import Carousel, { Pagination } from 'react-native-snap-carousel'
import { verticalScale, horizontalScale } from '../../theme/responsive'
import COLORS from '../../theme/colors'
import ICONS from '../../assets/icons/icons'

const SLIDER_WIDTH = Dimensions.get('window').width
const ITEM_WIDTH = horizontalScale(298)
const ITEM_HEIGHT = verticalScale(173)

const dataTempatWisata = [
    {
        label: 'Danau Toba',
        imgSrc: require("../../assets/img/danauToba.png"),
    },
    {
        label: 'Si Piso-Piso',
        imgSrc: require("../../assets/img/sipisoPiso.png"),
    },
    {
        label: 'Bukit Holbung',
        imgSrc: require("../../assets/img/bukitHolbung.png"),
    },
];

const TempatWisataCarouselCard = ({ image, label }) => {
    return(
        <View style={{
            position: 'relative',
            width: ITEM_WIDTH,
            height: ITEM_HEIGHT,
            borderRadius: 12,
            paddingRight: horizontalScale(24),
        }}>
            <Image source={image} style={{ width: '100%', height: '100%', borderRadius: 12,}} />
            <ImageBackground source={require('../../assets/img/backgroundBlur.png')} style={{
                borderRadius: 4,
                paddingVertical: 6,
                paddingHorizontal: 12,
                alignItems: 'center',
                gap: 12,
                position: 'absolute',
                bottom: 20,
                left: 24,
                flexDirection: 'row',
            }}>
                <Image source={ICONS.locationPin} />
                <Text style={{ color: COLORS.white, fontSize: 10, fontWeight: 500, }}>{label}</Text>
            </ImageBackground>
        </View>
    )
}

const CarouselCardItem = ({ item, index }) => {
    return (
        <TempatWisataCarouselCard image={item.imgSrc} label={item.label} />
    )
}

const ActiveDot = () => {
    return(
        <View style={{ backgroundColor: COLORS.blue, width: 37, height: 5, marginRight: 4 }}></View>
    )
}

const InactiveDot = () => {
    return(
        <View style={{ backgroundColor: COLORS.black3, width: 8, height: 5, marginRight: 4 }}></View>
    )
}

const CarouselTempatWisata = () => {
    const isCarousel = React.useRef(null)
    const [index, setIndex] = React.useState(0)

    return (
        <View>
            <Carousel
            layout="default"
            ref={isCarousel}
            data={dataTempatWisata}
            renderItem={CarouselCardItem}
            sliderWidth={SLIDER_WIDTH}
            itemWidth={ITEM_WIDTH}
            inactiveSlideShift={0}
            useScrollView={true}
            onSnapToItem={(index) => setIndex(index)}
            activeSlideAlignment='start'
            inactiveSlideOpacity={1}
            inactiveSlideScale={1}
            />
            <Pagination
            dotsLength={dataTempatWisata.length}
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

export default CarouselTempatWisata