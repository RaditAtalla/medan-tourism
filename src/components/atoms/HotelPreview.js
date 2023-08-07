import {
  SafeAreaView,
  View,
  Image,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  Animated,
  Dimensions,
  ImageBackground,
} from 'react-native';
import {
  verticalScale,
  horizontalScale,
  moderateScale,
} from '../../theme/responsive';
import {useState, useRef} from 'react';
import IMAGES from '../../assets/img/images';
import COLORS from '../../theme/colors';
import ICONS from '../../assets/icons/icons';

const {width, height} = Dimensions.get('window');

const HotelPreview = ({data, images}) => {
  const scrollViewRef = useRef();
  const scrollX = new Animated.Value(0);

  function renderImage() {
    return (
      <Animated.ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        scrollEnabled
        snapToAlignment="center"
        showsHorizontalScrollIndicator={false}
        decelerationRate={0}
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {useNativeDriver: false},
        )}>
        {data.map((item, index) => {
          console.log(item.images[currentIndex])
          return (
            <Image
              key={index}
              style={Styles.carouselContainer}
              source={item.images[currentIndex]}
            />
          );
        })}
      </Animated.ScrollView>
    );
  }

  const [currentIndex, setCurrentIndex] = useState(0);
  function renderButton() {
    const handleNextPress = () => {
      const nextIndex = (currentIndex + 1) % images.length;

      setCurrentIndex(nextIndex);
      scrollViewRef.current.scrollTo({x: nextIndex * width, animated: true});
    };

    const handlePrevPress = () => {
      const prevIndex = (currentIndex - 1) % images.length;

      setCurrentIndex(prevIndex);
      scrollViewRef.current.scrollTo({x: prevIndex * width, animated: true});
    };

    return (
      <View style={Styles.arrowContainer}>
        <TouchableOpacity style={Styles.arrow} onPress={handlePrevPress}>
          <Image source={ICONS.leftArrow} />
        </TouchableOpacity>
        <TouchableOpacity style={Styles.arrow} onPress={handleNextPress}>
          <Image source={ICONS.rightArrow} />
        </TouchableOpacity>
      </View>
    );
  }

  const renderDot = () => {
    const dotPosition = Animated.divide(scrollX, width);
    dotPosition.addListener(({value}) => {
      const index = Math.round(value / width);
      setCurrentIndex(index);
    });
    return (
      <View style={Styles.dotContainer}>
        {data.map((item, index) => {
          const opacity = dotPosition.interpolate({
            inputRange: [index - 1, index, index + 2],
            outputRange: [0.3, 1, 0.3],
            extrapolate: 'clamp',
          });

          const dotSize = dotPosition.interpolate({
            inputRange: [index - 1, index, index + 2],
            outputRange: [10, 10, 10],
            extrapolate: 'clamp',
          });
          return (
            <Animated.View
              style={[Styles.dot, {width: dotSize, height: dotSize}]}
              key={`dot-${index}`}
              opacity={opacity}></Animated.View>
          );
        })}
      </View>
    );
  };

  return (
    <View>
      <View style={Styles.carouselRootContainer}>
        <View>{renderImage()}</View>
        <View style={Styles.arrowRootContainer}>{renderButton()}</View>
        <View style={Styles.dotRootContainer}>{renderDot()}</View>
      </View>
    </View>
  );
};

const Styles = StyleSheet.create({
  carouselContainer: {
    width: width,
    height: verticalScale(456),
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  carouselRootContainer: {
    width: width,
    height: verticalScale(456),
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    alignItems: 'center',
  },
  arrowRootContainer: {
    position: 'absolute',
    bottom: verticalScale(216),
  },
  arrowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: width,
    paddingHorizontal: horizontalScale(24)
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
    bottom: verticalScale(50),
  },
});

export default HotelPreview;
