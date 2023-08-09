import {
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import { AccordionWisataLainnya, AccordionKuliner, AccordionHeritage } from '../../components/atoms/Accordion';
import Styles from '../../styles/LainnyaPageStyles'
import CtaButton from '../../components/atoms/CtaButton';
import { verticalScale, moderateScale } from '../../theme/responsive';

const LainnyaPage = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />
      <ScrollView style={Styles.container}>
        <AccordionWisataLainnya title='Wisata Lainnya' action={() => navigation.navigate('HomeNavStackScreen', {screen: 'MapRekreasi'})} />
        <AccordionKuliner title='Kuliner' action={() => navigation.navigate('HomeNavStackScreen', {screen: 'MapKuliner'})} />
        <AccordionHeritage title='Heritage' action={() => navigation.navigate('HomeNavStackScreen', {screen: 'MapHeritage'})} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default LainnyaPage;
