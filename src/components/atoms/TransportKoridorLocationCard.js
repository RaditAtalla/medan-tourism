import {View, Image, Text, StyleSheet} from 'react-native';
import COLORS from '../../theme/colors';

export default function KoridorLocationCard({halteName, halteLocation}) {
  return (
    <View style={styles.halteCard}>
      <View style={styles.wrapper}>
        <View>
          <Image source={require('../../assets/icons/map.png')} />
        </View>
        <View style={styles.halteLocationWrapper}>
          <Text style={styles.halteName}>{halteName}</Text>
          <Text style={styles.halteLocation}>{halteLocation}</Text>
        </View>
      </View>
      <View style={styles.caretRightWrapper}>
        <Image source={require('../../assets/icons/caretRight.png')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  halteCard: {
    width: 340,
    height: 97,
    backgroundColor: 'white',
    borderRadius: 20,
    shadowColor: 'rgba(59, 73, 73, 0.21)',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowRadius: 20,
    elevation: 20,
    shadowOpacity: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15
  },
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  halteLocationWrapper: {
    marginLeft: 24,
  },
  halteName: {
    fontSize: 16,
    fontWeight: '500',
    color: COLORS.black4,
  },
  halteLocation: {
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
    color: '#3b4949',
  },
});
