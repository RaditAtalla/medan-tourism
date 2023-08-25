import { SafeAreaView, StatusBar, Dimensions, Modal } from 'react-native'
import { Fragment, useState } from 'react'

import PlaceInforamationCard from '../../components/atoms/PlaceInformationCard'
import { getImagePlace, transformData } from '../../utils/tranformData'
import { useGetPlacesQuery } from '../../api/place.api'
import MapHeader from '../../components/atoms/MapHeader'
import MapText from '../../components/atoms/MapText'
import Swipe from '../../components/atoms/Swipe'
import Map from '../../components/atoms/Map'
import IMAGES from '../../assets/img/images'
import Styles from '../../styles/MapStyles'
import { RANDOM_IMAGE } from '../../utils/environtment'

const { width, height } = Dimensions.get('window')
const mapWidth = width * 4.3
const mapHeight = height * 1.05

const MapHotel = ({ navigation }) => {
  const [popUp, setPopUp] = useState(false)
  const [modalData, setModalData] = useState()
  const [show, setShow] = useState(true)

  const { data, isSuccess } = useGetPlacesQuery('hotel')

  const mapHotelPosition = [
    { topPosition: 1.9, leftPosition: 90 },
    { topPosition: 6, leftPosition: 60 },
    { topPosition: 7, leftPosition: 6 },
    { topPosition: 2.8, leftPosition: 6 },
    { topPosition: 5, leftPosition: 3.3 },
    { topPosition: 6, leftPosition: 2.3 },
    { topPosition: 1.6, leftPosition: 2.5 },
    { topPosition: 2, leftPosition: 1.8 },
    { topPosition: 3, leftPosition: 1.71 },
    { topPosition: 2.5, leftPosition: 1.2 }
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
        <Swipe action={() => setShow(false)} image={IMAGES.mapHotel} />
      ) : (
        <Fragment>
          <MapHeader placeholder="Cari hotel" action={() => navigation.goBack()} />
          <Map map={IMAGES.mapHotel}>
            {isSuccess &&
              transformData(data, mapHotelPosition).map((item, index) => (
                <MapText
                  key={index}
                  text={item.name}
                  image={item.photos ? getImagePlace(item.photos[0].photo_reference) : `${RANDOM_IMAGE}?hotels`}
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
            image={modalData.photos ? getImagePlace(modalData.photos[0].photo_reference) : `${RANDOM_IMAGE}?hotels`}
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

export default MapHotel
