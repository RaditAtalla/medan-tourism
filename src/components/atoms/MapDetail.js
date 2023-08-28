import { StatusBar, Image, Text, View, StyleSheet, SafeAreaView, ScrollView, Dimensions } from 'react-native'
import CtaButton from './CtaButton'
import ICONS from '../../assets/icons/icons'
import COLORS from '../../theme/colors'
import { horizontalScale, moderateScale, verticalScale } from '../../theme/responsive'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'

const { width } = Dimensions.get('window')

const MapDetail = ({
  image,
  name,
  address,
  open,
  close,
  minPrice,
  maxPrice,
  description,
  leftTitle,
  leftText,
  destination
}) => {
  const navigation = useNavigation()
  const location = useSelector((state) => state.location.location)

  return (
    <SafeAreaView style={Styles.container}>
      <StatusBar barStyle="dark-content" translucent backgroundColor="transparent" />
      <ScrollView style={Styles.scrollContainer}>
        <Image source={{ uri: image }} style={Styles.image} />
        <View style={Styles.contentContainer}>
          <View style={Styles.nameAndAddress}>
            <Text style={Styles.name}>{name}</Text>
            <View style={[Styles.addressContainer, { maxWidth: '100%' }]}>
              <Image source={ICONS.locationPinBlue} style={Styles.icon} />
              <Text style={[Styles.address, { maxWidth: width - horizontalScale(48) }]} numberOfLines={1}>
                {address}
              </Text>
            </View>
          </View>
          <View style={Styles.entryInformation}>
            <View style={Styles.entrySection}>
              <View style={Styles.entryHeader}>
                <Image style={Styles.icon} source={ICONS.clockBlue} />
                {/* <Text style={Styles.entryTitle}>Buka pada</Text> */}
                <Text style={Styles.entryTitle}>{leftTitle}</Text>
              </View>
              <Text style={[Styles.entryContent, { maxWidth: width / 2 - horizontalScale(48) }]} numberOfLines={1}>
                {/* {open} - {close} WIB */}
                {leftText}
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
              <Text style={[Styles.entryContent, { maxWidth: width / 2 - horizontalScale(48) }]} numberOfLines={1}>
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
          action={() =>
            navigation.navigate('Rute', {
              origin: {
                latitude: parseFloat(location?.address?.location?.lat),
                longitude: parseFloat(location?.address?.location?.lng)
              },
              destination: {
                latitude: parseFloat(destination?.lat),
                longitude: parseFloat(destination?.lng)
              }
            })
          }
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
    paddingBottom: verticalScale(32) + 49
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
