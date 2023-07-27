import { FlatList, Image } from 'react-native'
import { horizontalScale, verticalScale } from '../../theme/responsive'

const DATA = [
    {
        image: require('../../assets/img/event1.png')
    },
    {
        image: require('../../assets/img/event2.png')
    },
    {
        image: require('../../assets/img/event3.png')
    },
    {
        image: require('../../assets/img/event4.png')
    },
]

const Item = ({ image }) => {
    return(
        <Image source={image} style={{ borderRadius: 12, width: horizontalScale(282), height: verticalScale(192), objectFit: 'cover', marginRight: horizontalScale(24) }} />
    )
}

const EventCarousel = () => {
    return(
        <FlatList
            data={DATA}
            renderItem={({item}) => <Item image={item.image} />}
            keyExtractor={item => item.image}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
        />
    )
}

export default EventCarousel