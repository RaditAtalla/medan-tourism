import {
  Text,
  View,
  SafeAreaView,
  StatusBar,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import Styles from '../../styles/SearchPageStyles';
import ICONS from '../../assets/icons/icons';
import CarouselTempatWisata from '../../components/atoms/CarouselTempatWisata';
import BandaraCarousel from '../../components/atoms/BandaraCarousel';
import HotelCarousel from '../../components/atoms/HotelCarousel';
import {verticalScale} from '../../theme/responsive';

const SearchPage = ({navigation}) => {
  return (
    <SafeAreaView style={Styles.container}>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />
      <View style={Styles.headerContainer}>
        <View style={Styles.inputGroup}>
          <Image source={ICONS.search} style={Styles.icon} />
          <TextInput
            placeholder="Cari hotel, flight, dan lainnya..."
            style={Styles.input}
            onPressIn={() => navigation.navigate('SearchStackScreen')}
          />
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('ProfilePage')}>
          <Image
            source={require('../../assets/img/profilePic.png')}
            style={Styles.profilePic}
          />
        </TouchableOpacity>
      </View>
      <ScrollView style={Styles.contentContainer}>
        <View style={Styles.sectionContainer}>
          <Text style={Styles.sectionTitle}>Tempat Wisata</Text>
          <CarouselTempatWisata />
        </View>
        <View style={Styles.sectionContainer}>
          <View style={Styles.sectionTitleContainer}>
            <Text style={Styles.sectionTitle}>Hotel</Text>
            <TouchableOpacity>
              <Text style={Styles.lihatSemua}>Lihat semua</Text>
            </TouchableOpacity>
          </View>
          <HotelCarousel />
        </View>
        <View
          style={[Styles.sectionContainer, {marginBottom: verticalScale(77)}]}>
          <View style={Styles.sectionTitleContainer}>
            <Text style={Styles.sectionTitle}>Bandara</Text>
            <TouchableOpacity>
              <Text style={Styles.lihatSemua}>Lihat semua</Text>
            </TouchableOpacity>
          </View>
          <BandaraCarousel />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SearchPage;
