import { StyleSheet } from 'react-native'
import COLORS from '../theme/colors'

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.gray5,
    },
    wrapper: {
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'flex-start',
        gap: 48,
    },
    profilePic: {
        width: 150,
        height: 150,
        objectFit: 'cover',
    },
    editBtn: {
        position: 'absolute',
        right: 10,
        bottom: 0,
    },
    username: {
        color: '#252525',
        fontSize: 32,
        fontWeight: '700',
        textAlign: 'center'
    },
    email: {
        color: COLORS.black3,
        fontSize: 16,
        textAlign: 'center',
    },
    info: {
        display: 'flex',
        alignItems: 'center',
        marginTop: 48,
        gap: 24,
    },
    menuWrapper: {
        width: '100%',
        height: '100%',
        backgroundColor: '#fff',
        borderTopEndRadius: 50,
        borderTopStartRadius: 50,
        gap: 24,
        paddingTop: 48,
        paddingHorizontal: 24,
    },
})

export default Styles