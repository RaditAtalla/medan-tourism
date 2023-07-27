import { StyleSheet } from 'react-native'
import { horizontalScale, verticalScale, moderateScale } from '../theme/responsive'
import COLORS from '../theme/colors'

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.purple,
  },
  headerContainer: {
    flex: 1,
    paddingHorizontal: horizontalScale(24),
    paddingTop: verticalScale(54),
    gap: verticalScale(20),
  },
  background: {
    width: horizontalScale(277),
    height: verticalScale(272),
    objectFit: 'cover',
    position: 'absolute',
    right: 52,
    bottom: 0,
  },
  headerButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },  
  profilePic: {
    width: horizontalScale(43),
    height: verticalScale(43),
    borderWidth: moderateScale(2),
    borderColor: COLORS.gray3,
    borderRadius: 100,
  },
  title: {
    color: COLORS.white,
    fontSize: 20,
    fontFamily: 'Poppins-Bold',
  },
  locationContainer: {
    flexDirection: 'row',
    gap: horizontalScale(10),
    alignItems: 'center',
  },
  location: {
    color: COLORS.white
  },
  contentContainer: {
    flex: 2,
    backgroundColor: COLORS.white,
    borderTopStartRadius: 50,
    borderTopEndRadius: 50,
  }
})

export default Styles