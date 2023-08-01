import {SafeAreaView, View, StatusBar, FlatList} from 'react-native';
import Styles from '../../styles/MapStyles';
import MapSplashInfo from '../../components/atoms/MapSplashInfo';
import PlaceInforamationCard from '../../components/atoms/PlaceInformationCard';

// const DATA = [
//   {
//     image: require('../../assets/img/maimun.png'),
//     name: 'Istana Maimun',
//     open: '08.00',
//     close: '17.00',
//     rating: 4,
//     raters: 117,
//   },
// ]

const Map = () => {
  return (
    <SafeAreaView style={Styles.container}>
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor="transparent"
      />
      <MapSplashInfo />
      {/* <FlatList
        data={DATA}
        renderItem={({item}) => <PlaceInforamationCard name={item.name} image={item.image} open={item.open} close={item.close} rating={item.rating} raters={item.raters} /> }
        keyExtractor={item => item.name}
        style={{
          alignSelf: 'flex-end'
        }}
      /> */}
      <PlaceInforamationCard
        image={require('../../assets/img/maimun.png')}
        name="Istana Maimun"
        open="08.00"
        close="17.00"
        rating={4}
        raters={117}
        style={{
          alignSelf: 'flex-end',
        }}
      />
    </SafeAreaView>
  );
};

export default Map;
