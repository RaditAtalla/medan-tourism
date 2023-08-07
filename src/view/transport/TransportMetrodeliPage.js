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
import {useState} from 'react';
import Modal from 'react-native-modal';
import { SlideInDown } from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native';
import CtaButton from '../../components/atoms/CtaButton';
import COLORS from '../../theme/colors';
import { verticalScale, moderateScale, horizontalScale } from '../../theme/responsive';

export default TransportMetrodeliPage = () => {
  const [modal, setModal] = useState(false);
  const navigation = useNavigation()
  return (
    <SafeAreaView>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <ScrollView>
          <View style={styles.container}>
            <View style={styles.content}>
              <TransportInputGroup
                HeroImage={IMAGES.city}
                Placeholder={'Temukan transportasi'}
                Value={'Halte, Stasiun, atau rute jalan'}
              />
              <View style={styles.menuWrapper}>
                <View style={styles.menuTitleWrapper}>
                  <View>
                    <Text style={styles.menuTitle}>
                      Pilih halte yang tersedia
                    </Text>
                  </View>
                  <View>
                    <TouchableOpacity onPress={() => setModal(true)}>
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
                      action={() => navigation.navigate('TransportKoridorPage')}
                    />
                  </View>
                  <View style={[styles.menu, styles.menu2]}>
                    <KoridorCard
                      koridorNumber={'2'}
                      trekText={'Terminal Amplas – Lapangan Merdeka'}
                      halteImage={IMAGES.purpleHalte}
                    />
                  </View>
                  <View style={[styles.menu, styles.menu3]}>
                    <KoridorCard
                      koridorNumber={'3'}
                      trekText={'Terminal Pinang Baris – Lapangan Merdeka'}
                      halteImage={IMAGES.yellowHalte}
                    />
                  </View>
                  <View style={[styles.menu, styles.menu4]}>
                    <KoridorCard
                      koridorNumber={'4'}
                      trekText={'Medan Tuntungan – Lapangan Merdeka'}
                      halteImage={IMAGES.redHalte}
                    />
                  </View>
                  <View style={[styles.menu, styles.menu5]}>
                    <KoridorCard
                      koridorNumber={'5'}
                      trekText={'Tembung – Lapangan Merdeka'}
                      halteImage={IMAGES.blueHalte}
                    />
                  </View>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
        <Modal
          isVisible={modal}
          animationIn={'slideInDown'}
          animationInTiming={700}
          animationOut={'slideOutUp'}
          animationOutTiming={700}
          style={{marginHorizontal: -20, marginVertical: 0}}>
          <View style={styles.popUpWrapper}>
            <View style={styles.popUp}>
              <View>
                <Image
                  style={styles.popUpIcon}
                  source={require('../../assets/icons/moreInformation.png')}
                />
              </View>
              <View style={styles.popUpInformation}>
                <Text style={styles.popUpTitle}>
                  INFORMASI BUS/HALTE METRODELI
                </Text>
                <Text style={styles.popUpJamOperasiDanTarif}>
                  Jam operasi : 04.30 WIB - 19.41 WIB Tarif : Rp 4.300
                </Text>
                <CtaButton backgroundColor={COLORS.blue} borderRadius={12} vPadding={verticalScale(12)} hPadding={horizontalScale(82)} fFamily='Poppins-Bold' fSize={moderateScale(16)} fColor={COLORS.white} text='Log In' action={() => setModal(false)} style={{marginTop: verticalScale(21)}} />
              </View>
            </View>
          </View>
        </Modal>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};
