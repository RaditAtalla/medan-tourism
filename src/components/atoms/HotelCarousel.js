import {Image, View, Text, FlatList, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import COLORS from '../../theme/colors';
import {
  verticalScale,
  horizontalScale,
  moderateScale,
} from '../../theme/responsive';
import StarDisplay from './StarDisplay';

export const Item = ({image, name, distance, rating, price, action, width} ) => {
  return (
    <TouchableOpacity
      style={{
        width: horizontalScale(`${width}`),
        height: verticalScale(274),
        borderRadius: 16,
        marginRight: horizontalScale(24),
      }}
      onPress={action}>
      <Image
        source={image}
        style={{
          width: horizontalScale(`${width}`),
          height: verticalScale(156),
          objectFit: 'cover',
          borderTopLeftRadius: 16,
          borderTopRightRadius: 16,
        }}
      />
      <View
        style={{
          paddingHorizontal: horizontalScale(12),
          paddingVertical: verticalScale(12),
          backgroundColor: COLORS.white,
          gap: 10,
          borderBottomRightRadius: 16,
          borderBottomLeftRadius: 16,
          width: horizontalScale(`${width}`),
        }}>
        <View style={{gap: verticalScale(4)}}>
          <Text style={{color: COLORS.secondary, fontSize: moderateScale(10)}}>
            {distance}
          </Text>
          <Text style={{color: COLORS.black3, fontWeight: '500'}} numberOfLines={1}>{name}</Text>
          <StarDisplay rating={rating} />
        </View>
        <Text style={{color: COLORS.black3, fontWeight: '500'}}>
          IDR {price}
          <Text style={{fontSize: moderateScale(12), fontWeight: '400'}}>
            /malam
          </Text>
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const HotelCarousel = () => {
  const Item = ({image, name, distance, rating, price, action, width} ) => {

    return (
      <TouchableOpacity
        style={{
          width: horizontalScale(`${width}`),
          height: verticalScale(274),
          borderRadius: 16,
          marginRight: horizontalScale(24),
        }}
        onPress={action}>
        <Image
          source={image}
          style={{
            width: horizontalScale(`${width}`),
            height: verticalScale(156),
            objectFit: 'cover',
            borderTopLeftRadius: 16,
            borderTopRightRadius: 16,
          }}
        />
        <View
          style={{
            paddingHorizontal: horizontalScale(12),
            paddingVertical: verticalScale(12),
            backgroundColor: COLORS.white,
            gap: 10,
            borderBottomRightRadius: 16,
            borderBottomLeftRadius: 16,
            width: horizontalScale(`${width}`),
          }}>
          <View style={{gap: verticalScale(4)}}>
            <Text style={{color: COLORS.secondary, fontSize: moderateScale(10)}}>
              {distance}
            </Text>
            <Text style={{color: COLORS.black3, fontWeight: '500'}} numberOfLines={1}>{name}</Text>
            <StarDisplay rating={rating} />
          </View>
          <Text style={{color: COLORS.black3, fontWeight: '500'}}>
            IDR {price}
            <Text style={{fontSize: moderateScale(12), fontWeight: '400'}}>
              /malam
            </Text>
          </Text>
        </View>
      </TouchableOpacity>
    );
  };
  
  const navigation = useNavigation()

  const DATA = [
    {
      name: 'Arya Duta Medan',
      image: require('../../assets/img/aryaDuta.png'),
      distance: '2,5 Km',
      rating: 4,
      price: '540,550',
      action: () => navigation.navigate('HomeNavStackScreen', {screen: 'HotelPreviewPage'})
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
    {
      name: 'Arya Duta Medan 2',
      image: require('../../assets/img/aryaDuta.png'),
      distance: '2,5 Km',
      rating: 4,
      price: '540,550',
    },
    {
      name: 'Adi Mulia Medan 2',
      image: require('../../assets/img/adimulia.png'),
      distance: '3,5 Km',
      rating: 5,
      price: '918,000',
    },
    {
      name: 'Emerald Hotel 2',
      image: require('../../assets/img/emeraldHotel.png'),
      distance: '5 Km',
      rating: 4,
      price: '918,000',
    },
  ];
  return (
    <FlatList
      data={DATA}
      renderItem={({item}) => (
        <Item
          image={item.image}
          name={item.name}
          distance={item.distance}
          rating={item.rating}
          price={item.price}
          action={item.action}
          width={199}
        />
      )}
      keyExtractor={item => item.name}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      style={{
        paddingLeft: horizontalScale(24),
      }}
    />
  );
};

export default HotelCarousel;
