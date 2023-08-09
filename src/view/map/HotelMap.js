import {
  SafeAreaView,
  View,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Image,
  Dimensions,
} from 'react-native';
import {useState, useEffect} from 'react';
import Styles from '../../styles/MapStyles';
import MapSplashInfo from '../../components/atoms/MapSplashInfo';
import PlaceInforamationCard from '../../components/atoms/PlaceInformationCard';
import ICONS from '../../assets/icons/icons';
import {horizontalScale, verticalScale} from '../../theme/responsive';
import COLORS from '../../theme/colors';
import MapHeader from '../../components/atoms/MapHeader';
import Map from '../../components/atoms/Map';
import IMAGES from '../../assets/img/images';

const {width, height} = Dimensions.get('window');
const mapWidth = width * 4.3;
const mapHeight = height * 1.1;

const HotelMap = ({navigation}) => {
  // useEffect(() => {
  //   const image = Image.resolveAssetSource(
  //     require('../../assets/img/mapHotel.png'),
  //   );
  //   Image.prefetch(image.uri)
  //     .then(() => {
  //       setImageLoaded(true);
  //     })
  //     .catch(error => {
  //       console.log('Error prefetching image:', error);
  //     });
  // }, []);

  // const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <SafeAreaView style={Styles.container}>
      <StatusBar
        // barStyle="dark-content"
        translucent
        backgroundColor="transparent"
      />
      <MapHeader placeholder='Cari hotel' />
      <Map map={IMAGES.mapHotel} />
      {/* <View style={{position: 'absolute'}}>
        <MapSplashInfo />
      </View>
      <View style={Styles.mapRootContainer}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={{width: mapWidth, height: mapHeight}}>
            <Image
              key={new Date().getTime()}
              source={require('../../assets/img/mapHotel.png')}
              style={{width: '100%', height: '100%'}}
              resizeMode={'stretch'}
            />
          </View>
        </ScrollView>
      </View> */}
      {/* <View style={{ position: 'absolute', bottom: 0 }}>
        <PlaceInforamationCard
          image={require('../../assets/img/maimun.png')}
          name="Istana Maimun"
          open="08.00"
          close="17.00"
          rating={4}
          raters={117}
          style={{
            alignSelf: 'flex-end',
          }}
        />
      </View> */}
    </SafeAreaView>
  );
};

export default HotelMap;
