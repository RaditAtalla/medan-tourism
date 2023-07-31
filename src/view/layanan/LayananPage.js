import {
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  StatusBar,
  Linking,
} from 'react-native';
import Styles from '../../styles/LayananPageStyles';
import LayananMenu from '../../components/atoms/LayananMenu';
import ICONS from '../../assets/icons/icons';

const LayananPage = () => {
  const openPhoneApp = () => {
    const url = `tel:${phoneNumber}`;
    Linking.openURL(url)
      .then(() => console.log('Phone app opened successfully.'))
      .catch(err =>
        console.error('An error occurred while opening the phone app: ', err),
      );
  };
  const phoneNumber = '081262156159'; // Replace this with the desired phone number

  const checkPhoneAvailability = async () => {
    const url = `tel:${phoneNumber}`;
    const isAvailable = await Linking.canOpenURL(url);
    if (isAvailable) {
      // The phone app can be opened with this URL
      openPhoneApp();
    } else {
      // The phone app is not available on the device
      console.error('Phone app is not available.');
    }
  };
  return (
    <SafeAreaView style={Styles.container}>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />
      <View style={Styles.wrapper}>
        <LayananMenu
          icon={ICONS.pmi}
          label="PMI"
          action={() => Linking.openURL('tel:081262156159')}
        />
        <LayananMenu icon={ICONS.polisi} label="Polisi" />
        <LayananMenu icon={ICONS.poskoBencanaAlam} label="Posko Bencana Alam" />
        <LayananMenu icon={ICONS.sar} label="SAR (Search And Rescue)" />
        <LayananMenu icon={ICONS.pln} label="PLN" />
        <LayananMenu icon={ICONS.pemadamKebakaran} label="Pemadam Kebakaran" />
        <LayananMenu icon={ICONS.ambulans} label="Ambulans" />
      </View>
    </SafeAreaView>
  );
};

export default LayananPage;
