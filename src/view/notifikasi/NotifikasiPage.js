import {View, Text, SafeAreaView, TouchableOpacity, Image} from 'react-native';
import {styles} from '../../styles/NotifikasiPage.styles';
import React, {useState} from 'react';

export default function NotifikasiPage({navigation}) {
  const [status, setStatus] = useState('All');

  const tabContent = [
    {
      date: '13 Jul 2023',
      status: 'Transaksi berhasil',
      informasi:
        'Pembayaran hotel Aryaduta Medan sebesar IDR555,000 berhasil terkirim',
    },
    {
      date: '13 Jul 2023',
      status: 'Transaksi gagal',
      informasi:
        'Pembayaran hotel Aryaduta Medan sebesar IDR555,000 gagal di kirim',
    },
  ];

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.tabWrapper}>
          <TouchableOpacity
            style={[styles.tab, styles.tabActive]}
            onPress={() => navigation.navigate('NotifikasiPage')}>
            <Text style={styles.tabText}>Transaksi</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.tab}
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
              <View style={styles.statusTransaksi}>
                <Text style={styles.status}>{e.status}</Text>
              </View>
              <View style={styles.informasiTransaksi}>
                <Text style={styles.informasi}>{e.informasi}</Text>
              </View>
            </View>
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
}
