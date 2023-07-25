import {StyleSheet} from 'react-native';
import {verticalScale} from '../theme/responsive';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '200%',
    paddingTop: 200,
    paddingBottom: 50,
  },
  content: {
    width: '100%',
    height: '100%',
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
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingLeft: 24,
    paddingVertical: 30,
  },
  menu1: {
    backgroundColor: 'rgba(54, 201, 193, 0.5)',
  },
  menu2: {
    backgroundColor: 'rgba(130, 148, 196, 0.5)',
  },
  menu3: {
    backgroundColor: 'rgba(255, 192, 0, 0.5)',
  },
  menu4: {
    backgroundColor: 'rgba(236, 140, 111, 0.5)',
  },
  menu5: {
    backgroundColor: '#defafd',
  },
});

export {styles};
