import {FlatList, View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { horizontalScale, moderateScale, verticalScale } from '../../theme/responsive';
import COLORS from '../../theme/colors';

const DATA = [
  {
    username: 'KotaMedanOke',
    date: 'Minggu, 11 Juli 2023',
    tweet: 'UPDATE Tinggi Muka Air, Minggu 11 Juni 2023\n Pukul\n 03.00 WIB. ....',
  },
  {
    username: 'RaditOnTwr',
    date: 'Minggu, 10 Juli 2023',
    tweet: 'Sejarah Kota Medan, yuk cari tahu!',
  },
];

const Item = ({ username, date, tweet }) => {
  return (
    <TouchableOpacity style={Styles.container}>
      <View style={Styles.metaData}>
        <Text style={Styles.username}>@{username}</Text>
        <Text style={Styles.date}>{date}</Text>
      </View>
      <Text style={Styles.tweet}>{tweet}</Text>
    </TouchableOpacity>
  );
};

const Styles = StyleSheet.create({
  container: {
    width: horizontalScale(334),
    backgroundColor: COLORS.white,
    paddingHorizontal: horizontalScale(12),
    paddingVertical: verticalScale(12),
    gap: verticalScale(12),
    borderRadius: 12,
    marginRight: horizontalScale(24),
  },
  metaData: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  username: {
    fontSize: moderateScale(10),
    fontFamily: 'Poppins-Light',
    color: COLORS.black4,
  },
  date: {
    fontSize: moderateScale(8),
    fontFamily: 'Poppins-Regular',
    color: COLORS.black4,
  },
  tweet: {
    fontSize: moderateScale(14),
    color: COLORS.black4,
  },
})

const FeedCarousel = () => {
  return(
    <FlatList
      data={DATA}
      renderItem={({item}) => <Item username={item.username} date={item.date} tweet={item.tweet} />}
      keyExtractor={item => item.tweet}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      style={{
        paddingLeft: horizontalScale(24)
      }}
    />
  )
}

export default FeedCarousel