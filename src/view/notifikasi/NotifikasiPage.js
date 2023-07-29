import {View, Text, SafeAreaView, Image, TouchableOpacity} from 'react-native';
import {styles} from '../../styles/NotifikasiPage.styles';
import React, {useState} from 'react';

export default function NotifikasiPage() {
  const [tabContent, setTabContent] = useState([
    {
      date: '13 Jul 2023',
      status: 'Transaksi berhasil',
      informasi:
        'Pembayaran hotel Aryaduta Medan sebesar IDR555,000 berhasil terkirim',
      id: 1,
    },
    {
      date: '13 Jul 2023',
      status: 'Transaksi gagal',
      informasi:
        'Pembayaran hotel Aryaduta Medan sebesar IDR555,000 gagal di kirim',
      id: 2,
    },
  ]);

  const handleRemove = id => {
    setTabContent(prevTabContent =>
      prevTabContent.filter(item => item.id !== id),
    );
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.notifikasi}>
          {tabContent.map(e => (
            <View style={styles.notifikasi} key={e.id}>
              <View style={styles.date}>
                <View>
                  <Text style={styles.dateText}>{e.date}</Text>
                </View>
                <TouchableOpacity onPress={() => handleRemove(e.id)}>
                  <Image
                    style={styles.exit}
                    source={require('../../assets/icons/exit.png')}
                  />
                </TouchableOpacity>
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
