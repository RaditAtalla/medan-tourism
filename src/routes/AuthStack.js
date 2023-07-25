import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {moderateScale} from '../theme/responsive';
import COLORS from '../theme/colors';

import LoginPage from '../view/auth/LoginPage';
import LupaPasswordPage from '../view/auth/LupaPasswordPage';
import LupaPasswordPageByPhoneNumber from '../view/auth/LupaPasswordPageByPhoneNumber';
import VerifikasiPage from '../view/auth/VerifikasiPage';
import UbahPasswordPage from '../view/auth/UbahPasswordPage';
import DaftarPage from '../view/auth/DaftarPage';
import DaftarNomorHpPage from '../view/auth/DaftarNomorHpPage';
import VerifikasiHpPage from '../view/auth/VerfikasiHpPage';

const AuthStack = createNativeStackNavigator()

const AuthStackScreen = () => {
    return(
        <AuthStack.Navigator>
            <AuthStack.Screen name="LoginPage" component={LoginPage}
            options={{
            title: "Login",
            headerShadowVisible: false,
            headerTransparent: true,
            headerTitleAlign: 'center',
            headerTitleStyle: {
                color: 'white',
                fontWeight: '700',
                fontSize: moderateScale(24),
            },
            headerTintColor: 'white',
            }}
            />
            <AuthStack.Screen
            name="LupaPasswordPage"
            component={LupaPasswordPage}
            options={{
                title: 'Lupa password',
                headerShadowVisible: false,
                headerTransparent: true,
                headerTitleAlign: 'center',
                headerTitleStyle: {
                color: '#252525',
                fontWeight: '700',
                fontSize: moderateScale(24),
                },
                headerTintColor: '#252525',
            }}
            />
            <AuthStack.Screen
            name="LupaPasswordPageByPhoneNumber"
            component={LupaPasswordPageByPhoneNumber}
            options={{
                title: 'Lupa password',
                headerShadowVisible: false,
                headerTransparent: true,
                headerTitleAlign: 'center',
                headerTitleStyle: {
                color: '#252525',
                fontWeight: '700',
                fontSize: moderateScale(24),
                },
                headerTintColor: '#252525',
            }}
            />
            <AuthStack.Screen
            name="VerifikasiPage"
            component={VerifikasiPage}
            options={{
                title: 'Verifikasi',
                headerShadowVisible: false,
                headerTransparent: true,
                headerTitleAlign: 'center',
                headerTitleStyle: {
                color: '#252525',
                fontWeight: '700',
                fontSize: moderateScale(24),
                },
                headerTintColor: '#252525',
            }}
            />
            <AuthStack.Screen
            name="VerifikasiHpPage"
            component={VerifikasiHpPage}
            options={{
                title: 'Verifikasi',
                headerShadowVisible: false,
                headerTitleAlign: 'center',
                headerTitleStyle: {
                color: '#252525',
                fontWeight: '700',
                fontSize: moderateScale(24),
                },
                headerTintColor: '#252525',
            }}
            />
            <AuthStack.Screen
            name="UbahPasswordPage"
            component={UbahPasswordPage}
            options={{
                title: 'Ubah Password',
                headerShadowVisible: false,
                headerTitleAlign: 'center',
                headerTitleStyle: {
                color: '#252525',
                fontWeight: '700',
                fontSize: moderateScale(24),
                },
                headerTintColor: '#252525',
            }}
            />
            <AuthStack.Screen name="DaftarPage" component={DaftarPage}
            options={{
            title: "Daftar",
            headerShadowVisible: false,
            headerTransparent: true,
            headerTitleAlign: 'center',
            headerTitleStyle: {
                color: 'white',
                fontWeight: '700',
                fontSize: moderateScale(24),
            },
            headerTintColor: 'white',
            }}
            />
            <AuthStack.Screen name="DaftarNomorHpPage" component={DaftarNomorHpPage}
            options={{
            title: "Daftar",
            headerShadowVisible: false,
            headerTransparent: true,
            headerTitleAlign: 'center',
            headerTitleStyle: {
                color: COLORS.black4,
                fontWeight: '700',
                fontSize: moderateScale(24),
            },
            headerTintColor: COLORS.black4,
            }}
            />
        </AuthStack.Navigator>
    )
}

export default AuthStackScreen