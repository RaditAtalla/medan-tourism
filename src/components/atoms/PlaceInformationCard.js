import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
} from 'react-native';
import COLORS from '../../theme/colors';
import ICONS from '../../assets/icons/icons';
import IMAGES from '../../assets/img/images';
import {useState} from 'react';
import Modal from 'react-native-modal';
import {horizontalScale, moderateScale, verticalScale} from '../../theme/responsive';

const PlaceInforamationCard = ({
  image,
  name,
  open,
  close,
  rating,
  raters,
}) => {
  return (
    <View style={Styles.container}>
      <ImageBackground source={image} style={Styles.image} imageStyle={{ borderTopLeftRadius: 50, borderTopRightRadius: 50, }}>
        <TouchableOpacity>
          <Image
            source={ICONS.xButton}
            style={Styles.xButton}
          />
        </TouchableOpacity>
        <Text style={Styles.name}>{name}</Text>
      </ImageBackground>
      <View style={Styles.contentContainer}>
        <View style={Styles.metaDataContainer}>
          <View style={Styles.sectionContainer}>
            <View style={Styles.sectionTitle}>
              <Image source={ICONS.clockBlue} />
              <Text style={Styles.title}>Buka Pada</Text>
            </View>
            <Text style={Styles.sectionInfo}>
              {open}-{close} WIB
            </Text>
          </View>
          <View style={Styles.border} />
          <View style={Styles.sectionContainer}>
            <View style={Styles.sectionTitle}>
              <Image source={ICONS.star} />
              <Text style={Styles.title}>Rating</Text>
            </View>
            <Text style={Styles.sectionInfo}>
              {rating} ({raters} Reviews)
            </Text>
          </View>
        </View>
        <View style={Styles.buttonContainer}>
          <TouchableOpacity style={Styles.ruteButton}>
            <View style={Styles.ruteButtonWrapper}>
              <Image source={ICONS.routeBlue} />
              <Text style={Styles.ruteText}>Rute</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={Styles.detailButton}>
            <Text style={Styles.detailText}>Lihat Detail</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const CARD_WIDTH = Dimensions.get('screen').width
const IMAGE_HEIGHT = verticalScale(248)

const Styles = StyleSheet.create({
  container: {
    width: CARD_WIDTH,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
  image: {
    width: CARD_WIDTH,
    height: IMAGE_HEIGHT,
    paddingBottom: verticalScale(19),
  },
  xButton: {
    position: 'absolute',
    top: verticalScale(13),
    right: horizontalScale(24),
    width: horizontalScale(50),
    height: verticalScale(50),
    objectFit: 'contain',
  },
  name: {
    textAlign: 'center',
    color: COLORS.white,
    fontSize: moderateScale(30),
    fontFamily: 'Poppins-SemiBold',
  },
  contentContainer: {
    width: CARD_WIDTH,
    backgroundColor: COLORS.white,
    alignItems: 'center',
    gap: verticalScale(29),
    paddingTop: verticalScale(30),
    paddingBottom: verticalScale(35),
  },
  metaDataContainer: {
    flexDirection: 'row',
    gap: horizontalScale(16),
    alignItems: 'center',
  },
  sectionContainer: {
    paddingHorizontal: horizontalScale(10),
    paddingVertical: verticalScale(10),
    alignItems: 'flex-start',
  },
  sectionTitle: {
    flexDirection: 'row',
    gap: horizontalScale(8),
    alignItems: 'center',
  },
  title: {
    color: COLORS.black4,
    fontSize: moderateScale(12),
  },
  sectionInfo: {
    color: COLORS.black4,
    fontFamily: 'Poppins-Medium',
  },
  border: {
    width: horizontalScale(2),
    height: verticalScale(36),
    backgroundColor: '#D9D9D9',
    borderRadius: 50,
  },
  buttonContainer: {
    elevation: 5,
    backgroundColor: COLORS.white,
    borderColor: '#d9d9d9',
    borderRadius: 16,
    paddingHorizontal: horizontalScale(8),
    paddingVertical: verticalScale(20),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: horizontalScale(32),
  },
  ruteButton: {},
  ruteButtonWrapper: {
    flexDirection: 'row',
    paddingHorizontal:  verticalScale(8),
    paddingVertical: verticalScale(14),
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: horizontalScale(12),
  },
  ruteText: {
    color: COLORS.blue,
    fontFamily: 'Poppins-Medium',
  },
  detailButton: {
    paddingVertical: verticalScale(8),
    paddingHorizontal: horizontalScale(12),
    backgroundColor: COLORS.blue,
    borderRadius: 8,
  },
  detailText: {
    color: COLORS.white,
    fontFamily: 'Poppins-Medium',
  }
});

export default PlaceInforamationCard;
