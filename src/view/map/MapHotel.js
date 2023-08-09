import {
  SafeAreaView,
  StatusBar,
  Dimensions
} from 'react-native';
import Styles from '../../styles/MapStyles';
import MapHeader from '../../components/atoms/MapHeader';
import Map from '../../components/atoms/Map';
import IMAGES from '../../assets/img/images';
import MapText from '../../components/atoms/MapText';

const {width, height} = Dimensions.get('window');
const mapWidth = width * 4.3;
const mapHeight = height * 1.05;

const MapHotel = ({navigation}) => {
  return (
    <SafeAreaView style={Styles.container}>
      <StatusBar
        translucent
        backgroundColor="transparent"
      />
      <MapHeader placeholder='Cari hotel' action={() => navigation.goBack()} />
      <Map map={IMAGES.mapHotel} >
        <MapText text={'Hotel adi mulia'} image={IMAGES.adiMulia} top={mapHeight/2.3} left={mapWidth/90} />
      </Map>
    </SafeAreaView>
  );
};

export default MapHotel;
