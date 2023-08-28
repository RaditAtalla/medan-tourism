import { View, SafeAreaView, ScrollView, Text, StatusBar } from 'react-native'
import TempatWisataDetailCarousel from '../../components/atoms/TempatWisataDetailCarousel'
import EventDanBeritaCarousel from '../../components/atoms/EventDanBeritaCarousel'
import LihatSemuaButton from '../../components/atoms/LihatSemuaButton'
import HotelCarousel from '../../components/atoms/HotelCarousel'
import { verticalScale } from '../../theme/responsive'
import Styles from '../../styles/DisimpanPageStyles'
import { useEffect, useState } from 'react'
import { getBookmarks } from '../../services/bookmark.service'
import RecommendationCarousel from '../../components/atoms/RecommendationCarousel'

const DisimpanPage = ({ navigation }) => {
  const [recommendation, setRecommendation] = useState([])

  useEffect(() => {
    const getRecommendation = async () => {
      const bookmarks = await getBookmarks()
      setRecommendation(bookmarks)
    }
    getRecommendation()
  }, [])

  const getTitleData = (data, type) => {
    return data.filter((item) => item.type === type)
  }

  return (
    <SafeAreaView style={Styles.container}>
      <StatusBar barStyle="light-content" translucent backgroundColor="transparent" />
      <ScrollView style={Styles.wrapper}>
        {getTitleData(recommendation, 'hotel').length > 0 && (
          <View style={Styles.sectionContainer}>
            <View style={Styles.sectionTitleContainer}>
              <Text style={Styles.sectionTitle}>Hotel</Text>
              <LihatSemuaButton action={() => navigation.navigate('SemuaHotelPage')} />
            </View>
            <HotelCarousel />
          </View>
        )}

        {getTitleData(recommendation, 'travel').length > 0 && (
          <View style={Styles.sectionContainer}>
            <View style={Styles.sectionTitleContainer}>
              <Text style={Styles.sectionTitle}>Travel</Text>
              <LihatSemuaButton action={() => navigation.navigate('SemuaUntukmuTravelPage')} />
            </View>
            <RecommendationCarousel data={getTitleData(recommendation, 'travel')} />
          </View>
        )}

        {getTitleData(recommendation, 'mice').length > 0 && (
          <View style={Styles.sectionContainer}>
            <View style={Styles.sectionTitleContainer}>
              <Text style={Styles.sectionTitle}>MICE</Text>
              <LihatSemuaButton action={() => navigation.navigate('SemuaUntukmuMicePage')} />
            </View>
            <RecommendationCarousel data={getTitleData(recommendation, 'mice')} />
          </View>
        )}

        {getTitleData(recommendation, 'event').length > 0 && (
          <View style={Styles.sectionContainer}>
            <View style={Styles.sectionTitleContainer}>
              <Text style={Styles.sectionTitle}>Berita & Event</Text>
              <LihatSemuaButton action={() => navigation.navigate('SemuaBeritaPage')} />
            </View>
            <EventDanBeritaCarousel />
          </View>
        )}
        {getTitleData(recommendation, 'wisata').length > 0 && (
          <View style={[Styles.sectionContainer, { marginBottom: verticalScale(70) }]}>
            <View style={Styles.sectionTitleContainer}>
              <Text style={Styles.sectionTitle}>Tempat Wisata</Text>
              <LihatSemuaButton action={() => navigation.navigate('SemuaTempatWisataPage')} />
            </View>
            <TempatWisataDetailCarousel />
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  )
}

export default DisimpanPage
