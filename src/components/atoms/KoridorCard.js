import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import COLORS from '../../theme/colors';

export default function KoridorCard({
  koridorText,
  koridorNumber,
  buttonBackgroundColor,
}) {
  const styles = StyleSheet.create({
    koridorTextWrapper: {
      width: 80,
    },
    koridorText: {
      fontSize: 20,
      fontWeight: '700',
      color: COLORS.black4,
    },
    trekTextWrapper: {
      marginTop: 20,
      width: 130,
    },
    button: {
      width: 102,
      height: 34,
      borderRadius: 4,
      backgroundColor: {buttonBackgroundColor},
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 32,
    },
    buttonText: {
      fontSize: 12,
      fontWeight: '700',
      color: '#fff',
    },
  });

  return (
    <View>
      <View style={styles.koridorTextWrapper}>
        <Text style={styles.koridorText}>Koridor {koridorNumber}</Text>
      </View>
      <View style={styles.trekTextWrapper}>
        <Text style={styles.trekText}>{koridorText}</Text>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('TransportMetrodeliPage')}>
        <Text style={styles.buttonText}>Lihat Halte</Text>
      </TouchableOpacity>
    </View>
  );
}