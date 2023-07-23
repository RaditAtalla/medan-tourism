import { Text, StyleSheet, View, StatusBar } from 'react-native'
import MyButton from '../../components/atoms/MyButton'

const HomePage = ({ navigation }) => {
    return(
        <View style={Styles.container}>
            <StatusBar barStyle={'dark-content'} backgroundColor='white' />
            <Text>Selamat datang di HOMEPAGE</Text>
            <MyButton text='To Profile' action={() => navigation.navigate('ProfilePage')} />
            <MyButton text='To Landing' action={() => navigation.navigate('LandingPage')} />
            <MyButton text='To Transportasi' action={() => navigation.navigate('TransportPage')} />
        </View>
    )
}

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
    }
})

export default HomePage