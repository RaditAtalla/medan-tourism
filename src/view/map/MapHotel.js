import { SafeAreaView, TouchableOpacity, StatusBar, Dimensions, Modal, View, Text, StyleSheet } from 'react-native'
import { Fragment, useState } from 'react'

import PlaceInforamationCard from '../../components/atoms/PlaceInformationCard'
import MapHeader from '../../components/atoms/MapHeader'
import MapText from '../../components/atoms/MapText'
import PhoneSwipe from '../../assets/gif/gif'
import Map from '../../components/atoms/Map'
import IMAGES from '../../assets/img/images'
import Styles from '../../styles/MapStyles'
import COLORS from '../../theme/colors'

const { width, height } = Dimensions.get('window')
const mapWidth = width * 4.3
const mapHeight = height * 1.05

const MapHotel = ({ navigation }) => {
  const [popUp, setPopUp] = useState(false)
  const [show, setShow] = useState(true)

  return (
    <SafeAreaView style={Styles.container}>
      <StatusBar translucent backgroundColor="transparent" />
      <MapHeader placeholder="Cari hotel" action={() => navigation.goBack()} />
      <Map map={IMAGES.mapHotel}>
        {show ? (
          <View style={styles.container}>
            <View style={{ gap: 24, width: 288, alignItems: 'center' }}>
              <PhoneSwipe />
              <Text style={styles.text}>Swipe kanan dan kiri untuk menjelajahi map</Text>
              <TouchableOpacity onPress={() => setShow(false)} style={styles.btn}>
                <Text style={{ textAlign: 'center', color: COLORS.white }}>Oke</Text>
              </TouchableOpacity>
            </View>
          </View>
        ) : (
          <Fragment>
            <MapText
              text={'Hotel adi mulia'}
              image={IMAGES.adiMulia}
              top={mapHeight / 1.9}
              left={mapWidth / 90}
              action={() => setPopUp(true)}
            />
            <MapText
              text={'Hotel adi mulia'}
              image={IMAGES.adiMulia}
              top={mapHeight / 7}
              left={mapWidth / 20}
              action={() => setPopUp(true)}
            />
            <MapText
              text={'Hotel adi mulia'}
              image={IMAGES.adiMulia}
              top={mapHeight / 7}
              left={mapWidth / 6}
              action={() => setPopUp(true)}
            />
            <MapText
              text={'Hotel adi mulia'}
              image={IMAGES.adiMulia}
              top={mapHeight / 2.8}
              left={mapWidth / 6}
              action={() => setPopUp(true)}
            />
            <MapText
              text={'Hotel adi mulia'}
              image={IMAGES.adiMulia}
              top={mapHeight / 5}
              left={mapWidth / 3.3}
              action={() => setPopUp(true)}
            />
            <MapText
              text={'Hotel adi mulia'}
              image={IMAGES.adiMulia}
              top={mapHeight / 8}
              left={mapWidth / 2.3}
              action={() => setPopUp(true)}
            />
            <MapText
              text={'Hotel adi mulia'}
              image={IMAGES.adiMulia}
              top={mapHeight / 1.6}
              left={mapWidth / 2.5}
              action={() => setPopUp(true)}
            />
            <MapText
              text={'Hotel adi mulia'}
              image={IMAGES.adiMulia}
              top={mapHeight / 2}
              left={mapWidth / 1.8}
              action={() => setPopUp(true)}
            />
            <MapText
              text={'Hotel adi mulia'}
              image={IMAGES.adiMulia}
              top={mapHeight / 5}
              left={mapWidth / 1.71}
              action={() => setPopUp(true)}
            />
            <MapText
              text={'Hotel adi mulia'}
              image={IMAGES.adiMulia}
              top={mapHeight / 2.5}
              left={mapWidth / 1.2}
              action={() => setPopUp(true)}
            />
          </Fragment>
        )}
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)'
  },
  text: { fontFamily: 'Poppins-SemiBold', fontSize: 24, textAlign: 'center', color: COLORS.white },
  btn: { width: 211, backgroundColor: COLORS.blue, borderRadius: 10 }
})

export default MapHotel
