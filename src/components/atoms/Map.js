import {StyleSheet, SafeAreaView, ScrollView, StatusBar, Dimensions, View, Image} from 'react-native';
import {useEffect, useState} from 'react'

const {width, height} = Dimensions.get('window');
const mapWidth = width * 4.3;
const mapHeight = height * 1.05;

const Map = ({ navigation, map }) => {
  useEffect(() => {
    const image = Image.resolveAssetSource(
      map,
    );
    Image.prefetch(image.uri)
      .then(() => {
        setImageLoaded(true);
      })
      .catch(error => {
        console.log('Error prefetching image:', error);
      });
  }, []);

  const [imageLoaded, setImageLoaded] = useState(false);
  return (
    <View style={Styles.mapRootContainer}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={{width: mapWidth, height: mapHeight}}>
          <Image
            key={new Date().getTime()}
            source={map}
            style={{width: '100%', height: '100%'}}
            resizeMode={'stretch'}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const Styles = StyleSheet.create({
  mapRootContainer: {
    flex: 1,
  }
})

export default Map