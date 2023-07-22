import {View, Text, Image, StatusBar} from 'react-native';
import COLORS from '../theme/colors';
import OnBoardingPage from './OnBoardingPage';

const LandingPage = ({ navigation }) => {
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
            <Image source={require('../assets/icons/plane.png')} />
            <View>
                <Text style={{ fontSize: 40, fontWeight: 700, color: COLORS.black3 }} onPress={() => navigation.navigate(OnBoardingPage)}>Medan</Text>
                <Text style={{ fontSize: 40, fontWeight: 700, color: COLORS.blue }} onPress={() => navigation.navigate(OnBoardingPage)}>Tourism</Text>
            </View>
        </View>
    );
};

export default LandingPage;
