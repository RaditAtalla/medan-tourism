import { Image, View, Text, FlatList } from 'react-native'
import COLORS from '../../theme/colors'
import { verticalScale, horizontalScale, moderateScale } from '../../theme/responsive'
import StarDisplay from './StarDisplay'

const DATA = [
    {
        name: 'Arya Duta Medan',
        image: require('../../assets/img/aryaDuta.png'),
        distance: '2,5 Km',
        rating: 4,
        price: '540,550',
    },
    {
        name: 'Adi Mulia Medan',
        image: require('../../assets/img/adimulia.png'),
        distance: '3,5 Km',
        rating: 5,
        price: '918,000',
    },
    {
        name: 'Emerald Hotel',
        image: require('../../assets/img/emeraldHotel.png'),
        distance: '5 Km',
        rating: 4,
        price: '918,000',
    },
]

const Item = ({ image, name, distance, rating, price }) => {
    return(
        <View style={{ width: horizontalScale(199), height: verticalScale(274), borderRadius: 16, marginRight: horizontalScale(24) }}>
            <Image source={image} style={{ width: horizontalScale(199), height: verticalScale(156), objectFit: 'cover', borderTopLeftRadius: 16, borderTopRightRadius: 16 }} />
            <View style={{ paddingHorizontal: horizontalScale(12), paddingVertical: verticalScale(12), backgroundColor: COLORS.white, gap: 10, borderBottomRightRadius: 16, borderBottomLeftRadius: 16, width: horizontalScale(199) }}>
                <View style={{ gap: verticalScale(4) }}>
                    <Text style={{ color: COLORS.secondary, fontSize: moderateScale(10) }}>{distance}</Text>
                    <Text style={{ color: COLORS.black3, fontWeight: '500' }}>{name}</Text>
                    <StarDisplay rating={rating} />
                </View>
                <Text style={{ color: COLORS.black3, fontWeight: '500' }}>IDR {price}<Text style={{ fontSize: moderateScale(12), fontWeight: '400' }}>/malam</Text></Text>
            </View>
        </View>
    )
}

const HotelCarousel = () => {
    return(
        <FlatList
            data={DATA}
            renderItem={({item}) => <Item image={item.image} name={item.name} distance={item.distance} rating={item.rating} price={item.price} />}
            keyExtractor={item => item.name}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={{
                paddingLeft: horizontalScale(24)
            }}
        />
    )
}

export default HotelCarousel