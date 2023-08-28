import MapDetail from '../../components/atoms/MapDetail'
import { useGetPlaceDetailQuery } from '../../api/place.api'
import { getImagePlace, getTimePlace } from '../../utils/tranformData'
import { RANDOM_IMAGE } from '../../utils/environtment'

const DetailAdiMulia = ({ route }) => {
  const { placeId } = route.params
  const { data, isSuccess } = useGetPlaceDetailQuery(placeId)

  return (
    isSuccess && (
      <MapDetail
        image={data.result.photos ? getImagePlace(data.result.photos[0].photo_reference) : `${RANDOM_IMAGE}?hotels`}
        name={data.result.name}
        address={data.result.formatted_address}
        leftTitle={
          data.result.current_opening_hours
            ? 'Buka Pada'
            : data.result.international_phone_number
            ? 'No. Telepon'
            : 'Alamat'
        }
        leftText={
          data.result.current_opening_hours
            ? `${getTimePlace(data.result.current_opening_hours.periods[0].open.time)} - ${getTimePlace(
                data.result.current_opening_hours.periods[0].close.time
              )} WIB`
            : data.result.international_phone_number || data.result.vicinity
        }
        open="08.00"
        close="21.00"
        // minPrice="500.000"
        // maxPrice="1.000.000"
        minPrice="500K"
        maxPrice="1.000K"
        description={data.result?.editorial_summary?.overview ?? 'No Description'}
        destination={data.result?.geometry?.location}
      />
    )
  )
}

export default DetailAdiMulia
