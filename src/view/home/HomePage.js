import {
  Text,
  View,
  StatusBar,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import COLORS from '../../theme/colors';
import Styles from '../../styles/HomePageStyles';
import ICONS from '../../assets/icons/icons';
import MenuButton from '../../components/atoms/MenuButton';
import EventCarousel from '../../components/atoms/EventCarousel';

const HomePage = ({navigation}) => {
  return (
    <SafeAreaView style={Styles.container}>
      <StatusBar barStyle='light-content' translucent backgroundColor='transparent' />
      <ScrollView>
        <View style={Styles.headerContainer}>
          <Image source={require('../../assets/img/homeBackground.png')} style={Styles.background} />
          <View style={Styles.headerButtons}>
            <TouchableOpacity>
              <Image source={ICONS.notif} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('ProfilePage')}>
              <Image source={require('../../assets/img/profilePic.png')} style={Styles.profilePic} />
            </TouchableOpacity>
          </View>
          <Text style={Styles.title}>Temukan tempat{'\n'}untuk anda!</Text>
          <View style={Styles.locationContainer}>
            <Image source={ICONS.locationPin} />
            <Text style={Styles.location}>Medan Polonia</Text>
          </View>
        </View>
        <View style={Styles.contentContainer}>
          <View style={Styles.menuContainer}>
            <MenuButton icon={ICONS.travelIcon} label='Travel' action={() => navigation.navigate('TravelPage')} />
            <MenuButton icon={ICONS.hotelIcon} label='Hotel' action={() => navigation.navigate('HotelPage')} />
            <MenuButton icon={ICONS.transportIcon} label='Transport' action={() => navigation.navigate('TransportPage')} />
            <MenuButton icon={ICONS.rekreasiIcon} label='Rekreasi' action={() => navigation.navigate('RekreasiPage')} />
            <MenuButton icon={ICONS.layananIcon} label='Layanan' action={() => navigation.navigate('LayananPage')} />
            <MenuButton icon={ICONS.miceIcon} label='M I C E' action={() => navigation.navigate('MicePage')} />
            <MenuButton icon={ICONS.stasiunIcon} label='Stasiun' action={() => navigation.navigate('StasiunPage')} />
            <MenuButton icon={ICONS.lainnyaIcon} label='Lainnya' action={() => navigation.navigate('LainnyaPage')} />
          </View>
          <View style={Styles.eventContainer}>
            <Text style={Styles.sectionTitle}>Event</Text>
            <EventCarousel />
          </View>
          <View style={Styles.twitterContainer}>
          <Text>tes</Text>
          </View>
          <View style={Styles.facebookContainer}>
          <Text>tes</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomePage;
