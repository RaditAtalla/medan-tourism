import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {styles} from '../../styles/beritaDanEventPage.Style';
import CarouselBeritaDanEvent from '../../components/atoms/CarouselBeritaDanEvent';
import BeritaDanEventCard from '../../components/atoms/BeritaDanEventCard';
import IMAGES from '../../assets/img/images';

export default function BeritaDanEventPage({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.title}>MedanTourism Event</Text>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('HomeNavStackScreen', {
                screen: 'BeritaDanEventPageMedanTourismEvent',
              })
            }>
            <Text style={styles.lihatSemua}>Lihat semua</Text>
          </TouchableOpacity>
        </View>
        <CarouselBeritaDanEvent />
        <View style={styles.body}>
          <View style={styles.header}>
            <Text style={styles.title}>MedanTourism News</Text>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('HomeNavStackScreen', {
                  screen: 'BeritaDanEventPageMedanTourismBerita',
                })
              }>
              <Text style={styles.lihatSemua}>Lihat semua</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.cardWrapper}>
            <BeritaDanEventCard
              CardHeight={98}
              CardImage={IMAGES.news1}
              CardTitle={'Kuliner Medan Menggugah Selera'}
              CardDescription={
                'Salah satunya, Rumah Makan Nasi Kapau Uni EMI di Jalan Rotan, Medan Petisah......'
              }
              CardDate={'10 menit yang lalu'}
            />
            <BeritaDanEventCard
              CardHeight={98}
              CardImage={IMAGES.news2}
              CardTitle={
                'Stadion Teladan Pernah Jadi Stadion Paling Membanggakan.'
              }
              CardDescription={
                'Stadion Teladan Medan adalah salah satu stadion olahraga yang pernah dibangg...'
              }
              CardDate={'31 menit yang lalu'}
            />
            <BeritaDanEventCard
              CardHeight={98}
              CardImage={IMAGES.news3}
              CardTitle={
                'Wisata Sejarah Kantor Pos di Kota Medan Yang Multikultural'
              }
              CardDescription={
                'Bagi Anda yang sedang berada di Sumatera Utara khususnya kota Medan, tidaklah lengkap jika.....'
              }
              CardDate={'40 menit yang lalu'}
            />
            <BeritaDanEventCard
              CardHeight={98}
              CardImage={IMAGES.news4}
              CardTitle={'Merdeka Walk, Pusat Kuliner dan Wisata Malam'}
              CardDescription={
                'Merdeka Walk dikenal sebagai pusat kuliner dan wisata malam di Kota Medan. '
              }
              CardDate={'2 jam yang lalu'}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
