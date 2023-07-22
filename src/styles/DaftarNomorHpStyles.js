import { StyleSheet } from 'react-native'
import COLORS from '../theme/colors'

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        justifyContent: 'center',
        gap: 64,
        backgroundColor: COLORS.white,
    },
    text: {
        textAlign: 'center',
        fontSize: 16,
        fontWeight: '600',
    },
    top: {
        gap: 48,
    }
})

export default Styles