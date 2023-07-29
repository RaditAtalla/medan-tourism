import {
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import ICONS from '../../assets/icons/icons';
import Styles from '../../styles/AktifitasPageStyles';
import AktifitasButton from '../../components/atoms/AktifitasButton';

const AktifitasPage = ({ navigation }) => {
  return <SafeAreaView style={Styles.container}>
    <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
    />
    <View style={Styles.buttonContainer}>
      <AktifitasButton icon={ICONS.saveFill} label='Disimpan' action={() => navigation.navigate('HomeNavStackScreen', {screen: 'DisimpanPage'}) } />
      <AktifitasButton icon={ICONS.globe} label='Terakhir Dilihat' action={() => navigation.navigate('HomeNavStackScreen', {screen: 'TerakhirDilihatPage'}) } />
    </View>
  </SafeAreaView>
};

export default AktifitasPage;
