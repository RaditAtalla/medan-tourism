import { View, SafeAreaView, ScrollView, Text, StatusBar } from 'react-native'
import TempatWisataDetailCarousel from '../../components/atoms/TempatWisataDetailCarousel'
import EventDanBeritaCarousel from '../../components/atoms/EventDanBeritaCarousel'
import LihatSemuaButton from '../../components/atoms/LihatSemuaButton'
import HotelCarousel from '../../components/atoms/HotelCarousel'
import Styles from '../../styles/TerakhirDilihatPageStyles'
import { verticalScale } from '../../theme/responsive'
import ICONS from '../../assets/icons/icons'
import IMAGES from '../../assets/img/images'

const TerakhirDilihatPage = ({ navigation }) => {
  return (
    <SafeAreaView style={Styles.container}>
      <StatusBar barStyle="light-content" translucent backgroundColor="transparent" />
      <ScrollView style={Styles.wrapper}>
        <View style={Styles.sectionContainer}>
          <View style={Styles.sectionTitleContainer}>
            <Text style={Styles.sectionTitle}>Hotel</Text>
            <LihatSemuaButton action={() => navigation.navigate('SemuaHotelPage')} />
          </View>
          <HotelCarousel />
        </View>
        <View style={Styles.sectionContainer}>
          <View style={Styles.sectionTitleContainer}>
            <Text style={Styles.sectionTitle}>Berita & Event</Text>
            <LihatSemuaButton action={() => navigation.navigate('SemuaBeritaPage')} />
          </View>
          <EventDanBeritaCarousel />
        </View>
        <View style={[Styles.sectionContainer, { marginBottom: verticalScale(70) }]}>
          <View style={Styles.sectionTitleContainer}>
            <Text style={Styles.sectionTitle}>Tempat Wisata</Text>
            <LihatSemuaButton action={() => navigation.navigate('SemuaTempatWisataPage')} />
          </View>
          <TempatWisataDetailCarousel />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default TerakhirDilihatPage
