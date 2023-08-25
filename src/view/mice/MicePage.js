import { Text, View, SafeAreaView, ScrollView, StatusBar, TouchableOpacity } from 'react-native'
import Modal from 'react-native-modal'
import { useState } from 'react'

import MicePopulerCarousel from '../../components/atoms/MicePopulerCarousel'
import MiceDekatCarousel from '../../components/atoms/MiceDekatCarousel'
import Styles from '../../styles/MicePageStyles'
import IMAGES from '../../assets/img/images'

const MicePage = ({ navigation }) => {
  const [isModalVisible, setModalVisible] = useState(false)

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
          <MicePopulerCarousel />
        </View>
        <View style={Styles.sectionContainer}>
          <View style={Styles.sectionTitleContainer}>
            <Text style={Styles.sectionTitle}>Dekat Dengan Kamu</Text>
            <TouchableOpacity onPress={() => navigation.navigate('SemuaDekatMicePage')}>
              <Text style={Styles.lihatSemua}>Lihat semua</Text>
            </TouchableOpacity>
          </View>
          <MiceDekatCarousel />
        </View>
        <View style={Styles.sectionContainer}>
          <View style={Styles.sectionTitleContainer}>
            <Text style={Styles.sectionTitle}>Untuk Kamu</Text>
            <TouchableOpacity onPress={() => navigation.navigate('SemuaUntukmuMicePage')}>
              <Text style={Styles.lihatSemua}>Lihat semua</Text>
            </TouchableOpacity>
          </View>
          <MiceDekatCarousel />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default MicePage
