import { Image, View, Text, TouchableOpacity, SafeAreaView, KeyboardAvoidingView, ScrollView } from 'react-native'

import TransportKoridorInputGroup from '../../components/atoms/TransportKoridorInputGroup.js'
import KoridorLocationCard from '../../components/atoms/TransportKoridorLocationCard'
import { styles } from '../../styles/TransportKoridor.style'
import IMAGES from '../../assets/img/images'

export default TransportMetrodeliPage = ({ navigation }) => {
  return (
    <SafeAreaView>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <ScrollView>
          <View style={styles.container}>
            <View style={styles.content}>
              <TransportKoridorInputGroup HeroImage={IMAGES.greenHalte} Placeholder="Cari halte" />
              <View style={styles.menuWrapper}>
                <KoridorLocationCard halteName="Terminal Pinang Baris" halteLocation="Lalang, Medan Sunggal" />
                <KoridorLocationCard
                  halteName="Terminal Pinang Baris"
                  halteLocation="Lalang, Medan Sunggal"
                  space={24}
                />
                <KoridorLocationCard halteName="Terminal Pinang Baris" halteLocation="Lalang, Medan Sunggal" />
                <KoridorLocationCard halteName="Terminal Pinang Baris" halteLocation="Lalang, Medan Sunggal" />
                <KoridorLocationCard halteName="Terminal Pinang Baris" halteLocation="Lalang, Medan Sunggal" />
              </View>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}
