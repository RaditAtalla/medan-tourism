import {StyleSheet} from 'react-native';
import {verticalScale} from '../theme/responsive';
import COLORS from '../theme/colors';

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
  menuWrapper: {
    marginTop: 68,
  },
  menuTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#3b4949',
  },
  menuTitleWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  moreInformationIcon: {
    width: 25,
    height: 25,
  },
  menu: {
    marginTop: 24,
    width: 406,
    height: 273,
    borderRadius: 8,
    backgroundColor: 'rgba(54, 201, 193, 0.5)',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingLeft: 24,
    paddingVertical: 30,
  },
  koridorTextWrapper: {
    width: 80
  },
  koridorText: {
    fontSize: 20,
    fontWeight: '700',
    color: '#252525',
  },
  trekTextWrapper: {
    marginTop: 20,
    width: 130
  },
  button: {
    width: 102,
    height: 34,
    borderRadius: 4,
    backgroundColor: 'rgba(54, 201, 193, 1)',
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

export {styles};
