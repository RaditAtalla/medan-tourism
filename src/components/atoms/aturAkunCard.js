import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import COLORS from '../../theme/colors';
import ICONS from '../../assets/icons/icons';

export default function AturAkunCard({action, Icon, CardTitle, CardDescription}) {
  const styles = StyleSheet.create({
    container: {
      width: '100%',
      height: '100%',
      backgroundColor: 'white',
    },
    card: {
      width: '100%',
      height: 74,
      flexDirection: 'row',
      justifyContent: 'space-evenly',
    },
    cardTitle: {
      fontSize: 16,
      fontWeight: '600',
      color: COLORS.black4,
    },
    connectIconWrapper: {
      marginTop: 5,
    },
    cardDescription: {
      width: 245,
      marginTop: 8,
      color: COLORS.black4,
    },
    caretWrapper: {
      marginTop: 20,
    },
  });

  return (
    <TouchableOpacity onPress={action} style={styles.card}>
      <View style={styles.connectIconWrapper}>
        <Image style={styles.connectIcon} source={Icon} />
      </View>
      <View>
        <Text style={styles.cardTitle}>{CardTitle}</Text>
        <Text style={styles.cardDescription}>{CardDescription}</Text>
      </View>
      <View style={styles.caretWrapper}>
        <Image source={ICONS.caret} />
      </View>
    </TouchableOpacity>
  );
}
