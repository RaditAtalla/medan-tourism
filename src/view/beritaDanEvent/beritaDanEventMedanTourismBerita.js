import { View, Text, SafeAreaView, TextInput, Image, FlatList, ScrollView } from 'react-native'
import { styles } from '../../styles/beritaDanEventMedanTourismEvent.Style'
import BeritaDanEventCard from '../../components/atoms/BeritaDanEventCard'
import ICONS from '../../assets/icons/icons'
import IMAGES from '../../assets/img/images'

export default function BeritaDanEventPageMedanTourismEvent({ navigation }) {
  const DATA = [
    {
      title: 'Kuliner Medan Menggugah Selera',
      description: 'Salah satunya, Rumah Makan Nasi Kapau Uni EMI di Jalan Rotan, Medan Petisah......',
      image: IMAGES.news1,
      created_at: '10 menit yang lalu'
    },
    {
      title: 'Stadion Teladan Pernah Jadi Stadion Paling Membanggakan.',
      description: 'Stadion Teladan Medan adalah salah satu stadion olahraga yang pernah dibangg..',
      image: IMAGES.news2,
      created_at: '31 menit yang lalu'
    },
    {
      title: 'Wisata Sejarah Kantor Pos di Kota Medan Yang Multikultural',
      description: 'Bagi Anda yang sedang berada di Sumatera Utara khususnya kota Medan, tidaklah lengkap jika.....',
      image: IMAGES.news3,
      created_at: '40 menit yang lalu'
    },
    {
      title: 'Merdeka Walk, Pusat Kuliner dan Wisata Malam',
      description: 'Merdeka Walk dikenal sebagai pusat kuliner dan wisata malam di Kota Medan. ',
      image: IMAGES.news4,
      created_at: '2 jam yang lalu'
    }
  ]
  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <View style={styles.header}>
            <View style={styles.inputWrapper}>
              <Image source={ICONS.search2} />
              <TextInput style={styles.input} placeholder="Cari berita" autoComplete="off" />
            </View>
            <Text style={styles.title}>MedanTourism Event</Text>
          </View>
          {DATA.map((item, index) => (
            <BeritaDanEventCard
              key={index}
              CardHeight={120}
              CardImage={item.image}
              CardTitle={item.title}
              CardDescription={item.description}
              CardDate={item.created_at}
            />
          ))}
          {/* <View>
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
        </View> */}
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
