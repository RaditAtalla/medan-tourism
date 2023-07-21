import {StyleSheet} from 'react-native';
import {verticalScale, moderateScale, horizontalScale} from '../constant/responsive';
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
    width: 236,
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
  labelWrapper: {
    marginLeft: horizontalScale(20),
  },
  label: {
    fontSize: moderateScale(14),
    color: '#3B4949',
  },
  inputWrapper: {
    marginTop: 11,
    paddingHorizontal: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'rgba(247, 247, 247, 1)',
    borderRadius: 20,
  },
  input2Wrapper: {
    marginTop: 24,
  },
  input: {
    fontSize: 20
  },
  eye: {
    width: 14,
    height: 14
  },
  buttonWrapper: {
    width: 362,
    marginTop: 45,
  },
  ubahPasswordBtn: {
    width: '100%',
    backgroundColor: COLORS.blue,
    borderRadius: 20,
    paddingVertical: verticalScale(14),
  },
  ubahPasswordText: {
    textAlign: 'center',
    color: 'white',
    fontWeight: '600',
    fontSize: moderateScale(18),
  },
});

export {styles};
