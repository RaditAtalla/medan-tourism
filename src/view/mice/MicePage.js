import { Text, ActivityIndicator, View, SafeAreaView, ScrollView, StatusBar, TouchableOpacity } from 'react-native'
import { useEffect, useState } from 'react'

import MicePopulerCarousel from '../../components/atoms/MicePopulerCarousel'
import MiceDekatCarousel from '../../components/atoms/MiceDekatCarousel'
import Styles from '../../styles/MicePageStyles'
import COLORS from '../../theme/colors'
import { verticalScale } from '../../theme/responsive'
import { useGetDekatPlacesQuery, useGetPlacesQuery } from '../../api/place.api'
import { getBookmarks } from '../../services/bookmark.service'
import { useSelector } from 'react-redux'
import RecommendationCarousel from '../../components/atoms/RecommendationCarousel'

const Loading = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', paddingVertical: verticalScale(16) }}>
      <ActivityIndicator size="small" color={COLORS.blue} />
    </View>
  )
}

const MicePage = ({ navigation }) => {
  const [isModalVisible, setModalVisible] = useState(false)
  const [recommendation, setRecommendation] = useState([])
  const location = useSelector((state) => state.location.location)

  const { data: popular, isSuccess } = useGetPlacesQuery('meeting room')
  const { data: dekat, isSuccess: isSuccessDekat } = useGetDekatPlacesQuery({
    keyword: 'meeting room',
    lat: location.address.location.lat,
    lng: location.address.location.lng
  })

  useEffect(() => {
    const getMiceBookmarks = async () => {
      const bookmarks = await getBookmarks()
      const miceBookmarks = bookmarks.filter((bookmark) => bookmark.type === 'mice')
      setRecommendation(miceBookmarks)
    }
    getMiceBookmarks()
  }, [])

  const transformData = (data) => {
    const results = data.filter((item) => item.photos && item.rating && item.user_ratings_total && item.opening_hours)
    return results.map((item) => ({ ...item, type: 'mice' }))
  }

  const toggleModal = () => {
    setModalVisible(!isModalVisible)
  }

  return (
    <SafeAreaView style={Styles.container}>
      <StatusBar barStyle="dark-content" translucent backgroundColor="transparent" />
      <ScrollView style={Styles.contentContainer}>
        <View style={Styles.sectionContainer}>
          <View style={Styles.sectionTitleContainer}>
            <Text style={Styles.sectionTitle}>Populer</Text>
            <TouchableOpacity onPress={() => navigation.navigate('SemuaPopulerMicePage')}>
              <Text style={Styles.lihatSemua}>Lihat semua</Text>
            </TouchableOpacity>
          </View>
          {isSuccess ? <MicePopulerCarousel data={transformData(popular.results).slice(0, 4)} /> : <Loading />}
        </View>
        <View style={Styles.sectionContainer}>
          <View style={Styles.sectionTitleContainer}>
            <Text style={Styles.sectionTitle}>Dekat Dengan Kamu</Text>
            <TouchableOpacity onPress={() => navigation.navigate('SemuaDekatMicePage')}>
              <Text style={Styles.lihatSemua}>Lihat semua</Text>
            </TouchableOpacity>
          </View>
          {isSuccessDekat ? <MiceDekatCarousel data={transformData(dekat.results).slice(0, 4)} /> : <Loading />}
        </View>
        {recommendation.length > 0 && (
          <View style={Styles.sectionContainer}>
            <View style={Styles.sectionTitleContainer}>
              <Text style={Styles.sectionTitle}>Untuk Kamu</Text>
              <TouchableOpacity onPress={() => navigation.navigate('SemuaUntukmuMicePage')}>
                <Text style={Styles.lihatSemua}>Lihat semua</Text>
              </TouchableOpacity>
            </View>
            <RecommendationCarousel data={recommendation} />
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  )
}

export default MicePage
