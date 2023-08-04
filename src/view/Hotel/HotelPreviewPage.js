import {Text, View} from 'react-native';
import Styles from '../../styles/HotelPreviewStyles';
import IMAGES from '../../assets/img/images';
import ICONS from '../../assets/icons/icons';

const DATA = [
  {
    images: [
      require('../../assets/img/aryaDuta.png'),
      require('../../assets/img/adimulia.png'),
      require('../../assets/img/emeraldHotel.png'),
      require('../../assets/img/aryaDuta.png'),
      require('../../assets/img/adimulia.png'),
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
        comment:
          'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et.',
      },
      {
        profilePic: IMAGES.profilePic,
        username: 'Raditya Atalla',
        rating: 5,
        comment:
          'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et.',
      },
    ],
  },
];

const HotelPreviewPage = () => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Hotel Preview Page</Text>
    </View>
  );
};

export default HotelPreviewPage;
