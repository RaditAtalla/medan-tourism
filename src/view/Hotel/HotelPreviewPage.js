import { useGetPlaceDetailQuery } from '../../api/place.api'
import IMAGES from '../../assets/img/images'
import HotelPreview from '../../components/atoms/HotelPreview'
import { ActivityIndicator, View } from 'react-native'
import COLORS from '../../theme/colors'

const DATA = [
  {
    images: [
      require('../../assets/img/aryaDutaFull.png'),
      require('../../assets/img/hotelHd.png'),
      require('../../assets/img/aryaDutaFull.png'),
      require('../../assets/img/hotelHd.png'),
      require('../../assets/img/aryaDutaFull.png')
    ],
    name: 'Aryaduta Medan',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus.',
    price: '535,550',
    rating: 5,
    comments: [
      {
        profilePic: IMAGES.profilePic,
        username: 'Ibnu Rusyid',
        rating: 5,
        comment: 'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et.'
      },
      {
        profilePic: IMAGES.profilePic,
        username: 'Raditya Atalla',
        rating: 5,
        comment: 'Gacor kang'
      }
    ]
  }
]

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
      // images={DATA[0].images}
    />
  )
}

export default HotelPreviewPage
