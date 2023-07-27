import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  notifikasi: {
    width: 360,
  },
  date: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20
  },
  dateText: {
    fontSize: 14,
    color: '#3b4949',
  },
  exit: {
    width: 24,
    height: 24,
  },
  statusTransaksi: {
    marginVertical: 24,
  },
  status: {
    color: 'black'
  },
  informasiTransaksi: {
    width: 311
  },
  informasi: {
    color: 'black'
  },

  posterWrapper: {
    marginTop: 16
  },
  poster: {
    width: 311,
    height: 160,
    borderRadius: 4
  }
});

export {styles};
