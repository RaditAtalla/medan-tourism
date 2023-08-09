
import {
  Text,
  View,
  StatusBar,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Styles from '../../styles/HomePageStyles';
import ICONS from '../../assets/icons/icons';
import MenuButton from '../../components/atoms/MenuButton';
import EventCarousel from '../../components/atoms/EventCarousel';
import FeedCarousel from '../../components/atoms/FeedCarousel';
import { verticalScale } from '../../theme/responsive';

const HomePage = ({navigation}) => {
  return (
    <SafeAreaView style={Styles.container}>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={Styles.headerContainer}>
          <Image
            source={require('../../assets/img/homeBackground.png')}
            style={Styles.background}
          />
          <View style={Styles.headerButtons}>
            <TouchableOpacity>
              <Image source={ICONS.notif} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('ProfilePage')}>
              <Image
                source={require('../../assets/img/profilePic.png')}
                style={Styles.profilePic}
              />
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
            <MenuButton
              icon={ICONS.travelIcon}
              label="Travel"
              action={() => navigation.navigate('TravelPage')}
            />
            <MenuButton
              icon={ICONS.hotelIcon}
              label="Hotel"
              action={() => navigation.navigate('HomeNavStackScreen', {screen: 'Map'})}
            />
            <MenuButton
              icon={ICONS.transportIcon}
              label="Transport"
              action={() => navigation.navigate('HomeNavStackScreen', {screen: 'TransportPage'})}
            />
            <MenuButton
              icon={ICONS.rekreasiIcon}
              label="Rekreasi"
              action={() => navigation.navigate('RekreasiPage')}
            />
            <MenuButton
              icon={ICONS.layananIcon}
              label="Layanan"
              action={() => navigation.navigate('HomeNavStackScreen', {screen: 'LayananPage'})}
            />
            <MenuButton
              icon={ICONS.miceIcon}
              label="M I C E"
              action={() => navigation.navigate('HomeNavStackScreen', {screen: 'MicePage'})}
            />
            <MenuButton
              icon={ICONS.stasiunIcon}
              label="Stasiun"
              action={() => navigation.navigate('StasiunPage')}
            />
            <MenuButton
              icon={ICONS.lainnyaIcon}
              label="Lainnya"
              action={() => navigation.navigate('HomeNavStackScreen', {screen: 'LainnyaPage'})}
            />
          </View>
          <View style={Styles.eventContainer}>
            <Text style={Styles.sectionTitle}>Event</Text>
            <EventCarousel />
          </View>
          <View style={Styles.feedContainer}>
            <View style={Styles.feedTitle}>
              <Image source={ICONS.twitter} style={Styles.feedIcon} />
              <Text style={[Styles.sectionTitle, { paddingHorizontal: 0}]}>Cuitan Twitter</Text>
            </View>
            <FeedCarousel />
          </View>
          <View style={[Styles.feedContainer, { marginBottom: verticalScale(78) }]}>
            <View style={Styles.feedTitle}>
              <Image source={ICONS.facebook} style={Styles.feedIcon} />
              <Text style={[Styles.sectionTitle, { paddingHorizontal: 0}]}>Postingan Facebook</Text>
            </View>
            <FeedCarousel />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomePage;
