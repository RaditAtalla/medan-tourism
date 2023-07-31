import {
  View,
  SafeAreaView,
  ScrollView,
  Text,
  Image,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import ICONS from '../../assets/icons/icons';
import IMAGES from '../../assets/img/images';
import Styles from '../../styles/TerakhirDilihatPageStyles';
import HotelCarousel from '../../components/atoms/HotelCarousel';
import EventDanBeritaCarousel from '../../components/atoms/EventDanBeritaCarousel';
import TempatWisataDetailCarousel from '../../components/atoms/TempatWisataDetailCarousel';
import { verticalScale } from '../../theme/responsive';
import LihatSemuaButton from '../../components/atoms/LihatSemuaButton';

const SemuaHotelPage = () => {
  return (
    <SafeAreaView style={Styles.container}>
      <Text>Semua Hotel Page</Text>
    </SafeAreaView>
  );
};

export default SemuaHotelPage;