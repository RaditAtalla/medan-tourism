import {View, Text, Image} from 'react-native';
import { COLORS } from '../constant/theme';
import OnBoardingPage from './OnBoardingPage';

const LandingPage = ({ navigation }) => {
    return (
        <View
        style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 16,
        }}>
            <Image source={require('../assets/icons/plane.png')} />
            <View>
                <Text style={{ fontSize: 40, fontWeight: 700, color: COLORS.black3 }} onPress={() => navigation.navigate(OnBoardingPage)}>Medan</Text>
                <Text style={{ fontSize: 40, fontWeight: 700, color: COLORS.blue }} onPress={() => navigation.navigate(OnBoardingPage)}>Tourism</Text>
            </View>
        </View>
    );
};

export default LandingPage;
