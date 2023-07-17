import { Image, Text, View, TouchableOpacity, StyleSheet, StatusBar } from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import { horizontalScale, verticalScale, moderateScale } from '../constant/responsive';
import { COLORS } from '../constant/theme';

export const OnBoardingPage = () => {
    return(
        <SafeAreaView style={Style.container}>
            <Image source={require('../assets/img/onBoardingImg1.png')} style={Style.image} />
            <View style={{gap: moderateScale(40)}}>
                <View style={{gap: moderateScale(16)}}>
                    <View>
                        <Text style={{textAlign: 'center', fontSize: moderateScale(32), fontWeight: 700, color: COLORS.black3}}>Cari tempat</Text>
                        <Text style={{textAlign: 'center', fontSize: moderateScale(32), fontWeight: 700, color: COLORS.black3}}>ternyamanmu!</Text>
                    </View>
                    <Text style={{marginHorizontal: horizontalScale(24), fontSize: moderateScale(16), textAlign: 'center'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.</Text>
                </View>
                <View style={{gap: moderateScale(16)}}>
                    <TouchableOpacity style={Style.button}>
                        <Text style={{textAlign: 'center', color: 'white', fontSize: moderateScale(16)}}>Selanjutnya</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={{textAlign: 'center'}}>Nanti aja deh</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
}

const Style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: 91,
        paddingBottom: 80,
    },
    image: {
        width: moderateScale(309),
        height: moderateScale(309),
    },
    button: {
        paddingVertical: verticalScale(10),
        paddingHorizontal: horizontalScale(40),
        backgroundColor: COLORS.blue,
        marginHorizontal: horizontalScale(126),
        borderRadius: 10,
    },

})