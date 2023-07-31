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
import Styles from '../../styles/DisimpanPageStyles';
import HotelCarousel from '../../components/atoms/HotelCarousel';
import EventDanBeritaCarousel from '../../components/atoms/EventDanBeritaCarousel';
import TempatWisataDetailCarousel from '../../components/atoms/TempatWisataDetailCarousel';
import { verticalScale } from '../../theme/responsive';
import LihatSemuaButton from '../../components/atoms/LihatSemuaButton';

const DisimpanPage = ({ navigation }) => {
  return (
    <SafeAreaView style={Styles.container}>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />
      <ScrollView style={Styles.wrapper}>
        <View style={Styles.sectionContainer}>
          <View style={Styles.sectionTitleContainer}>
            <Text style={Styles.sectionTitle}>Hotel</Text>
            <LihatSemuaButton action={() => navigation.navigate('SemuaHotelPage')} />
          </View>
          <HotelCarousel />
        </View>
        <View style={Styles.sectionContainer}>
          <View style={Styles.sectionTitleContainer}>
            <Text style={Styles.sectionTitle}>Berita & Event</Text>
            <LihatSemuaButton action={() => navigation.navigate('SemuaBeritaPage')} />
          </View>
          <EventDanBeritaCarousel />
        </View>
        <View style={[Styles.sectionContainer, { marginBottom: verticalScale(70)}]}>
          <View style={Styles.sectionTitleContainer}>
            <Text style={Styles.sectionTitle}>Tempat Wisata</Text>
            <LihatSemuaButton action={() => navigation.navigate('SemuaHotelPage')} />
          </View>
          <TempatWisataDetailCarousel />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DisimpanPage;
