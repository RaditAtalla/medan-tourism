import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
import {styles} from '../../styles/beritaDanEventMedanTourismEvent.Style';
import BeritaDanEventCard from '../../components/atoms/BeritaDanEventCard';
import ICONS from '../../assets/icons/icons';
import IMAGES from '../../assets/img/images';

export default function BeritaDanEventPageMedanTourismEvent({ navigation }) {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.inputWrapper}>
            <Image source={ICONS.search2} />
            <TextInput
              style={styles.input}
              placeholder="Cari event"
              autoComplete="off"
            />
          </View>
          <Text style={styles.title}>MedanTourism Event</Text>
        </View>
        <View>
          <TouchableOpacity onPress={() => navigation.navigate('eventDetail1')}>
            <BeritaDanEventCard
              CardHeight={120}
              CardImage={IMAGES.event1}
              CardTitle={
                'Ikuti Medan Tourism Video Contest, Menangkan Hadiah Puluhan Juta Rupiah!'
              }
              CardDescription={
                'Buat kamu warga Kota Medan yang punya hobi jalan-jalan dan mengabadikan momen'
              }
              CardDate={'10 menit yang lalu'}
            />
          </TouchableOpacity>
          <BeritaDanEventCard
            CardHeight={120}
            CardImage={IMAGES.event2}
            CardTitle={
              'Stadion Teladan Pernah Jadi Stadion Paling Membanggakan.'
            }
            CardDescription={
              'Stadion Teladan Medan adalah salah satu stadion olahraga yang pernah dibangg...'
            }
            CardDate={'31 menit yang lalu'}
          />
          <BeritaDanEventCard
            CardHeight={120}
            CardImage={IMAGES.event3}
            CardTitle={
              'Wisata Sejarah Kantor Pos di Kota Medan Yang Multikultural'
            }
            CardDescription={
              'Bagi Anda yang sedang berada di Sumatera Utara khususnya kota Medan, tidaklah lengkap jika.....'
            }
            CardDate={'40 menit yang lalu'}
          />
          <BeritaDanEventCard
            CardHeight={120}
            CardImage={IMAGES.event4}
            CardTitle={'Merdeka Walk, Pusat Kuliner dan Wisata Malam'}
            CardDescription={
              'Merdeka Walk dikenal sebagai pusat kuliner dan wisata malam di Kota Medan. '
            }
            CardDate={'2 jam yang lalu'}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
