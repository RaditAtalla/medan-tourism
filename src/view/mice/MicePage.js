import {
  Text,
  View,
  SafeAreaView,
  ScrollView,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import Styles from '../../styles/MicePageStyles';
import MicePopulerCarousel from '../../components/atoms/MicePopulerCarousel';
import MiceDekatCarousel from '../../components/atoms/MiceDekatCarousel';
import IMAGES from '../../assets/img/images';
import Modal from 'react-native-modal'
import { useState } from 'react'

const MicePage = () => {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
      setModalVisible(!isModalVisible);
  };
  return (
    <SafeAreaView style={Styles.container}>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />
      <ScrollView>
        <View style={Styles.sectionContainer}>
          <View style={Styles.sectionTitleContainer}>
            <Text style={Styles.sectionTitle}>Populer</Text>
            <TouchableOpacity>
              <Text style={Styles.lihatSemua}>Lihat semua</Text>
            </TouchableOpacity>
          </View>
          <MicePopulerCarousel />
        </View>
        <View style={Styles.sectionContainer}>
          <View style={Styles.sectionTitleContainer}>
            <Text style={Styles.sectionTitle}>Dekat Dengan Kamu</Text>
            <TouchableOpacity>
              <Text style={Styles.lihatSemua}>Lihat semua</Text>
            </TouchableOpacity>
          </View>
          <MiceDekatCarousel />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MicePage;
