import { Button, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { COLORS } from '../constant/theme';
import { verticalScale, horizontalScale, moderateScale } from '../constant/responsive';
import React from 'react';

import Onboarding from 'react-native-onboarding-swiper';

const PrimaryButton = ({ ...props }) => {
    return(
        <Button 
            title='Selanjutnya'
            style={{
                backgroundColor: COLORS.blue,
                paddingVertical: verticalScale(10),
                paddingHorizontal: horizontalScale(40),
                color: '#fff',
            }}
            {...props}
        />
    );
}

const SkipButton = ({ ...props }) => {
    return(
        <TouchableOpacity
            { ...props }
        >
            <Text>Nanti dulu deh</Text>
        </TouchableOpacity>
    );
}

const TitleText = ({ textAbove, textBelow }) => {
    return(
        <Text style={{ fontWeight: '700', fontSize: 32, textAlign: 'center' }}>{textAbove}{'\n'}{textBelow}</Text>
    );
}

const SubtitleText = ({ text }) => {
    return(
        <Text style={{ fontSize: 16, textAlign: 'center', width: 383 }}>{text}</Text>
    );
}

export const OBPTest = ({ navigation }) => (
    <Onboarding
        onDone={() => navigation.navigate('LoginPage')}
        onSkip={() => navigation.navigate('LoginPage')}
        NextButtonComponent={PrimaryButton}
        SkipButtonComponent={SkipButton}
        DoneButtonComponent={PrimaryButton}
        pages={[
        {
            backgroundColor: '#fff',
            image: <Image source={require('../assets/img/onBoardingImg1.png')} style={Styles.image} />,
            title: <TitleText textAbove='Cari tempat' textBelow='ternyamanmu!' />,
            subtitle: <SubtitleText text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.' />,
        },
        {
            backgroundColor: '#fff',
            image: <Image source={require('../assets/img/onBoardingImg2.png')} style={Styles.image} />,
            title: <TitleText textAbove='Booking dengan' textBelow='mudah' />,
            subtitle: <SubtitleText text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.' />,
        },
        {
            backgroundColor: '#fff',
            image: <Image source={require('../assets/img/onBoardingImg3.png')} style={Styles.image} />,
            title: <TitleText textAbove='Nikmati liburan' textBelow='anda' />,
            subtitle: <SubtitleText text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.' />,
        },
        ]}
    />
    );

const Styles = StyleSheet.create({
    image: {
        width: 309, 
        height: 309, 
        objectFit: 'contain',
    }
})