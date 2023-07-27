import {StyleSheet} from 'react-native'

export default function koridorBackgroudColor({koridorBackgroudColor, code}) {
  const styles = StyleSheet.create({
    menu: {
      marginTop: 24,
      width: 406,
      height: 273,
      backgroundColor: {koridorBackgroudColor},
      borderRadius: 8,
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      paddingLeft: 24,
      paddingVertical: 30,
    },
  });

  return <View style={styles.menu}>{code}</View>;
}
