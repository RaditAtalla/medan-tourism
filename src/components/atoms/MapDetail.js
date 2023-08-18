import { StatusBar, Image, Text, View, StyleSheet, SafeAreaView, ScrollView, Dimensions } from 'react-native'
import CtaButton from './CtaButton'
import ICONS from '../../assets/icons/icons'
import COLORS from '../../theme/colors'
import { horizontalScale, moderateScale, verticalScale } from '../../theme/responsive'

const { width } = Dimensions.get('window')

const MapDetail = ({ image, name, address, open, close, minPrice, maxPrice, description }) => {
  return (
    <SafeAreaView style={Styles.container}>
      <StatusBar barStyle="dark-content" translucent backgroundColor="transparent" />
      <ScrollView style={Styles.scrollContainer}>
        <Image source={image} style={Styles.image} />
        <View style={Styles.contentContainer}>
          <View style={Styles.nameAndAddress}>
            <Text style={Styles.name}>{name}</Text>
            <View style={Styles.addressContainer}>
              <Image source={ICONS.locationPinBlue} style={Styles.icon} />
              <Text style={Styles.address}>{address}</Text>
            </View>
          </View>
          <View style={Styles.entryInformation}>
            <View style={Styles.entrySection}>
              <View style={Styles.entryHeader}>
                <Image style={Styles.icon} source={ICONS.clockBlue} />
                <Text style={Styles.entryTitle}>Buka pada</Text>
              </View>
              <Text style={Styles.entryContent}>
                {open} - {close} WIB
              </Text>
            </View>
            <View
              style={{
                width: horizontalScale(2),
                height: verticalScale(36),
                backgroundColor: '#D9D9D9',
                borderRadius: 50
              }}
            />
            <View style={Styles.entrySection}>
              <View style={Styles.entryHeader}>
                <Image style={Styles.icon} source={ICONS.handReceive} />
                <Text style={Styles.entryTitle}>Tiket masuk</Text>
              </View>
              <Text style={Styles.entryContent}>
                IDR {minPrice} - IDR {maxPrice}
              </Text>
            </View>
          </View>
          <Text style={Styles.description}>{description}</Text>
        </View>
      </ScrollView>
      <View style={Styles.ruteButtonContainer}>
        <CtaButton
          icon={ICONS.routeWhite}
          text="Rute"
          fColor={COLORS.white}
          fFamily="Poppins-Medium"
          backgroundColor={COLORS.blue}
          hPadding={horizontalScale(14)}
          vPadding={verticalScale(8)}
          borderRadius={8}
          style={{ flexDirection: 'row', gap: horizontalScale(12) }}
        />
      </View>
    </SafeAreaView>
  )
}

const Styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.gray5,
    flex: 1,
    alignItems: 'center'
  },
  scrollContainer: {
    flex: 1
  },
  image: {
    width: width,
    height: verticalScale(379),
    objectFit: 'cover'
  },
  contentContainer: {
    paddingVertical: verticalScale(32),
    paddingHorizontal: horizontalScale(24),
    gap: verticalScale(32)
  },
  nameAndAddress: {
    gap: verticalScale(12)
  },
  name: {
    color: COLORS.black4,
    fontSize: moderateScale(30),
    fontFamily: 'Poppins-SemiBold'
  },
  addressContainer: {
    flexDirection: 'row',
    gap: horizontalScale(8),
    alignItems: 'center'
  },
  icon: {
    height: verticalScale(15)
  },
  address: {
    color: COLORS.secondary
  },
  entryInformation: {
    flexDirection: 'row',
    gap: horizontalScale(16),
    alignItems: 'center',
    backgroundColor: COLORS.white
  },
  entrySection: {
    paddingVertical: verticalScale(10),
    paddingHorizontal: horizontalScale(10),
    gap: verticalScale(10)
  },
  entryHeader: {
    flexDirection: 'row',
    gap: horizontalScale(8),
    alignItems: 'center'
  },
  entryTitle: {
    color: COLORS.black4,
    fontSize: moderateScale(12)
  },
  entryContent: {
    color: COLORS.black4,
    fontFamily: 'Poppins-Medium'
  },
  description: {
    color: COLORS.black3,
    fontFamily: 'Poppins-Medium',
    paddingBottom: verticalScale(64)
  },
  ruteButtonContainer: {
    backgroundColor: COLORS.white,
    paddingVertical: verticalScale(16),
    paddingHorizontal: horizontalScale(20),
    borderRadius: 16,
    position: 'absolute',
    bottom: verticalScale(24),
    elevation: 5
  }
})

export default MapDetail
