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

const DisimpanPage = () => {
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
            <TouchableOpacity>
              <Text style={Styles.lihatSemua}>Lihat semua</Text>
            </TouchableOpacity>
          </View>
          <HotelCarousel />
        </View>
        <View style={Styles.sectionContainer}>
          <View style={Styles.sectionTitleContainer}>
            <Text style={Styles.sectionTitle}>Berita & Event</Text>
            <TouchableOpacity>
              <Text style={Styles.lihatSemua}>Lihat semua</Text>
            </TouchableOpacity>
          </View>
          <EventDanBeritaCarousel />
        </View>
        <View style={[Styles.sectionContainer, { marginBottom: verticalScale(70)}]}>
          <View style={Styles.sectionTitleContainer}>
            <Text style={Styles.sectionTitle}>Tempat Wisata</Text>
            <TouchableOpacity>
              <Text style={Styles.lihatSemua}>Lihat semua</Text>
            </TouchableOpacity>
          </View>
          <TempatWisataDetailCarousel />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DisimpanPage;
