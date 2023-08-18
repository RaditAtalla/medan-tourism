import { Text, View, SafeAreaView, TextInput, TouchableOpacity, Image } from 'react-native'

import KategoriPencarian from '../../components/atoms/KategoriPencarian'
import Styles from '../../styles/SearchHistoryPageStyles'
import ICONS from '../../assets/icons/icons'
import COLORS from '../../theme/colors'

const SearchHistoryPage = () => {
  return (
    <SafeAreaView style={Styles.container}>
      <View style={Styles.inputGroup}>
        <Image source={ICONS.search} style={Styles.icon} />
        <TextInput placeholder="Cari hotel, flight, dan lainnya..." style={Styles.input} selectionColor={COLORS.blue} />
      </View>
      <View style={Styles.wrapper}>
        <View style={Styles.riwayatPencarianContainer}>
          <Text style={Styles.sectionTitle}>Riwayat pencarian</Text>
          <View style={Styles.riwayatContainer}>
            <TouchableOpacity style={Styles.riwayatText}>
              <Text style={Styles.riwayat}>aryaduta</Text>
            </TouchableOpacity>
            <TouchableOpacity style={Styles.riwayatText}>
              <Text style={Styles.riwayat}>kualanamu</Text>
            </TouchableOpacity>
            <TouchableOpacity style={Styles.riwayatText}>
              <Text style={Styles.riwayat}>asdawo</Text>
            </TouchableOpacity>
            <TouchableOpacity style={Styles.riwayatText}>
              <Text style={Styles.riwayat}>Danau toba</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={Styles.kategoriPencarianContainer}>
          <Text style={Styles.sectionTitle}>Kategori pencarian</Text>
          <KategoriPencarian />
        </View>
        <View style={Styles.populerContainer}>
          <Text style={Styles.sectionTitle}>✨ Populer</Text>
          <View style={Styles.riwayatContainer}>
            <TouchableOpacity style={Styles.populerText}>
              <Text style={Styles.riwayat}>Bukit Holbung</Text>
            </TouchableOpacity>
            <TouchableOpacity style={Styles.populerText}>
              <Text style={Styles.riwayat}>AdimuliaMedan</Text>
            </TouchableOpacity>
            <TouchableOpacity style={Styles.populerText}>
              <Text style={Styles.riwayat}>Sipiso - piso</Text>
            </TouchableOpacity>
            <TouchableOpacity style={Styles.populerText}>
              <Text style={Styles.riwayat}>Danau toba</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default SearchHistoryPage
