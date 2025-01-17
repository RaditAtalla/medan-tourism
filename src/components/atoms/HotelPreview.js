import {
  View,
  Image,
  Text,
  TouchableOpacity,
  StyleSheet,
  Animated,
  Dimensions,
  ScrollView,
  Linking
} from 'react-native'
import { verticalScale, horizontalScale, moderateScale } from '../../theme/responsive'
import { useState, useRef } from 'react'
import COLORS from '../../theme/colors'
import ICONS from '../../assets/icons/icons'
import { StarOnlyDisplay } from './StarDisplayDetail'
import CtaButton from './CtaButton'
import { useNavigation } from '@react-navigation/native'
import { getImagePlace } from '../../utils/tranformData'

const { width, height } = Dimensions.get('window')

const HotelPreview = ({ name, rating, description, reviews, price, photos, phone }) => {
  const scrollViewRef = useRef()
  const scrollX = new Animated.Value(0)

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
        onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], { useNativeDriver: false })}
      >
        {/* {data.map((item, index) => {
          return <Image key={index} style={Styles.carouselContainer} source={item.images[currentIndex]} />
        })} */}
        <Image style={Styles.carouselContainer} source={{ uri: getImagePlace(photos[currentIndex].photo_reference) }} />
      </Animated.ScrollView>
    )
  }

  const [currentIndex, setCurrentIndex] = useState(0)
  function renderButton() {
    const handleNextPress = () => {
      // const nextIndex = (currentIndex + 1) % images.length
      const nextIndex = (currentIndex + 1) % photos.length

      setCurrentIndex(nextIndex)
      scrollViewRef.current.scrollTo({ x: nextIndex * width, animated: true })
    }

    const handlePrevPress = () => {
      // const prevIndex = (currentIndex - 1) % images.length
      const prevIndex = (currentIndex - 1) % photos.length

      setCurrentIndex(prevIndex)
      scrollViewRef.current.scrollTo({ x: prevIndex * width, animated: true })
    }

    return (
      <View style={Styles.arrowContainer}>
        <TouchableOpacity style={Styles.arrow} onPress={handlePrevPress}>
          <Image source={ICONS.leftArrow} />
        </TouchableOpacity>
        <TouchableOpacity style={Styles.arrow} onPress={handleNextPress}>
          <Image source={ICONS.rightArrow} />
        </TouchableOpacity>
      </View>
    )
  }

  // const renderDot = () => {
  //   const dotPosition = Animated.divide(scrollX, width)
  //   dotPosition.addListener(({ value }) => {
  //     const index = Math.round(value / width)
  //     setCurrentIndex(index)
  //   })
  //   return (
  //     <View style={Styles.dotContainer}>
  //       {photos.map((item, index) => {
  //         const opacity = dotPosition.interpolate({
  //           inputRange: [index - 1, index, index + 2],
  //           outputRange: [0.3, 1, 0.3],
  //           extrapolate: 'clamp'
  //         })

  //         const dotSize = dotPosition.interpolate({
  //           inputRange: [index - 1, index, index + 2],
  //           outputRange: [10, 10, 10],
  //           extrapolate: 'clamp'
  //         })
  //         return (
  //           <Animated.View
  //             style={[Styles.dot, { width: dotSize, height: dotSize }]}
  //             key={`dot-${index}`}
  //             opacity={opacity}
  //           />
  //         )
  //       })}
  //     </View>
  //   )
  // }

  const HotelId = () => {
    const idStyle = StyleSheet.create({
      topWrapper: {
        gap: verticalScale(16)
      },
      name: {
        color: COLORS.black3,
        fontSize: moderateScale(24),
        fontFamily: 'Poppins-Bold'
      },
      rating: {
        color: COLORS.black3,
        opacity: 0.5,
        fontSize: moderateScale(16),
        fontFamily: 'Poppins-SemiBold'
      }
    })
    return (
      <View style={idStyle.topWrapper}>
        <Text style={idStyle.name}>{name}</Text>
        <Text style={idStyle.rating}>Hotel {rating} Star</Text>
      </View>
    )
  }

  const Details = () => {
    const detailStyle = StyleSheet.create({
      description: {
        color: COLORS.black3
      }
    })
    return <Text style={detailStyle.description}>{description}</Text>
  }

  const Review = () => {
    const reviewStyles = StyleSheet.create({
      container: {
        backgroundColor: COLORS.white,
        borderRadius: 26,
        gap: verticalScale(26),
        paddingVertical: verticalScale(16),
        paddingHorizontal: horizontalScale(12),
        width: '100%'
      },
      userData: {
        flexDirection: 'row',
        gap: horizontalScale(10),
        alignItems: 'center'
      },
      profilePic: {
        width: horizontalScale(28),
        height: verticalScale(28),
        borderRadius: 100
      },
      usernameAndRating: {
        gap: verticalScale(4)
      },
      username: {
        color: COLORS.black3,
        fontSize: moderateScale(12),
        fontFamily: 'Poppins-SemiBold'
      },
      comment: {
        color: COLORS.black3,
        fontSize: moderateScale(12)
      }
    })

    return (
      <View style={{ gap: verticalScale(24) }}>
        {reviews.map((item, index) => {
          return (
            <View style={reviewStyles.container} key={index}>
              <View style={reviewStyles.userData}>
                <Image style={reviewStyles.profilePic} source={{ uri: item.profile_photo_url }} />
                <View style={reviewStyles.usernameAndRating}>
                  <Text style={reviewStyles.username}>{item.author_name}</Text>
                  <StarOnlyDisplay rating={item.rating} />
                </View>
              </View>
              <Text style={reviewStyles.comment}>{item.text}</Text>
            </View>
          )
        })}
      </View>
    )
  }

  const [isDetailActive, setIsDetailActive] = useState(true)
  const [isReviewActive, setIsReviewActive] = useState(false)

  const ActiveComponent = () => {
    if (isReviewActive) {
      return <Review />
    }
    return <Details />
  }

  const MenuButton = () => {
    const menuStyles = StyleSheet.create({
      buttonUnderline: {
        width: '100%',
        height: verticalScale(3),
        backgroundColor: COLORS.blue,
        borderRadius: 10
      },
      noButtonUnderline: {
        display: 'none'
      }
    })
    return (
      <View>
        <View style={Styles.sectionButtonContainer}>
          <View>
            <TouchableOpacity
              style={Styles.sectionButton}
              onPress={() => {
                setIsDetailActive(true)
                setIsReviewActive(false)
              }}
            >
              <Text style={isDetailActive ? Styles.sectionButtonTextActive : Styles.sectionButtonTextInactive}>
                Details
              </Text>
            </TouchableOpacity>
            <View style={isDetailActive ? menuStyles.buttonUnderline : menuStyles.noButtonUnderline} />
          </View>
          <View>
            <TouchableOpacity
              style={Styles.sectionButton}
              onPress={() => {
                setIsReviewActive(true)
                setIsDetailActive(false)
              }}
            >
              <Text style={isReviewActive ? Styles.sectionButtonTextActive : Styles.sectionButtonTextInactive}>
                Review
              </Text>
            </TouchableOpacity>
            <View style={isReviewActive ? menuStyles.buttonUnderline : menuStyles.noButtonUnderline} />
          </View>
        </View>
      </View>
    )
  }

  const ActionMenu = () => {
    const ActionMenuStyles = StyleSheet.create({
      container: {
        backgroundColor: COLORS.white,
        paddingVertical: verticalScale(16),
        paddingHorizontal: horizontalScale(20),
        // width: width,
        borderRadius: 16,
        alignItems: 'center',
        gap: horizontalScale(16),
        flexDirection: 'row',
        elevation: 12
      },
      price: {
        color: COLORS.blue,
        fontSize: moderateScale(16),
        fontFamily: 'Poppins-Bold'
      }
    })
    return (
      <View style={ActionMenuStyles.container}>
        <Text style={ActionMenuStyles.price}>
          IDR {price}
          <Text
            style={{
              color: COLORS.black3,
              fontSize: moderateScale(10),
              fontFamily: 'Poppins-Regular'
            }}
          >
            /malam
          </Text>
        </Text>
        <CtaButton
          backgroundColor={COLORS.blue}
          fColor={COLORS.white}
          fFamily="Poppins-Medium"
          vPadding={verticalScale(8)}
          hPadding={horizontalScale(12)}
          borderRadius={8}
          text="Telepon Sekarang"
          action={() => Linking.openURL(`tel:${phone}`)}
        />
      </View>
    )
  }

  const navigation = useNavigation()

  return (
    <View style={{ flex: 1, alignItems: 'center' }}>
      <ScrollView style={Styles.rootContainer} showsVerticalScrollIndicator={false}>
        <View style={[Styles.carouselRootContainer, { position: 'relative' }]}>
          <View>{renderImage()}</View>
          <View style={Styles.arrowRootContainer}>{renderButton()}</View>
          {/* <View style={Styles.dotRootContainer}>{renderDot()}</View> */}
          <View
            style={{
              position: 'absolute',
              backgroundColor: 'rgba(255,255,255,0.5)',
              borderRadius: 50,
              padding: 10,
              top: verticalScale(59),
              left: horizontalScale(24)
            }}
          >
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Image
                style={{ width: 20, height: 20, objectFit: 'contain' }}
                source={require('../../assets/icons/backButtonBlack.png')}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={Styles.contentContainer}>
          <View style={Styles.contentWrapper}>
            <MenuButton />
            <HotelId />
            <ActiveComponent />
          </View>
        </View>
      </ScrollView>
      <View style={Styles.actionMenuRootContainer}>
        <ActionMenu />
      </View>
    </View>
  )
}

const Styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: COLORS.gray5
  },
  carouselContainer: {
    width: width,
    height: verticalScale(456),
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  carouselRootContainer: {
    width: width,
    height: verticalScale(456),
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    alignItems: 'center'
  },
  arrowRootContainer: {
    position: 'absolute',
    bottom: verticalScale(216)
  },
  arrowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: width,
    paddingHorizontal: horizontalScale(24)
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
    bottom: verticalScale(50)
  },
  contentContainer: {
    paddingVertical: verticalScale(48),
    paddingHorizontal: horizontalScale(24),
    backgroundColor: COLORS.gray5,
    flex: 1
  },
  sectionButtonContainer: {
    flexDirection: 'row',
    gap: horizontalScale(32),
    alignItems: 'flex-start'
  },
  sectionButtonTextActive: {
    color: COLORS.black3,
    fontSize: moderateScale(20),
    fontFamily: 'Poppins-Bold'
  },
  sectionButtonTextInactive: {
    color: COLORS.black3,
    opacity: 0.5,
    fontSize: moderateScale(20),
    fontFamily: 'Poppins-Bold'
  },
  contentWrapper: {
    gap: verticalScale(29),
    paddingBottom: 60
  },
  actionMenuRootContainer: {
    position: 'absolute',
    // bottom: '10%',
    bottom: horizontalScale(24)
  }
})

export default HotelPreview
