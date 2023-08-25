import { TouchableOpacity, StyleSheet, View, Image, Text, FlatList, ImageBackground } from 'react-native'

import { horizontalScale, verticalScale, moderateScale } from '../../theme/responsive'
import { eventDanBeritaData as DATA } from '../../utils/dataDummy'
import ICONS from '../../assets/icons/icons'
import COLORS from '../../theme/colors'

export const Item = ({ image, title, content, time, navigation, isFirst, isLast }) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(title)}
      style={[
        Styles.container,
        isFirst && { marginLeft: horizontalScale(24) },
        isLast && { marginRight: horizontalScale(24) }
      ]}
    >
      <ImageBackground source={image} style={Styles.thumbnail} imageStyle={{ borderRadius: 4 }}>
        <Image source={ICONS.saveCircle} style={Styles.saveButton} />
      </ImageBackground>
      <View style={Styles.metaData}>
        <Text style={Styles.title} numberOfLines={2}>
          {title}
        </Text>
        <Text style={Styles.content} numberOfLines={2}>
          {content}
        </Text>
        <Text style={Styles.time}>{time}</Text>
      </View>
    </TouchableOpacity>
  )
}

const EventDanBeritaCarousel = () => {
  return (
    <FlatList
      data={DATA}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item, index }) => (
        <Item
          image={item.image}
          title={item.title}
          content={item.content}
          time={item.time}
          isFirst={index === 0}
          isLast={index === (DATA.length || 0) - 1}
        />
      )}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ gap: horizontalScale(24) }}
    />
  )
}

const Styles = StyleSheet.create({
  container: {
    paddingHorizontal: horizontalScale(10),
    paddingVertical: verticalScale(10),
    alignItems: 'flex-start',
    flexDirection: 'row',
    gap: horizontalScale(10),
    borderRadius: 8,
    backgroundColor: COLORS.white,
    width: horizontalScale(372)
  },
  thumbnail: {
    width: horizontalScale(131),
    height: verticalScale(98),
    objectFit: 'cover'
  },
  saveButton: {
    position: 'absolute',
    top: 6,
    right: 8
  },
  metaData: {
    gap: horizontalScale(8),
    width: '60%'
  },
  title: {
    color: COLORS.black4,
    fontFamily: 'Poppins-Bold'
  },
  content: {
    color: COLORS.black3,
    fontSize: moderateScale(10),
    fontFamily: 'Poppins-Medium'
  },
  time: {
    color: COLORS.secondary,
    fontSize: moderateScale(10),
    fontFamily: 'Poppins-Medium'
  }
})

export default EventDanBeritaCarousel
