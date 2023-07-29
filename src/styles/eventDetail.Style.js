import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
  },
  action: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  saveAndShareWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  share: {
    marginLeft: 16,
  },
  header: {
    marginTop: -500,
    paddingHorizontal: 25,
  },
  title: {
    marginTop: 250,
    fontSize: 24,
    fontWeight: '700',
    fontFamily: 'Poppins-Bold',
    color: '#fff',
  },
  time: {
    marginTop: 8,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  sameColor: {
    fontSize: 12,
    color: '#fff',
  },
  dot: {
    marginHorizontal: 12,
  },
  box: {
    marginTop: 32,
    paddingVertical: 22,
    paddingHorizontal: 25,
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    borderRadius: 50,
  },
  information: {
    marginTop: 20,
    fontSize: 14,
    fontWeight: '500',
    fontFamily: 'Poppins-Medium',
    color: '#252525',
  },

  popUpWrapper: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  popUp: {
    width: '90%',
    height: 363,
    backgroundColor: 'white',
    borderTopStartRadius: 50,
    borderTopEndRadius: 50,
    paddingHorizontal: 32,
  },
  popUpTitleWrapper: {
    paddingTop: 40,
    width: 170,
  },
  popUpTitle: {
    fontSize: 20,
    fontWeight: '600',
    fontFamily: 'Poppins-SemiBold',
    color: '#252525',
  },
  popUpOption: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 8,
    backgroundColor: '#fff',
    borderStyle: 'solid',
    borderColor: '#828282',
    borderWidth: 0.5,
    paddingHorizontal: 24,
    marginTop: 20
  },
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 56,
  },
  popUpOptionTitle: {
    marginLeft: 24,
    fontSize: 16,
    fontWeight: '600',
    fontFamily: 'Poppins-SemiBold',
    color: '#252525',
  },
});

export {styles};
