import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {moderateScale} from '../theme/responsive';
import COLORS from '../theme/colors';

// landing
import LandingPage from '../view/landing/LandingPage';
import OnBoardingPage from '../view/landing/OnBoardingPage';

// auth
import LoginPage from '../view/auth/LoginPage';
import LupaPasswordPage from '../view/auth/LupaPasswordPage';
import LupaPasswordPageByPhoneNumber from '../view/auth/LupaPasswordPageByPhoneNumber';
import VerifikasiPage from '../view/auth/VerifikasiPage';
import UbahPasswordPage from '../view/auth/UbahPasswordPage';
import DaftarPage from '../view/auth/DaftarPage';
import ProfilePage from '../view/profile/ProfilePage';
import DaftarNomorHpPage from '../view/auth/DaftarNomorHpPage';
import VerifikasiHpPage from '../view/auth/VerfikasiHpPage';

// home
import HomePage from '../view/home/HomePage';
import NotifikasiTransaksi from '../view/profile/NotifikasiTransaksi';

const Stack = createNativeStackNavigator();

const LandingStack = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen
            name="LandingPage"
            component={LandingPage}
            options={{
                headerShown: false,
            }}
            />
            <Stack.Screen
            name="OnBoardingPage"
            component={OnBoardingPage}
            options={{
                headerShown: false,
            }}
            />
        </Stack.Navigator>
    )
}

const AuthStack = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen name="LoginPage" component={LoginPage}
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
            <Stack.Screen
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
            <Stack.Screen
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
            <Stack.Screen
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
            <Stack.Screen
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
            <Stack.Screen
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
            <Stack.Screen name="DaftarPage" component={DaftarPage}
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
            <Stack.Screen name="DaftarNomorHpPage" component={DaftarNomorHpPage}
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
        </Stack.Navigator>
    )
}

const HomeStack = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen
            name="HomePage"
            component={HomePage}
            options={{
                headerShown: false,
            }}
            />
        </Stack.Navigator>
    )
}

const ProfileStack = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen
            name="ProfilePage"
            component={ProfilePage}
            options={{
                headerShadowVisible: false,
                headerStyle: {
                backgroundColor: COLORS.gray5,
                },
                headerTitleStyle: {
                color: '#252525',
                fontSize: 20,
                fontWeight: '700',
                },
            }}
            />
            <Stack.Screen
            name="NotifikasiTransaksiPage"
            component={NotifikasiTransaksi}
            options={{
                title: 'Notifikasi',
                headerShadowVisible: false,
                headerStyle: {
                backgroundColor: COLORS.white,
                },
                headerTitleStyle: {
                color: '#252525',
                fontSize: 20,
                fontWeight: '700',
                },
            }}
            />
        </Stack.Navigator>
    )
}

const Routes = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                name="LandingPage"
                component={LandingPage}
                options={{
                    headerShown: false,
                }}
                />
                <Stack.Screen
                name="OnBoardingPage"
                component={OnBoardingPage}
                options={{
                    headerShown: false,
                }}
                />
                <Stack.Screen name="LoginPage" component={LoginPage}
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
                <Stack.Screen
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
                <Stack.Screen
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
                <Stack.Screen
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
                <Stack.Screen
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
                <Stack.Screen
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
                <Stack.Screen name="DaftarPage" component={DaftarPage}
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
                <Stack.Screen name="DaftarNomorHpPage" component={DaftarNomorHpPage}
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
                <Stack.Screen
                name="HomePage"
                component={HomePage}
                options={{
                    headerShown: false,
                }}
                />
                <Stack.Screen
                name="ProfilePage"
                component={ProfilePage}
                options={{
                    headerShadowVisible: false,
                    headerStyle: {
                    backgroundColor: COLORS.gray5,
                    },
                    headerTitleStyle: {
                    color: '#252525',
                    fontSize: 20,
                    fontWeight: '700',
                    },
                }}
                />
                <Stack.Screen
                name="NotifikasiTransaksiPage"
                component={NotifikasiTransaksi}
                options={{
                    title: 'Notifikasi',
                    headerShadowVisible: false,
                    headerStyle: {
                    backgroundColor: COLORS.white,
                    },
                    headerTitleStyle: {
                    color: '#252525',
                    fontSize: 20,
                    fontWeight: '700',
                    },
                }}
                />
            </Stack.Navigator>
    </NavigationContainer>
    );
};

export default Routes;
