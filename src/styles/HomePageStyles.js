import { StyleSheet, Dimensions } from 'react-native'
import { horizontalScale, verticalScale, moderateScale } from '../theme/responsive'
import COLORS from '../theme/colors'

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.purple,
  },
  headerContainer: {
    // flex: 2,
    // height: "33%",
    paddingHorizontal: horizontalScale(24),
    paddingTop: verticalScale(74),
    gap: verticalScale(20),
  },
  background: {
    width: horizontalScale(277),
    height: verticalScale(272),
    objectFit: 'cover',
    position: 'absolute',
    right: 52,
    bottom: verticalScale(-50),
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
    // flex: 1,
    // height: Dimensions.get('window').height,
    backgroundColor: COLORS.gray5,
    borderTopStartRadius: 50,
    borderTopEndRadius: 50,
    position: 'relative',
    top: 40,
    paddingVertical: verticalScale(51),
    // paddingHorizontal: horizontalScale(30),
    gap: verticalScale(48),
  },
  menuContainer: {
    flexWrap: 'wrap',
    columnGap: horizontalScale(40),
    rowGap: verticalScale(32),
    flexDirection: 'row',
    paddingHorizontal: horizontalScale(24),
    justifyContent: 'space-between',
  },
  sectionTitle: {
    fontFamily: 'Poppins-Bold',
    fontSize: moderateScale(20),
    color: COLORS.black4,
    paddingHorizontal: horizontalScale(25),
  },
  eventContainer: {
    gap: verticalScale(16),
  },
  twitterTitle: {
    flexDirection: 'row',
    gap: horizontalScale(10),
    alignItems: 'center',
    color: COLORS.black3,
    fontSize: moderateScale(20),
    fontFamily: 'Poppins-Bold',
    paddingHorizontal: horizontalScale(24)
  },
  twitterIcon: {
    height: horizontalScale(20),
  },
  twitterContainer: {
    gap: verticalScale(16),
    marginBottom: verticalScale(30)
  }
})

export default Styles