import { View, Text, StyleSheet, Image } from 'react-native'
import COLORS from '../../theme/colors'
import CtaButton from '../../components/atoms/CtaButton'
import { verticalScale, moderateScale, horizontalScale } from '../../theme/responsive'
import { useNavigation } from '@react-navigation/native'

export default function KoridorCard({ koridorNumber, trekText, halteImage, action }) {
  const navigation = useNavigation()
  const styles = StyleSheet.create({
    menu: {
      width: 406,
      height: 273,
      borderRadius: 8,
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      paddingLeft: 24,
      paddingVertical: 30
    },
    koridorTextWrapper: {
      width: 80
    },
    koridorText: {
      fontSize: 20,
      fontWeight: '700',
      color: '#252525'
    },
    trekTextWrapper: {
      marginTop: 20,
      width: 130
    },
    button: {
      backgroundColor: 'white',
      width: 102,
      height: 34,
      borderRadius: 4,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 32
    },
    buttonText: {
      fontSize: 12,
      fontWeight: '700',
      color: COLORS.black4
    }
  })

  return (
    <View style={styles.menu}>
      <View>
        <View style={styles.koridorTextWrapper}>
          <Text style={styles.koridorText}>Koridor {koridorNumber}</Text>
        </View>
        <View style={styles.trekTextWrapper}>
          <Text style={styles.trekText}>{trekText}</Text>
        </View>
        {/* <TouchableOpacity style={styles.button} onPress={action}>
          <Text style={styles.buttonText}>Lihat Halte</Text>
        </TouchableOpacity> */}
        <CtaButton
          backgroundColor={COLORS.white}
          borderRadius={4}
          vPadding={verticalScale(8)}
          hPadding={horizontalScale(12)}
          fFamily="Poppins-Bold"
          fSize={moderateScale(12)}
          fColor={COLORS.black1}
          text="Lihat halte"
          action={action}
          style={{ marginTop: verticalScale(32) }}
        />
      </View>
      <View>
        <Image source={halteImage} />
      </View>
    </View>
  )
}
