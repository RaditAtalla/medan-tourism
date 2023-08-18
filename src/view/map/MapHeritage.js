import { SafeAreaView, StatusBar, Dimensions, Modal } from 'react-native'
import { useState } from 'react'

import PlaceInforamationCard from '../../components/atoms/PlaceInformationCard'
import MapHeader from '../../components/atoms/MapHeader'
import MapText from '../../components/atoms/MapText'
import Styles from '../../styles/MapStyles'
import Map from '../../components/atoms/Map'
import IMAGES from '../../assets/img/images'

const { width, height } = Dimensions.get('window')
const mapHeight = height * 1.05
const mapWidth = width * 4.3

const MapHeritage = ({ navigation }) => {
  const [popUp, setPopUp] = useState(false)

  return (
    <SafeAreaView style={Styles.container}>
      <StatusBar translucent backgroundColor="transparent" />
      <MapHeader placeholder="Cari hotel" action={() => navigation.goBack()} />
      <Map map={IMAGES.mapHeritage}>
        {DATA.map((item, index) => (
          <MapText
            text="Hotel adi mulia"
            image={IMAGES.adiMulia}
            top={mapHeight / item.top}
            left={mapWidth / item.left}
            action={() => setPopUp(true)}
          />
        ))}

        {/* <MapText
          text={'Hotel adi mulia'}
          image={IMAGES.adiMulia}
          top={mapHeight / 1.5}
          left={mapWidth / 20}
          action={() => setPopUp(true)}
        />
        <MapText
          text={'Hotel adi mulia'}
          image={IMAGES.adiMulia}
          top={mapHeight / 4}
          left={mapWidth / 6}
          action={() => setPopUp(true)}
        />
        <MapText
          text={'Hotel adi mulia'}
          image={IMAGES.adiMulia}
          top={mapHeight / 2.4}
          left={mapWidth / 2.8}
          action={() => setPopUp(true)}
        />
        <MapText
          text={'Hotel adi mulia'}
          image={IMAGES.adiMulia}
          top={mapHeight / 1.8}
          left={mapWidth / 2.2}
          action={() => setPopUp(true)}
        />
        <MapText
          text={'Hotel adi mulia'}
          image={IMAGES.adiMulia}
          top={mapHeight / 7}
          left={mapWidth / 2.9}
          action={() => setPopUp(true)}
        />
        <MapText
          text={'Hotel adi mulia'}
          image={IMAGES.adiMulia}
          top={mapHeight / 1.35}
          left={mapWidth / 1.6}
          action={() => setPopUp(true)}
        />
        <MapText
          text={'Hotel adi mulia'}
          image={IMAGES.adiMulia}
          top={mapHeight / 2.7}
          left={mapWidth / 1.6}
          action={() => setPopUp(true)}
        />
        <MapText
          text={'Hotel adi mulia'}
          image={IMAGES.adiMulia}
          top={mapHeight / 1.7}
          left={mapWidth / 1.15}
          action={() => setPopUp(true)}
        /> */}
      </Map>
      <Modal visible={popUp} animationType="slide" transparent={true} style={{ alignSelf: 'flex-end' }}>
        <PlaceInforamationCard
          image={IMAGES.adiMulia}
          name="Hotel Adi Mulia"
          open="08.00"
          close="21.00"
          rating={5}
          raters={1000}
          closeAction={() => setPopUp(false)}
          detailAction={() => navigation.navigate('DetailAdiMulia')}
        />
      </Modal>
    </SafeAreaView>
  )
}

export default MapHeritage
