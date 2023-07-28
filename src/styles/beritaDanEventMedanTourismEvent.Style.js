import { StyleSheet } from 'react-native';
import COLORS from '../theme/colors';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    paddingHorizontal: 16,
    paddingVertical: 20,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 24,
    backgroundColor: '#f7f7f7',
    paddingHorizontal: 12,
  },
  input: {
    marginLeft: 10
  },
  title: {
    marginTop: 32,
    fontSize: 24,
    fontWeight: '700',
    fontFamily: 'Poppins-Bold',
    color: COLORS.black4,
  },
});

export {styles}