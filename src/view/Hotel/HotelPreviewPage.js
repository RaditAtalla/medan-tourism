import { useGetPlaceDetailQuery } from '../../api/place.api'
import IMAGES from '../../assets/img/images'
import HotelPreview from '../../components/atoms/HotelPreview'
import { ActivityIndicator, View } from 'react-native'
import COLORS from '../../theme/colors'

const HotelPreviewPage = ({ route }) => {
  const { placeId } = route.params
  const { data: hotel, isSuccess } = useGetPlaceDetailQuery(placeId)

  if (!isSuccess) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color={COLORS.blue} />
      </View>
    )
  }

  return (
    <HotelPreview
      // data={DATA}
      name={hotel.result.name}
      description={
        hotel.result?.editorial_summary?.overview ? hotel.result?.editorial_summary?.overview : 'No description'
      }
      price={'535,550'}
      reviews={hotel.result.reviews}
      rating={Math.round(hotel.result.rating)}
      photos={hotel.result.photos}
      phone={hotel.result.formatted_phone_number}
      // images={DATA[0].images}
    />
  )
}

export default HotelPreviewPage
