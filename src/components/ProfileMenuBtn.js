import { View, Image, Text, StyleSheet } from 'react-native'
import ICONS from '../assets/icons/icons';

const ProfileMenuBtn = ({ icon, text }) => {
    return (
        <View style={Styles.menuBtn}>
            <View style={Styles.leftSide}>
                <Image source={icon} />
                <Text style={Styles.menuFont}>{text}</Text>
            </View>
            <Image source={require('../assets/icons/next.png')} />
        </View>
    );
};

const Styles = StyleSheet.create({
    menuFont: {
        fontSize: 14,
        fontWeight: '600',
    },
    menuBtn: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    leftSide: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 24,
    }
})

export default ProfileMenuBtn;