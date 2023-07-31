import {
  TouchableOpacity,
  StyleSheet,
  View,
  Image,
  Text,
  FlatList,
  ImageBackground,
} from 'react-native';
import COLORS from '../../theme/colors';
import ICONS from '../../assets/icons/icons';
import {
  horizontalScale,
  verticalScale,
  moderateScale,
} from '../../theme/responsive';

export const DATA = [
  {
    id: 1,
    image: require('../../assets/img/berita1.png'),
    title: 'Kuliner Medan Menggugah Selera',
    content: 'Salah satunya, Rumah Makan Nasi Kapau Uni EMI di Jalan Rotan, Medan Petisah......',
    time: '30 menit yang lalu',
  },
  {
    id: 2,
    image: require('../../assets/img/berita2.png'),
    title:
      'Ikuti Medan Tourism Video Contest, Menangkan Hadiah Puluhan Juta Rupiah!',
    content:
      'Buat kamu warga Kota Medan yang punya hobi jalan-jalan dan mengabadikan momen',
    time: '30 menit yang lalu',
  },
  {
    id: 3,
    image: require('../../assets/img/berita1.png'),
    title: 'Kuliner Medan Menggugah Selera',
    content: 'Salah satunya, Rumah Makan Nasi Kapau Uni EMI di Jalan Rotan, Medan Petisah......',
    time: '30 menit yang lalu',
  },
  {
    id: 4,
    image: require('../../assets/img/berita2.png'),
    title:
      'Ikuti Medan Tourism Video Contest, Menangkan Hadiah Puluhan Juta Rupiah!',
    content:
      'Buat kamu warga Kota Medan yang punya hobi jalan-jalan dan mengabadikan momen',
    time: '30 menit yang lalu',
  },
  {
    id: 5,
    image: require('../../assets/img/berita1.png'),
    title: 'Kuliner Medan Menggugah Selera',
    content: 'Salah satunya, Rumah Makan Nasi Kapau Uni EMI di Jalan Rotan, Medan Petisah......',
    time: '30 menit yang lalu',
  },
  {
    id: 6,
    image: require('../../assets/img/berita2.png'),
    title:
      'Ikuti Medan Tourism Video Contest, Menangkan Hadiah Puluhan Juta Rupiah!',
    content:
      'Buat kamu warga Kota Medan yang punya hobi jalan-jalan dan mengabadikan momen',
    time: '30 menit yang lalu',
  },
];

export const Item = ({image, title, content, time, navigation }) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate(title)} style={Styles.container}>
      <ImageBackground source={image} style={Styles.thumbnail} imageStyle={{ borderRadius: 4, }} >
        <Image source={ICONS.saveCircle} style={Styles.saveButton} />
      </ImageBackground>
      <View style={Styles.metaData}>
        <Text style={Styles.title} numberOfLines={2}>{title}</Text>
        <Text style={Styles.content} numberOfLines={2}>{content}</Text>
        <Text style={Styles.time}>{time}</Text>
      </View>
    </TouchableOpacity>
  );
};

const Styles = StyleSheet.create({
  container: {
    paddingHorizontal: horizontalScale(10),
    paddingVertical: verticalScale(10),
    alignItems: 'flex-start',
    flexDirection: 'row',
    gap: horizontalScale(10),
    borderRadius: 8,
    backgroundColor: COLORS.white,
    width: horizontalScale(372),
    marginRight: horizontalScale(24),
  },
  thumbnail: {
    width: horizontalScale(131),
    height: verticalScale(98),
    objectFit: 'cover',
  },
  saveButton: {
    position: 'absolute',
    top: 6,
    right: 8,
  },
  metaData: {
    gap: horizontalScale(8),
    width: '60%',
  },
  title: {
    color: COLORS.black4,
    fontFamily: 'Poppins-Bold',
  },
  content: {
    color: COLORS.black3,
    fontSize: moderateScale(10),
    fontFamily: 'Poppins-Medium',
  },
  time: {
    color: COLORS.secondary,
    fontSize: moderateScale(10),
    fontFamily: 'Poppins-Medium',
  }
})

const EventDanBeritaCarousel = () => {
  return(
    <FlatList
      data={DATA}
      renderItem={({item}) => <Item image={item.image} title={item.title} content={item.content} time={item.time} />}
      keyExtractor={item => item.id}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      style={{
        paddingLeft: horizontalScale(24)
      }}
    />
  )
}

export default EventDanBeritaCarousel