import {
  SafeAreaView,
  StatusBar,
  Dimensions,
  Modal
} from 'react-native';
import {useState} from 'react'
import Styles from '../../styles/MapStyles';
import MapHeader from '../../components/atoms/MapHeader';
import Map from '../../components/atoms/Map';
import IMAGES from '../../assets/img/images';
import PlaceInforamationCard from '../../components/atoms/PlaceInformationCard';
import MapText from '../../components/atoms/MapText';

const {width, height} = Dimensions.get('window');
const mapWidth = width * 4.3;
const mapHeight = height * 1.05;

const MapKuliner = ({navigation}) => {
  const [popUp, setPopUp] = useState(false)
  return (
    <SafeAreaView style={Styles.container}>
      <StatusBar
        translucent
        backgroundColor="transparent"
      />
      <MapHeader placeholder='Cari hotel' action={() => navigation.goBack()} />
      <Map map={IMAGES.mapKuliner} >
        <MapText text={'Hotel adi mulia'} image={IMAGES.adiMulia} top={mapHeight/1.3} left={mapWidth/20} action={() => setPopUp(true)} />
        <MapText text={'Hotel adi mulia'} image={IMAGES.adiMulia} top={mapHeight/1.7} left={mapWidth/6} action={() => setPopUp(true)} />
        <MapText text={'Hotel adi mulia'} image={IMAGES.adiMulia} top={mapHeight/1.5} left={mapWidth/4} action={() => setPopUp(true)} />
        <MapText text={'Hotel adi mulia'} image={IMAGES.adiMulia} top={mapHeight/1.8} left={mapWidth/2.4} action={() => setPopUp(true)} />
        <MapText text={'Hotel adi mulia'} image={IMAGES.adiMulia} top={mapHeight/7} left={mapWidth/2.3} action={() => setPopUp(true)} />
        <MapText text={'Hotel adi mulia'} image={IMAGES.adiMulia} top={mapHeight/1.15} left={mapWidth/1.8} action={() => setPopUp(true)} />
        <MapText text={'Hotel adi mulia'} image={IMAGES.adiMulia} top={mapHeight/2.5} left={mapWidth/1.8} action={() => setPopUp(true)} />
        <MapText text={'Hotel adi mulia'} image={IMAGES.adiMulia} top={mapHeight/1.5} left={mapWidth/1.4} action={() => setPopUp(true)} />
        <MapText text={'Hotel adi mulia'} image={IMAGES.adiMulia} top={mapHeight/7} left={mapWidth/1.35} action={() => setPopUp(true)} />
        <MapText text={'Hotel adi mulia'} image={IMAGES.adiMulia} top={mapHeight/1.7} left={mapWidth/1.15} action={() => setPopUp(true)} />
      </Map>
      <Modal visible={popUp} animationType='slide' transparent={true} style={{ alignSelf: 'flex-end'}} >
        <PlaceInforamationCard image={IMAGES.adiMulia} name='Hotel Adi Mulia' open='08.00' close='21.00' rating={5} raters={1000} closeAction={() => setPopUp(false)} detailAction={() => navigation.navigate('DetailAdiMulia')} />
      </Modal>
    </SafeAreaView>
  );
};

export default MapKuliner;
