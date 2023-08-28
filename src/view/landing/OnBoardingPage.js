import { View, Text, StyleSheet, SafeAreaView, Animated, Image, Dimensions, TouchableOpacity } from 'react-native'
import COLORS from '../../theme/colors'
import IMAGES from '../../assets/img/images'
import { horizontalScale, moderateScale, verticalScale } from '../../theme/responsive'
import { useState, useRef } from 'react'
import CtaButton from '../../components/atoms/CtaButton'
import AsyncStorage from '@react-native-async-storage/async-storage'

const { width, height } = Dimensions.get('window')

const OnBoardingPage = ({ navigation }) => {
  const scrollViewRef = useRef()
  const scrollX = new Animated.Value(0)
  const [data, setData] = useState([
    {
      idx: 1,
      title: 'Cari tempat\nternyamanmu!',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.',
      image: IMAGES.onBoardingImg1
    },
    {
      idx: 2,
      title: 'Booking dengan\nmudah!',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.',
      image: IMAGES.onBoardingImg2
    },
    {
      idx: 3,
      title: 'Nikmati liburan\nanda!',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.',
      image: IMAGES.onBoardingImg3
    }
  ])

  function renderContent() {
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
        onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], { useNativeDriver: false })}
      >
        {data.map((item, index) => {
          return (
            <View key={index} style={Styles.contentContainer}>
              <View style={Styles.imageContainer}>
                <Image source={item.image} style={Styles.image} resizeMode="cover" />
              </View>
              <View style={Styles.textContainer}>
                <Text style={Styles.title}>{item.title}</Text>
                <Text style={Styles.description}>{item.description}</Text>
              </View>
            </View>
          )
        })}
      </Animated.ScrollView>
    )
  }

  // THIS WORKS, DO NOT TOUCH!! | INI BEKERJA, JANGAN DISENTUH
  const [currentIndex, setCurrentIndex] = useState(-1)
  function renderButton() {
    const handleNextPress = () => {
      const nextIndex = currentIndex + 2

      setCurrentIndex(nextIndex)
      scrollViewRef.current.scrollTo({ x: nextIndex * width, animated: true })

      if (currentIndex >= 2) {
        handleSkipPress()
      }
    }

    const handleSkipPress = async () => {
      await AsyncStorage.setItem('isFirstOpen', JSON.stringify(false))
      navigation.navigate('AuthStackScreen')
    }

    return (
      <View style={Styles.buttonContainer}>
        <CtaButton
          backgroundColor={COLORS.blue}
          borderRadius={10}
          vPadding={verticalScale(10)}
          hPadding={horizontalScale(40)}
          fFamily="Poppins-Medium"
          fSize={moderateScale(16)}
          fColor={COLORS.white}
          text="Selanjutnya"
          action={handleNextPress}
        />
        <CtaButton
          backgroundColor={COLORS.white}
          fFamily="Poppins-Regular"
          fSize={moderateScale(16)}
          fColor={COLORS.black3}
          text="Nanti dulu deh"
          action={handleSkipPress}
        />
      </View>
    )
  }

  function renderDot() {
    const dotPosition = Animated.divide(scrollX, width)
    // Update currentIndex whenever the dotPosition changes
    dotPosition.addListener(({ value }) => {
      const index = Math.round(value / width)
      setCurrentIndex(index)
    })
    return (
      <View style={Styles.dotContainer}>
        {data.map((item, index) => {
          const opacity = dotPosition.interpolate({
            inputRange: [index - 1, index, index + 2],
            outputRange: [0.3, 1, 0.3],
            extrapolate: 'clamp'
          })

          const dotSize = dotPosition.interpolate({
            inputRange: [index - 1, index, index + 2],
            outputRange: [10, 12, 10],
            extrapolate: 'clamp'
          })
          return (
            <Animated.View
              style={[Styles.dot, { width: dotSize, height: dotSize }]}
              key={`dot-${index}`}
              opacity={opacity}
            ></Animated.View>
          )
        })}
      </View>
    )
  }

  return (
    <SafeAreaView style={Styles.container}>
      <View>{renderContent()}</View>
      <View style={Styles.buttonRootContainer}>{renderButton()}</View>
      <View style={Styles.dotRootContainer}>{renderDot()}</View>
    </SafeAreaView>
  )
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.white
  },
  image: {
    width: horizontalScale(309),
    height: verticalScale(309)
  },
  contentContainer: {
    width: width,
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: verticalScale(96),
    paddingTop: verticalScale(65)
  },
  imageContainer: {},
  textContainer: {
    alignItems: 'center',
    paddingHorizontal: horizontalScale(24)
  },
  title: {
    color: COLORS.black3,
    fontSize: moderateScale(32),
    fontFamily: 'Poppins-Bold',
    textAlign: 'center'
  },
  description: {
    color: COLORS.black3,
    fontSize: moderateScale(16),
    textAlign: 'center'
  },
  bottomContainer: {
    gap: verticalScale(40),
    alignItems: 'center'
  },
  buttonContainer: {
    gap: verticalScale(16),
    alignItems: 'center'
  },
  nextButton: {
    backgroundColor: COLORS.blue,
    borderRadius: 10,
    paddingHorizontal: horizontalScale(40),
    paddingVertical: verticalScale(10)
  },
  nextText: {
    color: COLORS.white,
    fontSize: moderateScale(16),
    fontFamily: 'Poppins-Medium'
  },
  skipText: {
    color: COLORS.black3,
    fontSize: moderateScale(16),
    textAlign: 'center'
  },
  dot: {
    backgroundColor: COLORS.blue,
    borderRadius: 100
  },
  dotContainer: {
    flexDirection: 'row',
    gap: horizontalScale(16)
  },
  dotRootContainer: {
    position: 'absolute',
    bottom: height > 700 ? '50%' : '16%'
  },
  buttonRootContainer: {
    position: 'absolute',
    bottom: verticalScale(80)
  }
})

export default OnBoardingPage
