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

const {width, height} = Dimensions.get('window');
const mapWidth = width * 4.3;
const mapHeight = height * 1.1;

const Map = ({navigation}) => {
  useEffect(() => {
    const image = Image.resolveAssetSource(
      require('../../assets/img/mapHotel.png'),
    );
    Image.prefetch(image.uri)
      .then(() => {
        setImageLoaded(true);
      })
      .catch(error => {
        console.log('Error prefetching image:', error);
      });
  }, []);

  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <SafeAreaView style={Styles.container}>
      <StatusBar
        // barStyle="dark-content"
        translucent
        backgroundColor="transparent"
      />
      <View style={Styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Image
            source={ICONS.backButtonBlack}
            style={{width: horizontalScale(24), objectFit: 'contain' }}
          />
          <View style={{ backgroundColor: COLORS.white, width: horizontalScale(50), height: verticalScale(50), objectFit: 'contain', borderRadius: 100, position: 'absolute', zIndex: -1 }} />
        </TouchableOpacity>
        <TouchableOpacity style={Styles.inputContainer}>
          <Image
            source={ICONS.search}
            style={{
              width: horizontalScale(20),
              height: verticalScale(20),
              objectFit: 'contain',
            }}
          />
          <TextInput
            placeholder="Cari Hotel"
            placeholderTextColor={COLORS.black3}
            selectionColor={COLORS.blue}
            style={Styles.inputField}
          />
        </TouchableOpacity>
      </View>
      <View style={{position: 'absolute'}}>
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
      </View>
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

export default Map;
