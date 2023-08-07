import { View, Text, StyleSheet, Image, Animated, TouchableOpacity, ScrollView } from 'react-native'
import {useState} from 'react'
import COLORS from '../../theme/colors'
import ICONS from '../../assets/icons/icons'
import { verticalScale, horizontalScale, moderateScale } from '../../theme/responsive'
import CtaButton from '../../components/atoms/CtaButton';

export const AccordionWisataLainnya = (props) => {
  const [expanded, setExpanded] = useState(false);
  const toggleAccordion = () => {
    setExpanded(!expanded);
  };

  const animatedHeight = new Animated.Value(expanded ? verticalScale(120) : 0);

  return(
    <View style={stylesWisataLainnya.accordionContainer}>
      <TouchableOpacity onPress={toggleAccordion}>
        <View style={stylesWisataLainnya.accordionHeader}>
          <View style={stylesWisataLainnya.accordionTitle}>
            <Text style={stylesWisataLainnya.accordionHeaderText}>{props.title}</Text>
            <CtaButton backgroundColor={COLORS.blue} borderRadius={50} vPadding={verticalScale(4)} hPadding={horizontalScale(12)} fFamily='Poppins-Bold' fColor={COLORS.white} text='Lihat map' action={props.action} />
          </View>
          <Image source={ICONS.downArrow} />
        </View>
      </TouchableOpacity>
      <Animated.View style={{ height: animatedHeight }}>
        <View style={stylesWisataLainnya.buttonContainer}>
          <View style={stylesWisataLainnya.buttonLabel}>  
            <Image source={ICONS.belanjaIcon} style={stylesWisataLainnya.icon} />
            <Text style={stylesWisataLainnya.label}>Wisata{'\n'}Belanja</Text>
          </View>
          <View style={stylesWisataLainnya.buttonLabel}>
            <Image source={ICONS.wisataIcon} style={stylesWisataLainnya.icon} />
            <Text style={stylesWisataLainnya.label}>Wisata{'\n'}Buatan</Text>
          </View>
          <View style={stylesWisataLainnya.buttonLabel}>
            <Image source={ICONS.hiburanIcon} style={stylesWisataLainnya.icon} />
            <Text style={stylesWisataLainnya.label}>Wisata{'\n'}Hiburan</Text>
          </View>
          <View style={stylesWisataLainnya.buttonLabel}>
            <Image source={ICONS.edukasiIcon} style={stylesWisataLainnya.icon} />
            <Text style={stylesWisataLainnya.label}>Wisata{'\n'}Edukasi</Text>
          </View>
        </View>
      </Animated.View>
    </View>
  );
}

const stylesWisataLainnya = StyleSheet.create({
  accordionContainer: {
    marginBottom: 10,
    backgroundColor: COLORS.white,
    borderRadius: 5,
    overflow: 'hidden',
    gap: verticalScale(16),
  },
  accordionHeader: {
    paddingRight: horizontalScale(26),
    backgroundColor: '#f5f5f5',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: COLORS.white,
  },
  accordionHeaderText: {
    fontSize: moderateScale(20),
    fontFamily: 'Poppins-Bold',
    color: COLORS.black4
  },
  accordionContentText: {
    padding: 10,
    fontSize: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    columnGap: horizontalScale(40),
    rowGap: verticalScale(40),
    justifyContent: 'space-between'
  },
  icon: {
    width: horizontalScale(60),
    height: verticalScale(60),
    objectFit: 'contain',
  },
  buttonLabel: {
    alignItems: 'center',
    gap: verticalScale(8),
  },
  label: {
    fontSize: moderateScale(12),
    color: COLORS.black4,
    textAlign: 'center',
    fontFamily: 'Poppins-Bold',
  },
  headerBadge: {
    fontFamily: 'Poppins-SemiBold',
    color: COLORS.white,
    backgroundColor: COLORS.blue,
    borderRadius: 50,
    paddingVertical: verticalScale(4),
    paddingHorizontal: horizontalScale(12),
  },
  accordionTitle: {
    flexDirection: 'row',
    gap: horizontalScale(10),
    alignItems: 'center',
  }
});

export const AccordionKuliner = (props) => {
  const [expanded, setExpanded] = useState(false);
  const toggleAccordion = () => {
    setExpanded(!expanded);
  };

  const animatedHeight = new Animated.Value(expanded ? verticalScale(268) : 0);

  return(
    <View style={stylesWisataLainnya.accordionContainer}>
      <TouchableOpacity onPress={toggleAccordion}>
        <View style={stylesWisataLainnya.accordionHeader}>
          <View style={stylesWisataLainnya.accordionTitle}>
            <Text style={stylesWisataLainnya.accordionHeaderText}>{props.title}</Text>
            <CtaButton backgroundColor={COLORS.blue} borderRadius={50} vPadding={verticalScale(4)} hPadding={horizontalScale(12)} fFamily='Poppins-Bold' fColor={COLORS.white} text='Lihat map' action={props.action} />
          </View>
          <Image source={ICONS.downArrow} />
        </View>
      </TouchableOpacity>
      <Animated.View style={{ height: animatedHeight }}>
        <View style={stylesWisataLainnya.buttonContainer}>
          <View style={stylesWisataLainnya.buttonLabel}>
            <Image source={ICONS.khasMedan} style={stylesWisataLainnya.icon} />
            <Text style={stylesWisataLainnya.label}>Khas{'\n'}Medan</Text>
          </View>
          <View style={stylesWisataLainnya.buttonLabel}>
            <Image source={ICONS.khasAceh} style={stylesWisataLainnya.icon} />
            <Text style={stylesWisataLainnya.label}>Khas{'\n'}Aceh</Text>
          </View>
          <View style={stylesWisataLainnya.buttonLabel}>
            <Image source={ICONS.khasPadang} style={stylesWisataLainnya.icon} />
            <Text style={stylesWisataLainnya.label}>Khas{'\n'}Padang</Text>
          </View>
          <View style={stylesWisataLainnya.buttonLabel}>
            <Image source={ICONS.khasJambi} style={stylesWisataLainnya.icon} />
            <Text style={stylesWisataLainnya.label}>Khas{'\n'}Jambi</Text>
          </View>
          <View style={stylesWisataLainnya.buttonLabel}>
            <Image source={ICONS.khasPalembang} style={stylesWisataLainnya.icon} />
            <Text style={stylesWisataLainnya.label}>Khas{'\n'}Palembang</Text>
          </View>
        </View>
      </Animated.View>
    </View>
  );
}

export const AccordionHeritage = (props) => {
  const [expanded, setExpanded] = useState(false);
  const toggleAccordion = () => {
    setExpanded(!expanded);
  };

  const animatedHeight = new Animated.Value(expanded ? verticalScale(130) : 0);

  return(
    <View style={stylesWisataLainnya.accordionContainer}>
      <TouchableOpacity onPress={toggleAccordion}>
        <View style={stylesWisataLainnya.accordionHeader}>
          <View style={stylesWisataLainnya.accordionTitle}>
            <Text style={stylesWisataLainnya.accordionHeaderText}>{props.title}</Text>
            <CtaButton backgroundColor={COLORS.blue} borderRadius={50} vPadding={verticalScale(4)} hPadding={horizontalScale(12)} fFamily='Poppins-Bold' fColor={COLORS.white} text='Lihat map' action={props.action} />
          </View>
          <Image source={ICONS.downArrow} />
        </View>
      </TouchableOpacity>
      <Animated.View style={{ height: animatedHeight }}>
        <View style={stylesWisataLainnya.buttonContainer}>
          <View style={stylesWisataLainnya.buttonLabel}>
            <Image source={ICONS.tjongAFie} style={stylesWisataLainnya.icon} />
            <Text style={stylesWisataLainnya.label}>Tjong{'\n'}A Fie</Text>
          </View>
          <View style={stylesWisataLainnya.buttonLabel}>
            <Image source={ICONS.maimun} style={stylesWisataLainnya.icon} />
            <Text style={stylesWisataLainnya.label}>Istana{'\n'}Maimun</Text>
          </View>
          <View style={stylesWisataLainnya.buttonLabel}>
            <Image source={ICONS.masjidRaya} style={stylesWisataLainnya.icon} />
            <Text style={stylesWisataLainnya.label}>Masjid{'\n'}Raya</Text>
          </View>
          <View style={stylesWisataLainnya.buttonLabel}>
            <Image source={ICONS.gedungLondon} style={stylesWisataLainnya.icon} />
            <Text style={stylesWisataLainnya.label}>Gedung{'\n'}London</Text>
          </View>
        </View>
      </Animated.View>
    </View>
  );
}