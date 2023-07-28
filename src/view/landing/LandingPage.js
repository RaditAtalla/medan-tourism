import {View, Text, Image, StatusBar} from 'react-native';
import COLORS from '../../theme/colors';

const LandingPage = ({ navigation }) => {
    setTimeout(() => {
        navigation.navigate('OnBoardingPage')
    }, 2000)
    
    return (
        <View
        style={{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 16,
            backgroundColor: COLORS.white,

        }}>
        <StatusBar barStyle={'dark-content'} backgroundColor={COLORS.white} />
            <Image source={require('../../assets/icons/plane.png')} />
            <View>
                <Text style={{ fontSize: 40, fontWeight: 700, color: COLORS.black3 }}>Medan</Text>
                <Text style={{ fontSize: 40, fontWeight: 700, color: COLORS.blue }}>Tourism</Text>
            </View>
        </View>
    );
};

export default LandingPage;
