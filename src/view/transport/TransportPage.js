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
import CtaButton from '../../components/atoms/CtaButton.js';
import COLORS from '../../theme/colors.js';
import { verticalScale, moderateScale, horizontalScale } from '../../theme/responsive.js';

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
                    <CtaButton backgroundColor={COLORS.blue} borderRadius={4} vPadding={verticalScale(8)} hPadding={horizontalScale(12)} fFamily='Poppins-Bold' fSize={moderateScale(12)} fColor={COLORS.white} text='Lihat jadwal' action={() => navigation.navigate('TransportMetrodeliPage')} style={{marginTop: verticalScale(32)}} />
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
