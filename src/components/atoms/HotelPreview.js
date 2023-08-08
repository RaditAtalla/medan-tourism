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
  ScrollView,
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
import { StarOnlyDisplay } from './StarDisplayDetail';

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

  const HotelId = () => {
    const idStyle = StyleSheet.create({
      topWrapper: {
        gap: verticalScale(16),
      },
      name: {
        color: COLORS.black3,
        fontSize: moderateScale(24),
        fontFamily: 'Poppins-Bold',
      },
      rating: {
        color: COLORS.black3,
        opacity: 0.5,
        fontSize: moderateScale(16),
        fontFamily: 'Poppins-SemiBold',
      },
    })
    return (
      <View style={idStyle.topWrapper}>
        <Text style={idStyle.name}>{data[0].name}</Text>
        <Text style={idStyle.rating}>Hotel {data[0].rating} Star</Text>
      </View>
    );
  };

  const Details = () => {
    const detailStyle = StyleSheet.create({
      description: {
        color: COLORS.black3,
      },
    });
    return (
      <Text style={detailStyle.description}>{data[0].description}</Text>
    );
  };

  const Review = () => {
    const reviewStyles = StyleSheet.create({
      container: {
        backgroundColor: COLORS.white,
        borderRadius: 26,
        gap: verticalScale(26),
        paddingVertical: verticalScale(16),
        paddingHorizontal: horizontalScale(12),
        width: '100%',
        marginBottom: verticalScale(24),
      },
      userData: {
        flexDirection: 'row',
        gap: horizontalScale(10),
        alignItems: 'center',
      },
      profilePic: {
        width: horizontalScale(28),
        height: verticalScale(28),
        borderRadius: 100,
      },
      usernameAndRating: {
        gap: verticalScale(4),
      },
      username: {
        color: COLORS.black3,
        fontSize: moderateScale(12),
        fontFamily: 'Poppins-SemiBold',
      },
      comment: {
        color: COLORS.black3,
        fontSize: moderateScale(12),
      }
    })
    return(
      <View style={reviewStyles.container}>
        <View style={reviewStyles.userData}>
          <Image style={reviewStyles.profilePic} source={data[0].comments[0].profilePic} />
          <View style={reviewStyles.usernameAndRating}>
            <Text style={reviewStyles.username}>{data[0].comments[0].username}</Text>
            <StarOnlyDisplay rating={data[0].comments[0].rating} />
          </View>
        </View>
        <Text style={reviewStyles.comment}>{data[0].comments[0].comment}</Text>
      </View>
    )
  };

  const [isDetailActive, setIsDetailActive] = useState(true)
  const [isReviewActive, setIsReviewActive] = useState(false)

  const ActiveComponent = () => {
    if (isReviewActive) {return <Review />}
    return <Details />  
  }

  return (
    <ScrollView style={Styles.rootContainer}>
      <View style={Styles.carouselRootContainer}>
        <View>{renderImage()}</View>
        <View style={Styles.arrowRootContainer}>{renderButton()}</View>
        <View style={Styles.dotRootContainer}>{renderDot()}</View>
      </View>
      <View style={Styles.contentContainer}>
          <View style={Styles.contentWrapper}>
            <View style={Styles.sectionButtonContainer}>
              <TouchableOpacity style={Styles.sectionButton} onPress={() => {setIsDetailActive(true); setIsReviewActive(false)} }>
                <Text style={Styles.sectionButtonText}>Details</Text>
              </TouchableOpacity>
              <TouchableOpacity style={Styles.sectionButton} onPress={() => {setIsReviewActive(true); setIsDetailActive(false)}}>
                <Text style={Styles.sectionButtonText}>Review</Text>
              </TouchableOpacity>
            </View>
            <HotelId />
            <ActiveComponent />
          </View>
      </View>
    </ScrollView>
  );
};

const Styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
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
    paddingHorizontal: horizontalScale(24),
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
  contentContainer: {
    paddingVertical: verticalScale(48),
    paddingHorizontal: horizontalScale(24),
    backgroundColor: COLORS.gray5,
    flex: 1,
  },
  sectionButtonContainer: {
    flexDirection: 'row',
    gap: horizontalScale(32),
    alignItems: 'flex-start',
  },
  sectionButtonText: {
    color: COLORS.black3,
    fontSize: moderateScale(20),
    fontFamily: 'Poppins-Bold',
  },
  contentWrapper: {
    gap: verticalScale(29),
  },
});

export default HotelPreview;
