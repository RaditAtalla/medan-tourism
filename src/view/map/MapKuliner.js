import { SafeAreaView, StatusBar, Dimensions, Modal } from 'react-native'
import { Fragment, useState } from 'react'

import PlaceInforamationCard from '../../components/atoms/PlaceInformationCard'
import MapHeader from '../../components/atoms/MapHeader'
import MapText from '../../components/atoms/MapText'
import Map from '../../components/atoms/Map'
import IMAGES from '../../assets/img/images'
import Styles from '../../styles/MapStyles'
import Swipe from '../../components/atoms/Swipe'
import { getImagePlace, transformData } from '../../utils/tranformData'
import { useGetPlacesQuery } from '../../api/place.api'
import { RANDOM_IMAGE } from '../../utils/environtment'

const { width, height } = Dimensions.get('window')
const mapWidth = width * 4.3
const mapHeight = height * 1.05

const MapKuliner = ({ navigation }) => {
  const [popUp, setPopUp] = useState(false)
  const [modalData, setModalData] = useState()
  const [show, setShow] = useState(true)

  const { data, isSuccess } = useGetPlacesQuery('kuliner')

  const mapKulinerPosition = [
    { topPosition: 1.3, leftPosition: 20 },
    { topPosition: 1.8, leftPosition: 8 },
    { topPosition: 2.2, leftPosition: 3.8 },
    { topPosition: 1.5, leftPosition: 4 },
    { topPosition: 1.8, leftPosition: 2.4 },
    { topPosition: 7, leftPosition: 2.3 },
    { topPosition: 1.15, leftPosition: 1.8 },
    { topPosition: 2.5, leftPosition: 1.8 },
    { topPosition: 1.5, leftPosition: 1.6 },
    { topPosition: 6.5, leftPosition: 1.55 },
    { topPosition: 1.8, leftPosition: 1.55 }
  ]

  const handleModal = (item) => {
    setModalData(item)
    setPopUp(true)
  }

  const handleNavigateToDetail = () => {
    setPopUp(false)
    navigation.navigate('DetailAdiMulia', { placeId: modalData.place_id })
  }

  return (
    <SafeAreaView style={Styles.container}>
      <StatusBar translucent backgroundColor="transparent" />

      {show ? (
        <Swipe action={() => setShow(false)} image={IMAGES.mapKuliner} />
      ) : (
        <Fragment>
          <MapHeader placeholder="Cari Stasiun" action={() => navigation.goBack()} />
          <Map map={IMAGES.mapKuliner}>
            {isSuccess &&
              transformData(data, mapKulinerPosition).map((item, index) => (
                <MapText
                  key={index}
                  text={item.name}
                  image={item.photos ? getImagePlace(item.photos[0].photo_reference) : `${RANDOM_IMAGE}?culinary`}
                  top={mapHeight / item.topPosition}
                  left={mapWidth / item.leftPosition}
                  action={() => handleModal(item)}
                />
              ))}
          </Map>
        </Fragment>
      )}

      <Modal visible={popUp} animationType="slide" transparent={true} style={{ alignSelf: 'flex-end' }}>
        {modalData && (
          <PlaceInforamationCard
            name={modalData.name}
            image={modalData.photos ? getImagePlace(modalData.photos[0].photo_reference) : `${RANDOM_IMAGE}?culinary`}
            openHours={modalData.opening_hours}
            rating={modalData.rating}
            raters={modalData.user_ratings_total}
            placeId={modalData.place_id}
            closeAction={() => setPopUp(false)}
            detailAction={handleNavigateToDetail}
            // detailAction={() => {}}
          />
        )}
      </Modal>
    </SafeAreaView>
  )
}

export default MapKuliner
