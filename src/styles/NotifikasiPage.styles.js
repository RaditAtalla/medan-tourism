import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  tabWrapper: {
    marginTop: 32,
    width: 360,
    height: 41,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'rgba(217, 217, 217, 1)',
    borderRadius: 12,
  },
  tab: {
    width: '48%',
    height: 35,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabActive: {
    backgroundColor: 'white',
  },
  tabText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#3b4949',
  },
  notifikasi: {
    width: 360,
  },
  date: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 48
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
