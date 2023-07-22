import {StyleSheet} from 'react-native';
import {verticalScale, moderateScale} from '../constant/responsive';
import {COLORS} from '../constant/theme';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    display: 'flex',
    alignItems: 'center',
  },
  icon: {
    width: 237,
    height: 237,
  },
  informationWrapper: {
    marginTop: 30,
    width: 250,
  },
  information: {
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
    color: '#3b4949',
  },
  form: {
    width: 362,
    marginTop: 40,
  },
  lupaPasswordAlternativeWrapper: {
    marginVertical: 52,
  },
  lupaPasswordAlternativeText: {
    fontSize: 14,
    textDecorationLine: 'underline',
    fontWeight: '500',
    color: '#36c9c1',
    textAlign: 'center',
  },
  buttonWrapper: {
    width: 362,
  },
  loginBtn: {
    width: '100%',
    backgroundColor: COLORS.blue,
    borderRadius: 12,
    paddingVertical: verticalScale(14),
  },
  loginText: {
    textAlign: 'center',
    color: 'white',
    fontWeight: '600',
    fontSize: moderateScale(18),
  },
});

export default styles;
