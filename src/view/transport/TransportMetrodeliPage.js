import {
  Image,
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import {styles} from '../../styles/TransportMetrodeli.style';
import TransportInputGroup from '../../components/atoms/TransportInputGroup.js';
import IMAGES from '../../assets/img/images';
import KoridorCard from '../../components/atoms/KoridorCard';

export default TransportMetrodeliPage = ({navigation}) => {
  return (
    <SafeAreaView>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <ScrollView>
          <View style={styles.container}>
            <View style={styles.content}>
              <TransportInputGroup />
              <View style={styles.menuWrapper}>
                <View style={styles.menuTitleWrapper}>
                  <View>
                    <Text style={styles.menuTitle}>
                      Pilih jenis transportasi anda
                    </Text>
                  </View>
                  <View>
                    <TouchableOpacity>
                      <Image
                        style={styles.moreInformationIcon}
                        source={require('../../assets/icons/moreInformation.png')}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
                <View>
                  <View style={[styles.menu, styles.menu1]}>
                    <KoridorCard
                      koridorNumber={'1'}
                      trekText={'Terminal Pinang Baris – Lapangan Merdeka'}
                      halteImage={IMAGES.greenHalte}
                      props="red"
                    />
                  </View>
                  <View style={[styles.menu, styles.menu2]}>
                    <KoridorCard
                      koridorNumber={'2'}
                      trekText={'Terminal Pinang Baris – Lapangan Merdeka'}
                      halteImage={IMAGES.purpleHalte}
                      props="red"
                    />
                  </View>
                  <View style={[styles.menu, styles.menu3]}>
                    <KoridorCard
                      koridorNumber={'3'}
                      trekText={'Terminal Pinang Baris – Lapangan Merdeka'}
                      halteImage={IMAGES.yellowHalte}
                      props="red"
                    />
                  </View>
                  <View style={[styles.menu, styles.menu4]}>
                    <KoridorCard
                      koridorNumber={'4'}
                      trekText={'Terminal Pinang Baris – Lapangan Merdeka'}
                      halteImage={IMAGES.redHalte}
                      props="red"
                    />
                  </View>
                  <View style={[styles.menu, styles.menu5]}>
                    <KoridorCard
                      koridorNumber={'5'}
                      trekText={'Terminal Pinang Baris – Lapangan Merdeka'}
                      halteImage={IMAGES.blueHalte}
                      props="red"
                    />
                  </View>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};
