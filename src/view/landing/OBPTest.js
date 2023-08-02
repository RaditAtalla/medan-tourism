import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Animated,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import COLORS from '../../theme/colors';
import IMAGES from '../../assets/img/images';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../theme/responsive';

const {width, height} = Dimensions.get('window');

const DATA = [
  {
    title: 'Cari tempat\nternyamanmu!',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.',
    image: IMAGES.onBoardingImg1,
  },
  {
    title: 'Booking dengan\nmudah!',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.',
    image: IMAGES.onBoardingImg2,
  },
  {
    title: 'Nikmati liburan\nanda!',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.',
    image: IMAGES.onBoardingImg3,
  },
];

const OBPTest = () => {

  const scrollX = new Animated.Value(0)

  function renderContent() {
    return (
      <Animated.ScrollView
        horizontal
        pagingEnabled
        scrollEnabled
        snapToAlignment="center"
        showsHorizontalScrollIndicator={false}
        decelerationRate={0}
        scrollEventThrottle={16}
        onScroll={Animated.event([
          {nativeEvent: {contentOffset: {x: scrollX}}},
        ], {useNativeDriver: false})}
        >
        {DATA.map((item, index) => {
          return (
            <View key={index} style={Styles.contentContainer}>
              <View style={Styles.imageContainer}>
                <Image
                  source={item.image}
                  style={Styles.image}
                  resizeMode="cover"
                />
              </View>
              <View style={Styles.textContainer}>
                <Text style={Styles.title}>{item.title}</Text>
                <Text style={Styles.description}>{item.description}</Text>
              </View>
            </View>
          );
        })}
      </Animated.ScrollView>
    );
  }

  function renderButton() {
    return (
      <View style={Styles.buttonContainer}>
        <TouchableOpacity style={Styles.nextButton}>
          <Text style={Styles.nextText}>Selanjutnya</Text>
        </TouchableOpacity>
        <TouchableOpacity style={Styles.skipButton}>
          <Text style={Styles.skipText}>Nanti dulu deh</Text>
        </TouchableOpacity>
      </View>
    );
  }

  function renderDot() {
    const dotPosition = Animated.divide(scrollX, width)
    return (
      <View style={Styles.dotContainer}>
        {DATA.map((item, index) => {
          const opacity = dotPosition.interpolate({
            inputRange: [index - 1, index, index + 2],
            outputRange: [0.3, 1, 0.3],
            extrapolate: 'clamp',
          })

          const dotSize = dotPosition.interpolate({
            inputRange: [index - 1, index, index + 2],
            outputRange: [10, 12, 10],
            extrapolate: 'clamp',
          })
          return(
            <Animated.View style={[Styles.dot, { width: dotSize, height: dotSize }]} key={`dot-${index}`} opacity={opacity}></Animated.View>
          )
        })}
      </View>
    );
  }

  return (
    <SafeAreaView style={Styles.container}>
      <View>{renderContent()}</View>
      <View style={Styles.buttonRootContainer}>{renderButton()}</View>
      <View style={Styles.dotRootContainer}>{renderDot()}</View>
    </SafeAreaView>
  );
};

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.white,
  },
  image: {
    width: 309,
    height: 309,
  },
  contentContainer: {
    width: width,
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: verticalScale(96),
    paddingTop: verticalScale(91),
  },
  imageContainer: {},
  textContainer: {
    alignItems: 'center',
    paddingHorizontal: horizontalScale(24),
  },
  title: {
    color: COLORS.black3,
    fontSize: moderateScale(32),
    fontFamily: 'Poppins-Bold',
    textAlign: 'center',
  },
  description: {
    color: COLORS.black3,
    fontSize: moderateScale(16),
    textAlign: 'center',
  },
  bottomContainer: {
    gap: verticalScale(40),
    alignItems: 'center',
  },
  buttonContainer: {
    gap: verticalScale(16),
  },
  nextButton: {
    backgroundColor: COLORS.blue,
    borderRadius: 10,
    paddingHorizontal: horizontalScale(40),
    paddingVertical: verticalScale(10),
  },
  nextText: {
    color: COLORS.white,
    fontSize: moderateScale(16),
    fontFamily: 'Poppins-Medium',
  },
  skipText: {
    color: COLORS.black3,
    fontSize: moderateScale(16),
    textAlign: 'center',
  },
  dot: {
    backgroundColor: COLORS.blue,
    borderRadius: 100,
  },
  dotContainer: {
    flexDirection: 'row',
    gap: horizontalScale(16),
  },
  dotRootContainer: {
    position: 'absolute',
    bottom: height > 700 ? '45%' : '16%',
  },
  buttonRootContainer: {
    position: 'absolute',
    bottom: verticalScale(80),
  }
});

export default OBPTest;
