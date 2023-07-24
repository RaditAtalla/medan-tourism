import {Image, View, Text, TouchableOpacity, SafeAreaView} from 'react-native';
import {styles} from '../../styles/TransportMetrodeli.style';
import TransportInputGroup from '../../components/atoms/TransportInputGroup.js';

export default TransportMetrodeliPage = ({navigation}) => {
  return (
    <SafeAreaView style={styles.body}>
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
              <View style={styles.menu}>
                <View>
                  <View style={styles.koridorTextWrapper}>
                    <Text style={styles.koridorText}>Koridor 1</Text>
                  </View>
                  <View style={styles.trekTextWrapper}>
                    <Text style={styles.trekText}>
                      Terminal Pinang Baris – Lapangan Merdeka
                    </Text>
                  </View>
                  <TouchableOpacity
                    style={styles.button}
                    onPress={navigation.navigate('TransportMetrodeliPage')}>
                    <Text style={styles.buttonText}>Lihat Halte</Text>
                  </TouchableOpacity>
                </View>
                <View>
                  <Image source={require('../../assets/img/halte.png')} />
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
