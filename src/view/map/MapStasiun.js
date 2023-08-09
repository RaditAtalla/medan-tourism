import {
  SafeAreaView,
  StatusBar,
} from 'react-native';
import Styles from '../../styles/MapStyles';
import MapHeader from '../../components/atoms/MapHeader';
import Map from '../../components/atoms/Map';
import IMAGES from '../../assets/img/images';

const MapStasiun = ({navigation}) => {
  return (
    <SafeAreaView style={Styles.container}>
      <StatusBar
        translucent
        backgroundColor="transparent"
      />
      <MapHeader placeholder='Cari hotel' action={() => navigation.goBack()} />
      <Map map={IMAGES.mapStasiun} />
    </SafeAreaView>
  );
};

export default MapStasiun;
