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
import ICONS from '../../assets/icons/icons';

const LainnyaPage = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />
      <ScrollView style={Styles.container}>
        <AccordionWisataLainnya title='Wisata Lainnya' action={() => navigation.navigate('HomeNavStackScreen', {screen: 'Map'})} />
        <AccordionKuliner title='Kuliner' />
        <AccordionHeritage title='Kuliner' />
      </ScrollView>
    </SafeAreaView>
  );
};

export default LainnyaPage;
