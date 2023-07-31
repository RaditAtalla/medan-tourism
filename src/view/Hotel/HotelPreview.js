import { Text, View } from 'react-native'
import Styles from '../../styles/HotelPreviewStyles'
import { HOTELDATA } from '../../components/atoms/HotelCarousel'

const HotelPreview = () => {
    return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', }}>
            <Text>Hotel Preview Page</Text>
        </View>
    )
}

export default HotelPreview