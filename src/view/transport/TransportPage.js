import {
  Image,
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  KeyboardAvoidingView,
} from 'react-native';
import {styles} from '../../styles/Transport.style.js';
import TransportInputGroup from '../../components/atoms/TransportInputGroup.js';
import IMAGES from '../../assets/img/images.js';

export default TransportPage = ({navigation}) => {
  return (
    <SafeAreaView style={styles.body}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <View style={styles.container}>
          <View style={styles.content}>
            <TransportInputGroup HeroImage={IMAGES.city} HeroImageWidth={184} HeroImageHeight={183} Placeholder={'Temukan transportasi'} Value={'Halte, Stasiun, atau rute jalan'} />
            <View style={styles.menuWrapper}>
              <View>
                <Text style={styles.menuTitle}>
                  Pilih jenis transportasi anda
                </Text>
              </View>
              <View>
                <View style={styles.menu}>
                  <View>
                    <Text
                      style={[
                        styles.menuTitleBus,
                        styles.menuTitleBusMetrodeli,
                      ]}>
                      BUS
                    </Text>
                    <Text
                      style={[
                        styles.menuTitleMetrodeli,
                        styles.menuTitleBusMetrodeli,
                      ]}>
                      METRODELI
                    </Text>
                    <TouchableOpacity
                      style={styles.button}
                      onPress={() =>
                        navigation.navigate('TransportMetrodeliPage')
                      }>
                      <Text style={styles.buttonText}>Lihat Jadwal</Text>
                    </TouchableOpacity>
                  </View>
                  <View>
                    <Image source={require('../../assets/img/bus.png')} />
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};
