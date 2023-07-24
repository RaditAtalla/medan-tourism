import {
  Image,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import {
  verticalScale,
  horizontalScale,
  moderateScale,
} from '../../theme/responsive';

const TransportPage = ({navigation}) => {
  return (
    <SafeAreaView style={styles.body}>
      <View style={styles.container}>
        <View style={styles.content}>
          <View style={styles.hero}>
            <View>
              <Image
                style={styles.city}
                source={require('../../assets/img/city.png')}
              />
            </View>
            <View style={styles.box}>
              <View style={styles.inputGroup}>
                <View>
                  <TextInput
                    placeholder="Temukan Transportasi"
                    value="Halte, Stasiun, atau rute jalan"
                  />
                </View>
                <View>
                  <TouchableOpacity style={styles.searchIconWrapper}>
                    <Image source={require('../../assets/icons/search.png')} />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.menuWrapper}>
            <View>
              <Text style={styles.menuTitle}>
                Pilih jenis transportasi anda
              </Text>
            </View>
            <View style={styles.menu}>

            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
  },
  content: {
    width: '100%',
    height: verticalScale(635),
    backgroundColor: 'rgba(255,255,255,1)',
    borderTopStartRadius: 50,
    borderTopEndRadius: 50,
    paddingHorizontal: 24,
  },
  hero: {
    alignItems: 'center',
    marginTop: -200,
  },
  city: {
    width: 184,
    height: 183,
  },
  box: {
    width: '100%',
    height: 107,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(232, 243, 244, 1)',
    borderRadius: 24,
    marginTop: -25,
    paddingHorizontal: 22,
  },
  inputGroup: {
    width: '100%',
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 24,
    height: 53,
    paddingHorizontal: 15,
  },
  searchIconWrapper: {
    width: 56,
    height: 31,
    backgroundColor: '#36C9C1',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },
  menuWrapper: {
    marginTop: 68,
  },
  menuTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#3b4949',
  },
  menu: {
    marginTop: 24
  }
});

export default TransportPage;
