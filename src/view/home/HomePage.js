import {
  Text,
  View,
  StatusBar,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import COLORS from '../../theme/colors';
import Styles from '../../styles/HomePageStyles';
import ICONS from '../../assets/icons/icons';

const HomePage = ({navigation}) => {
  return (
    <SafeAreaView style={Styles.container}>
      <StatusBar barStyle='light-content' translucent backgroundColor='transparent' />
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
        
      </View>
    </SafeAreaView>
  );
};

export default HomePage;
