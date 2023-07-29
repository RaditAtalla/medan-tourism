import {
  View,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {styles} from '../../styles/eventDetail.Style';
import {useState} from 'react';
import Modal from 'react-native-modal';
import IMAGES from '../../assets/img/images';
import ICONS from '../../assets/icons/icons';

export default function BeritaDanEventPageMedanTourismEvent({navigation}) {
  const [share, setShare] = useState(false);

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <Image source={require('../../assets/img/eventBig.png')} />
          <View style={styles.header}>
            <View style={styles.action}>
              <View style={styles.backWrapper}>
                <Image
                  style={styles.back}
                  source={require('../../assets/icons/back.png')}
                />
              </View>
              <View style={styles.saveAndShareWrapper}>
                <Image
                  style={styles.save}
                  source={require('../../assets/icons/save.png')}
                />
                <TouchableOpacity onPress={() => setShare(true)}>
                  <Image
                    style={styles.share}
                    source={require('../../assets/icons/share.png')}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <Text style={styles.title}>
              Ikuti Medan Tourism Video Contest, Menangkan Hadiah Puluhan Juta
              Rupiah!
            </Text>
            <View style={styles.time}>
              <Text style={styles.sameColor}>MedanTourism</Text>
              <Image
                style={styles.dot}
                source={require('../../assets/icons/dot.png')}
              />
              <Text style={styles.sameColor}>31 menit yang lalu</Text>
            </View>
          </View>
          <View style={styles.box}>
            <Text style={styles.information}>
              Buat kamu warga Kota Medan yang punya hobi jalan-jalan dan
              mengabadikan moment perjalanannya lewat video, kamu bisa ikuti
              Medan Tourism Video Contest dan menangkan Hadiah total hingga Rp.
              50.000.000.
            </Text>
            <Text style={styles.information}>
              Medan Tourism Video Contest ini merupakan lomba kreasi video objek
              dan daya tarik wisata yang ada di Kota Medan, event yang
              diselenggarakan oleh Dinas Pariwisata Kota Medan ini bertujuan
              untuk memperkenalkan pariwisata dan meningkatkan kunjungan
              wisatawan ke Kota Medan. Kita Tahu di Kota Medan ini memiliki
              beragam etnis, kuliner yang khas dan bangunan bersejarah.
            </Text>
            <Text style={styles.information}>
              Kontes ini dibagi menjadi 2(dua) kategori, yaitu :
            </Text>
            <Text style={styles.information}>
              1. KATEGORI UMUM (Syarat & Ketentuan) Peserta untuk kategori umum
              adalah masyarakat Kota Medan dengan yang dibuktikan dengan KTP dan
              Kartu Identitas Lainya.
            </Text>
            <Text style={styles.information}>
              2. KATEGORI JURNALIS (Syarat & Ketentuan) Peserta untuk Kategori
              Jurnalis merupakan jurnalis aktif Televisi dan Media Online yang
              dibuktikan dengan ID Card Jurnalis atau surat keterangan dari
              media tempat bekerja.
            </Text>
            <Text style={styles.information}>
              Jadwal kegiatan dan sosialisasi di mulai pada bulan Mei hingga
              batas akhir penerimaan video pada tanggal 25 Juni 2018. Pengumuman
              sekaligus penyerahan hadiah pada tanggal 3 Juli 2018. Tempat
              pendaftaran Medantourism Video Contest dapat langsung mengunjungi
              kantor Dinas Pariwisata Kota Medan, Jl. H.M Yamin No. 40 Medan,
              pada hari kerja dari pukul 09.00 s/d 16.00 WIB. Untuk info dapat
              menghubungi contact person : Rizal (0821-6747-2915)
              (061-4200-1503). Formulir dan syarat ketentuan lebih lanjut dapat
              diunduh di tautan berikut :
            </Text>
          </View>
        </View>
      </ScrollView>
      <Modal
        isVisible={share}
        style={{marginHorizontal: -20, marginVertical: 0}}>
        <View style={styles.popUpWrapper}>
          <View style={styles.popUp}>
            <View style={styles.popUpTitleWrapper}>
              <Text style={styles.popUpTitle}>Mau dibagikan ke mana?</Text>
            </View>
            <View style={styles.popUpOption}>
              <View style={styles.wrapper}>
                <Image source={IMAGES.wa} />
                <Text style={styles.popUpOptionTitle}>WhatsApp</Text>
              </View>
              <Image source={ICONS.caret} />
            </View>
            <View style={styles.popUpOption}>
              <View style={styles.wrapper}>
                <Image source={IMAGES.salin} />
                <Text style={styles.popUpOptionTitle}>Salin Link</Text>
              </View>
              <Image style={{width: 17, height: 17}} source={ICONS.copy} />
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}
