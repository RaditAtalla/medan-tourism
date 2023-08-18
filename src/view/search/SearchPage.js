import { Text, View, SafeAreaView, StatusBar, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native'

import CarouselTempatWisata from '../../components/atoms/CarouselTempatWisata'
import LihatSemuaButton from '../../components/atoms/LihatSemuaButton'
import BandaraCarousel from '../../components/atoms/BandaraCarousel'
import HotelCarousel from '../../components/atoms/HotelCarousel'
import { verticalScale } from '../../theme/responsive'
import Styles from '../../styles/SearchPageStyles'
import ICONS from '../../assets/icons/icons'

const SearchPage = ({ navigation }) => {
  return (
    <SafeAreaView style={Styles.container}>
      <StatusBar barStyle="light-content" translucent backgroundColor="transparent" />
      <View style={Styles.headerContainer}>
        <View style={Styles.inputGroup}>
          <Image source={ICONS.search} style={Styles.icon} />
          <TextInput
            style={Styles.input}
            placeholder="Cari hotel, flight, dan lainnya..."
            onPressIn={() => navigation.navigate('SearchStackScreen')}
          />
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('ProfilePage')}>
          <Image source={require('../../assets/img/profilePic.png')} style={Styles.profilePic} />
        </TouchableOpacity>
      </View>
      <ScrollView style={Styles.contentContainer} showsVerticalScrollIndicator={false}>
        <View style={Styles.sectionContainer}>
          <View style={Styles.sectionTitleContainer}>
            <Text style={Styles.sectionTitle}>Tempat Wisata</Text>
          </View>
          <CarouselTempatWisata />
        </View>
        <View style={Styles.sectionContainer}>
          <View style={Styles.sectionTitleContainer}>
            <Text style={Styles.sectionTitle}>Hotel</Text>
            <LihatSemuaButton />
          </View>
          <HotelCarousel
            width={175}
            action={() => navigation.navigate('HomeNavStackScreen', { screen: 'HotelPreviewPage' })}
          />
        </View>
        <View style={[Styles.sectionContainer, { marginBottom: verticalScale(77), marginTop: verticalScale(16) }]}>
          <View style={Styles.sectionTitleContainer}>
            <Text style={Styles.sectionTitle}>Bandara</Text>
            <LihatSemuaButton />
          </View>
          <BandaraCarousel />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SearchPage
