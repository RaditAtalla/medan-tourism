import { Image, View, Text, FlatList, TouchableOpacity } from 'react-native'
import COLORS from '../../theme/colors'
import { verticalScale, horizontalScale } from '../../theme/responsive'
import StarDisplayDetail from './StarDisplayDetail'

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
    },
]

const Item = ({ image, name, rating, raters }) => {
    return(
        <View style={{ paddingVertical: verticalScale(10), paddingHorizontal: horizontalScale(12), borderRadius: 12, backgroundColor: COLORS.white, width: horizontalScale(296), height: verticalScale(112), gap: 10, flexDirection: 'row', alignItems: 'flex-start', marginRight: verticalScale(24), }}>
            <Image source={image} style={{ width: horizontalScale(83), height: verticalScale(83), objectFit: 'cover', borderRadius: 12, }} /> 
            <View style={{ gap: verticalScale(16), }}>
                <View style={{ gap: verticalScale(4), width: '90%' }}>
                    <Text style={{ fontWeight: '700', color: COLORS.black3 }}>{name}</Text>
                    <StarDisplayDetail rating={rating} raters={raters} />
                </View>
                <View style={{ flexDirection: 'row', gap: horizontalScale(16), }}>
                    <TouchableOpacity style={{ paddingVertical: verticalScale(10), paddingHorizontal: horizontalScale(12), }}>
                        <Text style={{ color: COLORS.blue, fontWeight: '700', }}>Rute</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ paddingVertical: verticalScale(10), paddingHorizontal: horizontalScale(12), borderRadius: 8, backgroundColor: COLORS.blue }}>
                        <Text style={{ color: COLORS.white, fontWeight: '700', }}>Pesan Tiket</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const HotelCarousel = () => {
    return(
        <FlatList
            data={DATA}
            renderItem={({item}) => <Item image={item.image} name={item.name} rating={item.rating} raters={item.raters} />}
            keyExtractor={item => item.name}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
        />
    )
}

export default HotelCarousel