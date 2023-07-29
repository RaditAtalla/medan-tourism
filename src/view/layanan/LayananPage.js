import {
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import Styles from '../../styles/LayananPageStyles';
import LayananMenu from '../../components/atoms/LayananMenu';
import ICONS from '../../assets/icons/icons';

const LayananPage = () => {
  return (
    <SafeAreaView style={Styles.container}>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />
      <View style={Styles.wrapper}>
        <LayananMenu icon={ICONS.pmi} label='PMI' />
        <LayananMenu icon={ICONS.polisi} label='Polisi' />
        <LayananMenu icon={ICONS.poskoBencanaAlam} label='Posko Bencana Alam' />
        <LayananMenu icon={ICONS.poskoKomandoMedan} label='Posko Komando Kota Medan' />
        <LayananMenu icon={ICONS.sar} label='SAR (Search And Rescue)' />
        <LayananMenu icon={ICONS.pln} label='PLN' />
        <LayananMenu icon={ICONS.pemadamKebakaran} label='Pemadam Kebakaran' />
        <LayananMenu icon={ICONS.ambulans} label='Ambulans' />
      </View>
    </SafeAreaView>
  );
};

export default LayananPage;
