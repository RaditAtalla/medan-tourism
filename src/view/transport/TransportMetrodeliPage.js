import {Image, View, Text, TouchableOpacity, SafeAreaView} from 'react-native';
import {styles} from '../../styles/TransportMetrodeli.style.js';
import TransportInputGroup from '../../components/atoms/TransportInputGroup.js';

const TransportMetrodeliPage = ({navigation}) => {
  return (
    <SafeAreaView style={styles.body}>
      <View style={styles.container}>
        <View style={styles.content}>
          <TransportInputGroup />
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
                    style={[styles.menuTitleBus, styles.menuTitleBusMetrodeli]}>
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
                    onPress={navigation.navigate('TransportMetrodeliPage')}>
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
    </SafeAreaView>
  );
};

export default TransportPage;
