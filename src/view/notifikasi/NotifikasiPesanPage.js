import {View, Text, SafeAreaView, TouchableOpacity, Image} from 'react-native';
import {styles} from '../../styles/NotifikasiPage.styles';
import React, {useState} from 'react';
import IMAGES from '../../assets/img/images';

export default function NotifikasiPage({navigation}) {
  const [status, setStatus] = useState('All');

  const tabContent = [
    {
      date: '13 Jul 2023',
      informasi:
        'Gajian makin asyik karena ada promo QRIS UNLIMITED yang diperpanjang dari tanggal 25 Juni–9 Juli 2023.',
      image: IMAGES.poster,
    },
  ];

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.tabWrapper}>
          <TouchableOpacity
            style={styles.tab}
            onPress={() => navigation.navigate('NotifikasiPage')}>
            <Text style={styles.tabText}>Transaksi</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.tab, , styles.tabActive]}
            onPress={() => navigation.navigate('NotifikasiPesanPage')}>
            <Text style={styles.tabText}>Pesan</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.notifikasi}>
          {tabContent.map(e => (
            <View styles={styles.notifikasi}>
              <View style={styles.date}>
                <View>
                  <Text style={styles.dateText}>{e.date}</Text>
                </View>
                <View>
                  <Image
                    style={styles.exit}
                    source={require('../../assets/icons/exit.png')}
                  />
                </View>
              </View>
              <View style={styles.informasiTransaksi}>
                <Text style={styles.informasi}>{e.informasi}</Text>
              </View>
              <View style={styles.posterWrapper}>
                <Image style={styles.poster} source={e.image} />
              </View>
            </View>
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
}
