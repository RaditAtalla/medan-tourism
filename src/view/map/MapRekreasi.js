import {
  SafeAreaView,
  StatusBar,
  Dimensions,
  Modal,
} from 'react-native';
import {useState} from 'react'
import Styles from '../../styles/MapStyles';
import MapHeader from '../../components/atoms/MapHeader';
import Map from '../../components/atoms/Map';
import IMAGES from '../../assets/img/images';
import MapText from '../../components/atoms/MapText';
import PlaceInforamationCard from '../../components/atoms/PlaceInformationCard';

const {width, height} = Dimensions.get('window');
const mapWidth = width * 4.3;
const mapHeight = height * 1.05;

const MapRekreasi = ({navigation}) => {
  const [popUp, setPopUp] = useState(false)
  return (
    <SafeAreaView style={Styles.container}>
      <StatusBar
        translucent
        backgroundColor="transparent"
      />
      <MapHeader placeholder='Cari tempat rekreasi' action={() => navigation.goBack()} />
      <Map map={IMAGES.mapRekreasi}>
        <MapText text={'Hotel adi mulia'} image={IMAGES.adiMulia} top={mapHeight/1.5} left={mapWidth/20} action={() => setPopUp(true)} />
        <MapText text={'Hotel adi mulia'} image={IMAGES.adiMulia} top={mapHeight/2.7} left={mapWidth/20} action={() => setPopUp(true)} />
        <MapText text={'Hotel adi mulia'} image={IMAGES.adiMulia} top={mapHeight/8} left={mapWidth/6} action={() => setPopUp(true)} />
        <MapText text={'Hotel adi mulia'} image={IMAGES.adiMulia} top={mapHeight/2} left={mapWidth/6} action={() => setPopUp(true)} />
        <MapText text={'Hotel adi mulia'} image={IMAGES.adiMulia} top={mapHeight/4.5} left={mapWidth/3} action={() => setPopUp(true)} />
        <MapText text={'Hotel adi mulia'} image={IMAGES.adiMulia} top={mapHeight/1.15} left={mapWidth/2} action={() => setPopUp(true)} />
        <MapText text={'Hotel adi mulia'} image={IMAGES.adiMulia} top={mapHeight/1.3} left={mapWidth/3.5} action={() => setPopUp(true)} />
        <MapText text={'Hotel adi mulia'} image={IMAGES.adiMulia} top={mapHeight/2} left={mapWidth/1.6} action={() => setPopUp(true)} />
        <MapText text={'Hotel adi mulia'} image={IMAGES.adiMulia} top={mapHeight/8} left={mapWidth/1.5} action={() => setPopUp(true)} />
        <MapText text={'Hotel adi mulia'} image={IMAGES.adiMulia} top={mapHeight/3.3} left={mapWidth/1.2} action={() => setPopUp(true)} />
      </Map>
      <Modal visible={popUp} animationType='slide' transparent={true} style={{ alignSelf: 'flex-end'}} >
        <PlaceInforamationCard image={IMAGES.adiMulia} name='Hotel Adi Mulia' open='08.00' close='21.00' rating={5} raters={1000} closeAction={() => setPopUp(false)} detailAction={() => navigation.navigate('DetailAdiMulia')} />
      </Modal>
    </SafeAreaView>
  );
};

export default MapRekreasi;
