import {View, Text, SafeAreaView, TextInput, Image} from 'react-native';
import {styles} from '../../styles/beritaDanEventMedanTourismEvent.Style';
import BeritaDanEventCard from '../../components/atoms/BeritaDanEventCard';
import ICONS from '../../assets/icons/icons';
import IMAGES from '../../assets/img/images';

export default function BeritaDanEventPageMedanTourismEvent({navigation}) {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.inputWrapper}>
            <Image source={ICONS.search2} />
            <TextInput
              style={styles.input}
              placeholder="Cari berita"
              autoComplete="off"
            />
          </View>
          <Text style={styles.title}>MedanTourism Event</Text>
        </View>
        <View>
          <BeritaDanEventCard
            CardHeight={120}
            CardImage={IMAGES.news1}
            CardTitle={'Kuliner Medan Menggugah Selera'}
            CardDescription={
              'Salah satunya, Rumah Makan Nasi Kapau Uni EMI di Jalan Rotan, Medan Petisah......'
            }
            CardDate={'10 menit yang lalu'}
          />
          <BeritaDanEventCard
            CardHeight={120}
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
            CardHeight={120}
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
            CardHeight={120}
            CardImage={IMAGES.news4}
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
